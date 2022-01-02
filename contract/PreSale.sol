//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract PreSale is ReentrancyGuard, Ownable {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    IERC20 presaleToken;
    IERC20 payToken;
    IERC20 mainToken;

    address public devaddr;
    address public burnAddress = 0x000000000000000000000000000000000000dEaD;

    uint256 public payTokenPrice;
    uint256 public presaleTokenPrice;

    uint256 public startBlock;
    uint256 public endBlock;

    uint256 public startTime;
    uint256 public endTime;

    uint256 public claimStartBlock = 0; // claim start disabled
    uint256 public claimEndBlock = 0;

    bool public whitelistEnabled = true;
    mapping (address => bool) public whitelist;

    uint256 public claimStartTime;
    uint256 public claimEndTime;

    uint[] public stageTimesInBlock;
    uint[] public stageTimes;
    uint[] public stagePercents;

    mapping(address => uint256) public userTokenTally;
    mapping(address => uint256) public userTokenClaimed;

    event Buy(address sender, uint256 receiveAmount, uint256 payAmount);
    event Claim(address sender, uint256 amount);

    constructor(
        IERC20 _presaleToken,
        IERC20 _payToken,
        uint256 _startBlock,
        uint256 _endBlock,
        uint256 _startTime,
        uint256 _endTime,
        uint[] memory  _stageTimesInBlock,
        uint[] memory  _stageTimes,
        uint[] memory _stagePercents
    ) {

        presaleToken = _presaleToken;
        payToken = _payToken;
        startBlock = _startBlock;
        endBlock = _endBlock;
        startTime = _startTime;
        endTime = _endTime;

        stageTimesInBlock = _stageTimesInBlock;
        stageTimes = _stageTimes;
        stagePercents = _stagePercents;

        devaddr = msg.sender;
    }

    function setWhitelistEnabled (bool _whitelistEnabled) external onlyOwner {
        whitelistEnabled = _whitelistEnabled;
    }

    function whitelistAddress (address user, bool enabled) external onlyOwner {
        whitelist[user] = enabled;
    }

    function whitelistAddresses (address[] memory accounts, bool[] memory values) external onlyOwner
    {
        require(accounts.length == values.length, "Presale: accounts and values length mismatch");
        for (uint256 i = 0; i < accounts.length; ++i) {
            whitelist[accounts[i]] = values[i];
        }
    }

    function setSaleDuration(uint256 _startBlock, uint256 _endBlock, uint256 _startTime, uint256 _endTime) external onlyOwner {
        require(_endBlock > _startBlock && _endBlock > block.number && _endBlock > _startBlock, "invalid configuration");

        startBlock = _startBlock;
        endBlock = _endBlock;

        startTime = _startTime;
        endTime = _endTime;
    }

    function setEndBlock(uint256 _endBlock, uint256 _endTime) external onlyOwner {
        require(_endBlock > block.number, "invalid configuration");
        require(endBlock == 0 || endBlock > block.number, "Sale has ended");
        endBlock = _endBlock;
        endTime = _endTime;
    }

    function setStages(uint[] memory _stageTimesInBlock, uint[] memory _stageTimes, uint[] memory _stagePercents) external onlyOwner {
        // require(claimStartBlock < block.number, "Claiming has began already");
        require(_stageTimesInBlock.length == _stagePercents.length, "invalid configuration");
        require(_stageTimesInBlock.length > 0, "invalid configuration");

        uint total = 0;

        for (uint i = 0; i < _stagePercents.length; i ++) {
            total = total.add(_stagePercents[i]);
        }

        require(total == 100, "Percent sum must be 100");

        stageTimesInBlock = _stageTimesInBlock;
        stageTimes = _stageTimes;
        stagePercents = _stagePercents;
    }

    function getStages() public view returns (uint256[] memory _stageTimes, uint256[] memory _stagePercents)
    {
        _stageTimes = stageTimes;
        _stagePercents = stagePercents;
    }

    function setClaimDuration(uint256 _startBlock, uint256 _endBlock,
            uint256 _claimST, uint256 _claimET, address _mainToken) external onlyOwner {
        claimStartBlock = _startBlock;
        claimEndBlock = _endBlock;
        claimStartTime = _claimST;
        claimEndTime = _claimET;
        mainToken = IERC20(_mainToken);
        require(claimStartBlock > endBlock, "claim should start after token sell.");
        require(claimEndBlock > claimStartBlock, "start should > end.");
    }

    function setPayTokenPrice(uint256 _payTokenPrice) external onlyOwner {
        payTokenPrice = _payTokenPrice;
    }

    function setPresaleTokenPrice(uint256 _presaleTokenPrice) external onlyOwner {
        presaleTokenPrice = _presaleTokenPrice;
    }

    // return the last block for testing
    function getBlock() public view returns(uint256){
        return block.number;
    }

    // Update dev address by the previous dev.
    function dev(address _devaddr) public {
        require(msg.sender == devaddr, "dev: wut?");
        devaddr = _devaddr;
    }

    // pass any pApollo and get the % amount in PayToken
    function quoteAmountInPayToken(uint256 amount) public view returns(uint256){
        if( payTokenPrice == 0 ) return 0;
        return amount.mul(payTokenPrice).div(presaleTokenPrice);
    }

    function quoteAmounts(uint256 requestedAmount) public view
    returns(uint256 amountPayToken, uint256 tokenPurchaseAmount){
        tokenPurchaseAmount = getPresaleLimit(requestedAmount);
        amountPayToken = quoteAmountInPayToken(tokenPurchaseAmount);
    }

    function getPresaleLimit(uint256 tokenPurchaseAmount) public view returns (uint256) {

        uint256 amount = tokenPurchaseAmount;

        // if we dont have enough left, give them the rest.
        if (presaleToken.balanceOf(address(this)) < amount)
            amount = presaleToken.balanceOf(address(this));

        return amount;
    }

    function userBalance(address user) public view returns (uint256 staked, uint256 claimed) {
        staked = userTokenTally[user];
        claimed = userTokenClaimed[user];
    }

    function claimableAmount(address user) public view returns (uint256) {

        uint256 percent = 0;

        for (uint i = 0; i < stageTimesInBlock.length; i ++) {
            if (block.number < stageTimesInBlock[i].add(claimStartBlock)) {
                break;
            }
            percent = percent.add(stagePercents[i]);
        }

        if (percent == 0) {
            return 0;
        }

        uint totalClaimable = percent.mul(userTokenTally[user]).mul(100).div(10000);
        totalClaimable = totalClaimable.sub(userTokenClaimed[user]);

        return totalClaimable;
    }

    function burnUnclaimed() external onlyOwner {
        require(block.number > claimEndBlock && claimEndBlock > 0,
            "can only send excess to dead address after swap has ended");
        if (presaleToken.balanceOf(address(this)) > 0)
            presaleToken.safeTransfer(burnAddress, presaleToken.balanceOf(address(this)));
        if (mainToken.balanceOf(address(this)) > 0)
            mainToken.safeTransfer(devaddr, mainToken.balanceOf(address(this)));
    }

    function buy(uint256 amount) external nonReentrant {
        require(!whitelistEnabled || whitelist[msg.sender], "Crow Presale: Not whitelisted");
        require(block.number >= startBlock, "Crow Presale: Sale hasn't started yet, good things come to those that wait");
        require(block.number < endBlock, "Crow Presale: Sale has ended, come back next time!");
        require(presaleToken.balanceOf(address(this)) > 0, "Crow Presale: No more Token left! Come back next time!");

        (uint256 amountPayToken, uint256 tokenPurchaseAmount) = quoteAmounts(amount);

        uint256 userPayTokenBalance = payToken.balanceOf(address(msg.sender));
        require(amountPayToken <= userPayTokenBalance, "Crow Presale: PayToken balance is too low");

        payToken.safeTransferFrom(msg.sender, devaddr, amountPayToken);
        presaleToken.safeTransfer(msg.sender, tokenPurchaseAmount);

        userTokenTally[msg.sender] = userTokenTally[msg.sender].add(tokenPurchaseAmount);

        emit Buy(msg.sender, tokenPurchaseAmount, amountPayToken);
    }

    function claim(uint256 amount) external nonReentrant {
        require(block.number >= claimStartBlock, "Crow Presale: Claiming is not enabled yet");
        require(block.number < claimEndBlock, "Crow Presale: Claiming has been ended");
        uint256 maxAmount = claimableAmount(msg.sender);
        require(maxAmount >= amount, "Crow Presale: Exceed maximum amount");
        require(mainToken.balanceOf(address(this)) >= amount, "Crow Presale: Not enough tokens in contract for claiming");

        presaleToken.safeTransferFrom(msg.sender, burnAddress, amount);
        mainToken.safeTransfer(msg.sender, amount);

        userTokenClaimed[msg.sender] = userTokenClaimed[msg.sender].add(amount);

        emit Claim(msg.sender, amount);
    }
}

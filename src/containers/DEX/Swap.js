import React, { Fragment, useContext, useState } from "react";
import ethereum from "../../assets/images/ethereum.svg";
import swithcer from "../../assets/images/swap/swithcer.svg";
// import swap from "../../assets/images/swap/swap.png";
import swapDark from "../../assets/images/swap/swap-g.png";
import { BsFillStarFill } from "react-icons/bs";

import { FiSettings, FiSearch } from "react-icons/fi";
import filter from "../../assets/images/swap/filter.png";
import "../../assets/styles/swap.css";
import bsc from "../../assets/images/bsc.png";
import uniswap from "../../assets/images/uniswap.svg";
import Footer from "../../components/Footer";
import Popover from "@mui/material/Popover";
import { FiInfo } from "react-icons/fi";
import { makeStyles } from "@mui/styles";
import CustomDialog from "../../components/CustomDialog";
import { ThemeContext } from "../../theme/ThemeContext";

const useStyles = makeStyles((theme) => ({
	paper: {
		backgroundColor: "#0f1f3deb !important",
		color: "#fff !important",
		marginTop: ".6rem",
		padding: "1.4rem",
		fontSize: "15px",
	},
}));

const ConnectWallet = ({ open, handleClose }) => {
	const tokenList = [
		{
			id: 0,
			title: "MetaMask",
			icon: uniswap,
		},
		{
			id: 1,
			title: "Trust Wallet",
			icon: uniswap,
		},
		{
			id: 2,
			title: "WalletConnect",
			icon: uniswap,
		},
	];

	return (
		<CustomDialog
			open={open}
			handleClose={handleClose}
			title={"Connect Wallet"}
		>
			<div className='px-4'>
				<div className='walletList mt-3 pb-3'>
					{tokenList.map((coin) => (
						<div
							className='tokenGrid'
							// style={
							// 	coin.id === activeToken
							// 		? { border: "1px solid rgb(232, 0, 111)" }
							// 		: null
							// }
							key={coin.id}
						>
							<span>{coin.title}</span>
							<img
								src={coin.icon}
								alt={coin.title}
								height='36'
								width='36'
							/>
						</div>
					))}
				</div>
				<div className='newToVision'>
					<p>
						New to Vison? <span>Learn More about wallets</span>
					</p>
				</div>
			</div>
		</CustomDialog>
	);
};

const SelectToken = ({ open, handleClose }) => {
	return (
		<CustomDialog
			open={open}
			handleClose={handleClose}
			title={"Select Token"}
		>
			<div className='px-4'>
				<div className='selectToken'>
					<div className='landing_instruction_search_input'>
						<div className='input-icons'>
							<FiSearch className='icon' size={26} color={"#fff"} />
							<input
								className='input-field'
								type='text'
								placeholder='Search name or paste address'
							/>
						</div>
					</div>
					{/* <button type='button'>
											<BsFillStarFill color='#fff' size={24} />
										</button> */}
					<div className='row'>
						<div className='col-2 tokenCollection mt-3 pt-3'>
							<div className='d-flex flex-column'>
								{[1, 2, 3, 4, 5, 6, 7].map((item) => (
									<div className='singleItem mb-3'>
										<img
											src={uniswap}
											alt={"token"}
											height='36'
											width='36'
										/>
									</div>
								))}
							</div>
						</div>
						<div className='col-10 tokenList'>
							{/* <div className='d-flex flex-column'>
								{[1, 2, 3, 4, 5, 6, 7].map((item) => (
									<div className='singleTokenListItem d-flex align-items-center mb-3'>
										<div className='tokenImage'>
											<img
												src={uniswap}
												alt={"token"}
												height='36'
												width='36'
											/>
										</div>
										<div className="tokenCard">
											<span>

											</span>
										</div>
									</div>
								))}
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</CustomDialog>
	);
};

const Swap = () => {
	const [tokenValue, setTokenValue] = useState({});
	const classes = useStyles();
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	const [anchorEl, setAnchorEl] = useState(null);
	const [toggleSwitch, settoggleSwitch] = useState({});
	const [popup, setPopup] = useState({
		connectWallet: false,
		tokenList: false,
	});

	const handleSwitch = (e) => {
		let event = e.target;
		settoggleSwitch({ ...toggleSwitch, [event.name]: event.checked });
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	const handleTokenValue = (e) => {
		setTokenValue({ ...tokenValue, [e.target.name]: e.target.value });
	};
	return (
		<Fragment>
			<div className='swapConatainer pt-5 pb-5'>
				<div className='containerBackgroundImage'>
					<div className='middleBox mt-4 mb-5'>
						<div className='boxHeader'>
							<div className='headerText'>Swap</div>
							<div className='headerIcon'>
								<img
									src={filter}
									alt='filter'
									height='20'
									width='20'
									aria-describedby={id}
									variant='contained'
									onClick={handleClick}
								/>
							</div>
						</div>

						<div className='boxContain'>
							<div className='boxContainInner'>
								<div className='swap_header_bar'>
									<div className='swap_header_bar_token'>
										<img
											style={{ marginRight: "10px" }}
											src={bsc}
											alt='bsc'
											height='20'
											width='20'
										/>
										BSC
									</div>
									<div className='swapImageContainer'>
										<img
											src={swapDark}
											alt='swap'
											height='22'
											className='swap_header_bar_swap'
											width='26'
										/>
									</div>
									<div className='swap_header_bar_token'>
										<img
											style={{ marginRight: "10px" }}
											src={ethereum}
											alt='ethereum'
											height='20'
											width='20'
										/>
										Ethereum
									</div>
								</div>
								<div className='firstSelectionGrid'>
									<button
										className='selectCurrencyButton'
										style={{ color: darkMode ? '#9ca6be' : "#fff" }}
										onClick={() =>
											setPopup({
												...popup,
												tokenList: !popup.tokenList,
											})
										}
									>
										Select Token
									</button>
									<input
										className='amountInput'
										name='firstToken'
										inputMode='decimal'
										autoComplete='off'
										autoCorrect='off'
										type='text'
										pattern='^[0-9]*[.,]?[0-9]*$'
										placeholder='0.0'
										minLength='1'
										maxLength='79'
										spellCheck='false'
										value={tokenValue.firstToken}
										onChange={handleTokenValue}
									></input>
								</div>
								<div className='swapButtonDevider'>
									<div className='swapButton'>
										<img
											src={swithcer}
											alt='swithcer'
											height='24'
											width='24'
										/>
									</div>
								</div>
								<div
									className='secondSelectionGrid'
									style={{ marginTop: "14px" }}
								>
									<button
										className='selectCurrencyButton'
										style={{ color: darkMode ? '#9ca6be' : "#fff" }}
										onClick={() =>
											setPopup({
												...popup,
												tokenList: !popup.tokenList,
											})
										}
									>
										Select Token{" "}
									</button>
									<input
										className='amountInput'
										inputMode='decimal'
										autoComplete='off'
										autoCorrect='off'
										type='text'
										pattern='^[0-9]*[.,]?[0-9]*$'
										placeholder='0.0'
										minLength='1'
										maxLength='79'
										spellCheck='false'
										name='secondToken'
										value={tokenValue.secondToken}
										onChange={handleTokenValue}
									></input>
								</div>
							</div>
							<div className='text-center'>
								<button
									className='connectWalletGrid'
									onClick={() =>
										setPopup({
											...popup,
											connectWallet: !popup.connectWallet,
										})
									}
								>
									Connect Wallet
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='transactionVolume mt-5 mb-5'>
					<div className='volumeTitle'>Accumulated Transaction Volume</div>
					<div className='volumeValue'>$138,982,757</div>
					<div className='volumeTime'>All Time</div>
				</div>
			</div>

			<div className=''>
				<Footer />
			</div>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				classes={{
					paper: classes.paper,
				}}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<div>
					Slippage Tollerance <FiInfo size={14} color='#2497d2' />
				</div>
				<div className='toleranceIn'>
					<button type='button'>Auto</button>
					<input type='text' />
				</div>
				<div>
					Transactional Deadline <FiInfo size={14} color='#2497d2' />
				</div>
				<div className='transDeadline'>
					<input type='text' /> minutes
				</div>
				<div className='tokenDetailsActions'>
					<span>
						Disable Multihops <FiInfo size={14} color='#2497d2' />
					</span>
					<label className='switch'>
						<input
							type='checkbox'
							name='disableMultihops'
							onChange={handleSwitch}
							checked={toggleSwitch.disableMultihops}
						/>
						<span className='slider round'></span>
					</label>
				</div>
				<div className='tokenDetailsActions'>
					<span>
						Use Vision Optimization <FiInfo size={14} color='#2497d2' />
					</span>
					<label className='switch'>
						<input
							type='checkbox'
							name='useVision'
							onChange={handleSwitch}
							checked={toggleSwitch.useVision}
						/>
						<span className='slider round'></span>
					</label>
				</div>
				<div className='tokenDetailsActions'>
					<span>
						Auto refresh <FiInfo size={14} color='#2497d2' />
					</span>
					<label className='switch'>
						<input
							type='checkbox'
							name='autoRefresh'
							onChange={handleSwitch}
							checked={toggleSwitch.autoRefresh}
						/>
						<span className='slider round'></span>
					</label>
				</div>
			</Popover>
			{popup.connectWallet && (
				<ConnectWallet
					open={popup.connectWallet}
					handleClose={() =>
						setPopup({ ...popup, connectWallet: !popup.connectWallet })
					}
				/>
			)}
			{popup.tokenList && (
				<SelectToken
					open={popup.tokenList}
					handleClose={() =>
						setPopup({ ...popup, tokenList: !popup.tokenList })
					}
				/>
			)}
		</Fragment>
	);
};

export default Swap;

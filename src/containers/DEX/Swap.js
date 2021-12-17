import React, { Fragment, useState } from "react";
import ethereum from "../../assets/images/ethereum.svg";
import swithcer from "../../assets/images/swap/swithcer.svg";
// import swap from "../../assets/images/swap/swap.png";
import swapDark from "../../assets/images/swap/swap-g.png";
import filter from "../../assets/images/swap/filter.png";
import "../../assets/styles/swap.css";
import bsc from "../../assets/images/bsc.png";
import Footer from "../../components/Footer";
import Popover from "@mui/material/Popover";
import { FiInfo } from "react-icons/fi";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    paper : {
        backgroundColor: '#0f1f3dd3',
        color: '#fff',
        marginTop: '.6rem',
        padding: '1.4rem',
        fontSize: '15px',
    }
    
  }));

const Swap = () => {
	const [tokenValue, setTokenValue] = useState({});
    const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
    const [ toggleSwitch, settoggleSwitch ] = useState({})    

    const handleSwitch = e => {
        let event = e.target
        settoggleSwitch({...toggleSwitch, [event.name] : event.checked})
    }

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
			<div className='swapConatainer'>
				<div className='middleBox'>
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
								<button className='selectCurrencyButton'>
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
								<button className='selectCurrencyButton'>
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
							<button className='connectWalletGrid'>
								Connect Wallet
							</button>
						</div>
					</div>
				</div>
				<div className='transactionVolume mt-5 mb-5'>
					<div className='volumeTitle'>Accumulated Transaction Volume</div>
					<div className='volumeValue'>$138,982,757</div>
					<div className='volumeTime'>All Time</div>
				</div>
			</div>

			<div className='pt-5'>
				<Footer />
			</div>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
                classes={{
                    paper: classes.paper
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
				<div>Slippage Tollerance <FiInfo size={14} color="#2497d2" /></div>
                <div className="toleranceIn"><button type="button">Auto</button><input type='text' /></div>
				<div>Transactional Deadline <FiInfo size={14} color="#2497d2" /></div>
                <div className="transDeadline"><input type='text' /> minutes</div>
                <div className="tokenDetailsActions"><span>Disable Multihops <FiInfo size={14} color="#2497d2" /></span><label className='switch'>
										<input
											type='checkbox'
											name='disableMultihops'
											onChange={handleSwitch}
											checked={toggleSwitch.disableMultihops}
										/>
										<span className='slider round'></span>
									</label></div>
                <div className="tokenDetailsActions"><span>Use Vision Optimization <FiInfo size={14} color="#2497d2" /></span><label className='switch'>
										<input
											type='checkbox'
                                            name='useVision'
											onChange={handleSwitch}
											checked={toggleSwitch.useVision}
										/>
										<span className='slider round'></span>
									</label></div>
                <div className="tokenDetailsActions"><span>Auto refresh <FiInfo size={14} color="#2497d2" /></span><label className='switch'>
										<input
											type='checkbox'
											name='autoRefresh'
											onChange={handleSwitch}
											checked={toggleSwitch.autoRefresh}
										/>
										<span className='slider round'></span>
									</label></div>
			</Popover>
		</Fragment>
	);
};

export default Swap;

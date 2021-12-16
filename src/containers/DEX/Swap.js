import React, { useState } from "react";
import ethereum from "../../assets/images/ethereum.svg";
import swithcer from "../../assets/images/swap/swithcer.svg";
import filter from "../../assets/images/swap/filter.png";
import "../../assets/styles/swap.css";
import bsc from  '../../assets/images/bsc.png'

const Swap = () => {
	const [tokenValue, setTokenValue] = useState({});
	const handleTokenValue = (e) => {
		setTokenValue({ ...tokenValue, [e.target.name]: e.target.value });
	};
	return (
		<div className='middleBox'>
			<div className='boxHeader'>
				<div className='headerText'>Swap</div>
				<div className='headerIcon'>
					<img src={filter} alt='filter' height='20' width='20' />
				</div>
			</div>

			<div className='boxContain'>
				<div className="boxContainInner">
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
					<img
						style={{ marginRight: "10px" }}
						src={ethereum}
						alt='ethereum'
						height='20'
						className='swap_header_bar_swap'
						width='20'
					/>
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
				<div className='swapButton'>
					<img src={swithcer} alt='swithcer' height='24' width='24' />
				</div>
				<div className='secondSelectionGrid' style={{ marginTop : '14px' }}>
					<button className='selectCurrencyButton'>Select Token </button>
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
				<div className="text-center"><button className='connectWalletGrid'>Connect Wallet</button></div>
			</div>
		</div>
	);
};

export default Swap;

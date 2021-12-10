import React, { useState } from "react";
import "../assets/styles/mainBody.css";
import arrow from "../assets/images/arrow.png";
import bannerTopBox from "../assets/images/banner-top-box.png";
import faddedBox from "../assets/images/faddedBox.png";
import cryptoIcon from "../assets/images/icon.png";
import daigram from "../assets/images/daigram.png";
import matic_grant from "../assets/images/polygon.svg";
import harmony_grant from "../assets/images/harmony.svg";
import near_grant from "../assets/images/near.svg";
import uniswap from "../assets/images/uniswap.svg";
import quickswap from "../assets/images/quickswap.svg";
import { Link } from "react-router-dom";
import pangolin from "../assets/images/pangolin.svg";
import _inch from "../assets/images/1inch.svg";
import sushiswap from "../assets/images/sushiswap.svg";
import ox from "../assets/images/0x.svg";
import pancakeswap from "../assets/images/pancakeswap.svg";
import joe from "../assets/images/joe.svg";
import solarbeam from "../assets/images/joe.svg";
import spiritswap from "../assets/images/xdai.svg";
import xdai from "../assets/images/xdai.svg";
import fantom from "../assets/images/fantom.svg";
import ethereum from "../assets/images/ethereum.svg";
import avalanche from "../assets/images/avalanche.svg";
import harmony from "../assets/images/harmony.svg";
import bsc from "../assets/images/bsc.svg";

const MainBody = () => {
	return (
		<div className='home__3KnWO'>
			<section className='container'>
				<div className='screen__3DOGq'>
					<span>
						<h5 style={{ fontSize: "24px", margin: 0 }}>NEW RELEASE</h5>
						<h2 className='screen__title__vymBx'>
							<span className='highlight'>
								<span className='nowrap'>
									Omni-chain
									<br />
								</span>
								exchange
								<br className='screen__br__3HphO' />
							</span>{" "}
							protocol
						</h2>
					</span>

					<div className='screen__instruction__2oDJw'>
						<div className='landing_instruction'>
							<span>
								Complete multi chain <br /> swap in on click
							</span>
						</div>{" "}
						<img
							className='screen__big-cube__mMoMv'
							src={bannerTopBox}
							height={150}
							alt='Decorative cube1'
						/>
						<img
							className='screen__blured-cube__5rokD'
							src={faddedBox}
							alt='Decorative cube'
						/>{" "}
					</div>
					<div className='screen__info__2QpSI'>
						<p className='screen__text__1p3Jl'>
							<span style={{ color: "white" }}>
								The Omni-DEX is a cross-chain exchange allowing the swap
								of thousands of tokens across 8 different blockchains
								seamlessly
							</span>
						</p>
						<Link to='/' className='screen__link__1gw9g' rel='noreferrer'>
							Start Trading
							<img
								className='arrow__3f0-7'
								src={arrow}
								height={15}
								width={35}
								alt='arrow'
							/>
						</Link>
					</div>
				</div>
				<div className='advantages__SkBVq'>
					<div className='advantage__1vF4S'>
						<img
							className='advantage__img__2uWaX'
							src={cryptoIcon}
							height={80}
							width={80}
							alt='Advantage image'
						/>
						<h3 className='advantage__title__Jtk7W'>Multi-chain swaps</h3>
						<p className='advantage__text__1CDT5'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
					</div>
					<div className='advantage__1vF4S'>
						<img
							className='advantage__img__2uWaX'
							height={80}
							src={cryptoIcon}
							width={80}
							alt='Advantage image'
						/>
						<h3 className='advantage__title__Jtk7W'>8 Blockchains</h3>
						<p className='advantage__text__1CDT5'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
					</div>
					<div className='advantage__1vF4S'>
						<img
							className='advantage__img__2uWaX'
							src='assets/icons/advantages/trades.svg'
							alt='Advantage image'
							height={80}
							src={cryptoIcon}
							width={80}
						/>
						<h3 className='advantage__title__Jtk7W'>
							Trade 10000+ assets
						</h3>
						<p className='advantage__text__1CDT5'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
					</div>
				</div>
				<div className='gradient' />
			</section>
			<section className='about__1wd5a'>
				<h2 className='about__title__3oBok'>
					What is {"  "}
					<span className='highlight'>Omni?</span>
				</h2>
				<img
					className='about__image__Ry7YU'
					src={daigram}
					alt='What is omni'
				/>
				<div className='about__info__3eAVO'>
					<p className='about__text__3jNbk'>
						<span>
							Omni is the ultimate exchange protocol that allows users to
							exchange a token from one chain to another with ease.
							Featuring Ethereum, Smart Chain, Avalanche, Polygon,
							Fantom, and more by utilizing over 50 decentralized
							exchanges.
						</span>
					</p>
					<Link to='/' className='button button_glassy'>
						Action Button
						<img
							className='button__arrow'
							src={arrow}
							height={15}
							width={35}
							alt='arrow'
						/>
					</Link>
					<Link to='/' className='screen__link__1gw9g' rel='noreferrer'>
						Action Button
						<img
							className='arrow__3f0-7'
							src={arrow}
							height={15}
							width={35}
							alt='arrow'
						/>
					</Link>
				</div>
				<div className='gradient__31T_H' />
			</section>
			<section className='grants__32DqA'>
				<h2 className='grants__title__1PoEy'>
					Grants <span className='highlight'>for omni</span>
				</h2>
				<p className='grants__text__fxIfw'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
					<br /> eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<div className='grants__list__121p9'>
					<div className='_1NVMLAeGTqGbKx__SalZv8'>
						<img src={matic_grant} alt='Matic Grant' />
						Matic Grant
					</div>
					<div className='_1NVMLAeGTqGbKx__SalZv8'>
						<img src={harmony_grant} alt='Harmony One Grant' />
						Harmony One Grant
					</div>
					<div className='_1NVMLAeGTqGbKx__SalZv8'>
						<img src={near_grant} alt='NEAR Grant' />
						NEAR Grant
					</div>
				</div>
			</section>
			<section className='audits__366o9'>
				<h2 className='audits__title__5FrFg'>
					<span className='highlight'>Omni </span>Audits
				</h2>
				<p className='audits__text__1kN0O'>
					Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit,
					sed do eiusmod tempor incididunt ut labore
				</p>
				<div className='audits__list__3OBjG'>
					<div
						className='_1NVMLAeGTqGbKx__SalZv8'
						style={{ width: "38vw" }}
					>
						<img
							height={70}
							src={near_grant}
							id='certik'
							alt='Audits CertiK'
						/>
						<span>CertiK Audit</span>
					</div>
					<Link
						to='/'
						className='screen__link__1gw9g'
						rel='noreferrer'
						style={{ height: "56px", marginLeft: "52px" }}
					>
						Action Button
						<img
							className='arrow__3f0-7'
							src={arrow}
							height={15}
							width={35}
							alt='arrow'
						/>
					</Link>
				</div>
			</section>
			<section className='partners__3xIAI'>
				<div className='partners__title__1CYAp'>
					<h2>
						<span className='highlight'>Omni </span>
						<br className='partners__br__32LPN' />
						supports
					</h2>
					<img
						className='partners__main-cube__3H4O7'
						src={bannerTopBox}
						// width={28} 
						alt='Decorative cube'
					/>
				</div>
				<div className='partners__blocks__1hYQ4'>
					<div>
						<div className='partners__subtitle__31ICZ'>
							<h3>Dexes</h3>
							
						</div>
						<div className='partners__list__26Fh1'>
							<div className='partner__3YHW9'>
								<img
									width={50}
									src={uniswap}
									alt='Uniswap'
								/>
								Uniswap
							</div>
							<div className='partner__3YHW9'>
								<img
									width={45}
									src={quickswap}
									alt='Quickswap'
								/>
								Quickswap
							</div>
							<div className='partner__3YHW9'>
								<img
									width={45}
									src={pangolin}
									alt='Pangolin'
								/>
								Pangolin
							</div>
							<div className='partner__3YHW9'>
								<img
									width={45}
									src={_inch}
									alt='1inch'
								/>
								1inch
							</div>
							<div className='partner__3YHW9'>
								<img
									width={45}
									src={sushiswap}
									alt='Sushiswap'
								/>
								Sushiswap
							</div>
							<div className='partner__3YHW9'>
								<img
									width={45}
									src={ox}
									alt='0x protocol'
								/>
								0x protocol
							</div>
							<div className='partner__3YHW9'>
								<img
									width={45}
									src={pancakeswap}
									alt='Pancakeswap'
								/>
								Pancakeswap
							</div>
							<div className='partner__3YHW9'>
								<img
									width={45}
									src={matic_grant}
									alt='Polygon'
								/>
								Polygon
							</div>
							<div className='partner__3YHW9'>
								<img
									width={45}
									src={solarbeam}
									alt='Solarbeam'
								/>
								Solarbeam
							</div>
							<div className='partner__3YHW9'>
								<img
									width={45}
									src={spiritswap}
									alt='Spiritswap'
								/>
								Spiritswap
							</div>
						</div>
					</div>
					<div>
						<div className='partners__subtitle__31ICZ'>
							<h3>Blockchains</h3>
							<img
								className='partners__blured-cube__Pv_-u'
								src={faddedBox}
								alt='Decorative cube'
							/>
						</div>
						<div className='partners__list__26Fh1'>
							<div className='partner__3YHW9'>
								<img
									src={ethereum}
									alt='Ethereum'
								/>
								Ethereum
							</div>
							<div className='partner__3YHW9'>
								<img
									src={matic_grant}
									alt='Polygon'
								/>
								Polygon
							</div>
							<div className='partner__3YHW9'>
								<img
									src={fantom}
									alt='Fantom'
								/>
								Fantom
							</div>
							<div className='partner__3YHW9'>
								<img
									src={xdai}
									alt='xDai'
								/>
								xDai
							</div>
							<div className='partner__3YHW9'>
								<img
									src={avalanche}
									alt='Avalanche'
								/>
								Avalanche
							</div>
							<div className='partner__3YHW9'>
								<img
									src={matic_grant}
									alt='Polygon'
								/>
								Polygon
							</div>
							<div className='partner__3YHW9'>
								<img
									src={harmony}
									alt='Harmony'
								/>
								Harmony
							</div>
							<div className='partner__3YHW9'>
								<img src={bsc} alt='BSC' />
								BSC
							</div>
						</div>
					</div>
				</div>
				<div className='gradient__1Dstx' />
			</section>
			<section className='subscription__2SoKh'>
				<div className='subscription__container__25DDT'>
					<div>
						<h2 className='subscription__title__2R0N8'>
							Subscribe to our newsletter
						</h2>
						<p className='subscription__text__qXvTm'>
							Fill in your email to receive Omni’s latest info and
							updates
						</p>
					</div>
					<form className='signup-form__2Wjqj' id='subscribeToLetters'>
						<input
							className='signup-form__input__1SY-X'
							id='email'
							name='email'
							type='email'
							required
							placeholder='Email address'
						/>
						<Link to='/' className='screen__link__1gw9g signup-form__submit__RSCiX' rel='noreferrer'>
						Action Button
						<img
							className='arrow__3f0-7'
							src={arrow}
							height={15}
							width={35}
							alt='arrow'
						/>
					</Link>
					</form>
				</div>
			</section>
		</div>
	);
};

export default MainBody;

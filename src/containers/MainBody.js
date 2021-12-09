import React, { useState } from "react";
import "../assets/styles/mainBody.css";
import arrow from "../assets/images/arrow.png";
import bannerTopBox from "../assets/images/banner-top-box.png";
import faddedBox from "../assets/images/faddedBox.png";
import cryptoIcon from "../assets/images/icon.png";
import daigram from "../assets/images/daigram.png";
import { Link } from "react-router-dom";

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
		</div>
	);
};

export default MainBody;

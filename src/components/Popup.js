import React from "react";
import '../assets/styles/popup.css'

const Popup = () => {
	return (
		<div id='modals' style={{ zIndex: 1000 }}>
			<div />
			<div />
			<div />
			<div
				className='_8e7JriZ3TGBEEqYJcxhQH'
				style={{ top: "95.5px", left: "226.328px" }}
			>
				<div
					className='b1wrYDKlpvqv6pS_mCwck _1A7hsyIuo366Cm918KSon5'
					style={{ opacity: 1 }}
				>
					<div className='_2t4A391bL88og_xvoDv53l'>
						<h3 className='uORlbOGDjKcuNFTjwHKMk'>Settings</h3>
						<ul className='_3DgFXcyOkq2iAtWH0tuygf'>
							<li className='qurKyclokEqI27YQFICdG'>
								<div className='_2v_45L7smCuYTlHG8WCvAn'>
									<img src='/' alt='theme' />
									<label className='_3P4pf151tbSKI_Y0vuVyF2'>
										<input type='checkbox' />
										<span className='_3Yd2rDgWeXq38Lc1OuJhqL' />
									</label>
								</div>
								<div>
									<h4 className='jM5sqd_NxOiSJHWFeDzFA'>Dark mode</h4>
									<p className='zorFu3tJU8T7A_tRbulRm'>
										Theme for the web
									</p>
								</div>
							</li>
							<li className='qurKyclokEqI27YQFICdG'>
								<div className='_2v_45L7smCuYTlHG8WCvAn'>
									<img
										height={32}
										width={32}
										src='/'
										alt='Language flag'
									/>
									<img
										src='/'
										alt='Change language'
									/>
								</div>
								<div>
									<h4 className='jM5sqd_NxOiSJHWFeDzFA'>English</h4>
									<p className='zorFu3tJU8T7A_tRbulRm'>
										Choose language
									</p>
								</div>
							</li>
							<li className='qurKyclokEqI27YQFICdG'>
								<a
									href='#'
									className='_2KBxVIi6GvBQSJfFdbtGEb'
									target='_blank'
									rel='noopener noreferrer'
								>
									<div className='_2v_45L7smCuYTlHG8WCvAn'>
										<img
											src='assets/icons/tutorials.svg'
											alt='Tutorials'
										/>
										<img
											src='assets/icons/arrow.svg'
											alt='Go to tutorials'
										/>
									</div>
									<div>
										<h4 className='jM5sqd_NxOiSJHWFeDzFA'>
											Tutorials
										</h4>
										<p className='zorFu3tJU8T7A_tRbulRm'>
											How to use
										</p>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popup;

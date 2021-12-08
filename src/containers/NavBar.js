import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<Fragment>
			<header id='main-header' className='header_container'>
				<div className='header_inner'>
                    <Link to='/' className='header_brand'><img src='assets/icons/logo.svg' alt='OmniDEX logo' /></Link>
					<nav className='nav_items'>
                        <Link to='/'>Home</Link>
						<Link to='/'>Page 1</Link>
						<Link to='/'>Page 2</Link>
					</nav>
					<div className='nav_actions'>
						<div className='nav_toggle_container'>
							<button className='toggle_button'>
								<div className='toggle_bar' />
								<div className='toggle_bar' />
								<div className='toggle_bar' />
							</button>
						</div>
                        <Link to='/' className='action_button'>Action Button</Link>
					</div>
				</div>
			</header>
		</Fragment>
	);
};

export default NavBar;

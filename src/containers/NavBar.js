import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import logo from "../assets/images/logo.svg";
import Popup from "../components/Popup";
import { ThemeContext } from "../theme/ThemeContext";

const NavBar = () => {
	const [togglePopup, settogglePopup] = useState(false);
	const [toggleSwitch, settoggleSwitch] = useState(true);
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;
	console.log("darkMode", darkMode);

	const handleThemeSwitch = () => {
		if (darkMode) {
			settoggleSwitch(false);
			theme.dispatch({ type: "LIGHTMODE" });
		} else {
			settoggleSwitch(true);
			theme.dispatch({ type: "DARKMODE" });
		}
	};

	return (
		<Fragment>
			<header id='main-header' className='header_container'>
				<div className='header_inner'>
					<Link to='/' className='header_brand'>
						<img src={logo} height={50} width={180} alt='OmniDEX logo' />
					</Link>
					<nav className='nav_items'>
						<Link to='/'>Home</Link>
						<Link to='/'>Page 1</Link>
						<Link to='/'>Page 2</Link>
					</nav>
					<div className='nav_actions'>
						<div
							className='nav_toggle_container'
							onClick={() => settogglePopup(!togglePopup)}
						>
							<button className='toggle_button'>
								<div className='toggle_bar' />
								<div className='toggle_bar' />
								<div className='toggle_bar' />
							</button>
						</div>
						<Link to='/dex' className='action_button' style={{ backgroundColor : darkMode ? '#2ca8e3' : '#649dbe' }}>
							Launch App
						</Link>
					</div>
				</div>
			</header>
			{togglePopup ? (
				<Popup
					toggleSwitch={toggleSwitch}
					settoggleSwitch={handleThemeSwitch}
				/>
			) : null}
		</Fragment>
	);
};

export default NavBar;

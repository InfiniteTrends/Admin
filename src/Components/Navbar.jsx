/** @format */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo-i.png';
import DataContext from '../contexts/DataProvider';
import * as FaIcons from 'react-icons/fa';

const Navbar = () => {
	const { setNavOpen } = useContext(DataContext);

	const openNav = () => {
		setNavOpen(true);
	};

	return (
		<React.Fragment>
			<nav className="navbar">
				<span onClick={openNav}>
					<FaIcons.FaBars />
				</span>
				<div>
					<img src={logo} alt="" />
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;

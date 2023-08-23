/** @format */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../contexts/DataProvider';
import * as RxIcons from 'react-icons/rx';
import '../css/bar.css';

const Sidebar = () => {
	const { setNavOpen, navOpen } = useContext(DataContext);

	const closeNav = () => {
		setNavOpen(false);
	};

	return (
		<React.Fragment>
			<nav
				className="sidebar"
				style={navOpen ? { left: '0' } : { left: '-80%' }}>
				<div>
					<span onClick={closeNav} className="close">
						<RxIcons.RxCross1 />
					</span>
				</div>
				<ul>
					<li>
						<Link onClick={closeNav} to={'/'}>
							<span>Home</span>
							<></>
						</Link>
					</li>

					<li>
						<Link onClick={closeNav} to={'/dataanlysis'}>
							<span>Data Analysis</span>
							<></>
						</Link>
					</li>

					<li>
						<Link onClick={closeNav} to={'/users'}>
							<span>Users</span>
							<></>
						</Link>
					</li>

					<li>
						<Link onClick={closeNav} to={'/analysts'}>
							<span>Analysts</span>
							<></>
						</Link>
					</li>

					<li>
						<Link onClick={closeNav} to={'/addanalysis'}>
							<span>Add Analysis</span>
							<></>
						</Link>
					</li>
				</ul>
			</nav>
		</React.Fragment>
	);
};

export default Sidebar;

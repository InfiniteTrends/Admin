/** @format */

import React from 'react';
import { useAuth } from './contexts/AuthContext';
import './css/load.css';
import img from './Images/logo-i.png';

const Loading = () => {
	const { isLoading } = useAuth();

	return (
		<React.Fragment>
			<div
				className="loader"
				style={isLoading ? { display: 'block' } : { display: 'none' }}>
				<img src={img} alt="" />
			</div>
		</React.Fragment>
	);
};

export default Loading;

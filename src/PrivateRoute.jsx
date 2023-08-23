/** @format */

import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

import { Outlet } from 'react-router-dom';

const PrivateRoute = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const toLogin = location.state?.from?.pathname || '/login';
	const toHome = location.state?.from?.pathname || '/';

	const { currentUser, setIsLoading } = useAuth();

	useEffect(() => {
		// setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		if (currentUser === null || currentUser === '') {
			navigate(toLogin, { replace: true });
			console.log(currentUser);
		} else {
			navigate(toHome, { replace: true });
			console.log(currentUser);
			console.log('Logged In');
		}
	}, []);

	return (
		<React.Fragment>
			<Outlet />
		</React.Fragment>
	);
};

export default PrivateRoute;

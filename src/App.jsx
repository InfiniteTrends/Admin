/** @format */

import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import Missing from './Missing';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import Analysts from './Pages/Analysts';
import AddAnalysis from './Pages/AddAnalysis';
import DataAnalysis from './Pages/DataAnalysis';
import { useAuth } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataProvider';
import Loading from './Loading';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App({ component: Component, ...rest }) {
	const { currentUser, setIsLoading } = useAuth();

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<React.Fragment>
			<DataProvider>
				<Router>
					<Loading />
					<Navbar />
					<Sidebar />
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route path="/login" element={<Login />} />

							<Route
								{...rest}
								render={(props) => {
									return currentUser === null || currentUser === '' ? (
										<Navigate replace to={'/login'} />
									) : (
										<Component {...props} />
									);
								}}>
								<Route path="/" element={<Dashboard />} />
								<Route path="/users" element={<Users />} />
								<Route path="/analysts" element={<Analysts />} />
								<Route path="/addanalysis" element={<AddAnalysis />} />
								<Route path="/dataanlysis" element={<DataAnalysis />} />
							</Route>

							{/* catch all */}
							<Route path="*" element={<Missing />} />
						</Route>
					</Routes>
				</Router>
			</DataProvider>
		</React.Fragment>
	);
}

export default App;

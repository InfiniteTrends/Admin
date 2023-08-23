/** @format */

import React, { useRef } from 'react';
import { useAuth } from './contexts/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './css/login.css';

const Login = () => {
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');

	const email = useRef();
	const password = useRef();

	const navigate = useNavigate();
	const location = useLocation();
	const home = location.state?.from?.pathname || '/';

	const { login } = useAuth();

	const submit = (e) => {
		e.preventDefault();

		// try {
		// 	console.log(email.current.value, password.current.value);
		// 	await login(auth, email.current.value, password.current.value);
		// 	navigate(home, { replace: true });
		// } catch (e) {
		// 	console.log(e);
		// }

		signInWithEmailAndPassword(
			auth,
			email.current.value,
			password.current.value,
		)
			.then((user) => {
				console.log(user);
				navigate(home, { replace: true });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<React.Fragment>
			<section className="login-comp">
				<form onSubmit={submit}>
					<div className="form-group">
						<label htmlFor="username">Email</label>
						<input
							type="Email"
							// value={email}
							// onChange={(e) => setEmail(e.target.value)}
							ref={email}
							name="email"
							id="email"
							className="form-control"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							ref={password}
							// value={password}
							// onChange={(e) => setPassword(e.target.value)}
							className="form-control"
						/>
					</div>

					<input type="submit" value="Login" className="btn btn-primary " />
				</form>
			</section>
		</React.Fragment>
	);
};

export default Login;

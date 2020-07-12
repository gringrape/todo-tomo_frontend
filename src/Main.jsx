import React from 'react';
import LandingPage from './LandingPage';
import MainPage from './MainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = () => {
	// routing 등의 기능을 담당할 component
	const containerStyle = {
		width: '37.5rem',
		height: '66.7rem',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		boxShadow: '0 0 2rem gray'
	};

	const backgroundShapeStyle = {
		position: 'absolute',
		bottom: '-3.8px'
	};

	return (
		<div className="container" style={containerStyle}>
			<Router>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/main" component={MainPage} />
			</Router>
			<div className="background-shape" style={backgroundShapeStyle}>
				<svg width="375" height="412" viewBox="0 0 375 412" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0 121.286C0 121.286 21.5 53.9035 180 48.832C338.5 43.7605 375 0 375 0V368H0V121.286Z"
						fill="#46B3E6"
					/>
					<path
						d="M0 130.6C0 130.6 21.5 75.4534 180 70.0194C338.5 64.5854 375 0 375 0V412H0V130.6Z"
						fill="#4D80E4"
					/>
				</svg>
			</div>
		</div>
	);
};

export default Main;

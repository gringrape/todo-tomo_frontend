import React from 'react';
import { MdDirectionsBoat } from 'react-icons/md';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	const iconStyle = {
		position: 'absolute',
		top: '8.6rem',
		left: '14.9rem',
		width: '7.7rem',
		height: '7.7rem',
		color: '#4D80E4'
	};

	const titleStyle = {
		fontFamily: `'Baloo 2'`,
		fontSize: '3.8rem',
		color: '#4D80E4',
		position: 'absolute',
		top: '18rem',
		left: '6.9rem',
		textAlign: 'center',
		lineHeight: '3rem',
		letterSpacing: '.5px',
		width: '23.7rem',
		height: '7.4rem',
		fontWeight: '800'
	};

	const buttonStyle = {
		position: 'absolute',
		width: '28.9rem',
		height: '6.3rem',
		left: 'calc(50% - 289px/2 + 1px)',
		top: 'calc(50% - 63px/2 + 173px)',
		zIndex: '1',
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'white',
		fontSize: '1.8rem',
		fontFamily: '',
		fontFamily: 'Montserrat',
		fontWeight: 'bold',
		letterSpacing: '.5px',
		color: '#4D80E4',
		borderRadius: '1rem',
		justifyContent: 'center'
	};

	return (
		<React.Fragment>
			<MdDirectionsBoat style={iconStyle} />
			<div className="title-box" style={titleStyle}>
				TODOs for TOMOrrow
			</div>
			<Link to="/main">
				<div className="button" style={buttonStyle}>
					Let's Get Going
				</div>
			</Link>
		</React.Fragment>
	);
};

export default LandingPage;

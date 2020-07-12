import React from 'react';
import { MdDirectionsBoat } from 'react-icons/md';
import { MdEventNote } from 'react-icons/md';
import TaskList from './components/TaskList';

const MainPage = () => {
	const boatIconStyle = {
		width: '3.9rem',
		height: '3.9rem',
		color: '#4D80E4',
		position: 'absolute',
		top: '1.9rem',
		left: '1.7rem'
	};

	const titleStyle = {
		fontFamily: `'Baloo 2'`,
		fontSize: '1.8rem',
		color: '#4D80E4',
		position: 'absolute',
		top: '2.7rem',
		left: '4rem',
		textAlign: 'center',
		lineHeight: '1.5rem',
		letterSpacing: '.5px',
		width: '14.1rem',
		height: '5.4rem',
		fontWeight: '800'
	};

	const inputStyle = {
		position: 'absolute',
		top: '9.5rem',
		left: '4.3rem',
		width: '29.6rem',
		height: '4.8rem',
		outline: 'none',
		boxShadow: '0px 0px 1rem rgba(0, 0, 0, 0.25)',
		borderRadius: '3rem',
		border: 'none',
		paddingLeft: '6.5rem'
	};

	const eventIconStyle = {
		position: 'absolute',
		left: '6.2rem',
		top: '10.7rem',
		width: '2.4rem',
		height: '2.4rem',
		zIndex: '1'
  };

  const listContainerStyle = {
    position: 'absolute',
		left: '4rem',
    top: '17.9rem',
    zIndex: '1'
  }
  
	return (
		<React.Fragment>
			<MdDirectionsBoat style={boatIconStyle} />
			<div style={titleStyle}>TODOs for TOMOrrow</div>
			<MdEventNote style={eventIconStyle} />
			<input type="text" style={inputStyle} placeholder="할일을 입력해 주세요" required />
      <div style={listContainerStyle}>
  			<TaskList />
      </div>
		</React.Fragment>
	);
};

export default MainPage;

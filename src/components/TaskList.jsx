import React from 'react';
import { MdDelete } from 'react-icons/md';
import Task from './Task';

let TaskList = () => {
	const containerStyle = {
		width: '29.6rem',
		height: '44.9rem',
		backgroundColor: 'white',
		zIndex: '1',
		padding: '1.4rem'
	};

	const deleteIconStyle = {
		position: 'absolute',
		width: '5rem',
		height: '5rem',
		left: '12.3rem',
		top: '38.2rem',
		zIndex: '6'
	};

	return (
		<div className="list-container" style={containerStyle}>
			<h4 style={{ marginBottom: '3rem' }}>LIST</h4>
			<div>
        <Task />
        <Task />
			</div>
			<MdDelete style={deleteIconStyle} />
		</div>
	);
};


export default TaskList;

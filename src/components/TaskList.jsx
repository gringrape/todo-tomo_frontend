import React from 'react';
import { MdDelete } from 'react-icons/md';
import Task from './Task';
import { container, deleteIcon } from './TaskList.module.scss';

let TaskList = () => {
	return (
		<div className={container}>
			<h4 style={{ marginBottom: '3rem' }}>LIST</h4>
			<div>
        <Task />
        <Task />
			</div>
			<MdDelete className={deleteIcon} />
		</div>
	);
};


export default TaskList;

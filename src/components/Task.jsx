import React from 'react';
import Radium from 'radium';

const taskBoxStyle = {
  width: '100%',
  height: '4.4rem',
  boxShadow: '0 0 1rem lightgray',
  ':hover': {
    color: 'red'
  },
  ':firstChild': {
    color: 'red'
  }
};


const Task = () => {
  return (
    <div style={taskBoxStyle}>
      할일
    </div>
  );
};

const StyledTask = Radium(Task);

export default StyledTask;
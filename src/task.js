import React from 'react';

const Task = (props) => {
	return <li key={props.post.id}>{props.post.email}</li>;
};

export default Task;

import React from 'react';
import axios from 'axios';
import Task from './task';

class Tasks extends React.Component {
	state = {
		tasks: [ 'read', 'write' ],
		task: '',
		posts: []
	};

	componentDidMount() {
		axios
			.get('https://reqres.in/api/users')
			.then((response) => {
				// handle success
				console.log(response);
				this.setState({
					posts: response.data.data
				});
			})
			.catch((error) => {
				// handle error
				console.log(error);
			});
	}

	handleChange = (e) => {
		this.setState({
			task: e.target.value
		});
	};

	addTask = () => {
		this.setState({
			tasks: [ ...this.state.tasks, this.state.task ]
		});
	};

	render() {
		return (
			<div>
				Tasks
				<ul>
					{this.state.tasks.map((task, index) => {
						return <li key={index}>{task}</li>;
					})}
				</ul>
				<input type="name" value={this.state.task} onChange={this.handleChange} />
				{this.state.task}
				<button onClick={this.addTask}>Add New Task</button>
				<ul>
					{this.state.posts.map((post) => {
						return <Task post={post} />;
					})}
				</ul>
			</div>
		);
	}
}

export default Tasks;

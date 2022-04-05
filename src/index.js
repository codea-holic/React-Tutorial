import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class AddTask extends React.Component {
	render() {
		return (
			<div>
				Add a task
			</div>
		);
	}
}

class TaskList extends React.Component {
	render() {
		return (
			<div>{this.props.purpose}</div>
		);
	}
}

class App extends React.Component {

	render() {
		const name = "Ganesh";
		return (
			<div>
				<h1>Hello, {name}</h1>
				<div><AddTask/></div>
				<div><TaskList purpose="Task to do"/></div>
				<div><TaskList purpose="Finished Tasks"/></div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

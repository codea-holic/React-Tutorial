import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class AddTask extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		return (
			<>
				<form>
					<input type="text"></input>
					<input type="button" value="Add Task"></input>
				</form>
			</>
		);
	}
}

class TaskList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let list = [];
		
		for (let i = 0; i < this.props.tasks.length; i++) {
			let task = this.props.tasks[i];
			let li = (<li key={i}>{task.desc}</li>);
			list.push(li);
		}
		console.log(list);
		return (
			<div className={this.props.forStyling}>
				<div>{this.props.purpose}</div>
				<ul>
					{list}
				</ul>
			</div>
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{
					desc: 'Switch off light',
					isfinished: true
				}, {
					desc: 'Turn on fan',
					isfinished: false
				}, {
					desc: 'Make tea',
					isfinished: true
				}, {
					desc: 'Take dinner',
					isfinished: false
				}
			]
		}
	}
	render() {
		let tasks = this.state.tasks;
		let todo = tasks.filter(t => t.isfinished === false);
		let finished = tasks.filter(t => t.isfinished === true);
		return (
			<>
				<div className='add-task'><AddTask /></div>
				<div className='task-lists'>
					<TaskList tasks={todo} purpose="Task to do" forStyling="todo" />
					<TaskList tasks={finished} purpose="Finished Tasks" forStyling="finished" />
				</div>
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

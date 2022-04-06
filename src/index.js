import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 
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
			let spanAction;
			if (task.isfinished) {
				spanAction = (<span class="material-icons">undo</span>)
			} else {
				spanAction = (<span class="material-icons">check_circle_outline</span>)
			}
			let li = (<div key={i}>
				<span>{task.desc}</span>
				{/* <button>{this.props.purpose === "TODO" ? "do" : "undo"}</button> 
				    <span class="material-icons">check</span>
					<span class="material-icons">check_circle_outline</span>
					<span class="material-icons">undo</span> 
				*/}
				{spanAction}
			</div>);
			list.push(li);
		}
		return (
			<div className={this.props.forStyling}>
				<div className='list-container'>
					<div className='title'>{this.props.purpose}</div>
					<div className='content'>
						{list}
					</div>
				</div>
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
					<TaskList tasks={todo} purpose="TODO" forStyling="todo" />
					<TaskList tasks={finished} purpose="FINISHED" forStyling="finished" />
				</div>
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

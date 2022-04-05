import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class AddTask extends React.Component {
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
	render() {
		return (
			<div className={this.props.forStyling}>{this.props.purpose}</div>
		);
	}
}

class App extends React.Component {

	render() {
		return (
			<>
				<div className='add-task'><AddTask /></div>
				<div className='task-lists'>
					<TaskList purpose="Task to do" forStyling="todo"/>
					<TaskList purpose="Finished Tasks" forStyling="finished"/>
				</div>
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));

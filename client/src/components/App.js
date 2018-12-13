import React, { Component } from 'react';
import AddButton from './AddButton';
import AddForm from './AddForm';

class App extends Component {
	state = {
		showForm: false,
		queue: [],
	};

	handleClick = () => {
		this.setState({
			showForm: !this.state.showForm,
		});
	};

	handleFormSubmit = (addQueueData) => {
		// input only holds name
		// have to add additional props like id, data etc. here
		this.setState({
			queue: [...this.state.queue, addQueueData],
			showForm: false,
		});
	};

	render() {
		console.log(this.state.queue);
		return (
			<div className="App">
				<AddButton onClick={this.handleClick} />
				{this.state.showForm ? (
					<AddForm onSubmit={this.handleFormSubmit} />
				) : null}
			</div>
		);
	}
}

export default App;

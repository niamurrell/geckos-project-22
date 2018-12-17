import React, { Component } from 'react';
import Nav from './Nav';
import Main from './Main';
// import AddButton from './AddButton';
// import AddForm from './AddForm';

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
		// the input data currently only holds the name from the form
		// we have to add additional props like id, data etc. here
		this.setState({
			queue: [...this.state.queue, addQueueData],
			showForm: false,
		});
	};

	render() {
		return (
			<div className="App">
				<Nav />
				<Main />
				{/* <AddButton onClick={this.handleClick} />
				{this.state.showForm ? (
					<AddForm onSubmit={this.handleFormSubmit} />
				) : null} */}
			</div>
		);
	}
}

export default App;

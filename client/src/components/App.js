import React, { Component } from 'react';
import AddButton from './AddButton';
import AddForm from './AddForm';

class App extends Component {
	state = {
		showForm: false,
	};

	handleClick = () => {
		this.setState({
			showForm: !this.state.showForm,
		});
	};

	handleFormSubmit = (name) => {
		console.log(name);
	};

	render() {
		return (
			<div className="App">
				<AddButton onClick={this.handleClick} />
				{this.state.showForm && <AddForm onSubmit={this.handleFormSubmit} />}
			</div>
		);
	}
}

export default App;

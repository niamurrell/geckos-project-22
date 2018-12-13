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

	render() {
		return (
			<div className="App">
				<AddButton onClick={this.handleClick} />
				{this.state.showForm && <AddForm />}
			</div>
		);
	}
}

export default App;

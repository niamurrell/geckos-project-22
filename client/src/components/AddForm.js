import React, { Component } from 'react';

class AddForm extends Component {
	state = {
		name: '',
	};

	handleChange = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.name);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="name"
					onChange={this.handleChange}
					value={this.state.name}
				/>
				<button>add</button>
			</form>
		);
	}
}

export default AddForm;

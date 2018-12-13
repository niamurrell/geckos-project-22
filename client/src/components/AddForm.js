import React, { Component } from 'react';

class AddForm extends Component {
	state = {
		addQueueData: {
			name: '',
		},
	};

	handleChange = (event) => {
		this.setState({
			addQueueData: {
				name: event.target.value,
			},
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.addQueueData);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="name"
					onChange={this.handleChange}
					value={this.state.addQueueData.name}
				/>
				<button>add</button>
			</form>
		);
	}
}

export default AddForm;

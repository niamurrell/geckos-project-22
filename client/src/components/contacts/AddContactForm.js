import React, { Component } from 'react';

class AddContactForm extends Component {
	state = {
		contact: {
			name: "",
			generalNote: ""
		},
		addButtonEnabled: false
	}

	checkIfAllInputsHaveValue = () => Object.values(this.state.contact).every((value) => value);

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addContact(this.state.contact);
		this.props.closeForm();
	}

	handleChange = (event) => {
		const contactFieldName = event.target.name;
		const contactFieldValue = event.target.value;
		this.setState({
			contact: {
				...this.state.contact,
				[contactFieldName]: contactFieldValue,
			},
			addButtonEnabled: this.checkIfAllInputsHaveValue()
		})
	}

	handleCloseClick = (event) => {
		event.preventDefault();
		this.props.closeForm();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<button onClick={this.handleCloseClick} type="button">Close</button>
				<input
					name="name"
					className="form-input border-box"
					type="text"
					onChange={this.handleChange}
					placeholder="Contact Name"
					value={this.state.contact.name}
				/>
				<input
					name="generalNote"
					className="form-input border-box"
					type="text"
					onChange={this.handleChange}
					placeholder="General Note"
					value={this.state.contact.generalNote}
				/>
				<button disabled={!this.state.addButtonEnabled}>Add</button>
			</form>
		);
	}
}

export default AddContactForm;
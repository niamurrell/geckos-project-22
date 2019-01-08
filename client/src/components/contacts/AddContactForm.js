import React, { Component } from 'react';

class AddContactForm extends Component {
	state = {
		contact: {
			name: "",
			generalNote: ""
		},
		addButtonEnabled: false
	}

	checkIfAllInputsHaveValue = () => {
		const requiredInputs = ["name"];
		return requiredInputs.every(requiredInput => {
			return this.state.contact[requiredInput];
		})
	}

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
			}
		},
			// make the check after the update of the state
			() => this.setState({
				addButtonEnabled: this.checkIfAllInputsHaveValue()
			})
		)
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
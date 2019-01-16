import React, { Component } from 'react';
import ContactsList from "./ContactsList"
import AddContactForm from './AddContactForm';
import EditContactForm from './EditContactForm';

class Contacts extends Component {
	state = {
		showAddContactForm: false,
		showEditContactForm: false,
	}

	toggleShowAddContactForm = () => {
		this.setState({
			showAddContactForm: !this.state.showAddContactForm
		})
	}

	toggleShowEditContactForm = () => {
		this.setState({
			showEditContactForm: !this.state.showEditContactForm
		})
	}

	editContact = (currentId) => {
		this.setState({
			showEditContactForm: !this.state.showEditContactForm,
			currentId
		})
	}

	render() {
		return (
			<main>
				<h1>Contacts</h1>
				{
					this.state.showAddContactForm
						? <AddContactForm addContact={this.props.addContact} closeForm={this.toggleShowAddContactForm} />
						: <button onClick={this.toggleShowAddContactForm}>Add New Contact</button>
				}
				{
					this.state.showEditContactForm
						? <EditContactForm contact={this.props.contacts.filter(contact => contact.contact_id === this.state.currentId)}
							saveContact={this.props.saveContact}
							closeForm={this.toggleShowEditContactForm}
						/>
						: null
				}
				{
					this.props.contacts.length > 0
						? <ContactsList contacts={this.props.contacts} editContact={this.editContact} deleteContact={this.props.deleteContact} />
						: <li className="contacts-list__item">You have no contacts :(</li>
				}
			</main >
		);
	}
}

export default Contacts;

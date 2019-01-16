import React, { Component } from 'react';
import ContactsList from "./ContactsList"
import AddContactForm from './AddContactForm';
import EditContactForm from './EditContactForm';

class Contacts extends Component {
	state = {
		showAddContactForm: false,
		showEditContactForm: false,
		contacts: [
			{
				contact_id: 1,
				name: "Andy",
				generalNote: "met him at python conference",
				pastMeetings: [
					{
						meeting_id: 1,
						timestamp: 1346707029307,
						note: "at christmas"
					},
					{
						meeting_id: 2,
						timestamp: 1446707029307,
						note: "at slack"
					},
					{
						meeting_id: 3,
						timestamp: 1516707029307,
						note: "at a party"
					},
				]
			},
			{
				contact_id: 2,
				name: "Kim",
				generalNote: "met her at javascript conference",
				pastMeetings: [
					{
						meeting_id: 1,
						timestamp: 1246707029307,
						note: "at a party"
					},
					{
						meeting_id: 2,
						timestamp: 1346707029307,
						note: "at slack"
					},
					{
						meeting_id: 3,
						timestamp: 1536707029307,
						note: "at a conference"
					},
				]
			},
		]
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

	createNewContactId = () => (
		this.state.contacts
			? this.state.contacts[this.state.contacts.length - 1].contact_id + 1
			: 1
	)

	addContact = ({ name, generalNote }) => {
		const newContact = {
			contact_id: this.createNewContactId(),
			name,
			generalNote,
			pastMeetings: []
		};
		this.setState({
			contacts: [...this.state.contacts, newContact]
		})
	};

	deleteContact = (contactId) => {
		this.setState({
			contacts: this.state.contacts.filter(contact => contact.contact_id !== contactId)
		})
	}

	saveContact = ({ contact_id, name, generalNote, pastMeetings }) => {
		const cleanedContacts = this.state.contacts.filter(contact => contact.contact_id !== contact_id)
		const newContact = {
			contact_id,
			name,
			generalNote,
			pastMeetings
		};
		this.setState({
			contacts: [...cleanedContacts, newContact]
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
						? <AddContactForm addContact={this.addContact} closeForm={this.toggleShowAddContactForm} />
						: <button onClick={this.toggleShowAddContactForm}>Add New Contact</button>
				}
				{
					this.state.showEditContactForm
						? <EditContactForm contact={this.state.contacts.filter(contact => contact.contact_id === this.state.currentId)}
							saveContact={this.saveContact}
							closeForm={this.toggleShowEditContactForm}
						/>
						: null
				}
				{
					this.state.contacts.length > 0
						? <ContactsList contacts={this.state.contacts} editContact={this.editContact} deleteContact={this.deleteContact} />
						: <li className="contacts-list__item">You have no contacts :(</li>
				}
			</main >
		);
	}
}

export default Contacts;

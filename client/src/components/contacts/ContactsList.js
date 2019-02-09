import React from 'react';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts, editContact, deleteContact, addToQueue }) => (
	<ul>
		{
			contacts.map(contact =>
				<ContactsListItem contact={contact} key={contact.contact_id} editContact={editContact} deleteContact={deleteContact} addToQueue={addToQueue} />
			)
		}
	</ul>
);

export default ContactsList;
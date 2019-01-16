import React from 'react';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts, editContact, deleteContact }) => (
	<ul>
		{
			contacts.map(contact =>
				<ContactsListItem contact={contact} key={contact.contact_id} editContact={editContact} deleteContact={deleteContact} />
			)
		}
	</ul>
);

export default ContactsList;
import React from 'react';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts, editContact }) => (
	<ul>
		{
			contacts.map(contact =>
				<ContactsListItem contact={contact} key={contact.contact_id} editContact={editContact} />
			)
		}
	</ul>
);

export default ContactsList;
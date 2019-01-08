import React from 'react';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts, deleteContact }) => (
	<ul>
		{
			contacts.map(contact =>
				<ContactsListItem contact={contact} key={contact.contact_id} deleteContact={deleteContact} />
			)
		}
	</ul>
);

export default ContactsList;
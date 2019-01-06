import React from 'react';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts }) => (
	<ul>
		{
			contacts.map(contact =>
				<ContactsListItem contact={contact} key={contact.contact_id} />
			)
		}
	</ul>
);

export default ContactsList;
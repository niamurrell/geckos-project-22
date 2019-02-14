import React from 'react';
import ContactsListItem from './ContactsListItem';

const ContactsList = ({ contacts, editContact, deleteContact, queue, addToQueue }) => (
	<ul>
		{
			contacts.map(contact =>
				<ContactsListItem
					contact={contact}
					key={contact.contact_id}
					editContact={editContact}
					deleteContact={deleteContact}
					queue={queue}
					addToQueue={addToQueue}
				/>
			)
		}
	</ul>
);

export default ContactsList;
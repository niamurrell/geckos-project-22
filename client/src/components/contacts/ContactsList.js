import React from 'react';
import ListItemCard from '../ListItemCard';

const ContactsList = ({ contacts, editContact, deleteContact, queue, addToQueue }) => (
	<ul>
		{
			contacts.map(contact =>
				<ListItemCard
					contact={contact}
					key={contact.contact_id}
					editContact={editContact}
					deleteContact={deleteContact}
					queue={queue}
					addToQueue={addToQueue}
					inContactsView={true}
				/>
			)
		}
	</ul>
);

export default ContactsList;
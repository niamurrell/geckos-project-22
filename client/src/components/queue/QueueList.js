import React from 'react';
import QueueListItem from './QueueListItem';

const QueueList = ({ queue, editContact, deleteContact }) => (
	<ul>
		{
			queue.map(contact =>
				<QueueListItem contact={contact} key={contact.contact_id} editContact={editContact} deleteContact={deleteContact} />
			)
		}
	</ul>
);

export default QueueList;
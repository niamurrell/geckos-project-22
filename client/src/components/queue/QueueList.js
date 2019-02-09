import React from 'react';
import QueueListItem from './QueueListItem';

const QueueList = ({ contacts, queue }) => {
	const getContact = (item) => contacts.find(contact => contact.contact_id === item.contactId);

	return (
		<ul>
			{
				queue.map(queueItem =>
					<QueueListItem
						queueItemContact={getContact(queueItem)}
						key={queueItem.queueItem_id}
					/>
				)
			}
		</ul>
	)
};

export default QueueList;
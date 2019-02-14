import React from 'react';
import QueueListItem from './QueueListItem';

const QueueList = ({ contacts, queue, deleteQueueItem }) => {
	const getContact = (item) => contacts.find(contact => contact.contact_id === item.contactId);

	return (
		<ul>
			{
				queue.map(queueItem =>
					<QueueListItem
						queueItem={queueItem}
						queueItemContact={getContact(queueItem)}
						key={queueItem.queueItem_id}
						deleteQueueItem={deleteQueueItem}
					/>
				)
			}
		</ul>
	)
};

export default QueueList;
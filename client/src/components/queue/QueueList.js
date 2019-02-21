import React from 'react';
import ListItemCard from '../ListItemCard';

const QueueList = ({ contacts, queue, deleteQueueItem }) => {
	const getContact = (item) => contacts.find(contact => contact.contact_id === item.contactId);

	return (
		<ul>
			{
				queue.map(queueItem =>
					<ListItemCard
						key={queueItem.queueItem_id}
						contact={getContact(queueItem)}
						queue={queue}
						queueItemId={queueItem.queueItem_id}
						deleteQueueItem={deleteQueueItem}
						inQueueView={true}
					/>
				)
			}
		</ul>
	)
};

export default QueueList;
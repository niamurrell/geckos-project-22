import React from 'react';

const QueueListItem = ({ queueItem: { queueItem_id }, queueItemContact: { contact_id, name, generalNote, pastMeetings }, deleteQueueItem }) => {

	return (
		<li className="contacts-list__item border-box">
			<p>
				Name: {name}
			</p>
			<button className="contact-button" onClick={() => deleteQueueItem(queueItem_id)}>Delete From Queue</button>
		</li>
	);
}

export default QueueListItem;
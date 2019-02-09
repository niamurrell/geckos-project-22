import React from 'react';

// const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// const formatDate = timeStamp => new Date(timeStamp).toLocaleDateString('en-GB', dateOptions);

const QueueListItem = ({ queueItemContact: { contact_id, name, generalNote, pastMeetings } }) => {

	return (
		<li className="contacts-list__item border-box">
			<p>
				Name: {name}
			</p>
		</li>
	);
}

export default QueueListItem;
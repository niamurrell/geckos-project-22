import React from 'react';

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formatDate = timeStamp => new Date(timeStamp).toLocaleDateString('en-GB', dateOptions);

const ContactsListItem = ({ contact, deleteContact }) => {
	const noOfMeetings = contact.pastMeetings.length;

	return (
		<li className="contacts-list__item">
			<p>
				Name: {contact.name}
			</p>
			<p>
				General Note: {contact.generalNote}
			</p>
			<p>
				Number of Past Meetings: {noOfMeetings}
			</p>
			<p>
				Last Contact: {contact.pastMeetings[noOfMeetings - 1].note} - {formatDate(contact.pastMeetings[noOfMeetings - 1].timestamp)}
			</p>
			<button onClick={() => deleteContact(contact.contact_id)}>Delete</button>
		</li>
	);
}

export default ContactsListItem;
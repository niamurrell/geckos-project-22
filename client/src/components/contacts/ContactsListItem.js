import React from 'react';

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formatDate = timeStamp => new Date(timeStamp).toLocaleDateString('en-GB', dateOptions);

const ContactsListItem = ({ contact: { contact_id, name, generalNote, pastMeetings }, editContact, deleteContact }) => {
	const noOfMeetings = pastMeetings.length;
	const createLastContactInformation = () => (
		noOfMeetings
			? `${pastMeetings[noOfMeetings - 1].note} - ${formatDate(pastMeetings[noOfMeetings - 1].timestamp)}`
			: "never"
	)

	return (
		<li className="contacts-list__item border-box">
			<p>
				Name: {name}
			</p>
			<p>
				General Note: {generalNote || "No Note"}
			</p>
			<p>
				Number of Past Meetings: {noOfMeetings}
			</p>
			<p>
				Last Contact: {createLastContactInformation()}
			</p>
			<button className="contact-button" onClick={() => deleteContact(contact_id)}>Delete</button>
			<button className="contact-button" onClick={() => editContact(contact_id)}>Edit</button>
		</li>
	);
}

export default ContactsListItem;
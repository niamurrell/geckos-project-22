import React from 'react';

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formatDate = timeStamp => new Date(timeStamp).toLocaleDateString('en-GB', dateOptions);

const ContactsListItem = ({ contact: { name, generalNote, pastMeetings } }) => {
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
				General Note: {generalNote}
			</p>
			<p>
				Number of Past Meetings: {noOfMeetings}
			</p>
			<p>
				Last Contact: {createLastContactInformation()}
			</p>
		</li>
	);
}

export default ContactsListItem;
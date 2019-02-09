import React from 'react';

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formatDate = timeStamp => new Date(timeStamp).toLocaleDateString('en-GB', dateOptions);

const ContactsListItem = ({ contact: { contact_id, name, generalNote, pastMeetings }, queue, editContact, deleteContact, addToQueue }) => {
	const noOfMeetings = pastMeetings.length;
	const createLastContactInformation = () => (
		noOfMeetings
			? `${pastMeetings[noOfMeetings - 1].note} - ${formatDate(pastMeetings[noOfMeetings - 1].timestamp)}`
			: "never"
	)
	const findContactInQueue = () => (
		queue.find(queueItem => queueItem.contactId === contact_id) ? true : false
	)

	return (
		<li className="contacts-list__item border-box">
			<p>
				Name: {name}
			</p>
			<button className="contact-button" onClick={() => deleteContact(contact_id)}>Delete</button>
			<button className="contact-button" onClick={() => editContact(contact_id)}>Edit</button>
			<p>
				General Note: {generalNote || "No Note"}
			</p>
			<p>
				Number of Past Meetings: {noOfMeetings}
			</p>
			<p>
				Last Contact: {createLastContactInformation()}
			</p>
			{
				findContactInQueue()
					? (<button className="contact-button" disabled>Added To Queue</button>)
					: (<button className="contact-button" onClick={() => addToQueue(contact_id)}>Add To Queue</button>)
			}
		</li >
	);
}

export default ContactsListItem;
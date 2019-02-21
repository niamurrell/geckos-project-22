import React from 'react';

const ModifyContactButtons = ({ id, deleteContact, editContact }) => (
	<React.Fragment>
		<button className="contact-button" onClick={() => deleteContact(id)}>Delete</button>
		<button className="contact-button" onClick={() => editContact(id)}>Edit</button>
	</React.Fragment>
);

const DeleteFromQueueButton = ({ deleteQueueItem, queueItemId }) => (
	<button className="contact-button" onClick={() => deleteQueueItem(queueItemId)}>Delete From Queue</button>
);

const findContactInQueue = (queue, contact_id) => (
	queue.find(queueItem => queueItem.contactId === contact_id) ? true : false
);

const AddToQueueButton = ({ queue, addToQueue, contact_id }) => (
	findContactInQueue(queue, contact_id)
		? (<button className="contact-button" disabled>Added To Queue</button>)
		: (<button className="contact-button" onClick={() => addToQueue(contact_id)}>Add To Queue</button>)
);

const GeneralNote = ({ note }) => (
	<p>General Note: {note || "No Note"}</p>
);

const PastMeetingsCount = ({ count }) => (
	<p>Number of Past Meetings: {count}</p>
);

const LastContact = ({ pastMeetings }) => {
	const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const formatDate = timeStamp => new Date(timeStamp).toLocaleDateString('en-GB', dateOptions);
	const noOfMeetings = pastMeetings.length;
	const createLastContactInformation = () => (
		noOfMeetings
			? `${pastMeetings[noOfMeetings - 1].note} - ${formatDate(pastMeetings[noOfMeetings - 1].timestamp)}`
			: "never"
	);

	return (
		<p>Last Contact: {createLastContactInformation()}</p>
	);
}


const ListItemCard = ({ inContactsView, inQueueView, contact: { contact_id, name, generalNote, pastMeetings }, queue, queueItemId, editContact, deleteContact, addToQueue, deleteQueueItem }) => {

	return (
		<li className="contacts-list__item border-box">
			<p>Name: {name}</p>

			{inContactsView
				? <React.Fragment>
						<ModifyContactButtons
							id={contact_id}
							deleteContact={deleteContact}
							editContact={editContact} />
						<GeneralNote note={generalNote} />
						<PastMeetingsCount count={pastMeetings.length} />
					</React.Fragment>
				: null
			}

			<LastContact pastMeetings={pastMeetings} />

			{inContactsView
				? <AddToQueueButton queue={queue} addToQueue={addToQueue} contact_id={contact_id} />
				: null
			}

			{inQueueView
				? <DeleteFromQueueButton deleteQueueItem={deleteQueueItem} queueItemId={queueItemId} />
				: null
			}
		</li >
	);
}

export default ListItemCard;
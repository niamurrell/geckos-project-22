import React, { Component } from 'react';
import ContactsList from "./ContactsList"

class Contacts extends Component {
	state = {
		contacts: [
			{
				contact_id: 1,
				name: "Andy",
				generalNote: "met him at python conference",
				pastMeetings: [
					{
						meeting_id: 1,
						timestamp: 1346707029307,
						note: "at christmas"
					},
					{
						meeting_id: 2,
						timestamp: 1446707029307,
						note: "at slack"
					},
					{
						meeting_id: 3,
						timestamp: 1516707029307,
						note: "at a party"
					},
				]
			},
			{
				contact_id: 2,
				name: "Kim",
				generalNote: "met her at javascript conference",
				pastMeetings: [
					{
						meeting_id: 1,
						timestamp: 1246707029307,
						note: "at a party"
					},
					{
						meeting_id: 2,
						timestamp: 1346707029307,
						note: "at slack"
					},
					{
						meeting_id: 3,
						timestamp: 1536707029307,
						note: "at a conference"
					},
				]
			},
		]
	}

	render() {
		return (
			<main>
				<h1>Contacts</h1>
				<ContactsList contacts={this.state.contacts} />
			</main>
		);
	}
}

export default Contacts;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import idb from 'idb';
import Nav from './Nav';
import Queue from './queue/Queue';
import Contacts from './contacts/Contacts';

class App extends Component {
	state = {
		dataIsStorable: false,
		queue: [],
		contacts: [
			{
				contact_id: 1,
				generalNote: "The quick brown fox jumps over the lazy dog and then she sees a duck and thinks about it for a little while before deciding to make the duck her next meal. But then she hears all of the duck's little ducklings and thinks better of it.",
				name: "Dianne",
				pastMeetings: []
			},
			{
				contact_id: 2,
				generalNote: "React meetup",
				name: "Phyllis",
				pastMeetings: []
			},
			{
				contact_id: 3,
				generalNote: "diamond conference",
				name: "Jared",
				pastMeetings: []
			}
		]
	};

	// check if user can store data locally
	checkForIndexedDb = () => {
		if (window.indexedDB) {
			console.log('Your data gets stored if you close the window.');
			return true;
		} else {
			console.warn('Your data is gone if you close the window.');
			return false;
		}
	};

	saveToDatabase = async () => {
		const dbName = 'reminder';
		const osName = 'queue';

		// request a db connection and create a store
		const db = await idb.open(dbName, 1, (upgradeDB) =>
			upgradeDB.createObjectStore(osName, { autoIncrement: true }),
		);

		// open store
		const tx = db.transaction(osName, 'readwrite');
		const store = tx.objectStore(osName);

		// clean up store
		store.clear();

		// save every element from queue into store
		this.state.queue.forEach((element) => store.put(element));
		return await tx.complete;
	};

	componentDidMount = () => {
		this.setState({
			dataIsStorable: this.checkForIndexedDb(),
		});
	};

	componentDidUpdate = () => {
		if (this.state.dataIsStorable) {
			this.saveToDatabase();
		}
	};

	createNewContactId = () => {
		const numberOfContacts = this.state.contacts.length || 1;
		return this.state.contacts.length > 0
			? this.state.contacts[numberOfContacts - 1].contact_id + 1
			: 1
	}

	addContact = ({ name, generalNote }) => {
		const newContact = {
			contact_id: this.createNewContactId(),
			name,
			generalNote,
			pastMeetings: []
		};
		this.setState({
			contacts: [...this.state.contacts, newContact]
		})
	};

	deleteContact = (contactId) => {
		this.setState({
			contacts: this.state.contacts.filter(contact => contact.contact_id !== contactId)
		})
	}

	saveContact = ({ contact_id, name, generalNote, pastMeetings }) => {
		const cleanedContacts = this.state.contacts.filter(contact => contact.contact_id !== contact_id)
		const newContact = {
			contact_id,
			name,
			generalNote,
			pastMeetings
		};
		this.setState({
			contacts: [...cleanedContacts, newContact]
		})
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Nav />
					<Switch>
						<Route
							exact path="/"
							render={(props) =>
								<Queue {...props}
									queue={this.state.queue}
									contacts={this.state.contacts}
								/>}
						/>
						<Route
							path="/contacts"
							render={(props) =>
								<Contacts {...props}
									contacts={this.state.contacts}
									addContact={this.addContact}
									deleteContact={this.deleteContact}
									saveContact={this.saveContact}
								/>}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

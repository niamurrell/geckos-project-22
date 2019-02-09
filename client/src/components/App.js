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
		contacts: []
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
			contacts: this.state.contacts.filter(contact => contact.contact_id !== contactId),
			queue: this.state.queue.filter(queueItem => queueItem.contactId !== contactId)
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

	createNewQueueItemId = () => {
		const numberOfQueueItems = this.state.queue.length || 1;
		return this.state.queue.length > 0
			? this.state.queue[numberOfQueueItems - 1].queueItem_id + 1
			: 1
	}

	addToQueue = (contactId) => {
		const newQueueItem = {
			queueItem_id: this.createNewQueueItemId(),
			contactId
		};
		this.setState({
			queue: [...this.state.queue, newQueueItem]
		})
	};

	deleteQueueItem = (queueItem_id) => {
		this.setState({
			queue: this.state.queue.filter(queueItem => queueItem.queueItem_id !== queueItem_id)
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
									deleteQueueItem={this.deleteQueueItem}
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
									queue={this.state.queue}
									addToQueue={this.addToQueue}
								/>}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

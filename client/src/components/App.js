import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import idb from 'idb';
import Nav from './Nav';
import Main from './Main';
import Contacts from './contacts/Contacts';

class App extends Component {
	state = {
		dataIsStorable: false,
		queue: ['dummy data from App.js state'],
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
			contacts: this.state.contacts.filter(contact => contact.contact_id !== contactId)
		})
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Nav />
					<Switch>
						<Route exact path="/" component={Main} />
						<Route
							path="/contacts"
							render={(props) => <Contacts {...props}
								contacts={this.state.contacts}
								addContact={this.addContact}
								deleteContact={this.deleteContact}
							/>} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

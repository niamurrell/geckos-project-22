import React, { Component } from 'react';
import idb from 'idb';
import AddButton from './AddButton';

class Queue extends Component {

	constructor(props) {
		super(props);
		this.state = {
			friendsList: []
		};

		const dbName = 'reminder';
		const osName = 'queue';
		const self = this;

		// request a db connection and create a store
		const dbPromise = idb.open(dbName, 1, (upgradeDB) =>
			upgradeDB.createObjectStore(osName, { autoIncrement: true }),
		)

		const idbKeyval = {
			get(key) {
				return dbPromise.then(db => {
					return db.transaction(osName)
						.objectStore(osName).get(key);
				});
			},
			getAll() {
				return dbPromise.then(db => {
					return db.transaction(osName)
						.objectStore(osName).getAll();
				});
			},
			keys() {
				return dbPromise.then(db => {
					const tx = db.transaction(osName);
					const keys = [];
					const store = tx.objectStore(osName);

					// This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
					// openKeyCursor isn't supported by Safari, so we fall back
					(store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
						if (!cursor) return;
						keys.push(cursor.key);
						cursor.continue();
					});

					return tx.complete.then(() => keys);
				});
			}
		};

		idbKeyval.getAll().then(val => {

			self.setState({
				friendsList: val
			})
		});

	};

	render() {

		const friendsList = this.state.friendsList || [];
		const friendItems = [];
		friendsList.forEach((val) => {
			friendItems.push(<li key={val}>{val}</li>)
		})

		return (
			<section id="queue">
				<h2>Queue</h2>
				<AddButton />
				<ul>
					{friendItems}
				</ul>
			</section>
		);
	}
}

export default Queue;

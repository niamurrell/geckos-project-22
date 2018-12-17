import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Contacts from './Contacts';

class App extends Component {
	state = {
		showForm: false,
		dataIsStorable: false,
		queue: [],
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

	componentDidMount = () => {
		this.setState({
			dataIsStorable: this.checkForIndexedDb(),
		});
	};

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Nav />
					<Switch>
						<Route exact path="/" component={Main} />
						<Route path="/contacts" component={Contacts} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

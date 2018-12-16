import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Contacts from './Contacts';
// import AddButton from './AddButton';
// import AddForm from './AddForm';

class App extends Component {
	state = {
		showForm: false,
		queue: [],
	};

	handleClick = () => {
		this.setState({
			showForm: !this.state.showForm,
		});
	};

	handleFormSubmit = (addQueueData) => {
		// the input data currently only holds the name from the form
		// we have to add additional props like id, data etc. here
		this.setState({
			queue: [...this.state.queue, addQueueData],
			showForm: false,
		});
	};

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Nav />
					<Switch>
						<Route exact path='/' component={Main} />
						<Route path='/contacts' component={Contacts} />
					</Switch>
					{/* <AddButton onClick={this.handleClick} />
					{this.state.showForm ? (
						<AddForm onSubmit={this.handleFormSubmit} />
					) : null} */}
				</div>
			</BrowserRouter>
		);
	}
}

export default App;

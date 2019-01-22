import React, { Component } from 'react';

class Main extends Component {
	render() {
		return (
			<main>
				<ul>
					{
						this.props.contacts.map(contact => {
							return <li>{contact.name}</li>
						})
					}
				</ul>
			</main>
		);
	}
}

export default Main;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => (
	<nav>
		<h1 className="logo">Stay In Touch</h1>
		<NavLink exact to="/" className="navButton" id="navToHome">Home</NavLink>
		<NavLink to="/contacts" className="navButton" id="navToContacts">Contacts</NavLink>
	</nav>
);

export default Nav;

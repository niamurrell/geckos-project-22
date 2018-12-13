import React, { Component } from 'react';

class AddButton extends Component {
	render() {
		return <button onClick={this.props.onClick}>add</button>;
	}
}

export default AddButton;

import React, { Component } from 'react';

class AddForm extends Component {
	render() {
		return (
			<form>
				<input type="text" placeholder="name" />
				<button>add</button>
			</form>
		);
	}
}

export default AddForm;

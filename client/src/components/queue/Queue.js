import React, { Component } from 'react';
import QueueList from "./QueueList";

class Queue extends Component {
	render() {
		return (
			<main>
				<h1>Contact Queue</h1>
				{
					this.props.queue.length > 0
						? <QueueList
							queue={this.props.queue}
							contacts={this.props.contacts}
							deleteQueueItem={this.props.deleteQueueItem}
						/>
						: <div>
								<li className="contacts-list__item">You have no items in your queue!</li>
								<li className="contacts-list__item">You can add items from your list of contacts.</li>
							</div>
				}
			</main>
		);
	}
}

export default Queue;

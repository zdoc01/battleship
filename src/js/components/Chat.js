import React, { Component, PropTypes } from 'react';

/**
 * @class
 *
 * Chat component. Provides a chat window with
 * text input and Send button. Messages must be
 * passed down into the component via props.messages.
 */
class Chat extends Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	/**
	 * Triggered on send of message in Chat pane. Emits
	 * the message to the server, then triggers the
	 * provided props onSubmit for action dispatch.
	 * 
	 * @param  {Event} e The form submit event
	 */
	onSubmit(e) {
		e.preventDefault();

		let input = e.target.querySelector('input');
		const message = input.value;
		
		if (window.socket) {
			console.log('sending message...', message);
			window.socket.emit('newMessage', message);
		}

		input.value = '';

		if (this.props.onSubmit) {
			this.props.onSubmit(message);
		}
	}

	render() {
		const { messages } = this.props;

		return (
			<div className="chat">
				<ul id="messages">
					{messages.map((message, idx) => {
						return (<li key={'message-'+idx}>{message}</li>);
					})}
				</ul>
				<form action="" onSubmit={this.onSubmit}>
					<input type="text" />
					<button type="submit">Send</button>
				</form>
			</div>
		);
	}
};

Chat.defaultProps = {
	messages: []
};

Chat.propTypes = {
	messages: PropTypes.array
};

export default Chat;

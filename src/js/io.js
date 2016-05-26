import { receiveMessage } from './actions/creators';

export const socket = window.io(); // `io` = global

export default store => {
	console.log('initializing socket.io...');

	socket.on('newMessage', function(message) {
		console.log('message received from server!', message);
		store.dispatch(receiveMessage(message));
	});

	return socket;
};

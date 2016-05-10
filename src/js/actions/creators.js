import { RECEIVE_MESSAGE, SEND_MESSAGE } from './types';

export const receiveMessage = message => ({
	type: RECEIVE_MESSAGE,
	message
});

export const sendMessage = message => ({
	type: SEND_MESSAGE,
	message
});

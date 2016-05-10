import {
	RECEIVE_MESSAGE,
	SEND_MESSAGE
} from '../actions/types';

import message from './message';

let initialState = {
	messages: []
};

/**
 * Root reducer
 */
export default (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_MESSAGE:
		case SEND_MESSAGE:
			return {
				...state,
				messages: message(state.messages, action)
			};
		default:
			return state;
	}
};

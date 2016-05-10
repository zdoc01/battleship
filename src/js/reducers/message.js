import {
	RECEIVE_MESSAGE,
	SEND_MESSAGE
} from '../actions/types';

/**
 * Message reducer
 * @param  {Array}  state  Current messages state
 * @param  {Object} action The dispatched action
 * @return {Array}         Updated state
 */
export default (state, action) => {
	switch (action.type) {
		case RECEIVE_MESSAGE:
		case SEND_MESSAGE:
			return [
				...state,
				action.message
			];
		default:
			return state;
	}
};

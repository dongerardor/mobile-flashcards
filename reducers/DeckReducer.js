import { FETCH_ALL_DECKS } from '../actions';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_ALL_DECKS:
			console.log('reducer FETCH_ALL_DECKS: action.payload', action.payload);
			return action.payload;
		default:
			return state;
	}
};
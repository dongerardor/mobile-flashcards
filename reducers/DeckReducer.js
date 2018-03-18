import { FETCH_ALL_DECKS } from '../actions';

export default (state = {}, action) => {
	console.log('reducer: action.payload', action.payload);
	switch (action.type) {
		case FETCH_ALL_DECKS:
			return action.payload;
		default:
			return state;
	}
};
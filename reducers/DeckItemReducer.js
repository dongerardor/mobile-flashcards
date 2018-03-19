import { FETCH_DECK } from '../actions';

export default ( state = {}, action ) => {
  switch (action.type) {
    case FETCH_DECK:
      console.log('reducer FETCH_DECK: action.payload', action.payload);
      return action.payload;
    default:
      return state;
  }
};
import {
  FETCH_DECK
} from '../actions/types';

export default ( state = {}, action ) => {
  switch (action.type) {
    case FETCH_DECK:
      return action.payload;
    default:
      return state;
  }
};
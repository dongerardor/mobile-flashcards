import {
  FETCH_ALL_DECKS,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_DECKS:
      return action.payload;
    default:
      return state;
  }
};

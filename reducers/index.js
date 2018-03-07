import { combineReducers } from 'redux';
import DeckReducer from './DeckReducer';
import DeckItemReducer from './DeckItemReducer';

export default combineReducers({
  decks: DeckReducer,
  deckItem: DeckItemReducer
});

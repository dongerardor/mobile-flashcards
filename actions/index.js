export const FETCH_ALL_DECKS = 'fetch_all_decks';
export const FETCH_DECK = 'fetch_deck';

import { AsyncStorage } from 'react-native';
import { getDecks, getDeck } from '../utils/api';

export function fetchAllDecks() {
  //console.log('actions fetchAllDecks');
  return (dispatch) => {
    getDecks()
    .then(data => dispatch({ type: FETCH_ALL_DECKS, payload: data }));
  }
}

export function fetchDeck(deckId) {
  console.log('actions fetchDeck', deckId)
  return (dispatch) => {
    getDeck(deckId)
    .then(data => dispatch({ type: FETCH_DECK, payload: JSON.parse(data) }));
  }
}



/*
export function getDeckDetails(deckId) {
  return (dispatch) => {
    getDeck(deckId)
      .then(deckCards => {
        dispatch({ type: FETCH_DECK, payload: JSON.parse(deckCards) })
      });
  }
}*/
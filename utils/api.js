import { AsyncStorage } from 'react-native';

/*
@function getDecks 
@return {Array<Objects>} All existing decks asyncronically
*/
export function getDecks() {
  return AsyncStorage.getAllKeys().then(keys => {
    return AsyncStorage.multiGet(keys).then(stores => {
      return stores.map((result, i, store) => {
        let deck = store[i][0];
        let value = JSON.parse(store[i][1]);
        if (value) {
          return {
            deck,
            questions: value.questions
          };
        }
      }).filter(items => {
        if (items) {
          return typeof items.questions !== 'undefined'
        }
      });
    });
  });
}

/*
@function getDeck Get one selected deck
@param {String} deckId - also used as deck title
@return {Object} Selected deck
*/
export function getDeck(deckId) {
  return AsyncStorage.getItem(deckId);
}

/*
@function saveDeck 
@param {String} deckId - also used as deck title
@return Selected deck asyncronically
*/
export function saveDeck(title) {
  try {
    return AsyncStorage.setItem(title, JSON.stringify({ title, questions: [] }));
  } catch (error) {
    console.log(error);
  }
}

/*
@function addCardToDeck Add one card to selected deck 
@param {String} deckId - also used as deck title
@param {Object} card - The card with questions and answers
@return {Object} Selected deck
*/
export function addCardToDeck(deckId, card) {
  try {
    return AsyncStorage.getItem(deckId).then(result => {
      const data = JSON.parse(result);
      let questions = data.questions;
      questions.push(card);
      return AsyncStorage.mergeItem(deckId, JSON.stringify({
        questions
      }));
    });
  } catch (error) {
    console.log(error);
  }
  return "Card added to deck";
}
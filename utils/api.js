import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'UdaciFlashcards:decks'

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

export function getDeck(deckId) {
  return AsyncStorage.getItem(deckId);
}

export function saveDeck(title) {
  try {
    return AsyncStorage.setItem(title, JSON.stringify({ title, questions: [] }));
  } catch (error) {
    console.log(error);
  }
}

export function addCardToDeck(title, card) {
  try {
    AsyncStorage.getItem(title).then(result => {
      const data = JSON.parse(result);

      let questions = data.questions;
      questions.push(card);

      AsyncStorage.mergeItem(title, JSON.stringify({
        questions
      }));
    });
  } catch (error) {
    console.log(error);
  }
  return "Card added to deck";
}
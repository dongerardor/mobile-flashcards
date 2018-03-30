import { AsyncStorage } from 'react-native';

/*
@function getDecks Get all the existing decks
@return {Promise} 
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
@function getDeck Get a selected deck
@param {String} deckId - also used as deck title
@return {Promise}
*/
export function getDeck(deckId) {
  return AsyncStorage.getItem(deckId);
}

/*
@function saveDeck 
@param {String} deckId - also used as deck title
@return {Promise}
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
@return {Promise} Selected deck
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

/*
@function setStartupData Just for convenience, 
 the user has the chance to start with some initial data
@return {Promise} Selected deck
*/
export function setStartupData() {
  try {
    return AsyncStorage.multiSet([
      ['React', JSON.stringify(
        { deck: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces',
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event',
            }
          ]
        })
      ],
      ['JavaScript', JSON.stringify(
        { deck: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared - The combination of a function and the lexical environment within which that function was declared.',
            },
            {
              question: 'Lorem ipsum dolor sit amet',
              answer: 'Consectetur adipiscing elit. Proin sed lorem ac ipsum.',
            },
            {
              question: 'Proin sed lorem ac ipsum feugiat',
              answer: 'Aliquam nec dui sed ex lacinia facilisis.',
            },
            {
              question: 'Quisque laoreet, magna at vulputate pre',
              answer: 'Vivamus vitae felis nec massa porta fringilla',
            }
          ]
        })
      ]
    ])
  } catch (error) {
    console.log(error);
  }
}
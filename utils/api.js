import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'UdaciFlashcards:decks'

export function getDecks() {

  //console.log('api getDecks');

  return AsyncStorage.getAllKeys().then(keys => {
    
    console.log('AsyncStorage.getAllKeys', keys);

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
  console.log('api saveDeck');
  try {
    return AsyncStorage.setItem(title, JSON.stringify({ title, questions: [] }));
  } catch (error) {
    console.log(error);
  }
}

export function addCardToDeck(title, card) {
  // console.log("add card", title, card.question, card.answer);
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








/*
export function saveDeck(deckTitle) {
  try {
    
    console.log('saveDeck: ', deckTitle);

    return AsyncStorage.setItem(deckTitle, JSON.stringify({ deckTitle, questions: [] }));
  } catch (error) {
    console.log(error);
  }
}




export function fetchDecks () {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((value) => {
    if (value) {
      console.log('value: ', value);
    } else {
      this.setDummyData();
    }
  })
}






export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function processDecks (results) {
  console.log('processDecks');
  return results;
}


function setDummyData () {
  const dummyData = ["deck1", "deck2", "deck3", "deckX"];
  try {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, dummyData);
  } catch (error) {
    console.log('error when setDummyData');
  }
  return dummyData
}


 { 
      "ID": "1",
      "deckId": "deck1",
      "question": "Lorem ipsum",
      "answer": "dolor sit",
    },
    {
      "ID": "2",
      "deckId": "deck1",
      "question": "Lorem ipsum 2",
      "answer": "dolor sit 2",
    },
    { 
      "ID": "3",
      "deckId": "deck1",
      "question": "Lorem ipsum 3",
      "answer": "dolor sit 3",
    },
    { 
      "ID": "4",
      "deckId": "deck2",
      "question": "Lorem ipsum 4",
      "answer": "dolor sit 4",
    },
    { 
      "ID": "5",
      "deckId": "deck2",
      "question": "Lorem ipsum 5",
      "answer": "dolor sit 5",
    },
    {
      "ID": "6",
      "deckId": "deck3",
      "question": "Lorem ipsum 6",
      "answer": "dolor sit 6",
    },
    { 
      "ID": "7",
      "deckId": "deckX",
      "question": "Lorem ipsum 7",
      "answer": "dolor sit 7",
    },


*/
import { AsyncStorage } from 'react-native';

///////////
///////////
import { getDecks, getDeck } from '../utils/api';
///////////
///////////

const DECKS_STORAGE_KEY = 'UdaciFlashcards:decks'

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

/*

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
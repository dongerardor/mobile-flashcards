import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Constants } from 'expo';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import DecksList from './components/DecksList'; 
import DeckStart from './components/DeckStart'; 
import DeckNew from './components/DeckNew'; 
import DeckCardFinal from './components/DeckCardFinal'; 
import DeckCardNew from './components/DeckCardNew'; 
import DeckCardQuestion from './components/DeckCardQuestion'; 
import DeckCardAnswer from './components/DeckCardAnswer'; 

import reducer from './reducers'

import { wine, gray, white, yellow } from './utils/colors';

//////////////////////
import { fetchDecks } from './utils/api';
import { receiveDecks } from './actions';
import { RECEIVE_DECKS } from './actions'

const MainNavigator = StackNavigator({
  DecksList : {
    screen: DecksList,
  },
  DeckStart : {
    screen: DeckStart,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: yellow,
      }
    }    
  },
  DeckNew : {
    screen: DeckNew,
  },
  DeckCardFinal : {
    screen: DeckCardFinal,
  },
  DeckCardNew : {
    screen: DeckCardNew,
  },
  DeckCardQuestion : {
    screen: DeckCardQuestion,
  },
  DeckCardAnswer : {
    screen: DeckCardAnswer,
  },
})

export default class App extends React.Component {


  /////////////////////////////////////////
  /////////////////////////////////////////
  /////////////////////////////////////////

  componentDidMount () {
    fetchDecks();
   /* fetchDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then((decks) => this.setState({ decks }));*/
  }


  render() {
    return (
      <View style={styles.container}>
        <MainNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  containerMain: {
    padding: 10,
  }
});
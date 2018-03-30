import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducer from './reducers';

import DecksList        from './components/DecksList'; 
import DeckStart        from './components/DeckStart'; 
import DeckNew          from './components/DeckNew'; 
import DeckCardNew      from './components/DeckCardNew'; 
import DeckCard         from './components/DeckCard'; 

import { wine, white } from './utils/colors';

import { setNotification } from './utils/notifications';

const MainNavigator = StackNavigator({
  DecksList : {
    screen: DecksList,
    navigationOptions: {
      title: 'Welcome to Flashcards',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: wine,
      }
    }    
  },
  DeckStart : {
    screen: DeckStart,
    navigationOptions: {
      title: 'Deck',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: wine,
      }
    }    
  },
  DeckNew : {
    screen: DeckNew,
    navigationOptions: {
      title: 'Create a new deck',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: wine,
      }
    }    
  },
  DeckCardNew : {
    screen: DeckCardNew,
    navigationOptions: {
      title: 'Add a new card to this deck',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: wine,
      }
    } 
  },
  DeckCard : {
    screen: DeckCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: wine,
      }
    }    
  },
})

export default class App extends React.Component {
  componentDidMount() {
    setNotification();
  }

  render() {
    const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
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
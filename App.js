import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
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
import reducer from './reducers';

import { wine, gray, white, yellow } from './utils/colors';

const MainNavigator = StackNavigator({
  DecksList : {
    screen: DecksList,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: wine,
      }
    }    
  },
  DeckStart : {
    screen: DeckStart,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: wine,
      }
    }    
  },
  DeckNew : {
    screen: DeckNew,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: wine,
      }
    }    
  },
  DeckCardFinal : {
    screen: DeckCardFinal,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: wine,
      }
    }    
  },
  DeckCardNew : {
    screen: DeckCardNew,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: wine,
      }
    } 
  },
  DeckCardQuestion : {
    screen: DeckCardQuestion,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: wine,
      }
    }    
  },
  DeckCardAnswer : {
    screen: DeckCardAnswer,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: wine,
      }
    }    
  },
})


export default class App extends React.Component {
  
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
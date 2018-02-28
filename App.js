import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import DecksList from './components/DecksList'; 
import DeckStart from './components/DeckStart'; 
import DeckNew from './components/DeckNew'; 
import DeckCardFinal from './components/DeckCardFinal'; 
import DeckCardNew from './components/DeckCardNew'; 
import DeckCardQuestion from './components/DeckCardQuestion'; 
import DeckCardAnswer from './components/DeckCardAnswer'; 
import { wine, gray, white, yellow } from './utils/colors';
import { StackNavigator } from 'react-navigation';

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
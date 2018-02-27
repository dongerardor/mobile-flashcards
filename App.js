import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DecksList from './components/DecksList';
import Deck from './components/Deck';
import DeckNew from './components/DeckNew';
import { wine, gray, white, yellow } from './utils/colors';
import { StackNavigator } from 'react-navigation';

const MainNavigator = StackNavigator({
  Home: {
    screen: DecksList,
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: yellow,
      }
    }
  },
  DeckNew: {
    screen: DeckNew,
  },
  DeckCardNew: {
    screen: DeckCardNew,
  }
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
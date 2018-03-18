import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import TextButton from './TextButton';
import { saveDeck } from '../utils/api';
//import { fetchDeckDB } from '../actions';

export default class Deck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {deckTitle: '', errorMessage: false};
  }

  addDeck = () => {
    
    console.log('addDeck');

    const deckTitle = this.state.deckTitle;
    if (deckTitle) {
      saveDeck(deckTitle);
      this.setState({
        errorMessage: false,
        deckTitle: ''
      });

      this.props.navigation.navigate(
        'DeckStart',
        {
          navTitle: deckTitle,
          deckId: deckTitle,
        }
      );
    } else {
      this.setState({ errorMessage: true })
    }
  }
  //this.props.navigation.navigate('DecksList');

  render() {
    return (
      <View>

        <Text style={styles.title}>
          New deck title:
        </Text>

        <TextInput
          style={ styles.textInput }
          onChangeText={(deckTitle) => this.setState({deckTitle})}
          value={this.state.deckTitle}
        />

        <Text
          style={ styles.text }
        >
          { this.state.errorMessage ? 'Title is required' : '' }
        </Text>

        <TextButton onPress={ this.addDeck }>
            ADD DECK
        </TextButton>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  title: {
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: 0,
  },
  text: {
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: 0,
  },
  textInput: {
    fontSize: 22,
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: 0,
    height: 40,
  }
});

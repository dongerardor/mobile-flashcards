import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import TextButton from './TextButton';

export default class DeckCardFinal extends React.Component {
  constructor(props) {
    super(props)
  }

  startAgain = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckStart');
  }

  seeAllDecks = () => {
    const { navigate } = this.props.navigation;
    navigate('DecksList');
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>
          You’ve answered XX% (9 out of10) correctly.
        </Text>

        <TextButton onPress={this.startAgain}>
          START DECK AGAIN
        </TextButton>

        <TextButton onPress={this.seeAllDecks}>
          SEE ALL DECKS
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
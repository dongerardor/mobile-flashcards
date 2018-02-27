import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import TextButton from './TextButton';

export default class Deck extends React.Component {
  constructor(props) {
    super(props)

    this.state = {deckTitle: ''};
  }

  addDeck = () => {
    this.setState(() => ({
      status: 0
    }))
  }

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

        <TextButton onPress={this.addDeck}>
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

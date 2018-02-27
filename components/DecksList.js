import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors';
import { FontAwesome } from '@expo/vector-icons';
import TextButton from './TextButton';
import DeckListItem from './DeckListItem';

export default class DecksList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: 0 }
  }

  goToDeck = () => {
    const { navigate } = this.props.navigation;
    navigate('Deck');
  }

  addDeck = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckNew');
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <ScrollView>

        <TextButton onPress={this.goToDeck}>
            GO TO DECK
        </TextButton>

        <DeckListItem/>
        <DeckListItem/>
        <TextButton onPress={this.addDeck}>
            ADD DECK
        </TextButton>
      </ScrollView>
    );
  }
}
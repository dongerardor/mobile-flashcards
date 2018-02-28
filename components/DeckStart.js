import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import DeckCardNew from './DeckCardNew';
import TextButton from './TextButton';


export default class DeckStart extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: 0 }
  }

  start = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCardQuestion');
  }

  addCard = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCardNew');
  }

  render() {
    return (
      <View>
        <Text style = {styles.deckItemCardsQty}>
          This deck has 9 cards
        </Text>
        <TextButton onPress={this.start}>
            START DECK
        </TextButton>
        <TextButton onPress={this.addCard}>
            ADD CARD TO DECK
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

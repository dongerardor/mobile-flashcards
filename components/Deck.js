import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import DeckCardNew from './DeckCardNew';


export default class Deck extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: 0 }
  }

  start = () => {
    this.setState(() => ({
      status: 0 
    }))
  }

  addCard = () => {
    this.setState(() => ({
      status: 0
    }))
  }

  render() {
    return (
      <View>
        <Text style = {styles.deckItemCardsQty}>
          This deck has 9 cards
        </Text>
        <StartBtn onPress={this.start}/>
        <AddCardBtn onPress={this.addCard}/>
      </View>
    );
  }
}

function AddCardBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={ styles.btn }
      onPress={onPress}>
        <Text style={styles.btnText}>START</Text>
    </TouchableOpacity>
  )
}

function StartBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={ styles.btn }
      onPress={onPress}>
        <Text style={styles.btnText}>ADD CARD</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create ({
 btn: {
    backgroundColor: wine,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 25,
    height: 55,
    borderRadius: 2,
    alignSelf: 'center',
  },
  btnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  }
});

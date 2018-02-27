import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors';
import { FontAwesome } from '@expo/vector-icons';

export default class DeckListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: 0 }
  }

  onPress = () => {
    this.setState({
      status: this.state.status++
    })
  }

  render() {
    return (
      <View style = {styles.deckListItemContainer}>
        <TouchableOpacity
          onPress={this.onPress}
        >
          <Text style = {styles.deckListItemTitle}>
            DDDck List Item Name Lorem ipsum dolor sit consectueter sit amet ipsum dolor sit consectueter sit amet Deck List Item
          </Text>
        
          <Text style = {styles.deckListItemCardsQty}>
            9 cards
          </Text>

        </TouchableOpacity> 

      </View>
    )
  }
}

const styles = StyleSheet.create ({
   deckListItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
    margin: 10,
    backgroundColor: gray,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  deckListItemTitle: {
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    minWidth: 0,
  },
  deckListItemCardsQty: {
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: 'bold',
    minWidth: 0,  
  },
})
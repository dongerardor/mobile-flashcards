import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { gray } from '../utils/colors';

export default class DeckListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  goToDeck = () => this.props.goToDeck({
      deck: this.props.data.deck,
      navTitle: this.props.data.deck
  })

  render() {
    return (
      <View style = {styles.deckListItemContainer}>
        <TouchableOpacity
          onPress={this.goToDeck.bind(this)}
        >
          <Text style = {styles.deckListItemCardsQty}>
            Cards: { this.props.data.questions.length }
          </Text>
          <Text style = {styles.deckListItemTitle}>
            { this.props.data.deck }
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
    fontSize: 22,
    minWidth: 0,
  },
  deckListItemCardsQty: {
    fontSize: 18,
    fontWeight: 'bold',
    minWidth: 0,  
  },
})
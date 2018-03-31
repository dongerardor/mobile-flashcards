import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from './TextButton';
import { fetchAllDecks } from '../actions';
import { saveDeck } from '../utils/api';

class Deck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {deck: '', decks: [], errorMessage: ''};
  }

  componentDidMount() {
    this.props.fetchAllDecks();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.decks !== nextProps.decks) {
      this.setState({ decks: nextProps.decks });
    }
  }

  addDeck = () => {
    const { deck, decks } = this.state;
    const isExistingDeck = !!decks.filter(function(deckItem) {
      return deck == deckItem.deck;
    }).length;

    if (isExistingDeck) {
      this.setState({ errorMessage: 'Deck already exists' });
    } else if (!deck.length){
      this.setState({ errorMessage: 'Please add a title for new deck' });
    } else {
      saveDeck(deck).then(() => {
        this.setState({ errorMessage: '' });  
        this.props.navigation.navigate('DeckStart', { deck });
      });
    }
  }

  render() {
    const errorMsg = !!this.state.errorMessage 
      ? <Text style={ styles.text }>{ this.state.errorMessage }</Text>
      : null;

    return (
      <View>
        <Text style={styles.title}>New deck title:</Text>

        <TextInput
          style={ styles.textInput }
          onChangeText={(deck) => this.setState({deck})}
          value={this.state.deck}
        />

        { errorMsg }

        <TextButton onPress={ this.addDeck }>ADD DECK</TextButton>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const decks = state.decks;
  return { decks };
};

const mapDispatchToProps = { fetchAllDecks };

export default connect(mapStateToProps, mapDispatchToProps)(Deck);


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
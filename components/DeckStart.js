import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import TextButton from './TextButton';
import DeckCardNew from './DeckCardNew';
import DeckCard from './DeckCard';

import { fetchDeck } from '../actions';

class DeckStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deck: '' };
  }

  componentDidMount() {
      this.props.fetchDeck(this.props.navigation.state.params.deck);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.navigation.state.params.deck != this.state.deck){
      this.setState({ deck: nextProps.navigation.state.params.deck });
    }
  }

  start = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCard', { 
      deck: this.state.deck,
      questions: this.props.questions,
    });
  }

  addCard = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCardNew', { deck: this.state.deck });
  }

  render() {
    const cardsQtyText = this.props.questions ? `Cards: ${this.props.questions.length}` : `No cards yet`;
    const startButton = this.props.questions && this.props.questions.length 
      ? <TextButton onPress={ this.start }>BEGIN QUIZ</TextButton>
      : <Text style={ styles.text }> Add cards to start </Text>;

    console.log('DeckStart render');

    return (
      <View>
        <Text style={ styles.text }> { cardsQtyText } </Text>
        <Text style={ styles.title }> { this.state.deck } </Text>
        { startButton }
        <TextButton onPress={ this.addCard }>ADD A CARD TO DECK</TextButton>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  title: {
    fontSize: 38,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 50,
    paddingBottom: 50,
    minWidth: 0,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    minWidth: 0,
    marginLeft: 10,
    marginRight: 10, 
  },
});

const mapStateToProps = state => {
  const { title, questions } = state.deckItem ? state.deckItem : ('', []);
  return { title, questions };
};

const mapDispatchToProps = { fetchDeck };

export default connect(mapStateToProps, mapDispatchToProps)(DeckStart);
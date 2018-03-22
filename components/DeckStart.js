import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import TextButton from './TextButton';
import DeckCardNew from './DeckCardNew';

import { fetchDeck } from '../actions';

class DeckStart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entryId: '' };
  }

  static navigationOptions = {
    title: 'Deck',
  };

  componentDidMount() {
    const deckId = this.props.navigation.state.params.entryId;
    if (deckId) {
      this.props.fetchDeck(deckId);
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.navigation.state.params.entryId != this.state.entryId){
      this.setState({'entryId': nextProps.navigation.state.params.entryId});
    }
  }

  start = () => {
    //const { navigate } = this.props.navigation;
    //navigate('DeckCardQuestion');
  }

  addCard = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCardNew', { 
      entryId: this.props.title,
    });
  }

  render() {
    const cardsQtyText = this.props.questions ? `Cards: ${this.props.questions.length}` : `No cards yet`;
    return (
      <View>
        <Text style={ styles.text }> { cardsQtyText } </Text>
        <Text style={ styles.title }> { this.props.title } </Text>
        <TextButton onPress={ this.start }>START DECK</TextButton>
        <TextButton onPress={ this.addCard }>ADD CARD TO DECK</TextButton>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  title: {
    fontSize: 38,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 50,
    paddingBottom: 50,
    minWidth: 0,
  },
  text: {
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: 'bold',
    minWidth: 0,  
  },
});

const mapStateToProps = state => {
  const { title, questions } = state.deckItem ? state.deckItem : ('', []);
  return { title, questions };
};

const mapDispatchToProps = { fetchDeck };

export default connect(mapStateToProps, mapDispatchToProps)(DeckStart);
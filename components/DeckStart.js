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
    this.state = { entryId: '-'};
  }

  static navigationOptions = {
    title: 'Deck',
  };

  componentDidMount() {
      this.props.fetchDeck(this.props.navigation.state.params.entryId);
  }

  componentWillReceiveProps(nextProps){
    //console.log("DeckStart componentWillReceiveProps nextProps: ", nextProps.navigation.state.params.entryId);
    if (nextProps.navigation.state.params.entryId != this.state.entryId){
      this.setState({
        'entryId': nextProps.navigation.state.params.entryId
      });
    }
  }

  start = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCard', { 
      entryId: this.state.entryId,
      questions: this.props.questions,
    });
  }

  addCard = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCardNew', { 
      entryId: this.state.entryId,
    });
  }

  render() {
    /*console.log('DeckStart render questions: ', this.props.questions);
    console.log('DeckStart render cardsQtyText: ', cardsQtyText);
    console.log('DeckStart render title: ', this.state.entryId);*/
    const cardsQtyText = this.props.questions ? `Cards: ${this.props.questions.length}` : `No cards yet`;
    const startButton = this.props.questions && this.props.questions.length 
      ? <TextButton onPress={ this.start }>BEGIN QUIZ</TextButton>
      : <Text style={ styles.text }> Add cards to start </Text>;
    return (
      <View>
        <Text style={ styles.text }> { cardsQtyText } </Text>
        <Text style={ styles.title }> { this.state.entryId } </Text>
        { startButton }
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
import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, ScrollView } from 'react-native';
import TextButton from './TextButton';
import DeckListItem from './DeckListItem';
import { fetchAllDecks } from '../actions';

class DecksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { decks: [] };
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
    const { navigate } = this.props.navigation;
    navigate('DeckNew', { decks: this.state.decks });
  }

  goToDeck = (deck) => {
    const { navigate } = this.props.navigation;
    navigate('DeckStart', deck);
  }

  render() {
    const displayDecksList = this.state.decks && this.state.decks.length === 0 
    ? <Text style= { styles.msg }>Press ADD NEW DECK to get started</Text>
    : (this.state.decks.map((deck, i) => <DeckListItem  key={i} data={deck} goToDeck={this.goToDeck.bind(this)}/>));

    return (
      <ScrollView>
        <TextButton onPress={this.addDeck}>ADD NEW DECK</TextButton>
        { displayDecksList }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const decks = state.decks;
  return { decks };
};

const mapDispatchToProps = { fetchAllDecks };

export default connect(mapStateToProps, mapDispatchToProps)(DecksList);

const styles = StyleSheet.create ({
  msg: {
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: 'bold',
    minWidth: 0,  
  },
})
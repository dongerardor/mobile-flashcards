import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors';
import { FontAwesome } from '@expo/vector-icons';
import TextButton from './TextButton';
import DeckListItem from './DeckListItem';
import { fetchAllDecks } from '../actions';

class DecksList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { decks: [] }
  }

  componentDidMount() {
    this.props.fetchAllDecks();
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.decks !== nextProps.decks) {
      this.setState({ decks: nextProps.decks });
    }
  }

  goToDeck = (deck) => {
    console.log('DecksList goToDeck');
    const { navigate } = this.props.navigation;
    navigate('DeckStart');
  }

  addDeck = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckNew');
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {

    //console.log("render state: ", this.state.decks);

    const displayDecksList = this.state.decks.length === 0 
      ? (<Text>Press ADD DECK to get started</Text>)
      : (this.state.decks.map((deck, i) => <DeckListItem  key={i} data={deck} goToDeck={this.goToDeck.bind(this)}/>));

    return (
      <ScrollView>
        <TextButton onPress={this.goToDeck}>
            GO TO DECK
        </TextButton>
        
        { displayDecksList }

        <TextButton onPress={this.addDeck}>
            ADD DECK
        </TextButton>
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






/*

        {this.state.decks.length === 0
          ? <DeckListItem />
          : <Text>Press ADD DECK to get started</Text>
        }



{this.props.decks.length > 0
          ?
          this.props.decks.map((deck) => {
            <DeckListItem data={deck} />
          }
          : <Text>Press ADD DECK to get started!"<Text/>
        }

 componentDidMount () {
    

    fetchCalendarResults()
      .then((entries) => dispatch(receiveEntries(entries)))
      .then(({ entries }) => {
        if (!entries[timeToString()]) {
          dispatch(addEntry({
            [timeToString()]: getDailyReminderValue()
          }))
        }
      })
      .then(() => this.setState(() => ({ready: true})))
  }

  componentDidUpdate() {
    //this.props.fetchAllDecks()
  }*/
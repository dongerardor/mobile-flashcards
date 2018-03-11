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



 /* componentDidMount () {
    

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
  }*/




  componentDidUpdate() {
    //this.props.fetchAllDecks()
  }

  goToDeck = () => {
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
    return (
      <ScrollView>

        <TextButton onPress={this.goToDeck}>
            GO TO DECK
        </TextButton>

        <Text>this.state.decks</Text>
        
        <DeckListItem/>
        <DeckListItem/>
        <TextButton onPress={this.addDeck}>
            ADD DECK
        </TextButton>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const DBdata = state.decks;

  return { DBdata };
};

const mapDispatchToProps = { fetchAllDecks };

export default connect(mapStateToProps, mapDispatchToProps)(DecksList);
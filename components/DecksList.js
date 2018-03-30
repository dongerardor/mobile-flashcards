import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import TextButton from './TextButton';
import DeckListItem from './DeckListItem';
import { fetchAllDecks } from '../actions';

///////////////////////////DELETE
///////////////////////////DELETE
///////////////////////////DELETE
///////////////////////////DELETE
///////////////////////////DELETE
///////////////////////////DELETE
import { AsyncStorage } from 'react-native';


class DecksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { decks: [] };
  }

  componentDidMount() {
    //AsyncStorage.clear();
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

  addStartupData = () => {
    
  }

  goToDeck = (deck) => {
    const { navigate } = this.props.navigation;
    navigate('DeckStart', deck);
  }

  render() {
    let displayDecksList;

    if (this.state.decks && this.state.decks.length === 0) {
      displayDecksList = <View>
        <Text style={ styles.msg }>Press ADD NEW DECK to get started.</Text>
        <TextButton style={ styles.btnStartupData } onPress={ this.addStartupData }>ADD SOME STARTUP DATA</TextButton>
        <Text style={ styles.msg }>(You can also start with some fake data)</Text>
        </View>;
    } else {
      displayDecksList = ((this.state.decks.map((deck, i) => <DeckListItem  key={i} data={deck} goToDeck={this.goToDeck.bind(this)}/>)));
    }

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
  btnStartupData: {
    marginTop: 100,
  }
})
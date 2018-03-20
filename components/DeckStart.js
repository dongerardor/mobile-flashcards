import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import DeckCardNew from './DeckCardNew';
import TextButton from './TextButton';
import { fetchDeck } from '../actions';

class DeckStart extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: 0 }
  }

  componentDidMount() {
    //entryId
    //navTitle
    console.log('DeckStart componentDidMount this.props.navigation', this.props.navigation.state);
    const deckId = this.props.navigation.state.params.entryId;
    if (deckId) {
      this.props.fetchDeck(deckId);
    }
  }

  componentDidUpdate() {
    //this.props.getDeckDetails(this.props.navigation.state.params.deckId);
  }

  componentWillReceiveProps(nextProps){
    console.log('DeckStart componentWillReceiveProps: ', nextProps)
  }

  start = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCardQuestion');
  }

  addCard = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCardNew', { 
      navTitle: this.props.title,
      title: this.props.title
    });
  }

  render() {
    console.log('DeckStart render props: ', this.props);
    const cardsQtyText = this.props.questions ? <Text style={styles.deckItemCardsQty}>Cards: { this.props.questions.length }</Text> : null;
    const deckTitle = this.props.title ? <Text>{ this.props.title }</Text> : null;
    return (
      <View>
        { cardsQtyText }
        { deckTitle }

        <TextButton onPress={this.start}>
            START DECK
        </TextButton>
        <TextButton onPress={this.addCard}>
            ADD CARD TO DECK
        </TextButton>
      </View>
    );
  }
}


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

const mapStateToProps = state => {
  //console.log('mapStateToProps', state);
  const { title, questions } = state.deckItem ? state.deckItem : ('', []);
  return { title, questions };
};

const mapDispatchToProps = { fetchDeck };

export default connect(mapStateToProps, mapDispatchToProps)(DeckStart);
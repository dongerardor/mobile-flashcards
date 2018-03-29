import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import TextButton from './TextButton';
import { addCardToDeck } from '../utils/api';

class DeckCardNew extends React.Component {
  constructor(props) {
    super(props);
    this.deck = props.navigation.state.params.deck;
    this.state = { question: '', answer: '', errorMessage: '' };
  }

  addCard = () => {
    const { question, answer } = this.state;
    
    if (!!question.length && !!answer.length) {
      const card = { question, answer };
      const deck = this.deck;
      const { navigate } = this.props.navigation;

      addCardToDeck(deck, card).then(() => {
        this.setState({ question: '', answer: '', errorMessage: '' });
        navigate('DeckStart', { deck }); 
      });
      
    } else {
      this.setState({ errorMessage: 'Question and answer required.' })
    }
  };

  render() {
    const errorMessage = !!this.state.errorMessage 
      ? <Text style={ styles.text }>{ this.state.errorMessage }</Text>
      : null;

    return (
      <KeyboardAvoidingView
        style={ styles.keyboardAvoiding }
        behavior="padding"
      >

        { errorMessage }
        
        <Text style={ styles.title }>Question:</Text>
        <TextInput
          style={ styles.textInput }
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />

        <Text style={styles.title}>Answer:</Text>
        <TextInput
          style={ styles.textInput }
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />

        <TextButton onPress={this.addCard}>ADD CARD</TextButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create ({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
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
    padding: 20,
    minWidth: 0,
    height: 90,
  },
  keyboardAvoiding: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default DeckCardNew;
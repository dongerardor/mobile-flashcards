import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { wine } from '../utils/colors'
import TextButton from './TextButton';
import { NavigationActions } from 'react-navigation';

export default class DeckCard extends React.Component {
  constructor(props) {
    super(props);
  }

  initialState = {
    isQuestionShown: true,
    questions: this.props.navigation.state.params.questions,
    currentQuestion: 0,
    correctAnswers: 0
  };

  state = this.initialState;

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deck,
    }
  };

  goToDeck() {
    const back = NavigationActions.back();
    this.props.navigation.dispatch(back);
  }

  goToDecks() {
    const { navigate } = this.props.navigation;
    navigate('DecksList'); 
  }

  render() {
    let card;
    const questions = this.props.navigation.state.params.questions;
    const currentQuestion = this.state.currentQuestion;
    const correctAnswers = this.state.correctAnswers;
  
    if (currentQuestion < questions.length) {
      const btnCorrect = <TextButton onPress={() => {
        this.setState({
          currentQuestion: currentQuestion + 1,
          correctAnswers: correctAnswers + 1,
        });
      }}>CORRECT</TextButton>;

      const btnIncorrect = <TextButton onPress={() => {
        this.setState({
          currentQuestion: currentQuestion + 1,
        });
      }}>INCORRECT</TextButton>

      if(this.state.isQuestionShown) {
        card = (<View>
          <Text style={ styles.text }>Card {currentQuestion + 1}/{questions.length}</Text>
          <Text style = {styles.textLabel}>QUESTION:</Text>
          <Text style = {styles.textQuestion}>{questions[currentQuestion].question}</Text>
          {btnCorrect}
          {btnIncorrect}
          <TouchableOpacity onPress={() => this.setState({ isQuestionShown: false })}>
            <Text style={styles.textSee}>See answer</Text>
          </TouchableOpacity>
        </View>)
      } else {
        card = (<View>
          <Text style={ styles.text }>Card {currentQuestion + 1}/{questions.length}</Text>
          <Text style = {styles.textLabel}>ANSWER:</Text>
          <Text style = {styles.textQuestion}>{questions[currentQuestion].answer}</Text>
          {btnCorrect}
          {btnIncorrect}
          <TouchableOpacity onPress={() => this.setState({ isQuestionShown: true })}>
            <Text style={styles.textSee}>See question</Text>
          </TouchableOpacity>
        </View>)
      }
    } else {
      //end of quiz
      const btnRestart = <TextButton onPress={() => { this.setState(this.initialState); }}>
        RESTART QUIZ</TextButton>;
      const btnGoToDeck = <TextButton onPress={() => this.goToDeck()}>
        GO TO DECK</TextButton>;
       const btnGoToDecks = <TextButton onPress={() => this.goToDecks()}>
        SEE ALL DECKS</TextButton>;

      card = (<View>
        <Text style={ styles.textLabel }>You answered {correctAnswers} out of {questions.length} questions</Text>
        { btnRestart }
        { btnGoToDeck }
        { btnGoToDecks }
      </View>)
    }

    return (
      <View>{ card }</View>
    );
  }
}


const styles = StyleSheet.create ({
  text: {
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: 'bold',
    minWidth: 0,  
  },
  textQuestion: {
    fontSize: 18,
    paddingLeft: 10,
    marginBottom: 30,
    marginTop: 10,
    fontWeight: 'normal',
    minWidth: 0,  
  },
  textSee: {
    fontSize: 22,
    marginBottom: 30,
    marginTop: 30,
    fontWeight: 'bold',
    minWidth: 0,
    textAlign: 'center',
    color: wine,
  },
  textLabel: {
    fontSize: 22,
    paddingLeft: 10,
    marginBottom: 30,
    marginTop: 30,
    fontWeight: 'bold',
    minWidth: 0,  
  },
});
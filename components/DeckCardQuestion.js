import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import DeckCardNew from './DeckCardNew';
import TextButton from './TextButton';


export default class DeckStartQuestion extends React.Component {
  constructor(props) {
    super(props)
  }

  correct = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCardAnswer');
  }

  incorrect = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCardAnswer');
  }

  seeAnswer = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCardAnswer');
  }

  next = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCardQuestion');
  }

  last = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckCardFinal');
  }


  render() {
    return (
      <View>
        <Text>
          Card 8/9
        </Text>
        <Text style = {styles.text}>
          Question:
        </Text>
        <Text style = {styles.title}>
          Es verdad que aaa = bbb?
        </Text>
        <TextButton onPress={this.correct}>
            CORRECT
        </TextButton>
        <TextButton onPress={this.incorrect}>
            INCORRECT
        </TextButton>
        <TextButton onPress={this.seeAnswer}>
            SEE ANSWER
        </TextButton>
        <TextButton onPress={this.next}>
            NEXT
        </TextButton>
         <TextButton onPress={this.last}>
            LAST
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

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors'
import { KeyboardAvoidingView, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import TextButton from './TextButton';
import { addCardToDeck } from '../utils/api';

class DeckCardNew extends React.Component {
  constructor(props) {
    super(props);
    this.entryId = props.navigation.state.params.entryId;
    this.state = { question: '', answer: '', errorMsg: '' };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle
    }
  };

  addCard = () => {
    if (this.state.question && this.state.answer) {
      const { question, answer } = this.state;
      const card = { question, answer };
      const title = this.props.navigation.state.params.title;

      addCardToDeck(title, card);

      this.setState({ question: '', answer: '', errorMsg: '' });
      const { navigate } = this.props.navigation;
      navigate('DeckStart', { 
        entryId: this.entryId,
      });
    } else {
      this.setState({ errorMsg: 'Question and answer required.' })
    }
  };


  render() {
    return (
      <View>
        <Text style={styles.title}>
          Question:
        </Text>

        <TextInput
          style={ styles.textInput }
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />

        <Text style={styles.title}>
          Answer:
        </Text>

        <TextInput
          style={ styles.textInput }
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />

        <TextButton onPress={this.addCard}>
            ADD CARD
        </TextButton>
      </View>
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
    fontSize: 18,
    padding: 20,
    minWidth: 0,
  },
  textInput: {
    fontSize: 22,
    padding: 20,
    minWidth: 0,
    height: 90,
  }
});

export default DeckCardNew;
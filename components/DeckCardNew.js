import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'
import TextButton from './TextButton';

export default class DeckCardNew extends React.Component {
  constructor(props) {
    super(props)

    this.state = { cardQuestion: '', cardAnswer: '' };
  }

  addCard = () => {
    const { navigate } = this.props.navigation;
    navigate('DeckStart');
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>
          Question:
        </Text>

        <TextInput
          style={ styles.textInput }
          onChangeText={(cardQuestion) => this.setState({cardQuestion})}
          value={this.state.cardQuestion}
        />

        <Text style={styles.title}>
          Answer:
        </Text>

        <TextInput
          style={ styles.textInput }
          onChangeText={(cardAnswer) => this.setState({cardAnswer})}
          value={this.state.cardAnswer}
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

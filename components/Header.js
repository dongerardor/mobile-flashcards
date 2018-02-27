import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { wine, gray, white, yellow } from '../utils/colors'
import { FontAwesome } from '@expo/vector-icons'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: 0 }
  }

  onPress = () => {
    this.setState({
      status: this.state.status++
    })
  }

  render() {
    return (
      <View style = {styles.header}>

        <TouchableOpacity
          onPress={this.onPress}
        >
          <FontAwesome name='angle-left' size={30} color={white} />
        </TouchableOpacity>
        
        <Text style = {styles.headerText}>
          This is the header
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
   header: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 50,
    paddingLeft: 25,
    height: 110,
    backgroundColor: wine,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1
  },
  headerText: {
    color: white,
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 25,
  },
})
import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { wine, white } from '../utils/colors'

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: white,
    backgroundColor: wine,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    margin: 25,
    height: 55,
    borderRadius: 2,
    alignSelf: 'center',
    fontSize: 22,
  }
})
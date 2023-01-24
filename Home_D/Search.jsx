import React from 'react'
import {StyleSheet,View, TextInput} from 'react-native'
import { useState } from 'react';

export const Search = () => {
    const [text, onChangeText] = useState();
  return (

      <View style={{backgroundColor:'blue'}}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      /></View>
  )
}

const styles = StyleSheet.create({


    input: {
      height: 40,
      marginTop: 35,
      marginLeft: 10,
      marginRight: 10,
      borderWidth: 1,
    },
  });
  
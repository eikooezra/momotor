import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import normalize from 'react-native-normalize'


const Input = ({ value, onChangeText, placeholder, type }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor='#7F7F7F'
        keyboardType={type === 'numeric' ? 'numeric' : 'default'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  // container: {
  //   paddingHorizontal: 16,
  //   marginBottom: 6,
  //   alignItems: 'center'
  // },
  input: {
    paddingHorizontal: 16,
    // paddingVertical: 15,
    // width: 350,
    // height: 46,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#EBEBEB',
    color: '#7F7F7F',
    fontFamily: 'Montserrat-Medium',
  }
});
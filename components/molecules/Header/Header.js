import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import normalize from 'react-native-normalize'
import { Button } from '../../atoms/atoms';

const Header = ({ title, onPress, type }) => {
  if(type === 'back'){

  }
  return (
    <View style={styles.container}>
      {type === 'back' && <Button type='icon-only' icon='back-button' onPress={onPress}/>}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // width: normalize(380),
    // height: normalize(70),
    paddingVertical: 19,
    paddingLeft: 16,
    paddingRight: 35,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0064D0',
  },
  text: {
    fontSize: normalize(16),
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    flex: 1
  }
});
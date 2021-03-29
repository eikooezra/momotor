import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import normalize from 'react-native-normalize'
import { Button, Gap } from '../../atoms/atoms';

const Header = ({ title, onPress, back, search, add }) => {
  // if(type === 'back'){

  // }
  return (
    <View style={styles.container}>
      {back && <Button type='icon-only' icon='back-button' onPress={onPress}/>}
      <Text style={styles.text}>{title}</Text>
      {search && <Button type='icon-only' icon='search-button' onPress={onPress}/>}
      <Gap width={10}/>
      {add && <Button type='icon-only' icon='add-button' onPress={onPress}/>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // width: normalize(380),
    // height: normalize(70),
    paddingVertical: 19,
    paddingHorizontal: 16,
    // paddingLeft: 16,
    // paddingRight: 35,
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
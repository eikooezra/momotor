import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import normalize from 'react-native-normalize'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        width: normalize(380),
        height: normalize(70),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0064D0'
    },
    text: {
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        flex: 1
    }
});
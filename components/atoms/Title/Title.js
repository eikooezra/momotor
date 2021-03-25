import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import normalize from 'react-native-normalize'

const Title = ({text}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingLeft: 16,
        marginBottom: normalize(15),
        elevation: 4,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    title: {
        fontSize: 14,
        color: '#000000',
        fontFamily: 'Montserrat-SemiBold',
    }
});
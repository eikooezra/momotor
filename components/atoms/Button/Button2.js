import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';

const Button2 = ({ title, onPress, type}) => {
    return (
        <TouchableOpacity 
            style={styles.btn}
            onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button2

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(14),
        color: '#FFFFFF'
    },

    btn: {
        width: normalize(200),
        height: normalize(48),
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: normalize(16),
        backgroundColor: '#B7B7B7'
    },
});
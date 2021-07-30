import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';

const Button2 = ({ title, onPress, type, areaStyle, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, areaStyle]}
            disabled={disabled}
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
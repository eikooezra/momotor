import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'
import normalize from 'react-native-normalize'

const DropDown = ({label, value, placeholder}) => {
  return (
    <View>
        <DropDownPicker
            item={[label={label}, value={value}]}
            placeholder={placeholder}
            style={{
                paddingVertical: 20
            }}
            containerStyle={{
                width: normalize(350),
                height: normalize(46),
                marginLeft: normalize(16),
                marginBottom: normalize(6),
            }}
            dropDownStyle={{
                backgroundColor: '#FFFFFF'
            }}
            labelStyle={{
                marginLeft: normalize(8),
                fontSize: normalize(14.5),
                color:'#7F7F7F',
                fontFamily: 'Montserrat-SemiBold'
            }}
            arrowStyle={{
                marginLeft: normalize(205)
            }}
        />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({});
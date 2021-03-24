import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import normalize from 'react-native-normalize'

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if(icon === 'back-button'){
            return <Image style={styles.button} source={require('../../../assets/images/back.png')}/>
        }
        if(icon === 'search-button'){
            return <Image source={require('../../../assets/images/search.png')}/>
        }
        if(icon === 'add-button'){
            return <Image source={require('../../../assets/images/add.png')}/>
        }
        return <Image source={require('../../../assets/images/back.png')}/>
    }
    return (
    <TouchableOpacity onPress={onPress}>
        <Icon/>
    </TouchableOpacity>
    );
};

export default IconOnly;

const styles = StyleSheet.create({
    button: {
        width: normalize(32),
        height: normalize(16),
        // marginLeft: normalize(16),
        // marginTop: normalize(30)
    }
});
import React, { Component, useState } from 'react'
import {
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    View,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native'
import axios from 'axios'
import normalize from 'react-native-normalize';
import { TextInput } from 'react-native-gesture-handler'
import { Fire } from '../config';
import { showMessage } from 'react-native-flash-message';

const Forgot = ({ navigation }) => {
    const [email, setEmail] = useState('')

    const sendEmail = () => {
        Fire.auth()
            .sendPasswordResetEmail(email)
            .then(success => {
                alert('email sent', success)
                navigation.navigate('Login')
            })
            .catch(error => {
                const errorMessage = error.message
                showMessage({
                    message: errorMessage,
                    type: 'default',
                    backgroundColor: '#E06379',
                    color: '#FFFFFF'
                })
                console.log('error: ', error)
            })
    }
    return (
        <KeyboardAvoidingView style={styles.container} behavior="position">
            <StatusBar backgroundColor='#FFFFFF' />
            <View style={styles.all}>
                <Image style={styles.imgContainer}
                    source={require('../assets/images/bigLock.png')}
                />

                <Text style={styles.txt1}>
                    Anda Lupa Kata Sandi?
                </Text>

                <Text style={styles.txt2}>
                    Masukkan email anda di bawah ini. Kami
                    akan mengirim tautan untuk reset kata
                    sandi anda
                </Text>

                <View style={styles.inputContainer}>

                    <Image style={styles.mailLogo}
                        source={require('../assets/images/mail.png')}
                    />
                    <TextInput style={styles.txtInput}
                        placeholder='Email'
                        placeholderTextColor='#7F7F7F'
                        keyboardType='email-address'
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>

                <TouchableOpacity
                    style={styles.btnKirim}
                    onPress={sendEmail}
                // disabled={!enabled}
                >

                    <Text style={styles.txtKirim}>
                        KIRIM
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.backLogin}
                    onPress={() => navigation.navigate('Login')}
                >

                    <Text style={styles.txtBack}>
                        Kembali untuk Login
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Forgot

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    all: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    imgContainer: {
        width: normalize(190),
        height: normalize(186),
        marginTop: normalize(80),
        marginBottom: normalize(30),
        marginLeft: normalize(105),
        marginRight: normalize(105)
    },

    txt1: {
        width: normalize(225),
        height: normalize(22),
        marginBottom: normalize(16),
        marginLeft: normalize(30),
        fontSize: normalize(18),
        fontFamily: 'Montserrat-Bold'
    },

    txt2: {
        width: normalize(300),
        height: normalize(60),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F',
        textAlign: 'center',
    },

    txtInput: {
        fontFamily: 'Montserrat-Medium'
    },

    txtKirim: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(14),
        color: '#FFFFFF'
    },

    txtBack: {
        color: '#2A77CB',
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    txtError: {
        width: normalize(200),
        height: normalize(18),
        fontSize: normalize(14),
        fontFamily: 'Monserrat-Medium',
        color: '#E56464',
        marginBottom: normalize(12),
        marginLeft: normalize(30)
    },

    btnKirim: {
        backgroundColor: '#0064D0',
        marginBottom: normalize(1),
        width: normalize(200),
        height: normalize(48),
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inputContainer: {
        width: normalize(300),
        height: normalize(48),
        marginBottom: normalize(8),
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 6,
        paddingLeft: normalize(45),
        marginLeft: normalize(25),
        marginRight: normalize(25)
    },

    mailLogo: {
        marginTop: normalize(14.5),
        marginBottom: normalize(14.5),
        marginLeft: normalize(10.76),
        marginRight: normalize(15.5),
        width: normalize(19),
        height: normalize(15),
        borderWidth: 0.8,
        flex: 1,
        position: 'absolute'
    },

    backLogin: {
        marginTop: normalize(16)
    }
})

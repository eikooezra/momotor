import React, { useState } from 'react'
import {
    KeyboardAvoidingView,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native'
import normalize from 'react-native-normalize';
import LinearGradient from 'react-native-linear-gradient'
import { useForm } from '../utils/utils'
import { Fire } from '../config'

const Login = ({ navigation }) => {

    const [form, setForm] = useForm({
        email: '',
        password: ''
    })

    const login = () => {
        console.log('form: ', form)
        Fire.auth().signInWithEmailAndPassword(form.email, form.password)
        .then(success => {
            const data = {
                fullName: '',
                phoneNo: '',
                address: ''
            }
            Fire
            .database()
            .ref('users/' + success.user.uid + '/')
            .set(data);
            console.log('success: ', success)
            navigation.navigate('Home')
        })
        .catch(err => {
            console.log('error: ', err)
        })
    }

    const [press, setPress] = useState(false)
    const [showPass, setShowPass] = useState(true)

    // showPass = () => {
    //     if (press === false) {
    //         setPress({ showPass: false, press: true })
    //     } else {
    //         setShowPass({ showPass: true, press: false })
    //     }
    // }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="position">
            <View style={styles.split1}>
                <LinearGradient colors={['#0A4D96', '#1E87F8']}>
                    <Image style={styles.logo}
                        source={require('../assets/images/logo.png')}
                    />
                    <Image style={styles.dealerArea}
                        source={require('../assets/images/dealer.png')}
                    />
                </LinearGradient>
            </View>

            <View style={styles.split2}>
                <View style={styles.form}>
                    <View style={styles.inputContainer1}>
                        <Image style={styles.mailLogo}
                            source={require('../assets/images/mail.png')}
                        />
                        <TextInput style={styles.txtInput}
                            placeholder='Nomor ponsel atau email'
                            returnKeyType='next'
                            placeholderTextColor='#7F7F7F'
                            keyboardType='email-address'
                            value={form.email}
                            onChangeText={value => setForm('email', value)}
                            onSubmitEditing={() => secondTextInput.focus()}
                        />
                    </View>

                    <Text style={styles.txtError1}>
                        test
                    </Text>

                    <View style={styles.inputContainer2}>
                        <Image style={styles.lockLogo}
                            source={require('../assets/images/lock.png')}
                        />
                        <TextInput style={styles.txtInput}
                            placeholder='Kata Sandi'
                            placeholderTextColor='#7F7F7F'
                            // secureTextEntry={showPass}
                            value={form.password}
                            onChangeText={value => setForm('password', value)}
                            ref={(input) => { secondTextInput = input }}
                        />
                        <TouchableOpacity style={styles.btnEye}
                            onPress={showPass}>
                            <Image style={styles.eyeLogo}
                                source={require('../assets/images/eye.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    {<Text style={styles.txtError2}>
                        test
                    </Text>}

                    <View style={styles.btnArea}>
                        <TouchableOpacity style={styles.btnMasuk}
                            onPress={login}
                        // disabled={!enabled}
                        >
                            <Text style={styles.txtMasuk}>
                                MASUK
                    </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.sandiArea}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Forgot')}>
                            <Text style={styles.txtSandi}>
                                Lupa kata Sandi?
                    </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    split1: {
        width: normalize(390),
        backgroundColor: '#1E87F8'
    },

    split2: {
        backgroundColor: '#FFFFFF'
    },

    txtSandi: {
        color: '#2A77CB',
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    txtInput: {
        fontFamily: 'Montserrat-Medium'
    },

    txtMasuk: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(14),
        color: '#FFFFFF'
    },

    txtError1: {
        width: normalize(200),
        height: normalize(18),
        fontSize: normalize(14),
        fontFamily: 'Monserrat-Medium',
        color: '#E56464',
        marginBottom: normalize(8),
        marginLeft: normalize(30)
    },

    txtError2: {
        width: normalize(200),
        height: normalize(18),
        fontSize: normalize(14),
        fontFamily: 'Monserrat-Medium',
        color: '#E56464',
        marginBottom: normalize(12),
        marginLeft: normalize(30)
    },

    btnMasuk: {
        width: normalize(200),
        height: normalize(48),
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: normalize(16)
    },

    btnEye: {
        marginTop: normalize(16),
        marginBottom: normalize(25),
        marginLeft: normalize(260),
        width: normalize(25),
        height: normalize(15.68),
        flex: 1,
        position: 'absolute'
    },

    sandiArea: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 24
    },

    dealerArea: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: normalize(157.66),
        height: normalize(25.2),
        marginTop: normalize(17.47),
        marginBottom: normalize(92.98),
    },

    btnArea: {
        justifyContent: 'center',
        alignSelf: 'center'
    },

    inputContainer1: {
        marginTop: normalize(36),
        marginBottom: normalize(8),
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 6,
        paddingLeft: normalize(45),
        marginLeft: normalize(25),
        marginRight: normalize(25)
    },

    inputContainer2: {
        marginBottom: normalize(8),
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 6,
        paddingLeft: normalize(45),
        marginLeft: normalize(25),
        marginRight: normalize(25)
    },

    logo: {
        width: normalize(158.11),
        height: normalize(122),
        marginTop: normalize(75),
        justifyContent: 'center',
        alignSelf: 'center'
    },

    lockLogo: {
        marginTop: normalize(15),
        marginBottom: normalize(14.25),
        marginLeft: normalize(12.69),
        marginRight: normalize(15.54),
        width: normalize(14.5),
        height: normalize(19),
        borderWidth: 0.8,
        flex: 1,
        position: 'absolute'
    },

    mailLogo: {
        marginTop: normalize(17),
        marginBottom: normalize(16.29),
        marginLeft: normalize(10.76),
        marginRight: normalize(15.54),
        width: normalize(19),
        height: normalize(15),
        borderWidth: 0.8,
        flex: 1,
        position: 'absolute'
    },

    eyeLogo: {
        width: normalize(25),
        height: normalize(16.5),
        flex: 1,
        position: 'absolute'
    },

    form: {
        width: '100%',
        height: normalize(468),
        paddingLeft: normalize(16),
        paddingRight: normalize(16)
    },

    error: {
        borderColor: 'red'
    }
})
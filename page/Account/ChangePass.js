import React, { useState, useRef, useEffect } from 'react'
import {
    Image,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import normalize from 'react-native-normalize'
import { showMessage, hideMessage } from "react-native-flash-message";
import { useForm } from '../../utils/utils'
import { Fire } from '../../config'

const ChangePass = ({ navigation }) => {
    const [showPass, setShowPass] = useState(true)
    const [showPass1, setShowPass1] = useState(true)
    const [form, setForm] = useForm({
        currPass: '',
        newPass: '',
        conPass: ''
    })

    const goBack = () => {
        navigation.navigate('Settings')
    }

    const reauthenticate = (currentPass) => {
        const user = Fire.auth().currentUser
        const cred = Fire.auth.EmailAuthProvider.credential(user.email, currentPass)
        return user.reauthenticateWithCredential(cred)
    }

    const onChangePass = () => {
        reauthenticate(form.currPass).then(() => {
            const user = Fire.auth().currentUser
            user.updatePassword(form.newPass).then(() => {
                showMessage({
                    message: 'Kata sandi berhasil diubah',
                    type: 'default',
                    backgroundColor: '#20b53e',
                    color: '#FFFFFF',
                })
                navigation.navigate('Home')
            }).catch((error) => {
                const errorMessage = error.message
                showMessage({
                    message: 'kata sandi anda salah',
                    type: 'default',
                    backgroundColor: '#E06379',
                    color: '#FFFFFF',
                })
            })

        }).catch((error) => {
            const errorMessage = error.message
            showMessage({
                message: 'kata sandi anda salah',
                type: 'default',
                backgroundColor: '#E06379',
                color: '#FFFFFF',
            })
        })

    }
    const enabled =
        form.currPass !== '' &&
        form.newPass !== '' &&
        form.conPass !== '' &&
        form.conPass == form.newPass

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={goBack}
                >
                    <Image
                        style={styles.btnBack}
                        source={require('../../assets/images/back.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.txtSandi}>
                    Kata Sandi
                </Text>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <View>
                    <Image
                        style={styles.imgContainer}
                        source={require('../../assets/images/lupaPass.png')}
                    />

                    <Text style={styles.txtUbah}>
                        Ubah Kata Sandi
                    </Text>
                </View>
                <KeyboardAvoidingView>
                    <Text style={styles.txtSanLam}>
                        Kata Sandi Saat Ini
                    </Text>

                    <View style={styles.inputContainer1}>
                        <Image style={styles.lockLogo}
                            source={require('../../assets/images/lockGre.png')}
                        />
                        <TextInput style={styles.txtInput}
                            placeholder='Masukkan kata sandi saat ini'
                            returnKeyType='next'
                            placeholderTextColor='#7F7F7F'
                            secureTextEntry={showPass}
                            value={form.currPass}
                            onChangeText={value => setForm('currPass', value)}
                            onSubmitEditing={() => secondTextInput.focus()}
                        />

                        <TouchableOpacity style={styles.btnEye}
                            onPress={() => setShowPass((prev) => !prev)}>
                            <Image style={styles.eyeLogo}
                                source={(showPass)
                                    ? require('../../assets/images/eyeGre.png')
                                    : require('../../assets/images/eyeGreS.png')
                                }
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.txtSanLam}>
                        Kata Sandi Baru
                    </Text>

                    <View style={styles.inputContainer1}>
                        <Image style={styles.lockLogo}
                            source={require('../../assets/images/lockGre.png')}
                        />
                        <TextInput style={styles.txtInput}
                            placeholder='Masukkan kata sandi baru'
                            returnKeyType='next'
                            placeholderTextColor='#7F7F7F'
                            secureTextEntry={showPass1}
                            value={form.newPass}
                            onChangeText={value => setForm('newPass', value)}
                            onSubmitEditing={() => secondTextInput.focus()}
                        />

                        <TouchableOpacity style={styles.btnEye}
                            onPress={() => setShowPass1((prev) => !prev)}>
                            <Image style={styles.eyeLogo}
                                source={(showPass1)
                                    ? require('../../assets/images/eyeGre.png')
                                    : require('../../assets/images/eyeGreS.png')
                                }
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.txtSanBar}>
                        Konfirmasi Kata Sandi Baru
                    </Text>

                    <View style={styles.inputContainer2}>
                        <Image style={styles.lockLogo}
                            source={require('../../assets/images/lockGre.png')}
                        />
                        <TextInput style={styles.txtInput}
                            placeholder='Konfirmasi kata sandi baru'
                            placeholderTextColor='#7F7F7F'
                            secureTextEntry={true}
                            value={form.conPass}
                            onChangeText={value => setForm('conPass', value)}
                            ref={(input) => { secondTextInput = input }}
                        />
                    </View>

                    <TouchableOpacity
                        style={[styles.btnReset,
                        {
                            backgroundColor: (enabled)
                                ? '#0064D0'
                                : '#B7B7B7'
                        }
                        ]}
                        onPress={onChangePass}
                        disabled={!enabled}
                    >

                        <Text style={styles.txtReset}>
                            Ganti Kata Sandi
                        </Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </ScrollView>

        </View>
    )
}

export default ChangePass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    Header: {
        width: normalize(380),
        height: normalize(70),
        marginBottom: normalize(15),
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: normalize(32),
        height: normalize(16),
        marginLeft: normalize(16),
        marginTop: normalize(30)
    },

    txtSandi: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(108),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    imgContainer: {
        width: normalize(190),
        height: normalize(230),
        marginTop: normalize(20),
        marginBottom: normalize(30),
        marginLeft: normalize(95),
        marginRight: normalize(105)
    },

    txtUbah: {
        marginLeft: normalize(25),
        marginBottom: normalize(20),
        fontFamily: 'Montserrat-Bold',
        fontSize: normalize(16)
    },

    txtInput: {
        fontFamily: 'Montserrat-Medium'
    },

    btnEye: {
        marginTop: normalize(16),
        marginBottom: normalize(25),
        marginLeft: normalize(290),
        width: normalize(25),
        height: normalize(15.68),
        flex: 1,
        position: 'absolute'
    },

    lockLogo: {
        marginTop: normalize(14.5),
        marginBottom: normalize(14.25),
        marginLeft: normalize(12.69),
        marginRight: normalize(15.54),
        width: normalize(14.5),
        height: normalize(20),
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

    txtSanLam: {
        marginLeft: normalize(25),
        marginBottom: normalize(8),
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(14)
    },

    txtSanBar: {
        marginLeft: normalize(25),
        marginBottom: normalize(8),
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(14)
    },

    inputContainer1: {
        width: normalize(328),
        height: normalize(48),
        marginBottom: normalize(10),
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: normalize(35),
        marginLeft: normalize(25),
        borderColor: '#7F7F7F'
    },

    inputContainer2: {
        width: normalize(328),
        height: normalize(48),
        marginBottom: normalize(10),
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: normalize(35),
        marginLeft: normalize(25),
        borderColor: '#7F7F7F'
    },

    btnReset: {
        backgroundColor: '#B7B7B7',
        marginTop: normalize(20),
        marginBottom: normalize(1),
        width: normalize(328),
        height: normalize(48),
        marginLeft: normalize(25),
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtReset: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(16),
    }
})

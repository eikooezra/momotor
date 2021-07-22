import React, { useState } from 'react'
import { useEffect } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    View,
    Text,
    Image,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import normalize from 'react-native-normalize'
import { Fire } from '../../config'
import { getData, storeData } from '../../utils/localstorage/localstorage'
import { useForm } from '../../utils/utils'

const EditProfile = ({ navigation }) => {

    const [profile, setProfile] = useState({
        fullName: '',
        address: '',
        phoneNo: '',
        email: ''
    })

    useEffect(() => {
        getData('user').then(res => {
            const data = res
            setProfile(data)
        })
    })

    const update = () => {
        console.log('profile: ', profile)
        Fire.database()
        .ref(`users/${profile.uid}/`)
        .update(profile)
        .then(data => {
            console.log('success: ', data)
            storeData('user', data)
            navigation.navigate('Account')
            alert('Data berhasil diubah!')
        })
        .catch(err => {
            console.log('error: ', err)
        })
    }

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value,
        })
    }

    const dataSaved = () => {
       
    }

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={styles.btnBack}
                        source={require('../../assets/images/back.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.txtEdit}>
                    Edit Profile
          </Text>
            </View>

            <View>
                <Text style={styles.txtName}>
                    Nama Dealer
            </Text>

                <View style={styles.inputName}>
                    <TextInput
                        style={styles.txtinName}
                        returnKeyType='next'
                        value={profile.fullName}
                        onChangeText={(value) => changeText('fullName', value)}
                    />
                </View>

                <Text style={styles.txtAddress}>
                    Alamat Dealer
            </Text>

                <View style={styles.inputAddress}>
                    <TextInput
                        style={styles.txtinAddress}
                        returnKeyType='next'
                        value={profile.address}
                        onChangeText={(value) => changeText('address', value)}
                    />
                </View>

                <Text style={styles.txtPhone}>
                    No. Handphone
            </Text>

                <View style={styles.inputPhone}>
                    <TextInput
                        style={styles.txtinPhone}
                        keyboardType={'numeric'}
                        returnKeyType='next'
                        maxLength={13}
                        value={profile.phoneNo}
                        onChangeText={(value) => changeText('phoneNo', value)}
                    />
                </View>

                <Text style={styles.txtEmail}>
                    Email
            </Text>

                <View style={styles.inputEmail}>
                    <TextInput
                        style={styles.txtinEmail}
                        keyboardType='email-address'
                        returnKeyType='next'
                        value={profile.email}
                        onChangeText={value => ('email', value)}
                        editable={false}
                        selectTextOnFocus={false}
                    />
                </View>

                <View style={styles.Areabtn}>
                    <TouchableOpacity
                        style={styles.btnSave}
                        onPress={update}
                    // disabled = {!enabled}
                    >
                        <Text style={styles.txtSave}>
                            SIMPAN
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    Header: {
        width: normalize(380),
        height: normalize(70),
        marginBottom: normalize(24),
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: normalize(32),
        height: normalize(16),
        marginLeft: normalize(16),
        marginTop: normalize(30)
    },

    txtEdit: {
        width: normalize(100),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(107),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    txtName: {
        width: normalize(150),
        height: normalize(15),
        marginLeft: normalize(20),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    inputName: {
        borderBottomWidth: 1,
        borderBottomColor: '#E3DFDF',
        marginBottom: normalize(24),
        marginLeft: normalize(20),
        marginRight: normalize(20),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    txtinName: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    txtAddress: {
        width: normalize(150),
        height: normalize(15),
        marginLeft: normalize(20),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    inputAddress: {
        borderBottomWidth: 1,
        borderBottomColor: '#E3DFDF',
        marginBottom: normalize(24),
        marginLeft: normalize(20),
        marginRight: normalize(20),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    txtinAddress: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    txtPhone: {
        width: normalize(150),
        height: normalize(15),
        marginLeft: normalize(20),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    inputPhone: {
        borderBottomWidth: 1,
        borderBottomColor: '#E3DFDF',
        marginBottom: normalize(24),
        marginLeft: normalize(20),
        marginRight: normalize(20),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    txtinPhone: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    txtEmail: {
        width: normalize(150),
        height: normalize(15),
        marginLeft: normalize(20),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    inputEmail: {
        borderBottomWidth: 1,
        borderBottomColor: '#E3DFDF',
        marginBottom: normalize(120),
        marginLeft: normalize(20),
        marginRight: normalize(20),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    txtinEmail: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    Areabtn: {
        justifyContent: 'center',
        alignSelf: 'center'
    },

    btnSave: {
        width: normalize(100),
        height: normalize(40),
        borderRadius: normalize(20),
        backgroundColor: '#0064D0'
    },

    txtSave: {
        width: normalize(100),
        height: normalize(18),
        marginTop: normalize(11),
        marginLeft: normalize(26),
        fontSize: normalize(14),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-SemiBold',
    }
})
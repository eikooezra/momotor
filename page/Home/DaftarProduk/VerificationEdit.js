import React, { Component, useState } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import normalize from 'react-native-normalize';
import { getData } from '../../../utils/localstorage/localstorage';
import { showMessage } from "react-native-flash-message";
import { Fire } from '../../../config';

const VerificationEdit = ({ navigation }) => {
    const [isPressed, setIsPressed] = useState(false)

    const inputDataProduct = () => {
        getData('user').then(res => {
            const uid = res.uid
            getData('product').then(res => {
                const id = res.ProductId
                Fire
                    .database()
                    .ref('product/' + uid + '/' + id + '/')
                    .update(res)
                getData('productImage').then(res => {
                    Fire
                        .database()
                        .ref('product/' + uid + '/' + id + '/images' + '/')
                        .update(res)

                })
                console.log('data image', res)
            })
        })
    }

    const onContinue = () => {
        inputDataProduct()
        navigation.navigate('DaftarProduk')
        showMessage({
            message: 'Data tersimpan!',
            type: 'default',
            backgroundColor: '#20b53e',
            color: '#FFFFFF',
            fontFamily: 'Montserrat-SemiBold'
        })
    }

    const checkBox = () => {
        setIsPressed(!isPressed)
    }
    const enabled = isPressed === true
    const cbColors = isPressed === true

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={styles.btnBack}
                        source={require('../../../assets/images/back.png')}
                    />
                </TouchableOpacity>

                <Text style={styles.txtVerif}>
                    Verifikasi
                </Text>
            </View>

            <View style={styles.verifContainer}>

                <CheckBox
                    style={styles.cbPosition}
                    tintColors={cbColors
                        ? '#0064D0'
                        : '#FFFFFF'
                    }
                    value={isPressed}
                    onChange={checkBox}
                />

                <Text style={styles.txtWording}>
                    Dengan ini saya menyatakan bahwa motor yang saya jual di momotor.id telah saya serifikasi secara mandiri dan menyatakan seluruh komponen motor yang ada layak untuk dijual
                </Text>
            </View>


            <View style={styles.btnSaveArea}>
                <TouchableOpacity
                    style={[styles.btnSave, {
                        backgroundColor: (enabled)
                            ? '#0064D0'
                            : '#B7B7B7'
                    }
                    ]}
                    onPress={onContinue}
                    disabled={!enabled}
                >
                    <Text style={styles.txtSave}>
                        SIMPAN DATA
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default VerificationEdit

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
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

    txtVerif: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(120),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    verifContainer: {
        flexDirection: 'row'
    },

    cbPosition: {
        width: normalize(18),
        height: normalize(18),
        marginLeft: normalize(20),
        borderRadius: 3,
    },

    txtWording: {
        width: normalize(306),
        height: normalize(85),
        marginLeft: normalize(20),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    btnSaveArea: {
        bottom: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute'
    },

    btnSave: {
        width: normalize(420),
        height: normalize(60),
    },

    txtSave: {
        width: normalize(125),
        height: normalize(20),
        marginTop: normalize(20),
        marginLeft: normalize(160),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
    }
})
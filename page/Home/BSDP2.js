import React, { Component, useState } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import normalize from 'react-native-normalize';

const BottomSheet = ({ onPressEdit, onPressUnhide}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerText}>
                <Text style={styles.txtTindakan}>
                    Tindakan
                </Text>
            </View>

            <View style={styles.containerTindakan}>
                <TouchableOpacity
                    style={styles.btnView}
                    onPress={onPressEdit}
                >
                    <Image
                        style={styles.imgEdit}
                        source={require('../../assets/images/edit.png')}
                    />

                    <Text style={styles.txtEdit}>
                        Edit Produk
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
                 }}>
                <TouchableOpacity
                    onPress={onPressUnhide}
                    style={styles.btnShow}
                >
                    <Text style={styles.txtShow}>
                        Tampilkan
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomSheet

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    containerText: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#DDDDDD',
        marginBottom: normalize(10)
    },

    txtTindakan: {
        width: normalize(80),
        height: normalize(18),
        marginTop: normalize(14),
        marginBottom: normalize(14),
        marginLeft: normalize(20),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold'
    },

    containerTindakan: {
        marginLeft: normalize(24),
        marginRight: normalize(24),
        marginBottom: normalize(15),
        borderBottomWidth: normalize(0.5),
        borderBottomColor: '#DDDDDD'
    },

    btnView: {
        flexDirection: 'row'
    },

    imgEdit: {
        width: normalize(25),
        height: normalize(25),
        marginBottom: normalize(18),
        marginLeft: normalize(5)
    },

    imgDelete: {
        width: normalize(20),
        height: normalize(20),
        marginBottom: normalize(18),
        marginLeft: normalize(8)
    },

    txtEdit: {
        marginTop: normalize(1),
        marginBottom: normalize(18),
        marginLeft: normalize(18),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    imgURL: {
        width: normalize(22),
        height: normalize(14),
        marginLeft: normalize(5),
    },

    txtURL: {
        width: normalize(86),
        height: normalize(18),
        marginBottom: normalize(18),
        marginLeft: normalize(21),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    imgQR: {
        width: normalize(18),
        height: normalize(18),
        marginLeft: normalize(5),
    },

    txtQR: {
        width: normalize(62),
        height: normalize(18),
        marginBottom: normalize(18),
        marginLeft: normalize(25),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtTampilkan: {
        width: normalize(129),
        height: normalize(18),
        marginTop: normalize(6),
        marginLeft: normalize(26),
        marginRight: normalize(150),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    btnShow: {
        width: normalize(300),
        height: normalize(48),
        marginTop: normalize(10),
        marginLeft: normalize(5),
        borderRadius: 4,
        backgroundColor: '#0064D0'
    },

    txtShow: {
        alignSelf: 'center',
        marginTop: normalize(8),
        paddingVertical: 4,
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF'
    },

})
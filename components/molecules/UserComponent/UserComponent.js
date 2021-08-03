import React, { Component } from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'
import normalize from 'react-native-normalize'

const UserComponent = ({ name, phoneNo, address, onPressEdit }) => {
    return (
        <View>
            <View style={styles.upperBar}>
                <Image
                    style={styles.dealerLogo}
                    source={require('../../../assets/images/dealer1.png')}
                />

                <View style={styles.infoArea}>
                    <Text style={styles.name}>
                        {name}
                    </Text>

                    <Text style={styles.phone}>
                        {phoneNo}
                    </Text>

                    <View style={styles.address}>
                        <Image
                            style={styles.imgLoc}
                            source={require('../../../assets/images/location.png')}
                        />

                        <Text style={styles.txtAddress}>
                            {address}
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={onPressEdit}
                >
                    <Image
                        style={styles.btnEdit}
                        source={require('../../../assets/images/edit.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserComponent

const styles = StyleSheet.create({
    upperBar: {
        height: normalize(120),
        borderRadius: 10,
        marginLeft: normalize(16),
        marginRight: normalize(16),
        elevation: 5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    dealerLogo: {
        width: normalize(84),
        height: normalize(84),
        marginTop: normalize(16),
        marginBottom: normalize(41),
        marginLeft: normalize(20)
    },

    infoArea: {
        marginLeft: normalize(10)
    },

    name: {
        width: normalize(174),
        height: normalize(20),
        marginTop: normalize(16),
        marginBottom: normalize(8),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold'
    },

    phone: {
        width: normalize(116),
        height: normalize(18),
        marginBottom: normalize(8),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    address: {
        flexDirection: 'row'
    },

    imgLoc: {
        width: normalize(10),
        height: normalize(13)
    },

    txtAddress: {
        width: normalize(170),
        height: normalize(40),
        fontSize: normalize(12),
        marginLeft: normalize(9),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    btnEdit: {
        width: normalize(34),
        height: normalize(34),
        marginTop: normalize(6),
        marginBottom: normalize(91),
        marginRight: normalize(7),
    },
})
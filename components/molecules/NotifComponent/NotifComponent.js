import React, { Component } from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
} from 'react-native'
import normalize from 'react-native-normalize'

const NotifComponent = ({title, message, date}) => {
    return (
        <View>
            <View style={styles.notif}>
                <Image
                    style={styles.imgNotif}
                    source={require('../../../assets/images/aerox2.png')}
                />

                <View style={styles.txtContainer}>
                    <Text style={styles.notifBerhasil}>
                        {title}
                    </Text>

                    <Text style={styles.orderID}>
                        {message}
                    </Text>
                </View>

                <Text style={styles.clock}>
                    {date}
                </Text>
            </View>
        </View>
    )
}

export default NotifComponent

const styles = StyleSheet.create({
    notif: {
        flexDirection: 'row',
        marginTop: normalize(25),
    },

    imgNotif: {
        marginLeft: normalize(34),
        width: normalize(62),
        height: normalize(62),
    },

    txtContainer: {
        marginLeft: normalize(11),
        alignContent: 'center'
    },

    notifBerhasil: {
        marginRight: normalize(160),
        marginBottom: normalize(6),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold'
    },

    noteGagal: {
        marginRight: normalize(160),
        fontSize: normalize(12),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    orderID: {
        marginBottom: normalize(24),
        fontSize: normalize(12),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    clock: {
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Regular'
    }

})
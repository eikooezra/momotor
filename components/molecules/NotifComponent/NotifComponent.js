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
                    source={require('../../../assets/images/notif2.png')}
                />

                <View style={styles.txtContainer}>
                    <Text style={styles.notifBerhasil}>
                        {title}
                    </Text>

                    <Text style={styles.orderID}>
                        {message}
                    </Text>

                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            marginBottom: normalize(15),
                            fontSize: normalize(12),
                            fontFamily: 'Montserrat-Medium'
                        }}>
                            12:00
                        </Text>

                        <Text style={{
                            marginLeft: normalize(10),
                            fontSize: normalize(12),
                            fontFamily: 'Montserrat-Medium'
                        }}>
                            {date}
                        </Text>
                    </View>
                </View>
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
        marginLeft: normalize(24),
        width: normalize(30),
        height: normalize(30),
    },

    txtContainer: {
        marginLeft: normalize(20),
        alignContent: 'center'
    },

    notifBerhasil: {
        marginRight: normalize(120),
        marginBottom: normalize(6),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
    },

    orderID: {
        marginBottom: normalize(15),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },
})
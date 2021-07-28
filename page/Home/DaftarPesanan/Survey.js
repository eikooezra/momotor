import React, { Component, useEffect, useState } from 'react'
import {
    StyleSheet,
    Image,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize';
import { OrderItem } from '../../../components/components';
import { Fire } from '../../../config';

const Survey = ({navigation}) => {
    const [order, setOrder] = useState([])
    useEffect(() => {
        Fire.database()
            .ref('order/')
            .orderByChild('status')
            .equalTo('Proses Survey')
            .once('value')
            .then(res => {
                console.log('data: ', res.val())
                if (res.val()) {
                    setOrder(Object.values(res.val()))
                }
            })
            .catch(err => {
                console.log('error: ', err)
            })
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView>
                {order.map(item => {
                    return (
                        <OrderItem
                            id={item.id} 
                            image={item.images.image}
                            name={item.name}
                            product={item.product}
                            date={item.date}
                            status={item.status}
                            onPress={() => navigation.navigate('DetailPesanan', item)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Survey

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    WhiteBox: {
        width: normalize(350),
        height: normalize(121),
        marginTop: normalize(16),
        marginBottom: normalize(16),
        marginLeft: normalize(16),
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },

    WhiteBox2: {
        width: normalize(350),
        height: normalize(121),
        marginBottom: normalize(16),
        marginLeft: normalize(16),
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },

    boxContainer1: {
        marginLeft: normalize(16)
    },

    imgUnit: {
        width: normalize(98),
        height: normalize(98),
        marginTop: normalize(12),
        borderRadius: 4,
    },

    boxContainer2: {
        marginLeft: normalize(16)
    },

    txtName: {
        width: normalize(119),
        height: normalize(20),
        marginTop: normalize(12),
        marginBottom: normalize(6),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    txtModel: {
        width: normalize(120),
        height: normalize(20),
        marginBottom: normalize(6),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    txtDate: {
        width: normalize(120),
        height: normalize(20),
        marginBottom: normalize(6),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    btnProsesVerif: {
        width: normalize(100),
        height: normalize(25),
        marginLeft: normalize(115),
        borderRadius: 4,
        backgroundColor: '#EAF7EE'
    },

    txtProsesVerif: {
        marginTop: normalize(4),
        marginLeft: normalize(8),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-SemiBold',
        color: '#3CB13C'
    }
})
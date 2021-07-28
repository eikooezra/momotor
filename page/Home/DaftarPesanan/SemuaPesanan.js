import React, { Component, useEffect, useState } from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
} from 'react-native'
import normalize from 'react-native-normalize';
import { OrderItem } from '../../../components/components';
import { Fire } from '../../../config';
import { getData } from '../../../utils/localstorage/localstorage';

const SemuaPesanan = ({ navigation }) => {
    const [order, setOrder] = useState([])
    useEffect(() => {
        getData('user').then(res => {
            const uid = res.uid
            Fire.database()
                .ref('order/' + uid + '/')
                .orderByKey()
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
        })
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView>
                {order.map(item => {
                    return (
                        <OrderItem
                            key={item.id}
                            image={item.data_motor.images.image}
                            name={item.data_customer.custName}
                            product={item.data_motor.product}
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

export default SemuaPesanan

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})
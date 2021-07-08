import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { OrderComponent } from '../../../components/components';
import { Fire } from '../../../config';
import { getData } from '../../../utils/localstorage/localstorage';

const DetailPesanan = ({ navigation, route }) => {
    const detail = route.params
    const [orderDetail, setOrderDetail] = useState([])
    useEffect(() => {
        getDetailById(detail.id)
    }, [])

    const getDetailById = (id) => {
        console.log('all data :',detail)
        getData('user').then(res => {
            Fire.database()
                .ref('order/' + res.uid + '/')
                .orderByChild('id')
                .equalTo(id)
                .once('value')
                .then(res => {
                    console.log('a: ', res.val())
                    if (res.val()) {
                        console.log('b', Object.values(res.val()))
                        setOrderDetail(Object.values(res.val()))
                    }
                })
                .catch(err => {
                    const errorMessage = error.message
                    showMessage({
                        message: errorMessage,
                        type: 'default',
                        backgroundColor: '#E06379',
                        color: '#FFFFFF'
                    })
                    console.log('error: ', error)
                })
        })
    }

    return (
        <View>
            {orderDetail.map(item => {
                console.log('c', item)
                return (
                    <OrderComponent
                        id={item.id}
                        status={item.status}
                        product={item.data_motor.product}
                        price={item.data_motor.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        images={[
                            item.data_motor.images.image,
                            item.data_motor.images.image1,
                            item.data_motor.images.image2,
                            item.data_motor.images.image3,
                            item.data_motor.images.image4,
                            item.data_motor.images.image5
                        ]}
                        dp={item.data_kredit.dp.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        cicilan={item.data_kredit.cicilan.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        name={item.data_customer.custName}
                        kode={'123456'}
                        ref_code={'KJJVPOS'}
                        tenor={item.data_kredit.tenor}
                        date={item.date}
                    />
                )
            })}
        </View>
    );
};

export default DetailPesanan;

const styles = StyleSheet.create({});
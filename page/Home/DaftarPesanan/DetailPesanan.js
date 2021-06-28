import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { OrderComponent } from '../../../components/components';
import { Fire } from '../../../config';

const DetailPesanan = ({ navigation, route }) => {
    const detail = route.params
    const [productDetail, setProductDetail] = useState([])
    useEffect(() => {
        getDetailById(detail.id)
    }, [])

    const getDetailById = (id) => {
        Fire.database()
            .ref('order/')
            .orderByChild('id')
            .equalTo(id)
            .once('value')
            .then(res => {
                console.log('data: ', res.val())
                if (res.val()) {
                    console.log('a', Object.values(res.val()))
                    setProductDetail(Object.values(res.val()))
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
    }

    return (
        <View>
            {productDetail.map(item => {
                console.log('data', item)
                return (
                    <OrderComponent
                        id={item.id}
                        status={item.status}
                        product={item.product}
                        price={item.price}
                        images={[
                            item.images.image,
                            item.images.image1,
                            item.images.image2,
                            item.images.image3,
                            item.images.image4,
                            item.images.image5
                        ]}
                        dp={item.dp}
                        cicilan={item.cicilan}
                        name={item.name}
                        kode={item.kode}
                        ref_code={item.ref_code}
                        tenor={item.tenor}
                        date={item.date}
                    />
                )
            })}
        </View>
    );
};

export default DetailPesanan;

const styles = StyleSheet.create({});
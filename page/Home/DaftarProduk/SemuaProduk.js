import React, { useEffect, useRef, useState } from 'react'
import { showMessage, hideMessage } from "react-native-flash-message";
import {
    StyleSheet,
    ScrollView,
    View,
} from 'react-native'
import { Fire } from '../../../config'
import { ProductItem } from '../../../components/components';
import { getData } from '../../../utils/localstorage/localstorage';

const SemuaProduk = ({ navigation }) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        getData('user').then(res => {
            const uid = res.uid
            Fire.database()
                .ref('product/' + uid + '/')
                .once('value')
                .then(res => {
                    console.log('data: ', res.val())
                    if (res.val()) {
                        setProduct(Object.values(res.val()))
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
    }, [])
    // const deleteData = () => {
    //     getData('user').then(res => {
    //         const uid = res.uid
    //         Fire
    //             .database()
    //             .ref('product/' + uid + '/')
    //             .remove(item.id)
    //     })
    // }
    const deleteData = (productId) => {
        getData('user').then(res => {
            const uid = res.uid
            Fire
                .database()
                .ref('product/' + uid + '/' + productId)
                .remove()
                
        })
    }
    // console.log(product)
    return (
        <View style={styles.container}>
            <ScrollView>
                {product.map(item => {
                    return (
                        <ProductItem
                            key={item.id}
                            date={item.date}
                            name={item.name}
                            kilometer={item.kilometer.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' KM'}
                            image={item.images.image}
                            location={item.location}
                            year={item.year}
                            price={'Rp ' + item.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                            status={item.status}
                            onPress={() => navigation.navigate('DetailProduk', item)}
                            onPressEdit={() => navigation.navigate('EditProduct', item)}
                            onPressDelete={() => deleteData(item.id)}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default SemuaProduk

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    }
})
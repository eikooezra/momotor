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
// import Test from '../../../api/Test'

const SemuaProduk = ({ navigation }) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        getData('user').then(res => {
            Fire.database()
                .ref('product/' + res.uid + '/')
                .orderByChild('status')
                .equalTo('Approved')
                .once('value')
                .then(res => {
                    console.log('data: ', res.val())
                    if (res.val()) {
                        // console.log('a', Object.values(res.val()))
                        setProduct(Object.values(res.val()))
                    }
                })
                .catch(err => {
                    const errorMessage = err.message
                    showMessage({
                        message: errorMessage,
                        type: 'default',
                        backgroundColor: '#E06379',
                        color: '#FFFFFF'
                    })
                    console.log('error: ', err)
                })
        })
    }, [])
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
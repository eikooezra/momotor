import React, { useEffect, useRef, useState } from 'react'
import {
    StyleSheet,
    Image,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize';
import { Fire } from '../../../config'
import { ProductItem } from '../../../components/components';
// import Test from '../../../api/Test'

const SemuaProduk = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        Fire.database()
            .ref('product/')
            .once('value')
            .then(res => {
                console.log('data: ', res.val())
                if(res.val()){
                    setProduct(res.val())
                }
            })
            .catch(err => {
                console.log('error: ', err)
            })
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView>
                {product.map(item => {
                    return (
                        <ProductItem
                            date={item.date}
                            name={item.name}
                            kilometer={item.kilometer}
                            image={item.image}
                            location={item.location}
                            year={item.year}
                            price={'Rp ' + item.price}
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
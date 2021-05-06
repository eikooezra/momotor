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
                            price={item.price}
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
        width: normalize(65),
        height: normalize(65),
        borderRadius: 4,
        marginTop: normalize(16),
        marginBottom: normalize(14)
    },

    date: {
        width: normalize(70),
        height: normalize(15),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    boxContainer2: {
        marginLeft: normalize(16)
    },

    namaMotor: {
        width: normalize(115),
        height: normalize(18),
        marginTop: normalize(16),
        marginBottom: normalize(6),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    speedoContainer: {
        flexDirection: 'row'
    },

    imgSpeedo: {
        width: normalize(17),
        height: normalize(15)
    },

    txtSpeedo: {
        width: normalize(60),
        height: normalize(15),
        marginLeft: normalize(8),
        marginBottom: normalize(6),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    imgYear: {
        width: normalize(15),
        height: normalize(15),
        marginLeft: normalize(24),
    },

    txtYear: {
        width: normalize(27),
        height: normalize(15),
        marginLeft: normalize(8),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    locContainer: {
        flexDirection: 'row'
    },

    imgLoc: {
        width: normalize(7),
        height: normalize(10),
        marginLeft: normalize(6)
    },

    txtLoc: {
        width: normalize(50),
        height: normalize(15),
        marginLeft: normalize(13),
        marginBottom: normalize(12),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    txtPrice: {
        width: normalize(220),
        height: normalize(22),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-Bold',
    },

    triDots: {
        width: normalize(25),
        height: normalize(25),
        marginTop: normalize(16),
        marginLeft: normalize(15)
    }
})
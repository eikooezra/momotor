import React, { Component, useEffect, useState } from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    FlatList
} from 'react-native'
import normalize from 'react-native-normalize';
import { Fire } from '../../../config';
import { getData } from '../../../utils/localstorage/localstorage';
import { showMessage } from 'react-native-flash-message';
import { Gap, ProductItem } from '../../../components/components';
import { TextInput } from 'react-native-gesture-handler';

const Search = ({ navigation }) => {
    const [masterProduct, setMasterProduct] = useState([])
    const [product, setProduct] = useState([])
    const [search, setSearch] = useState('')
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
                        setMasterProduct(Object.values(res.val()))
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

    const itemView = ({ item }) => {
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
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = masterProduct.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            setProduct(newData)
            setSearch(text)
        }
        else {
            setProduct(masterProduct)
            setSearch(text)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#FFFFFF' />
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                    <Image
                        style={styles.imgBlkSearch}
                        source={require('../../../assets/images/blacksearch.png')}
                    />

                    <TextInput
                        style={styles.txtInput}
                        placeholder={'Cari Motor . . .'}
                        placeholderTextColor='#7F7F7F'
                        value={search}
                        onChangeText={(text) => searchFilter(text)}
                    />
                </View>
                
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.txtBatal}>
                        Batal
                    </Text>
                </TouchableOpacity>
            </View>
            <Gap height={16}/>
            <ScrollView>
                <FlatList
                    data={product}
                    keyExtractor={(items, index) => items.id}
                    renderItem={itemView}
                />
            </ScrollView>

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    searchContainer: {
        flexDirection: 'row'
    },

    imgBlkSearch: {
        width: normalize(18),
        height: normalize(18),
        marginTop: normalize(11),
        marginLeft: normalize(10),
        marginRight: normalize(15),
    },

    searchBar: {
        width: normalize(280),
        height: normalize(40),
        marginTop: normalize(10),
        marginLeft: normalize(20),
        borderRadius: 10,
        backgroundColor: '#F4F4F4',
        flexDirection: 'row'
    },

    txtInput: {
        width: normalize(300),
        fontFamily: 'Montserrat-Medium'
    },

    txtBatal: {
        width: normalize(48),
        height: normalize(18),
        marginTop: normalize(18),
        marginLeft: normalize(20),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
        color: '#2A77CB'
    }
})


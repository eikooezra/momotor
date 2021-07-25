import React, { Component, useEffect, useState } from 'react'
import {
    StyleSheet,
    Image,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import normalize from 'react-native-normalize'
import { FlatList, TapGestureHandler } from 'react-native-gesture-handler'
import { Button, Title, Input, Gap, Header } from '../../components/components'
import { Fire } from '../../config'
import { getData, storeData } from '../../utils/localstorage/localstorage'
import { useForm } from '../../utils/utils'
import SearchableDropdown from 'react-native-searchable-dropdown';

const DataMotor = ({ navigation, route }) => {
    const {
        orderId
    } = route.params
    const [masterProduct, setMasterProduct] = useState([])
    const [product, setProduct] = useState([])
    const [search, setSearch] = useState('')
    const [selectedModel, setSelectedModel] = useState()
    const [selectedPrice, setSelectedPrice] = useState()
    const [selectedYear, setSelectedYear] = useState()
    const [selectedId, setSelectedId] = useState()
    const [selectedImages, setSelectedImages] = useState()
    const [form, setForm] = useForm({
        model: '',
        year: '',
        price: '',
    })
    useEffect(() => {
        getDataProduct()
    }, [])

    const getDataProduct = () => {
        getData('user').then(res => {
            const uid = res.uid
            Fire.database()
                .ref('product/' + uid + '/')
                .once('value')
                .then(res => {
                    console.log('data: ', res.val())
                    if (res.val()) {
                        // console.log('a', Object.values(res.val()))
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
    }
    const itemView = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => valueSelected(item)}>
                <Text style={{ padding: 10 }}>
                    {item.name.toUpperCase()}
                </Text>
            </TouchableOpacity>
        )
    }
    const itemSeparatorView = () => {
        return (
            <View
                style={{ height: 0.5, width: '100%', backgroundColor: 'black' }}
            />
        )
    }
    const valueSelected = (item) => {
        setSelectedId(item.id)
        setSelectedModel(item.name)
        setSelectedPrice(item.price)
        setSelectedYear(item.year)
        setSelectedImages(item.images)
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

    const onContinue = () => {
        const data = {
            orderId: orderId,
            productId: selectedId,
            product: selectedModel,
            year: selectedYear,
            price: selectedPrice,
            images: selectedImages
        }
        console.log('data motor: ', data)
        storeData('dataMotor', data)
        navigation.navigate('DataKredit', data)
    }

    return (
        <View style={styles.container}>
            <Header title="Instant Order" back onPress={() => navigation.goBack()} />
            <Title text="Data Motor" />
            <ScrollView>
                <View style={styles.content}>
                    <Gap height={8} />
                    {/* <SearchableDropdown
                        defaultIndex={2}
                        placeholder="Model Motor"
                        value={selectedModel}
                        onTextChange={(text) => setSelectedModel(text)}
                        onItemSelect={itemView}
                        items={product}
                        textInputStyle={{
                            paddingHorizontal: 16,
                            borderWidth: 1,
                            borderRadius: 4,
                            borderColor: '#EBEBEB',
                            color: '#7F7F7F',
                            fontFamily: 'Montserrat-SemiBold',
                        }}
                        itemStyle={{
                            // Single dropdown item style
                            padding: 10,
                            marginTop: 2,
                            borderColor: '#EBEBEB',


                            // borderWidth: 1,
                        }}
                        itemTextStyle={{
                            // Text style of a single dropdown item
                            fontFamily: 'Montserrat-SemiBold',
                            color: '#7F7F7F',
                        }}
                    /> */}
                    <Input
                        placeholder="Model Motor"
                        value={selectedModel}
                        onChangeText={(text) => setSelectedModel(text)}
                    />
                    <FlatList
                        data={product}
                        keyExtractor={(items, index) => items.id}
                        ItemSeparatorComponent={itemSeparatorView}
                        renderItem={itemView}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="Tahun"
                        value={selectedYear}
                        onChangeText={(text) => setSelectedYear(text)}
                        disable
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="Harga"
                        value={selectedPrice}
                        onChangeText={(text) => setSelectedPrice(text)}
                        disable
                    />
                </View>
                {/* <Gap height={280} /> */}
            </ScrollView>
            <Button onPress={onContinue} title="SELANJUTNYA" />
            <Gap height={22} />
        </View>
    )
}

export default DataMotor

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    txtInstant: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(145),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },
    content: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
        // backgroundColor: 'yellow'
    }
})
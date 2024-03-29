import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import { Button2, Gap, Header, Input } from '../../../components/components';
import { Fire } from '../../../config';
import { getData, storeData } from '../../../utils/localstorage/localstorage';
import { useForm } from '../../../utils/utils';

const EditProduct = ({ navigation, route }) => {
    const { ProductId, name, year, location, price, ref_code, kilometer, desc, images } = route.params
    const [product, setProduct] = useState({
        ProductId,
        name,
        year,
        location,
        price,
        ref_code,
        kilometer,
        desc,
        images
    })
    console.log(product.year)

    const changeText = (key, value) => {
        setProduct({
            ...product,
            [key]: value
        })
    }

    const [pressed, setPressed] = useState(false)

    const nullChecker = () => {
        if (pressed === false) {
            setPressed({ null: true })
        }
    }

    const onContinue = () => {
        const newDate = new Date()
        const date = newDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
        getData('user').then(res => {
            console.log('old data: ', product)
            const data = {
                name: product.name,
                year: product.year.value,
                location: product.location.value,
                price: product.price,
                ref_code: product.ref_code,
                desc: product.desc,
                kilometer: product.kilometer,
                date: date,
                ProductId: product.ProductId,
                status: 'Pending',
                images: product.images
            }
            console.log('new data: ', data)
            // Fire
            //     .database()
            //     .ref('product/' + res.uid + '/' + id + '/')
            //     .update(data)
            storeData('product', data)

            navigation.navigate('EditPics', data)
        })
    }
    return (
        <View style={styles.container}>
            <Header title="Edit Produk" back onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Gap height={25} />
                    <Input
                        placeholder='Nama Produk'
                        value={product.name}
                        onChangeText={(value) => changeText('name', value)}
                    />
                    <Gap height={34} />
                    <View style={styles.content}>

                    </View>

                    <DropDownPicker
                        items={[
                            { label: '2015', value: '2015' },
                            { label: '2016', value: '2016' },
                            { label: '2017', value: '2017' },
                            { label: '2018', value: '2018' },
                            { label: '2019', value: '2019' },
                            { label: '2020', value: '2020' },
                        ]}
                        defaultNull={nullChecker}
                        placeholder='Tahun Produksi'
                        containerStyle={{
                            // width: normalize(350),
                            // marginLeft: normalize(16),
                            // marginBottom: normalize(34),
                        }}
                        dropDownStyle={{
                            backgroundColor: '#FFFFFF'
                        }}
                        labelStyle={{
                            // marginLeft: 16,
                            width: 120,
                            marginRight: 200,
                            fontSize: 14,
                            color: '#7F7F7F',
                            fontFamily: 'Montserrat-SemiBold',
                        }}
                        arrowStyle={{

                        }}
                        defaultValue={product.year}
                        onChangeItem={(value) => changeText('year', value)}
                    />
                    <Gap height={34} />
                    <DropDownPicker
                        items={[
                            { label: 'Jakarta', value: 'jakarta' },
                            { label: 'Bogor', value: 'bogor' },
                            { label: 'Depok', value: 'depok' },
                            { label: 'Tangerang', value: 'tangerang' },
                            { label: 'Bekasi', value: 'bekasi' },
                        ]}
                        defaultNull={nullChecker}
                        placeholder='Lokasi'
                        containerStyle={{
                            // width: normalize(350),
                            // marginLeft: normalize(16),
                            // marginBottom: normalize(34),
                        }}
                        dropDownStyle={{
                            backgroundColor: '#FFFFFF'
                        }}
                        labelStyle={{
                            width: 120,
                            marginRight: 200,
                            fontSize: 14,
                            color: '#7F7F7F',
                            fontFamily: 'Montserrat-SemiBold',
                        }}
                        value={product.location}
                        onChangeItem={(value) => changeText('location', value)}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder='Harga'
                        value={product.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        onChangeText={(value) => changeText('price', value.toString().replace(/\./g, ""))}
                        type='numeric'
                    />
                    <Gap height={34} />
                    <Input
                        placeholder='Kilometer'
                        value={product.kilometer.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        onChangeText={(value) => changeText('kilometer', value.toString().replace(/\./g, ""))}
                        type='numeric'
                    />
                    <Gap height={34} />
                    <Input
                        placeholder='Kode Referral'
                        value={product.ref_code}
                        onChangeText={(value) => changeText('ref_code', value)}
                    />
                    <Gap height={34} />
                    <View style={styles.txtInpDesc}>
                        <TextInput
                            style={styles.txtDesc}
                            placeholder='Deskripsi'
                            placeholderTextColor='#7F7F7F'
                            value={product.desc}
                            onChangeText={(value) => changeText('desc', value)}
                            multiline={true}
                        />
                    </View>
                    <Gap height={34} />
                </View>
                <View style={styles.btnNxtArea}>
                    {/* <Button2
                            onPress={onContinue}
                            title="SELANJUTNYA"
                        /> */}
                    <TouchableOpacity
                        style={[styles.btnNxt]}
                        onPress={onContinue}
                    // disabled={!enabled}
                    >
                        <Text style={styles.txtNxt}>
                            SELANJUTNYA
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
};

export default EditProduct;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },

    searchContainer: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 9,
        marginBottom: 2
    },

    imgSearch: {
        width: 18,
        height: 18,
        alignSelf: 'center'
    },

    modelContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#DDDDDD',
        marginLeft: 15,
    },

    txtModel: {
        width: 320,
        fontFamily: 'Montserrat-Medium',
        marginBottom: -6,
        fontSize: 15
    },

    content: {
        flex: 1,
        paddingHorizontal: 16
    },

    dropDownBorder: {
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtInpDesc: {
        height: 150,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtDesc: {
        paddingLeft: 16,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    btnNxtArea: {
        bottom: normalize(0),
        justifyContent: 'center',
        alignSelf: 'center'
    },

    btnNxt: {
        paddingVertical: 15,
        paddingHorizontal: 127,
        width: normalize(420),
        height: normalize(58),
        backgroundColor: '#0064D0'
    },

    txtNxt: {
        textAlign: 'center',
        fontSize: 17,
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
    }
});
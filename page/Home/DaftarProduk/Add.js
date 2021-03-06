import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import { Button2, Gap, Header, Input } from '../../../components/components';
import { Fire } from '../../../config';
import { getData, storeData } from '../../../utils/localstorage/localstorage';
import { useForm } from '../../../utils/utils';

const Add = ({ navigation }) => {
    const [pressed, setPressed] = useState(false)

    const nullChecker = () => {
        if (pressed === false) {
            setPressed({ null: true })
        }
    }

    const [form, setForm] = useForm({
        name: '',
        year: '',
        location: '',
        price: '',
        ref_code: '',
        desc: '',
        kilometer: '',
    })

    const number1 = Math.floor(Math.random() * 9)
    const number2 = Math.floor(Math.random() * 9)
    const number3 = Math.floor(Math.random() * 9)
    const number4 = Math.floor(Math.random() * 9)
    const number5 = Math.floor(Math.random() * 9)
    const random = Math.floor(Math.random() * 9 + Math.random() * 9 + Math.random() * 9 + Math.random() * 9 + Math.random() * 9)

    const onContinue = () => {
        const newPostKey = Fire.database().ref().child('post').push().key
        const id = 'UMCY' + random.toString()
        getData('user').then(res => {
            const data = {
                uid: res.uid,
                name: form.name,
                year: form.year.value,
                location: form.location.value,
                price: form.price,
                ref_code: form.ref_code,
                desc: form.desc,
                kilometer: form.kilometer,
                date: new Date().getDate() + '/' + new Date().getMonth() + 1 + '/' + new Date().getFullYear(),
                id: newPostKey,
                status: 'Pending'
            }
            console.log('cek: ', data)
            console.log('new id: ', id)
            // Fire
            //     .database()
            //     .ref('product/' + res.uid + '/' + newPostKey + '/')
            //     .set(data)
            // storeData('product', data)

            // navigation.navigate('AddPics', data)

        })
    }
    return (
        <View style={styles.container}>
            <Header title="Tambah Produk" back onPress={() => navigation.goBack()} />
            {/* <View style={styles.searchContainer}>
                <Image
                    source={require('../../../assets/images/greysearch.png')}
                    style={styles.imgSearch}
                />


                <View style={styles.modelContainer}>
                    <TextInput
                        style={styles.txtModel}
                        placeholder='Model Motor'
                        placeholderTextColor='#7F7F7F'
                    />
                </View>
            </View> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Gap height={25} />
                    <Input
                        placeholder='Nama Produk'
                        value={form.name}
                        onChangeText={value => setForm('name', value)}
                    />
                    <Gap height={34} />
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
                        value={form.year}
                        onChangeItem={value => setForm('year', value)}
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
                        value={form.location}
                        onChangeItem={value => setForm('location', value)}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder='Harga'
                        value={form.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        onChangeText={value => setForm('price', value.toString().replace(/\./g, ""))}
                        type='numeric'
                    />
                    <Gap height={34} />
                    <Input
                        placeholder='Kilometer'
                        value={form.kilometer.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        onChangeText={value => setForm('kilometer', value.toString().replace(/\./g, ""))}
                        type='numeric'
                    />
                    <Gap height={34} />
                    <Input
                        placeholder='Kode Referral'
                        value={form.ref_code}
                        onChangeText={value => setForm('ref_code', value)}
                    />
                    <Gap height={34} />
                    <View style={styles.txtInpDesc}>
                        <TextInput
                            style={styles.txtDesc}
                            placeholder='Deskripsi'
                            placeholderTextColor='#7F7F7F'
                            value={form.desc}
                            onChangeText={value => setForm('desc', value)}
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

export default Add;

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
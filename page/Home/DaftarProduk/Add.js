import { Picker, Spinner } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import { Gap, Header, Input } from '../../../components/components';
import { Fire } from '../../../config';
import { useForm } from '../../../utils/utils';

const Add = ({ navigation }) => {
    const [form, setForm] = useForm({
        model: '',
        year: '',
        location: '',
        price: '',
        ref_code: '',
        desc: ''
    })

    const onContinue = () => {
        console.log('form', form)
        const data = {
            year: form.year,
            location: form.location,
            price: form.price,
            ref_code: form.ref_code,
            desc: form.desc
        }
        Fire
            .database()
            .ref('product/3/')
            .set(data)
        // navigation.navigate('AddPics')
    }
    return (
        <View style={styles.container}>
            <Header title="Tambah Produk" back onPress={() => navigation.goBack()} />
            <View style={styles.searchContainer}>
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
            </View>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.dropDownBorder}>
                        <Picker
                            // style='@style/SpinnerDropDownItem'
                            selectedValue={form.year}
                            onValueChange={value => setForm('year', value)}
                            mode='dropdown'
                        >
                            <Picker.Item label='2015' value='15' />
                            <Picker.Item label='2016' value='16' />
                            <Picker.Item label='2017' value='17' />
                            <Picker.Item label='2018' value='18' />
                            <Picker.Item label='2019' value='19' />
                            <Picker.Item label='2020' value='20' />
                        </Picker>

                    </View>
                    <Gap height={34} />
                    <View style={styles.dropDownBorder}>
                        <Picker
                            selectedValue={form.location}
                            onValueChange={value => setForm('location', value)}
                            mode='dropdown'
                        >
                            <Picker.Item label='Jakarta' value='Jakarta' />
                            <Picker.Item label='Bogor' value='Bogor' />
                            <Picker.Item label='Depok' value='Depok' />
                            <Picker.Item label='Tangerang' value='Tangerang' />
                            <Picker.Item label='Bekasi' value='Bekasi' />
                        </Picker>
                    </View>
                    <Gap height={34} />
                    <Input
                        placeholder='Harga'
                        value={form.price}
                        onChangeText={value => setForm('price', value)}
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
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={styles.btnNxtArea}>
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
        padding: 16
    },

    dropDownBorder: {
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtInpDesc: {
        height: 150,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtDesc: {
        paddingLeft: 16,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    btnNxt: {
        paddingVertical: 15,
        backgroundColor: '#0064D0'
    },

    txtNxt: {
        textAlign: 'center',
        fontSize: 17,
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
    }
});
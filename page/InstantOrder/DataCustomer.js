import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize'
import { Button, DropDown, Gap, Header, Input, Title } from '../../components/components';
import { Fire } from '../../config';
import { getData, storeData } from '../../utils/localstorage/localstorage';
import { useForm } from '../../utils/utils';

const DataCustomer = ({ navigation }) => {
    const [pressed, setPressed] = useState(false)

    const nullChecker = () => {
        if (pressed === false) {
            setPressed({ null: true })
        }
    }

    const [form, setForm] = useForm({
        custName: '',
        gender: '',
        nik: '',
        phoneNo: '',
        email: '',
        birthPlace: '',
        birthDate: '',
        address: '',
        rt: '',
        rw: '',
        location: '',
        maidenName: '',
        maidenLoc: '',

    })
    const onContinue = () => {
        const newPostKey = Fire.database().ref().child('post').push().key
        getData('user').then(res => {
            const data = {
                uid: res.uid,
                custName: form.custName,
                gender: form.gender.value,
                nik: form.nik,
                phoneNo: form.phoneNo,
                email: form.email,
                birthPlace: form.birthPlace,
                birthDate: form.birthDate,
                address: form.address,
                rt: form.rt,
                rw: form.rw,
                location: form.location,
                maidenName: form.maidenName,
                maidenLoc: form.maidenLoc,
                date: new Date().getDate() + '/' + new Date().getMonth() + 1 + '/' + new Date().getFullYear(),
                id: newPostKey,
                status: 'Proses Verifikasi'
            }
            console.log('cek: ', data)
            Fire
                .database()
                .ref('order/' + res.uid + '/' + newPostKey + '/data_customer/')
                .set(data)
            storeData('order', data)

            navigation.navigate('DataPekerjaan', data)

        })
    }
    return (
        <View style={styles.page}>
            <Header title="Instant Order" />
            <Title text="Data Customer" />
            <Gap height={8} />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input
                        placeholder="Nama Lengkap (Sesuai KTP)"
                        value={form.custName}
                        onChangeText={value => setForm('custName', value)}
                    />
                    <Gap height={34} />
                    <View>
                        <DropDownPicker
                            items={[
                                { label: 'Pria', value: 'Pria' },
                                { label: 'Wanita', value: 'Wanita' }
                            ]}
                            defaultNull = {nullChecker}
                            placeholder="Jenis Kelamin"
                            style={{
                                // paddingHorizontal: 16,
                                // paddingVertical: 15,
                                borderWidth: 1,
                                borderRadius: 4,
                                borderColor: '#EBEBEB',
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
                            value={form.gender}
                            onChangeItem={value => setForm('gender', value)}
                        />
                    </View>
                    <Gap height={34} />
                    <Input
                        placeholder="NIK"
                        value={form.nik}
                        onChangeText={value => setForm('nik', value)}
                        type="numeric"
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="No. Handphone"
                        value={form.phoneNo}
                        onChangeText={value => setForm('phoneNo', value)}
                        type="numeric"
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="Email"
                        value={form.email}
                        onChangeText={value => setForm('email', value)}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="Tempat Lahir"
                        value={form.birthPlace}
                        onChangeText={value => setForm('birthPlace', value)}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="Tangal Lahir"
                        value={form.birthDate}
                        onChangeText={value => setForm('birthDate', value)}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="Alamat Lengkap (Sesuai KTP)"
                        value={form.address}
                        onChangeText={value => setForm('address', value)}
                    />
                    <Gap height={34} />
                    <View style={styles.flexContainer}>
                        <View style={styles.txtInpRT}>
                            <TextInput
                                style={styles.txtRT}
                                placeholder='RT'
                                placeholderTextColor='#7F7F7F'
                                value={form.rt}
                                onChangeText={value => setForm('rt', value)}
                                keyboardType={'numeric'}
                            />
                        </View>
                        <Gap width={10} />
                        <View style={styles.txtInpRW}>
                            <TextInput
                                style={styles.txtRW}
                                value={form.rw}
                                onChangeText={value => setForm('rw', value)}
                                placeholder='RW'
                                placeholderTextColor='#7F7F7F'
                                keyboardType={'numeric'}
                            />
                        </View>
                        {/* <Input placeholder="RT"/>
                        <Input placeholder="RW"/> */}
                    </View>
                    <Gap height={34} />
                    <Input
                        placeholder="Kelurahan Domisili"
                        value={form.location}
                        onChangeText={value => setForm('location', value)}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="Nama Ibu Kandung"
                        value={form.maidenName}
                        onChangeText={value => setForm('maidenName', value)}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="Kelurahan Domisili Ibu"
                        value={form.maidenLoc}
                        onChangeText={value => setForm('maidenLoc', value)}
                    />
                    <Gap height={34} />
                    <Button
                        onPress={onContinue}
                        title="SELANJUTNYA"
                    />
                    <Gap height={18} />
                </ScrollView>
            </View>
        </View>
    );
};

export default DataCustomer;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    },
    content: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
        // paddingBottom: 100
    },
    RtRw: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // maxWidth: '90%'
    },
    txtButton: {
        width: normalize(125),
        height: normalize(20),
        marginBottom: normalize(24),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#7F7F7F'
    },
    flexContainer: {
        flexDirection: 'row',
    },

    txtInpRT: {
        width: normalize(169),
        height: normalize(46),
        // marginLeft: normalize(16),
        // marginBottom: normalize(6),
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtRT: {
        paddingHorizontal: 16,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpRW: {
        width: normalize(169),
        height: normalize(46),
        // marginLeft: normalize(16),
        // marginBottom: normalize(6),
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtRW: {
        // marginLeft: normalize(8),
        paddingHorizontal: 16,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },
});
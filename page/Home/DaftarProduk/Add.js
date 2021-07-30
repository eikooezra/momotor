import React, { useState, useMemo } from 'react';
import { StyleSheet, View, Text, Image, TextInput, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import { Button, Button2, Gap, Header, Input, PickerInput } from '../../../components/components';
import { Fire } from '../../../config';
import { getData, storeData } from '../../../utils/localstorage/localstorage';
import { useForm } from '../../../utils/utils';
import { strings as str, general } from "../../../utils/defaultValue";

const Add = ({ navigation }) => {
    const [pressed, setPressed] = useState(false)
    const [pressed1, setPressed1] = useState(false)

    const nullChecker = () => {
        if (pressed === false) {
            setPressed({ null: true })
        }
    }

    const nullChecker1 = () => {
        if (pressed1 === false) {
            setPressed1({ null: true })
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

    const [formError, setFormError] = useState([]);

    const isEnabled = useMemo(() => {
        const currentValue = { ...form };
        const values = Object.values(currentValue);

        return (
            formError.length !== 0 &&
            (formError.every((item) => item.isChecked) &&
                values.every((item) => item !== ""))
        );
    }, [formError]);

    const enabled =
        form.name !== '' &&
        form.year !== '' &&
        form.location !== '' &&
        form.price !== '' &&
        form.kilometer !== ''

    const onProcess = (data) => {
        storeData('product', data)

        navigation.navigate('AddPics', data)
    };

    const onContinue = () => {
        const newPostKey = Fire.database().ref().child('post').push().key
        const randomKey1 = Math.floor(Math.random()*90000) + 10000;
        const randomKey2 = Math.floor(Math.random()*90000) + 10000;
        const id = 'NMCY'+ randomKey1 + randomKey2
        const newDate = new Date()
        const date = newDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })

        const emptyValidator = [
            'name',
            'year',
            'location',
            'price',
            'kilometer',
        ];

        const currentError = formError.filter((item) => item.isChecked);

        emptyValidator.forEach((element) => {
            if (form[element]?.length === undefined || form[element]?.length === 0) {
                currentError.push({
                    param: element,
                    errorMsg: str.cantEmpty,
                    isChecked: false,
                    isError: true,
                });
            }
        });

        if (!currentError.every((item) => item.isChecked)) {
            setFormError(currentError);
            return;
        }

        getData('user').then(res => {
            const data = {
                uid: res.uid,
                name: form.name,
                year: form.year,
                location: form.location,
                price: form.price,
                ref_code: form.ref_code,
                desc: form.desc,
                kilometer: form.kilometer,
                date: date,
                ProductId: id,
                status: 'Pending',
                prevStatus: 'Pending',
            }
            console.log('cek: ', data)

            onProcess(data)

        })
    }

    const testError = (key) => {
        const errorIndex = formError.findIndex((error) => error.param === key);
        if (errorIndex === -1) {
            return { ...formError[errorIndex], isError: false, isChecked: false };
        }
        return formError[errorIndex];
    };

    const onBlurCheck = (param) => {
        const regEmail = new RegExp(general.regexEmail);
        const value = form[param];
        const currentError = [...formError];

        const isError = value?.length === 0

        const errorMsg = str.cantEmpty

        const errorIndex = currentError.findIndex((error) => error.param === param);

        if (errorIndex === -1) {
            setFormError((current) => [
                ...current,
                { param, errorMsg, isError, isChecked: !isError },
            ]);
            return;
        }
        currentError[errorIndex].isError = isError;
        currentError[errorIndex].isChecked = !isError;
        setFormError(currentError);
    };
    return (
        <View style={styles.container}>
            <Header title="Tambah Produk" back onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Gap height={25} />
                    <Input
                        placeholder='Nama Produk'
                        value={form.name}
                        onChangeText={value => setForm('name', value)}
                        overLabel='Nama Produk'
                        errorInput={testError('name')}
                        iconType="check"
                        isShowIcon={testError('name').isChecked}
                        onBlur={() => onBlurCheck('name')}
                    />
                    <Gap height={34} />
                    <PickerInput
                        data={[
                            { label: '2015', value: '2015' },
                            { label: '2016', value: '2016' },
                            { label: '2017', value: '2017' },
                            { label: '2018', value: '2018' },
                            { label: '2019', value: '2019' },
                            { label: '2020', value: '2020' },
                        ]}
                        defaultNull={!pressed}
                        placeholder='Tahun Produksi'
                        value={form.year}
                        onChangeItem={({ value }) => {
                            setForm('year', value);
                            nullChecker();
                        }}
                        overLabel="Tahun Produksi"
                    />
                    <Gap height={34} />
                    <PickerInput
                        data={[
                            { label: 'Jakarta', value: 'Jakarta' },
                            { label: 'Bogor', value: 'Bogor' },
                            { label: 'Depok', value: 'Depok' },
                            { label: 'Tangerang', value: 'Tangerang' },
                            { label: 'Bekasi', value: 'Bekasi' },
                        ]}
                        defaultNull={!pressed1}
                        placeholder='Lokasi'
                        value={form.location}
                        onChangeItem={({ value }) => {
                            setForm('location', value);
                            nullChecker1();
                        }}
                        overLabel='Lokasi'
                    />
                    <Gap height={34} />
                    <Input
                        placeholder='Harga'
                        value={form.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        onChangeText={value => setForm('price', value.toString().replace(/\./g, ""))}
                        type='numeric'
                        overLabel='Harga'
                        errorInput={testError('price')}
                        iconType="check"
                        isShowIcon={testError('price').isChecked}
                        onBlur={() => onBlurCheck('price')}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder='Kilometer'
                        value={form.kilometer.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        onChangeText={value => setForm('kilometer', value.toString().replace(/\./g, ""))}
                        type='numeric'
                        overLabel='Kilometer'
                        errorInput={testError('kilometer')}
                        iconType="check"
                        isShowIcon={testError('kilometer').isChecked}
                        onBlur={() => onBlurCheck('kilometer')}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder='Kode Referral'
                        value={form.ref_code}
                        onChangeText={value => setForm('ref_code', value)}
                        overLabel='Kode Referral'
                        iconType="check"
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
                <Button
                    onPress={onContinue}
                    areaStyle={{ backgroundColor: enabled ? '#0062CD' : '#B7B7B7' }}
                    disabled={!enabled}
                    title="SELANJUTNYA"
                />
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
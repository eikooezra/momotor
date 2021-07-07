import React, { Component, useState } from 'react'
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
import { Button, Gap, Header, Input, Title } from '../../components/components'
import { Fire } from '../../config'
import { getData } from '../../utils/localstorage/localstorage'
import { useForm } from '../../utils/utils'

const DataKredit = ({ navigation, route }) => {
    const {
        orderId,
        price
    } = route.params
    const [form, setForm] = useForm({
        dp: '',
        tenor: '',
        cicilan: ''
    })
    const [cicilan, setCicilan] = useState('')
    const [total12, setTotal12] = useState('')
    const [total24, setTotal24] = useState('')
    const [total36, setTotal36] = useState('')

    const [pressed, setPressed] = useState(false)

    const nullChecker = () => {
        if (pressed === false) {
            setPressed({ null: true })
        }
    }

    const calculate = () => {
        if (form.tenor.value == '12') {
            // form.cicilan = 
            const newPrice = price
            const newDp = form.dp
            const minus = newPrice - newDp
            const tenor12 = minus / 12
            setCicilan(tenor12)
        }
        if (form.tenor.value == '24') {
            const newPrice = price
            const newDp = form.dp
            const minus = newPrice - newDp
            const tenor24 = minus / 24
            setCicilan(tenor24)
        }
        if (form.tenor.value == '36') {
            const newPrice = price
            const newDp = form.dp
            const minus = newPrice - newDp
            const tenor36 = minus / 36
            setCicilan(tenor36)
        }
    }

    const onContinue = () => {
        calculate()
        getData('user').then(res => {
            const data = {
                orderId: orderId,
                dp: form.dp,
                tenor: form.tenor.value,
                cicilan: cicilan.toString(),
            }
            console.log('data kredit: ', data)
            // Fire
            //     .database()
            //     .ref('order/' + res.uid + '/' + orderId + '/data_kredit/')
            //     .update(data)
            // navigation.navigate('UploadDocs', data)
        })
    }

    return (
        <View style={styles.container}>
            <Header title="Instant Order" onPress={() => navigation.goBack()} back />
            <Title text="Data Kredit" />
            <ScrollView>

                <View style={styles.content}>
                    <Gap height={8} />
                    <Text style={styles.label}>Harga Produk</Text>
                    <Gap height={5} />
                    <Input
                        placeholder="Harga Produk"
                        value={price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        disable
                    />
                    <Gap height={34} />
                    <Text style={styles.label}>Min. DP 10%</Text>
                    <Gap height={5} />
                    <Input
                        placeholder="Uang Muka"
                        value={form.dp.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        onChangeText={value => setForm('dp', value.toString().replace(/\./g, ""))}
                        type="numeric"
                    />
                    <Gap height={34} />
                    <DropDownPicker
                        items={[
                            { label: '12', value: '12' },
                            { label: '24', value: '24' },
                            { label: '36', value: '36' },
                        ]}
                        defaultNull={nullChecker}
                        placeholder='Tenor'
                        style={{
                            borderWidth: 1,
                            borderRadius: 4,
                            borderColor: '#EBEBEB',
                        }}
                        containerStyle={{
                            // width: 370,
                            // height: 48,
                            // marginLeft: 16,
                            // marginBottom: 6,
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
                        value={form.tenor}
                        onChangeItem={value => setForm('tenor', value)}
                    />
                    <Gap height={10} />
                    {/* <View style={styles.cekCicilan}>
                        <TouchableOpacity
                            style={styles.cekButton}
                            onPress={calculate}
                        >
                            <Text style={styles.cekTxt}>
                                cek cicilan
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.cicilanResult}>
                            {cicilan.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        </Text>
                    </View> */}
                    <TouchableOpacity
                        // style={styles.cekButton}
                        onPress={calculate}
                    >
                        <Text style={styles.cekTxt}>
                            cek cicilan
                        </Text>
                    </TouchableOpacity>
                    <Gap height={34} />
                    <Text style={styles.label}>Cicilan</Text>
                    <View style={styles.resultBorder}>
                        <Text style={styles.result}>
                            {cicilan.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        </Text>

                    </View>

                    {/* <Input
                        placeholder="Cicilan"
                        value={cicilan}
                        onChangeText={(text) => setCicilan(text)}
                        disable
                    /> */}
                </View>
            </ScrollView>
            <Button onPress={onContinue} title="SELANJUTNYA" />
            <Gap height={22} />
        </View>
    )
}

export default DataKredit

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    content: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
    },
    label: {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
    },
    cekCicilan: {
        width: 150,
        height: 80,
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: '#0064D0'
    },
    cekButton: {
        marginRight: 280,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB'
        // backgroundColor: '#4F8AFF'
    },
    cekTxt: {
        alignSelf: 'flex-end',
        fontSize: 12,
        padding: 5,
        // alignSelf: 'center',
        fontFamily: 'Montserrat-Bold',
        // color: '#0064D0'
    },
    resultBorder: {
        // marginRight: 280,
        // paddingHorizontal: 16,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#EBEBEB',
        backgroundColor: '#EBEBEB'
    },
    result: {
        marginHorizontal: 16,
        marginTop: 10,
        // alignSelf: 'center',
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
        color: '#7F7F7F'
    }

})
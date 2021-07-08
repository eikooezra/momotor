import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    TextInput,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize'
import { Button, Gap, Header, Input, Title } from '../../components/components'
import { Fire } from '../../config'
import { getData, storeData } from '../../utils/localstorage/localstorage'
import { useForm } from '../../utils/utils'

const DataPekerjaan = ({ navigation, route }) => {
    const {
        orderId
    } = route.params
    const [form, setForm] = useForm({
        job: '',
        salary: '',
        workDuration: ''
    })

    const onContinue = () => {
            const data = {
                job: form.job,
                salary: form.salary,
                workDuration: form.workDuration
            }
            storeData('dataPekerjaan', data)
            navigation.navigate('DataMotor', data)
    }

    return (
        <View style={styles.container}>
            <Header title="Instant Order" back />
            <Title text="Data Pekerjaan" />
            <View style={styles.content}>
                <Gap height={8} />
                <Input
                    placeholder="Pekerjaan"
                    value={form.job}
                    onChangeText={value => setForm('job', value)}
                />
                <Gap height={34} />
                <Input
                    placeholder="Penghasilan per Bulan"
                    value={form.salary.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                    onChangeText={value => setForm('salary', value.toString().replace(/\./g, ""))}
                />
                <Gap height={34} />
                <Input
                    placeholder="Lama Bekerja"
                    value={form.workDuration}
                    onChangeText={value => setForm('workDuration', value)}
                />
            </View>
            <Button onPress={onContinue} title="SELANJUTNYA" />
            <Gap height={22} />
        </View>
    )
}


export default DataPekerjaan

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
    txtInstant: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(100),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },
    errorStyle: {
        width: normalize(200),
        height: normalize(15),
        marginLeft: normalize(17),
        marginBottom: normalize(15),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#D81818'
    },
})
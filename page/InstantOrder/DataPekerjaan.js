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

class DataPekerjaan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            job: '',
            isJobFilled: false,
            errorJob: '',
            salary: '',
            isSalaryFilled: false,
            errorSalary: '',
            exp: '',
            isExpFilled: false,
            errorExp: '',
        }
    }

    goBack = () => {
        this.props.navigation.navigate('InstantOrder')
    }

    goToDataMotor = () => {
        this.props.navigation.navigate('DataMotor')
    }

    handleChangeJob = (job) => {
        this.setState({ job })
        let reg = /([^\s])/
        if (reg.test(job) === true) {
            this.setState({ isJobFilled: true, errorJob: '' })
        } else {
            this.setState({ errorJob: 'Tidak boleh kosong' })
        }
    }

    handleChangeSalary = (salary) => {
        this.setState({ salary })
        let reg = /([^\s])/
        if (reg.test(salary) === true) {
            this.setState({ isSalaryFilled: true, errorSalary: '' })
        } else {
            this.setState({ errorSalary: 'Tidak boleh kosong' })
        }
    }

    handleChangeExp = (exp) => {
        this.setState({ exp })
        let reg = /([^\s])/
        if (reg.test(exp) === true) {
            this.setState({ isExpFilled: true, errorExp: '' })
        } else {
            this.setState({ errorExp: 'Tidak boleh kosong' })
        }
    }

    render() {
        const {
            job,
            salary,
            exp
        } = this.state

        let emptyReg = /([^\s])/
        const enabled =
            (emptyReg.test(job) === true) &&
            (emptyReg.test(salary) === true) &&
            (emptyReg.test(exp) === true)

        return (
            <View style={styles.container}>
                <Header title="Instant Order" onPress={this.goBack} back/>
                <Title text="Data Pekerjaan" />
                <View style={styles.content}>
                    <Gap height={8}/>
                    <Input placeholder="Pekerjaan" />
                    <Gap height={34} />
                    <Input placeholder="Penghasilan per bulan" />
                    <Gap height={34} />
                    <Input placeholder="Lama Bekerja" />
                </View>
                <Button onPress={this.goToDataMotor} title="SELANJUTNYA" />
                <Gap height={22}/>
            </View>
        )
    }
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
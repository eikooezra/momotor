import React, { Component } from 'react'
import {
    StyleSheet,
    Image,
    TextInput,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import normalize from 'react-native-normalize'
import { TapGestureHandler } from 'react-native-gesture-handler'
import { Button, Title, Input, Gap, Header } from '../../components/components'

class DataMotor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            model: '',
            isModelFilled: false,
            errorModel: '',
            prodYear: '',
            isProdFilled: false,
            errorProd: '',
            price: '',
            isPriceFilled: false,
            errorPrice: '',
            isPressed: false,
            null: true
        }
    }

    goBack = () => {
        this.props.navigation.navigate('DataPekerjaan')
    }

    goToDataKredit = () => {
        this.props.navigation.navigate('DataKredit')
    }

    nullChecker = () => {
        if (this.state.isPressed === false) {
            this.setState({ null: true })
        }
    }

    handleChangeModel = (model) => {
        this.setState({ model })
        let reg = /([^\s])/
        if (reg.test(model) === true) {
            this.setState({ isModelFilled: true, errorModel: '' })
        } else {
            this.setState({ errorModel: 'Tidak boleh kosong' })
        }
    }

    handleChangeProd = (prodYear) => {
        this.setState({ prodYear })
        let reg = /([^\s])/
        if (reg.test(prodYear) === true) {
            this.setState({ isProdFilled: true, errorProd: '' })
        } else {
            this.setState({ errorProd: 'Tidak boleh kosong' })
        }
    }

    handleChangePrice = (price) => {
        this.setState({ price })
        let reg = /([^\s])/
        if (reg.test(price) === true) {
            this.setState({ isPriceFilled: true, errorPrice: '' })
        } else {
            this.setState({ errorPrice: 'Tidak Boleh kosong' })
        }
    }

    render() {
        const {
            model,
            prodYear,
            price
        } = this.state

        let reg = /([^\s])/
        const enabled =
            (reg.test(model) === true) &&
            (reg.test(prodYear) === true) &&
            (reg.test(price) === true)

        return (
            <View style={styles.container}>
                <Header title="Instant Order" type="back" onPress={this.goBack}/>
                <Title text="Data Motor" />

                <View style={styles.content}>
                    <Gap height={8}/>
                    <Input placeholder="Model Motor" />
                    <Gap height={34}/>
                    <DropDownPicker
                        items={[
                            { label: '2015', value: '15' },
                            { label: '2016', value: '16' },
                            { label: '2017', value: '17' },
                            { label: '2018', value: '18' },
                            { label: '2019', value: '19' },
                            { label: '2020', value: '20' }
                        ]}
                        defaultNull={this.nullChecker}
                        placeholder='Tahun Produksi'
                        style={{
                            paddingVertical: 20
                        }}
                        containerStyle={{
                            // width: normalize(350),
                            // height: normalize(46),
                            // marginLeft: normalize(16),
                            // marginBottom: normalize(6),
                        }}
                        dropDownStyle={{
                            backgroundColor: '#FFFFFF'
                        }}
                        labelStyle={{
                            marginLeft: normalize(8),
                            fontSize: normalize(14.5),
                            color: '#7F7F7F',
                            fontFamily: 'Montserrat-Medium'
                        }}
                        arrowStyle={{
                            marginLeft: normalize(205)
                        }}
                        onChangeItem={
                            item => this.setState({
                                prodYear: item
                            })
                        }
                        onChangeText={prodYear => this.handleChangeProdYear(prodYear)}
                    />
                    <Gap height={34}/>
                    <Input placeholder="Harga" />
                </View>
                <Button onPress={this.goToDataKredit} title="SELANJUTNYA" />
                <Gap height={22}/>
            </View>
        )
    }
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
    }
})
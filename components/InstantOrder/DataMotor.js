import React, {Component} from 'react'
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

class DataMotor extends Component{
    constructor(props){
        super(props)
        this.state={
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
        if(this.state.isPressed === false){
            this.setState({null: true})
        } 
    }

    handleChangeModel = (model) => {
        this.setState({model})
        let reg = /([^\s])/
        if(reg.test(model) === true){
            this.setState({isModelFilled: true, errorModel: ''})
        }else{
            this.setState({errorModel: 'Tidak boleh kosong'})
        }
    }

    handleChangeProd = (prodYear) => {
        this.setState({prodYear})
        let reg = /([^\s])/
        if(reg.test(prodYear) === true){
            this.setState({isProdFilled: true, errorProd: ''})
        }else{
            this.setState({errorProd: 'Tidak boleh kosong'})
        }
    }

    handleChangePrice = (price) => {
        this.setState({price})
        let reg = /([^\s])/
        if(reg.test(price) === true){
            this.setState({isPriceFilled: true, errorPrice: ''})
        }else{
            this.setState({errorPrice: 'Tidak Boleh kosong'})
        }
    }

    render(){
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

        return(
            <View style={styles.container}>
                <View style={styles.Header}>
                    <TouchableOpacity
                        onPress={this.goBack}
                    >
                        <Image
                            style={styles.btnBack}
                            source={require('../../assets/images/back.png')}
                        />
                    </TouchableOpacity>

                    <Text style={styles.txtInstant}>
                        Instant Order
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txtData}>
                        Data Motor
                    </Text>
                </View>

                <View style={styles.txtInpModel}>
                    <TextInput
                        style={styles.txtModel}
                        placeholder='Model Motor'
                        placeholderTextColor='#7F7F7F'
                        onChangeText={(model) => this.handleChangeModel(model)}
                    />
                </View>

                <Text style={styles.errorStyle}>
                    {this.state.errorModel}
                </Text>

                <View>
                <DropDownPicker
                        items={[
                            {label: '2015', value: '15'},
                            {label: '2016', value: '16'},
                            {label: '2017', value: '17'},
                            {label: '2018', value: '18'},
                            {label: '2019', value: '19'},
                            {label: '2020', value: '20'}
                        ]}
                        defaultNull={this.nullChecker}
                        placeholder='Tahun Produksi'
                        style={{
                            paddingVertical: 20
                        }}
                        containerStyle={{
                            width: normalize(350),
                            height: normalize(46),
                            marginLeft: normalize(16),
                            marginBottom: normalize(6),
                        }}
                        dropDownStyle={{
                            backgroundColor: '#FFFFFF'
                        }}
                        labelStyle={{
                            marginLeft: normalize(8),
                            fontSize: normalize(14.5),
                            color:'#7F7F7F',
                            fontFamily: 'Montserrat-SemiBold'
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
                </View>

                <Text style={styles.errorStyle}>
                    {this.state.errorProd}
                </Text>

                <View style={styles.txtInpPrice}>
                    <TextInput
                        style={styles.txtPrice}
                        placeholder='Harga'
                        placeholderTextColor='#7F7F7F'
                        onChangeText={(price) => this.handleChangePrice(price)}
                    />
                </View>

                <Text style={styles.errorStyle}>
                    {this.state.errorPrice}
                </Text>

                <TouchableOpacity
                    onPress={this.goToDataKredit}
                    // disabled={!enabled}
                >
                    <Text style={[styles.txtNxt, {
                        color: (
                            this.state.model !== '' &&
                            this.state.prodYear !== '' &&
                            this.state.price !== '')
                        ? '#0064D0' 
                        : '#7F7F7F'
                    }]}>
                        SELANJUTNYA
                    </Text>
                </TouchableOpacity>
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

    Header: {
        width: normalize(412),
        height: normalize(70),
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: normalize(32),
        height: normalize(16),
        marginLeft: normalize(16),
        marginTop: normalize(30)
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

    containerTxt: {
        width: normalize(420),
        height: normalize(48),
        marginBottom: normalize(15),
        elevation: 4,
        backgroundColor: '#FFFFFF',
    },

    txtData: {
        width: normalize(124),
        height: normalize(19),
        marginTop: normalize(15),
        marginLeft: normalize(16),
        color: '#000000',
        fontFamily: 'Montserrat-SemiBold'
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

    txtInpModel: {
        width: normalize(350),
        height: normalize(46),
        marginLeft: normalize(16),
        marginBottom: normalize(6),
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB'
    },

    txtModel: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpPrice: {
        width: normalize(350),
        height: normalize(46),
        marginLeft: normalize(16),
        marginBottom: normalize(6),
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB'
    },

    txtPrice: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtNxt: {
        width: normalize(125),
        height: normalize(20),
        marginTop: normalize(250),
        marginLeft: normalize(135),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
    },
})
import React, {Component} from 'react'
import {
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
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
                            width: 370,
                            height: 48,
                            marginLeft: 16,
                            marginBottom: 6,
                        }}
                        dropDownStyle={{
                            backgroundColor: '#FFFFFF'
                        }}
                        labelStyle={{
                            marginLeft: 8,
                            fontSize: 14,
                            color:'#7F7F7F',
                            fontFamily: 'Montserrat-SemiBold'
                        }}
                        arrowStyle={{
                            marginLeft: 205
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
                    //disabled={!enabled}
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
        width: 412,
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    txtInstant: {
        width: 200,
        height: 20,
        marginTop: 25,
        marginLeft: 153,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    containerTxt: {
        width: 420,
        height: 48,
        marginBottom: 15,
        elevation: 4,
        backgroundColor: '#FFFFFF',
    },

    txtData: {
        width: 124,
        height: 19,
        marginTop: 15,
        marginLeft: 16,
        color: '#000000',
        fontFamily: 'Montserrat-SemiBold'
    },

    errorStyle: {
        width: 200,
        height: 15,
        marginLeft: 17,
        marginBottom: 15,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: '#D81818'
    },

    txtInpModel: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 6,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtModel: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpPrice: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 6,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtPrice: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtNxt: {
        width: 125,
        height: 20,
        marginTop: 280,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        justifyContent: 'center',
        alignSelf: 'center'
    },
})
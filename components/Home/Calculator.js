import React, {Component} from 'react'
import {
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import DropDownPicker from 'react-native-dropdown-picker'


class Calculator extends Component {
constructor(props){
    super(props)
    this.state = {
        model: '',
        prodYear: '',
        price: '',
        dp: '',
        location: '',
    }
}

goBack = () => {
    this.props.navigation.navigate('Home')
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

handleChangeDP = (dp) => {
    this.setState({dp})
    let reg = /([^\s])/
    if(reg.test(dp) === true){
        this.setState({isDpFilled: true})
    }
}

handleChangeLocation = (location) => {
    this.setState({location})
    let reg = /([^\s])/
    if(reg.test(location) === true){
        this.setState({isLocationFilled: true, errorLocation: ''})
    }else{
        this.setState({errorLocation: 'Tidak boleh kosong'})
    }
}

render() {
    return (
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

                <Text style={styles.txtKalkulator}>
                   Kalkulator Kredit
                </Text>
           </View>

           <View style={styles.WhiteContainer}>
                <Text style={styles.txtModel}>
                    Model Motor
                </Text>

                <View style={styles.txtInpModel}>
                    <TextInput
                        style={styles.txtContoh}
                        placeholder='Contoh: Honda Beat'
                        onChangeText={(model) => this.handleChangeModel(model)}
                    />
                </View>

                <View style={styles.flexContainer}>
                    <View>
                        <Text style={styles.txtTahun}>
                            Tahun Produksi
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
                                placeholder='Pilih Tahun'
                                style={{
                                    paddingVertical: 20
                                }}
                                containerStyle={{
                                    width: 155,
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
                    </View>

                    <View>
                        <Text style={styles.txtPrice}>
                            Harga
                        </Text>

                        <View style={styles.txtInpHarga}>
                            <TextInput
                                style={styles.txtHarga}
                                placeholder='Rp 15,000,000'
                                onChangeText={(price) => this.handleChangePrice(price)}
                            />
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={styles.txtDP}>
                        Uang Muka
                    </Text>
                    
                    <View style={styles.txtInpUangMuka}>
                        <TextInput
                            style={styles.txtUangMuka}
                            placeholder='Rp 1,500,000'
                            onChangeText={(dp) => this.handleChangeDP(dp)}
                        />
                    </View>

                    <Text style={styles.txtMinDp}>
                        *Minimal DP Rp 1,500,000
                    </Text>
                </View>

                <View>
                    <Text style={styles.txtLocation}>
                        Lokasi Motor
                    </Text>

                    <View style={styles.txtInpLokasi}>
                        <TextInput
                            style={styles.txtLokasi}
                            placeholder='Contoh: Menteng'
                            onChangeText={(location) => this.handleChangeLocation(location)}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.btnCount}
                >
                    <Text style={styles.txtHitung}>
                        Hitung
                    </Text>
                </TouchableOpacity>

                <Text style={styles.txtDisclaimer}>
                    *Harga merupakan kisaran, dan dapat berubah,
                    sewaktu-waktu tanpa pemberitahuan
                </Text>
           </View>
        </View>
    )
}}

export default Calculator

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

    btnBack: {
        width: 32,
        height: 16,
        marginTop: 30,
        marginLeft: 16,
    },

    txtKalkulator: {
        width: 200,
        height: 20,
        marginTop: 25,
        marginLeft: 87,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    WhiteContainer: {
        width: 380 ,
        height: 590,
        marginTop: 14,
        marginBottom: 22,
        marginLeft: 16,
        elevation: 5,
        borderRadius: 6,
        backgroundColor: '#FFFFFF'
    },

    txtModel: {
        width: 94,
        height: 18,
        marginTop: 25,
        marginBottom: 8,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpModel: {
        width: 350,
        height: 48,
        marginLeft: 16,
        marginBottom: 16,
        borderRadius: 6,
        borderWidth: 1
    },

    txtContoh: {
        marginLeft: 15,
        fontFamily: 'Montserrat-Medium'
    },

    flexContainer: {
        marginBottom: 14,
        flexDirection: 'row'
    },

    txtTahun: {
        width: 114,
        height: 18,
        marginBottom: 8,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    txtPrice: {
        width: 114,
        height: 18,
        marginBottom: 8,
        marginLeft: 44,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpHarga: {
        width: 155,
        height: 48,
        marginLeft: 40,
        borderRadius: 6,
        borderWidth: 1,
    },

    txtHarga: {
        marginLeft: 16,
        fontFamily: 'Montserrat-Medium'
    },

    txtDP: {
        width: 84,
        height: 18,
        marginBottom: 8,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
    },

    txtInpUangMuka: {
        width: 350,
        height: 48,
        marginLeft: 16,
        marginBottom: 8,
        borderRadius: 6,
        borderWidth: 1
    },

    txtUangMuka: {
        marginLeft: 16,
        fontFamily: 'Montserrat-Medium'
    },

    txtMinDp: {
        width: 158,
        height: 15,
        marginBottom: 14,
        marginLeft: 16,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium'
    },

    txtLocation: {
        width: 84,
        height: 18,
        marginBottom: 8,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold',
    },

    txtInpLokasi: {
        width: 350,
        height: 48,
        marginLeft: 16,
        marginBottom: 35,
        borderRadius: 6,
        borderWidth: 1
    },

    txtLokasi: {
        marginLeft: 16,
        fontFamily: 'Montserrat-Medium'
    },

    btnCount: {
        width: 350,
        height: 48,
        marginLeft: 16,
        marginBottom: 27,
        borderRadius: 6,
        backgroundColor: '#B7B7B7'
    },

    txtHitung: {
        width: 60,
        height: 20,
        marginTop: 11,
        marginLeft: 145,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtDisclaimer: {
        width: 300,
        height: 50,
        marginLeft: 45,
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    }

})
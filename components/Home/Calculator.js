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
import normalize from 'react-native-normalize';


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
                                    width: normalize(140),
                                    height: normalize(48),
                                    marginLeft: normalize(16),
                                    marginBottom: normalize(6),
                                }}
                                dropDownStyle={{
                                    backgroundColor: '#FFFFFF'
                                }}
                                labelStyle={{
                                    marginLeft: normalize(8),
                                    fontSize: normalize(14),
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
        width: normalize(380),
        height: normalize(70),
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: normalize(32),
        height: normalize(16),
        marginTop: normalize(30),
        marginLeft: normalize(16),
    },

    txtKalkulator: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(87),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    WhiteContainer: {
        width: normalize(350) ,
        height: normalize(530),
        marginTop: normalize(14),
        marginBottom: normalize(22),
        marginLeft: normalize(16),
        elevation: 5,
        borderRadius: 6,
        backgroundColor: '#FFFFFF'
    },

    txtModel: {
        width: normalize(94),
        marginTop: normalize(25),
        marginBottom: normalize(8),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpModel: {
        width: normalize(320),
        height: normalize(48),
        marginLeft: normalize(16),
        marginBottom: normalize(16),
        borderRadius: 6,
        borderWidth: 1
    },

    txtContoh: {
        marginLeft: normalize(15),
        fontFamily: 'Montserrat-Medium'
    },

    flexContainer: {
        marginBottom: normalize(14),
        flexDirection: 'row'
    },

    txtTahun: {
        width: normalize(114),
        marginBottom: normalize(8),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    txtPrice: {
        width: normalize(114),
        marginBottom: normalize(8),
        marginLeft: normalize(44),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpHarga: {
        width: normalize(140),
        height: normalize(48),
        marginLeft: normalize(43),
        borderRadius: 6,
        borderWidth: 1,
    },

    txtHarga: {
        marginLeft: normalize(16),
        fontFamily: 'Montserrat-Medium'
    },

    txtDP: {
        width: normalize(84),
        marginBottom: normalize(8),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold',
    },

    txtInpUangMuka: {
        width: normalize(320),
        height: normalize(48),
        marginLeft: normalize(16),
        marginBottom: normalize(8),
        borderRadius: 6,
        borderWidth: 1
    },

    txtUangMuka: {
        marginLeft: normalize(16),
        fontFamily: 'Montserrat-Medium'
    },

    txtMinDp: {
        width: normalize(158),
        marginBottom: normalize(14),
        marginLeft: normalize(16),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium'
    },

    txtLocation: {
        width: normalize(84),
        marginBottom: normalize(8),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold',
    },

    txtInpLokasi: {
        width: normalize(320),
        height: normalize(48),
        marginLeft: normalize(16),
        marginBottom: normalize(35),
        borderRadius: 6,
        borderWidth: 1
    },

    txtLokasi: {
        marginLeft: normalize(16),
        fontFamily: 'Montserrat-Medium'
    },

    btnCount: {
        width: normalize(320),
        height: normalize(48),
        marginLeft: normalize(16),
        marginBottom: normalize(27),
        borderRadius: 6,
        backgroundColor: '#B7B7B7'
    },

    txtHitung: {
        width: normalize(60),
        height: normalize(20),
        marginTop: normalize(15),
        marginLeft: normalize(135),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtDisclaimer: {
        width: normalize(300),
        height: normalize(50),
        marginLeft: normalize(25),
        fontSize: normalize(14),
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    }

})
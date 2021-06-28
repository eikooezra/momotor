import React, { Component } from 'react'
import {
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'
import normalize from 'react-native-normalize';
class Calculator extends Component {
    constructor(props){
        super(props)
        this.state={
            price: 0,
            dp: 0,
            total: 0,
        }
    }

    goBack = () => {
        this.props.navigation.navigate('Home')
    }
    
    calculate = () => {
        if((this.state.price !=='')&&(this.state.dp !== '')){
            let price = this.state.price;
            let dp = this.state.dp;
            let minus = price - dp
            let tenor36 = minus/36;
            this.setState({
                total:tenor36
            });
        }if((this.state.price !=='')&&(this.state.dp !== '')){
            let price = this.state.price;
            let dp = this.state.dp;
            let minus = price - dp
            let tenor24 = minus/24;
            this.setState({
                total:tenor24
            });
        }
        if((this.state.price !=='')&&(this.state.dp !== '')){
            let price = this.state.price;
            let dp = this.state.dp;
            let minus = price - dp
            let tenor12 = minus/12;
            this.setState({
                total:tenor12
            });
        }
    }

        render(){
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
                        <View>
                            <Text style={styles.txtPrice}>
                                Harga
                            </Text>
        
                                <View style={styles.txtInpHarga}>
                                    <TextInput
                                        style={styles.txtHarga}
                                        placeholder='Rp 15,000,000'
                                        value={this.state.price}
                                        onChangeText={price => this.calculate(price)}
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
                                    value={this.state.dp}
                                    onChangeText={dp => this.calculate(dp)}
                                />
                            </View>
        
                            <Text style={styles.txtMinDp}>
                                *Minimal DP Rp 1,500,000
                            </Text>
                        </View>
        
                        <TouchableOpacity
                            style={styles.btnCount}
                            onPress={console.log(form)}
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
            )
        }   
    }

export default Calculator;

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
        width: normalize(350),
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
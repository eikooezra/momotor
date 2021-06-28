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
            total36: 0,
            total24: 0,
            total12: 0,
            isFilled: false
        }
    }

    goBack = () => {
        this.props.navigation.navigate('Home')
    }

    isPriceFilled = (price) => {
        this.setState({price})
        if(price >= 5000000){
            this.setState({isFilled: true})
        }
    }

    isDpFilled = (dp) => {
        this.setState({dp})
        if(dp >= 1500000){
            this.setState({isFilled: true})
        }
    }
    
    calculate = () => {
        if((this.state.price !== 0) && (this.state.dp !== 0)){
            let price = this.state.price;
            let dp = this.state.dp;
            let minus = price - dp
            let tenor36 = minus/36;
            this.setState({
                total36:tenor36
            });
        }if((this.state.price !== 0) && (this.state.dp !== 0)){
            let price = this.state.price;
            let dp = this.state.dp;
            let minus = price - dp
            let tenor24 = minus/24;
            this.setState({
                total24:tenor24
            });
        }
        if((this.state.price !== 0) && (this.state.dp !== 0)){
            let price = this.state.price;
            let dp = this.state.dp;
            let minus = price - dp
            let tenor12 = minus/12;
            this.setState({
                total12:tenor12
            });
        }
    }

        render(){

            const enabled = 
            this.state.price >= 5000000 &&
            this.state.dp >= 1500000

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

                            <View style={[styles.txtInpHarga, {
                                borderColor: (this.state.price >= 5000000)
                                ? '#0064D0'
                                : '#B7B7B7'
                            }]}>
                                <TextInput
                                    style={styles.txtHarga}
                                    keyboardType='number-pad'
                                    placeholder='Rp 15,000,000'
                                    value={this.state.price}
                                    onChangeText={price => this.isPriceFilled(price)}
                                />
                            </View>
                        </View>
                    <View>
                            
                            <Text style={styles.txtDP}>
                                Uang Muka
                            </Text>
        
                            <View style={[styles.txtInpUangMuka,
                                {
                                    borderColor: (this.state.dp >= 1500000)
                                    ? '#0064D0'
                                    : '#B7B7B7'
                                }
                            ]}>
                                <TextInput
                                    style={styles.txtUangMuka}
                                    keyboardType='number-pad'
                                    placeholder='Rp 1,500,000'
                                    value={this.state.dp}
                                    onChangeText={dp => this.isDpFilled(dp)}
                                />
                            </View>
        
                            <Text style={styles.txtMinDp}>
                                *Minimal DP Rp 1,500,000
                            </Text>
                        </View>
        
                        <TouchableOpacity
                            style={[styles.btnCount, 
                                {
                                    backgroundColor: (
                                        this.state.price >= 5000000 &&
                                        this.state.dp >= 1500000
                                    )
                                    ? '#0064D0'
                                    : '#B7B7B7'
                                }
                            ]}
                            onPress={this.calculate}
                            disabled={!enabled}
                        >
                            <Text style={styles.txtHitung}>
                                Hitung
                            </Text>
                        </TouchableOpacity>
        
                        <Text style={styles.txtDisclaimer}>
                            *Harga merupakan kisaran, dan dapat berubah,
                            sewaktu-waktu tanpa pemberitahuan
                        </Text>

                        <View style={styles.greenTenorContainer}>
                            <Text style={styles.txtTenor}>
                                Tenor
                            </Text>
                        </View>
                        
                        <View style={styles.whiteTenorContainer}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                                }}>
                                <Text style={styles.txtLeft}>
                                    36
                                </Text>

                                <Text style={styles.txtRight}>
                                    Rp {this.state.total36}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.greyTenorContainer}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                                }}>
                                <Text style={styles.txtLeft}>
                                    24
                                </Text>

                                <Text style={styles.txtRight}>
                                    Rp {this.state.total24}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.whiteTenorContainer2}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                                }}>
                                <Text style={styles.txtLeft}>
                                    12
                                </Text>

                                <Text style={styles.txtRight}>
                                    Rp {this.state.total12}
                                </Text>
                            </View>
                        </View>

                    </View>
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

    txtPrice: {
        marginTop: normalize(15),
        marginBottom: normalize(8),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpHarga: {
        width: normalize(320),
        height: normalize(48),
        marginBottom: normalize(16),
        marginLeft: normalize(16),
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#B7B7B7'
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
        borderWidth: 1,
        borderColor: '#B7B7B7'
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

    btnCount: {
        width: normalize(320),
        height: normalize(48),
        marginLeft: normalize(16),
        marginBottom: normalize(20),
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
    },

    txtTenor: {
        marginTop: normalize(15),
        marginLeft: normalize(16),
        fontFamily: 'Montserrat-Medium'
    },

    txtLeft: {
        marginTop: normalize(15),
        marginLeft: normalize(28),
        fontFamily: 'Montserrat-Medium'
    },

    txtRight: {
        marginTop: normalize(15),
        marginRight: normalize(24),
        fontFamily: 'Montserrat-SemiBold'
    },

    greenTenorContainer: {
        width: normalize(320),
        height: normalize(40),
        marginLeft: normalize(16),
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        elevation: 5,
        backgroundColor: '#E2F7E3'
    },

    whiteTenorContainer: {
        width: normalize(320),
        height: normalize(48),
        marginLeft: normalize(16),
        elevation: 5,
        backgroundColor: '#FFFFFF'
    },

    greyTenorContainer: {
        width: normalize(320),
        height: normalize(48),
        marginLeft: normalize(16),
        elevation: 5,
        backgroundColor: '#F5F5F5'
    },

    whiteTenorContainer2: {
        width: normalize(320),
        height: normalize(48),
        marginLeft: normalize(16),
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF'
    },
})
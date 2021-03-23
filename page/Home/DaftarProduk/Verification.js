import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import normalize from 'react-native-normalize';

class Verification extends Component{
    constructor(props){
        super(props)
        this.state = {
            isPressed: false,
        }
    }

    goToDaftarProduk = () => {
        this.props.navigation.navigate('DaftarProduk')
        alert('Data tersimpan!')
    }

    goBack = () => {
        this.props.navigation.navigate('AddPics')
    }

    checkBox = () => {
        this.setState({
            isPressed: !this.state.isPressed
        })
    }

    render(){
        const enabled = this.state.isPressed === true
        const cbColors = this.state.isPressed === true

        return(
            <View style={styles.container}>
                <View style={styles.Header}>
                <TouchableOpacity
                    onPress={this.goBack}
                >
                    <Image 
                        style={styles.btnBack}
                        source={require('../../../assets/images/back.png')}
                    />
                </TouchableOpacity>

                <Text style={styles.txtVerif}>
                    Verifikasi
                </Text>
                </View>

                <View style={styles.verifContainer}>

                    <CheckBox 
                        style={styles.cbPosition}
                        tintColors={ cbColors
                            ? '#0064D0'
                            : '#FFFFFF'
                        }
                        value={this.state.isPressed}
                        onChange={this.checkBox}
                        />

                    <Text style={styles.txtWording}>
                        Dengan ini saya menyatakan bahwa motor yang saya jual di momotor.id telah saya serifikasi secara mandiri dan menyatakan seluruh komponen motor yang ada layak untuk dijual
                    </Text>
                </View>
                

                <View style={styles.btnSaveArea}>
                    <TouchableOpacity
                        style={[styles.btnSave, {
                        backgroundColor: (this.state.isPressed === true)
                            ? '#0064D0' 
                            : '#B7B7B7'
                            }
                        ]}
                        onPress={this.goToDaftarProduk}
                        disabled={!enabled}
            >
                        <Text style={styles.txtSave}>
                            SIMPAN DATA
                         </Text>
                     </TouchableOpacity>
                 </View>
            </View>
        )
    }
}

export default Verification

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },

    Header: {
        width: normalize(380),
        height: normalize(70),
        marginBottom: normalize(15),
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: normalize(32),
        height: normalize(16),
        marginLeft: normalize(16),
        marginTop: normalize(30)
    },

    txtVerif: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(120),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    verifContainer: {
        flexDirection: 'row'
    },

    cbPosition: {
        width: normalize(18),
        height: normalize(18),
        marginLeft: normalize(20),
        borderRadius: 3,
    },

    txtWording: {
        width: normalize(306),
        height: normalize(85),
        marginLeft: normalize(20),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    btnSaveArea: {
        bottom: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute'
    },

    btnSave: {
        width: normalize(420),
        height: normalize(60),
    },
    
    txtSave: {
        width: normalize(125),
        height: normalize(20),
        marginTop: normalize(20),
        marginLeft: normalize(160),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
    }
})
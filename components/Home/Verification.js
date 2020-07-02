import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'

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
                        source={require('../../assets/images/back.png')}
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
        width: 412,
        height: 70,
        marginBottom: 15,
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: 32,
        height: 16,
        marginLeft: 16,
        marginTop: 30
    },

    txtVerif: {
        width: 200,
        height: 20,
        marginTop: 25,
        marginLeft: 120,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    verifContainer: {
        flexDirection: 'row'
    },

    cbPosition: {
        width: 18,
        height: 18,
        marginLeft: 20,
        borderRadius: 3,
    },

    txtWording: {
        width: 306,
        height: 85,
        marginLeft: 20,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    btnSaveArea: {
        bottom: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute'
    },

    btnSave: {
        width: 420,
        height: 60,
    },
    
    txtSave: {
        width: 125,
        height: 20,
        marginTop: 18,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
        justifyContent: 'center',
        alignSelf: 'center'
    }
})
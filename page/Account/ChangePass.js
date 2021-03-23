import React, {Component, useRef, useEffect} from 'react'
import {
    Image,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize'

class ChangePass extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isNewPassValid: false,
            isConPassValid: false, // con as confirm
            newPass: '',
            conPass: '',
            showPass: true,
            press: false,
            status: ''
        }
    }

    goBack = () => {
        this.props.navigation.navigate('ConfirmEmail')
    }

    showPass = () => {
        if (this.state.press === false) {
            this.setState({showPass: false, press: true})
        } else {
            this.setState({showPass: true, press: false})
        }
    }

    handleChangeNewPass = (newPass) => {
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
        this.setState({newPass})
        if (reg.test(newPass) === true) {
            this.setState({isNewPassValid: true})
        } else {
            this.setState({isNewPassValid: false})
        }
    }

    handleChangeConPass = (conPass) => {
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
        this.setState({conPass})
        if (reg.test(conPass) === true) {
            this.setState({isConPassValid: true})
        } else {
            this.setState({isConPassValid: false})
        }
    }

    handleSubmit = () => {
        if(this.state.newPass !== this.state.conPass){
            alert('Kata sandi tidak sesuai')
        } else {
            this.props.navigation.navigate('Account')
            alert('Kata sandi berhasil diubah')
        }
    }

    render(){
       let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
       const {
           newPass,
           conPass
       } = this.state

       const enabled = 
       (reg.test(newPass) === true) && 
       (reg.test(conPass) === true)

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
                <Text style={styles.txtSandi}>
                 Kata Sandi
                </Text>
             </View>

             <View>
                <Text style={styles.txtUbah}>
                    Ubah Sandi Baru
                </Text>
             </View>
             
             <Text style={styles.txtSanLam}>
                Kata Sandi Lama
             </Text>

             <View style={[styles.inputContainer1, {
                    borderColor: (this.state.isNewPassValid === true) 
                    ? '#0064D0' 
                    : '#E9EAEA'
                }         
              ]}>
                <Image style={styles.lockLogo}
                    source={require('../../assets/images/lockGre.png')}
                />
                <TextInput style={styles.txtInput}
                    placeholder='Masukkan kata sandi baru'
                    returnKeyType='next'
                    placeholderTextColor='#7F7F7F'
                    secureTextEntry={this.state.showPass}
                    value={this.state.newPass}
                    onChangeText={newPass => this.handleChangeNewPass(newPass)}
                    onSubmitEditing={() => this.secondTextInput.focus()}
                />

                <TouchableOpacity style={styles.btnEye}
                    onPress={this.showPass.bind(this)}>
                        <Image style={styles.eyeLogo}
                            source={require('../../assets/images/eyeGre.png')}
                        />
                </TouchableOpacity>
             </View>

             <Text style={styles.txtSanBar}>
                Kata Sandi Baru
             </Text>

             <View style={[styles.inputContainer2, {
                    borderColor: (this.state.isConPassValid === true) 
                    ? '#0064D0' 
                    : '#E9EAEA'
                }       
             ]}>
                <Image style={styles.lockLogo}
                    source={require('../../assets/images/lockGre.png')}
                />
                <TextInput style={styles.txtInput}
                    placeholder='Konfirmasi kata sandi baru'
                    placeholderTextColor='#7F7F7F'
                    secureTextEntry={true}
                    value={this.state.conPass}
                    onChangeText={conPass => this.handleChangeConPass(conPass)}
                    ref={(input) => {this.secondTextInput = input}}
                />
             </View>
            
             <TouchableOpacity style={[styles.btnReset, {
                        backgroundColor: (
                            this.state.isNewPassValid &&
                            this.state.isConPassValid === true) 
                        ? '#0064D0' 
                        : '#E0E0E0'
                        }
                    ]}
                    onPress={this.handleSubmit}
                    disabled={!enabled}
                    >
                        
                    <Text style={[styles.txtReset, {
                        color: (
                            this.state.isNewPassValid &&
                            this.state.isConPassValid === true) 
                        ? '#FFFFFF' 
                        : '#A7A7A7'
                        }
                    ]}>
                        Reset Kata Sandi
                    </Text>
             </TouchableOpacity>

            </View>
        )
    }
}

export default ChangePass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
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

    txtSandi: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(108),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    txtUbah: {
        marginLeft: normalize(16),
        marginTop: normalize(24),
        marginBottom: normalize(24),
        fontFamily: 'Montserrat-Bold',
        fontSize: normalize(16)
    },

    txtInput: {
        fontFamily: 'Montserrat-Medium'
    },

    btnEye: {
        marginTop: normalize(16),
        marginBottom: normalize(25),
        marginLeft: normalize(290),
        width: normalize(25),
        height: normalize(15.68),
        flex: 1,
        position: 'absolute'
    },

    lockLogo: {
        marginTop: normalize(14.5),
        marginBottom: normalize(14.25),
        marginLeft: normalize(12.69),
        marginRight: normalize(15.54),
        width: normalize(14.5),
        height: normalize(20),
        borderWidth: 0.8,
        flex: 1,
        position: 'absolute'
    },

    eyeLogo: {
        width: normalize(25),
        height: normalize(16.5),
        flex: 1,
        position: 'absolute'
    },

    txtSanLam: {
        marginLeft: normalize(25),
        marginBottom: normalize(8),
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(14)
    },

    txtSanBar: {
        marginLeft: normalize(25),
        marginBottom: normalize(8),
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(14)
    },

    inputContainer1: {
        width: normalize(328),
        height: normalize(48),
        marginBottom: normalize(10),
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: normalize(35),
        marginLeft: normalize(25),
    },
    
    inputContainer2: {
        width: normalize(328),
        height: normalize(48),
        marginBottom: normalize(10),
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: normalize(35),
        marginLeft: normalize(25),
    },

    btnReset: {
        backgroundColor: '#0064D0',
        marginTop: normalize(20),
        marginBottom: normalize(1),
        width: normalize(328),
        height: normalize(48),
        marginLeft: normalize(25),
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtReset: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(16),
    }
})

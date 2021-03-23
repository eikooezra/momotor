import React, {Component} from 'react'
import {
    Image,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize'

class ConfirmEmail extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isEmailValid: false,
            email: ''
        }
    }

    goBack = () => {
        this.props.navigation.navigate('Settings')
    }

    goToChangePass = () => {
        this.props.navigation.navigate('ChangePass')
    }

    handleChangeEmail = (email) => {
        this.setState({email});
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    
        if (reg.test(email) === true) {
            this.setState({isEmailValid: true})
        } else {
            this.setState({isEmailValid: false})
        }
    }

    render(){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const {email} = this.state
    const enabled = (reg.test(email) === true)

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
                <Image
                    style={styles.imgContainer}
                    source={require('../../assets/images/lupaPass.png')}
                />

                <Text style={styles.txtUbah}>
                    Ubah Kata Sandi
                </Text>
             </View>

             <View style={[styles.inputContainer, {
                        borderColor: (this.state.isEmailValid === true) 
                        ? '#0064D0' 
                        : '#E9EAEA'
                        }
             ]}>
            
                <Image style={styles.mailLogo}
                 source={require('../../assets/images/Email.png')}
                />

                <TextInput style={styles.txtInput}
                        placeholder='Masukkan e-mail anda'
                        placeholderTextColor='#7F7F7F'
                        keyboardType='email-address'
                        onChangeText={
                        email => this.handleChangeEmail(email)
                        }/>
             </View>

             <TouchableOpacity style={[styles.btnSelanjutnya, {
                        backgroundColor: (this.state.isEmailValid === true) 
                        ? '#0064D0' 
                        : '#E0E0E0'
                        }
                    ]} 
                    onPress={this.goToChangePass}
                    disabled={!enabled}>
                        
                    <Text style={[styles.txtSelanjutnya, {
                        color: (this.state.isEmailValid === true) 
                        ? '#FFFFFF' 
                        : '#A7A7A7'
                        }
                    ]}>
                        Selanjutnya
                    </Text>
             </TouchableOpacity>
            
            

            </View>
        )
    }
}

export default ConfirmEmail

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

    imgContainer: {
        width: normalize(190),
        height: normalize(230),
        marginTop: normalize(20),
        marginBottom: normalize(30),
        marginLeft: normalize(95),
        marginRight: normalize(105)
    },

    txtUbah: {
        marginLeft: normalize(25),
        marginBottom: normalize(20),
        fontFamily: 'Montserrat-Bold',
        fontSize: normalize(16)
    },

    txtInput: {
        fontFamily: 'Montserrat-Medium'
    },
    
    inputContainer: {
        width: normalize(328),
        height: normalize(48),
        marginBottom: normalize(8),
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: normalize(35),
        marginLeft: normalize(25),
    },
    
    mailLogo: {
        marginTop: normalize(16.7),
        marginBottom: normalize(14.5),
        marginLeft: normalize(10.76),
        marginRight: normalize(15.5),
        width: normalize(20),
        height: normalize(16),
        borderWidth: 0.8,
        flex: 1,
        position: 'absolute'
    },

    btnSelanjutnya: {
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

    txtSelanjutnya: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(16),
    }
})

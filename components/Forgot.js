import React, {Component} from 'react'
import {
    StyleSheet,
    KeyboardAvoidingView,
    Image,
    View,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native'
import axios from 'axios'
import normalize from 'react-native-normalize';
import {TextInput} from 'react-native-gesture-handler'

const NODEAPI = 'http://10.3.110.149:3000';class Forgot extends Component {
constructor(props) {
    super(props)
    this.state = {
        username: '',
        ErrorEmail: '',
        isEmailValid: false
    }
}

goToLogin = () => {
    this.props.navigation.navigate('Login')
}

handleChangeUsername = (username) => {
    this.setState({username});
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (reg.test(username) === true) {
        this.setState({isEmailValid: true})
    } else {
        this.setState({isEmailValid: false})
    }
}

checkUser = () => {
    const {username, ErrorEmail} = this.state
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    axios.post(`${NODEAPI}/users/validate`, {
        'username': username,
        'ErrorEmail': ErrorEmail
    }).then(response => {
        const {isUser} = response.data;
        if (isUser === true) {
            if (reg.test(username) === false) {
                this.setState({ErrorEmail: 'Email salah!'})
            }
        }
    }).catch(function (error) {
        console.log(error);
    });
}

render() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const {username} = this.state
    const enabled = (reg.test(username) === true)

    return (
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <StatusBar backgroundColor='#FFFFFF'/>
        <View style={styles.all}>
          <Image style={styles.imgContainer}
            source={require('../assets/images/bigLock.png')}
          />
            
            <Text style={styles.txt1}>
              Anda Lupa Kata Sandi?
            </Text>

            <Text style={styles.txt2}>
              Masukkan email anda di bawah ini. Kami
              akan mengirim tautan untuk reset kata
              sandi anda
            </Text>

            <View style={[styles.inputContainer, {
                        borderColor: (this.state.isEmailValid === true) 
                        ? '#0064D0' 
                        : '#000000'
                        }
            ]}>
            
            <Image style={styles.mailLogo}
              source={require('../assets/images/mail.png')}
            />
            <TextInput style={styles.txtInput}
                        placeholder='Email'
                        placeholderTextColor='#7F7F7F'
                        keyboardType='email-address'
                        onChangeText={
                        username => this.handleChangeUsername(username)
                        }/>
            </View>

            <Text style={styles.txtError}>
                {this.state.ErrorEmail} 
            </Text>

            <TouchableOpacity style={[styles.btnKirim, {
                        backgroundColor: (this.state.isEmailValid === true) 
                        ? '#0064D0' 
                        : '#B7B7B7'
                        }
                    ]} 
                    onPress={this.checkUser}
                    disabled={!enabled}>
                        
                    <Text style={styles.txtKirim}>
                        KIRIM
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.backLogin}
                    onPress={this.goToLogin}>

                    <Text style={styles.txtBack}>
                        Kembali untuk Login
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}}

export default Forgot

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
},

all: {
    justifyContent: 'center',
    alignItems: 'center'
},

imgContainer: {
    width: normalize(190),
    height: normalize(186),
    marginTop: normalize(80),
    marginBottom: normalize(30),
    marginLeft: normalize(105),
    marginRight: normalize(105)
},

txt1: {
    width: normalize(225),
    height: normalize(22),
    marginBottom: normalize(16),
    fontSize: normalize(18),
    fontFamily: 'Montserrat-Bold'
},

txt2: {
    width: normalize(300),
    height: normalize(60),
    fontSize: normalize(14),
    fontFamily: 'Montserrat-Medium',
    color: '#7F7F7F',
    textAlign: 'center',
},

txtInput: {
    fontFamily: 'Montserrat-Medium'
},

txtKirim: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: normalize(14),
    color: '#FFFFFF'
},

txtBack: {
    color: '#2A77CB',
    fontSize: normalize(14),
    fontFamily: 'Montserrat-Medium'
},

txtError: {
    width: normalize(200),
    height: normalize(18),
    fontSize: normalize(14),
    fontFamily: 'Monserrat-Medium',
    color: '#E56464',
    marginBottom: normalize(12),
    marginLeft: normalize(30)
},

btnKirim: {
    backgroundColor: '#0064D0',
    marginBottom: normalize(1),
    width: normalize(200),
    height: normalize(48),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
},

inputContainer: {
    width: normalize(300),
    height: normalize(48),
    marginBottom: normalize(8),
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 6,
    paddingLeft: normalize(45),
    marginLeft: normalize(25),
    marginRight: normalize(25)
},

mailLogo: {
    marginTop: normalize(14.5),
    marginBottom: normalize(14.5),
    marginLeft: normalize(10.76),
    marginRight: normalize(15.5),
    width: normalize(19),
    height: normalize(15),
    borderWidth: 0.8,
    flex: 1,
    position: 'absolute'
},

backLogin: {
    marginTop: normalize(16)
}})

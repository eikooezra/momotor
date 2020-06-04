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
    width: 190,
    height: 186,
    marginTop: 80,
    marginBottom: 30,
    marginLeft: 105,
    marginRight: 105
},

txt1: {
    width: 225,
    height: 22,
    marginBottom: 16,
    fontSize: 18,
    fontFamily: 'Montserrat-Bold'
},

txt2: {
    width: 294,
    height: 60,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#7F7F7F',
    textAlign: 'center',
    marginBottom: 16
},

txtInput: {
    fontFamily: 'Montserrat-Medium'
},

txtKirim: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#FFFFFF'
},

txtBack: {
    color: '#2A77CB',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold'
},

txtError: {
    width: 200,
    height: 18,
    fontSize: 14,
    fontFamily: 'Monserrat-Medium',
    color: '#E56464',
    marginBottom: 12,
    marginLeft: 30
},

btnKirim: {
    backgroundColor: '#0064D0',
    marginBottom: 1,
    width: 200,
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
},

inputContainer: {
    width: 300,
    height: 48,
    // marginTop: 24,
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 6,
    paddingLeft: 45,
    marginLeft: 25,
    marginRight: 25
},

mailLogo: {
    marginTop: 14.5,
    marginBottom: 14.5,
    marginLeft: 10.76,
    marginRight: 15.5,
    width: 19,
    height: 15,
    borderWidth: 0.8,
    flex: 1,
    position: 'absolute'
},

backLogin: {
    marginTop: 16
}})

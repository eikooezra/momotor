import React, {Component} from 'react'
import {
    KeyboardAvoidingView,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native'
import axios from 'axios'
import normalize from 'react-native-normalize';
import LinearGradient from 'react-native-linear-gradient'

const NODEAPI = 'http://10.3.110.149:3000'

class Login extends Component {
constructor(props) {
    super(props)
    this.state = {
        username: '',
        password: '',
        isValid: null,
        isFocus: true,
        showPass: true,
        press: false,
        ErrorEmail: '',
        ErrorPass: '',
        isEmailValid: false,
        isPassValid: false
    }
}

componentDidMount() {
    this.checkUser
}

goToHome = () => {
    this.props.navigation.navigate('Home')
}

goToForg = () => {
    this.props.navigation.navigate('Forgot')
}

showPass = () => {
    if (this.state.press === false) {
        this.setState({showPass: false, press: true})
    } else {
        this.setState({showPass: true, press: false})
    }
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

handleChangePassword = (password) => {
    this.setState({password})
    if (password.length > 5) {
        this.setState({isPassValid: true})
    } else {
        this.setState({isPassValid: false})
    }
}

// get data
checkUser = () => {
    const _this = this
    const {username, password, ErrorEmail, ErrorPass} = this.state

    axios.post(`${NODEAPI}/users/validate`, {
        'username': username,
        'password': password,
        'ErrorEmail': ErrorEmail,
        'ErrorPass': ErrorPass
    }).then(response => {
        const {isUser} = response.data;
        if (isUser === true) {
            _this.goToHome()
        } else if (username === false) {
            this.setState({ErrorEmail: 'Email salah!'})
        } else if (username === true) {
            this.setState({ErrorEmail: ''})
        }

        if (password === false) {
            this.setState({ErrorPass: 'Kata Sandi salah!'})
        } else if (password === true) {
            this.setState({ErrorPass: ''})
        }
    }).catch(function (error) {
        console.log(error);
    });
}

render() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const {username, password} = this.state
    const enabled = (reg.test(username) === true) && password.length > 5

    return (
        <KeyboardAvoidingView style={styles.container} behavior="position">
         <View style={styles.split1}>
            <LinearGradient colors={['#0A4D96', '#1E87F8']}>
                <Image style={styles.logo}
                    source={require('../assets/images/logo.png')}
                />
                <Image style={styles.dealerArea}
                    source={require('../assets/images/dealer.png')}
                />
                </LinearGradient>
         </View>

         <View style={styles.split2}>
            <View style={styles.form}>
              <View style={[styles.inputContainer1, {
                    borderColor: (this.state.isEmailValid === true) 
                    ? '#0064D0' 
                    : '#000000'
                }         
              ]}>
                <Image style={styles.mailLogo}
                    source={require('../assets/images/mail.png')}
                />
                <TextInput style={styles.txtInput}
                    placeholder='Nomor ponsel atau email'
                    returnKeyType='next'
                    placeholderTextColor='#7F7F7F'
                    keyboardType='email-address'
                    value={this.state.username}
                    onChangeText={username => this.handleChangeUsername(username)}
                    onSubmitEditing={() => this.secondTextInput.focus()}
                />
             </View>

             <Text style={styles.txtError1}>
                {this.state.ErrorEmail} 
             </Text>

             <View style={[styles.inputContainer2, {
                    borderColor: (this.state.isPassValid === true) 
                    ? '#0064D0' 
                    : '#000000'
                }       
             ]}>
                <Image style={styles.lockLogo}
                    source={require('../assets/images/lock.png')}
                />
                <TextInput style={styles.txtInput}
                    placeholder='Kata Sandi'
                    placeholderTextColor='#7F7F7F'
                    secureTextEntry={this.state.showPass}
                    value={this.state.password}
                    onChangeText={password => this.handleChangePassword(password)}
                    ref={(input) => {this.secondTextInput = input}}
                />
                 <TouchableOpacity style={styles.btnEye}
                    onPress={this.showPass.bind(this)}>
                        <Image style={ styles.eyeLogo}
                            source={require('../assets/images/eye.png')}
                        />
                 </TouchableOpacity>
             </View>

             <Text style={styles.txtError2}>
                {this.state.ErrorPass} 
             </Text>

             <View style={styles.btnArea}>
                <TouchableOpacity style={[styles.btnMasuk, {
                    backgroundColor: (this.state.isEmailValid === true && 
                                      this.state.isPassValid === true) 
                    ? '#0064D0' 
                    : '#B7B7B7'
                    }                
                ]}
                    onPress={this.goToHome}
                    // disabled={!enabled}
                    >
                    <Text style={styles.txtMasuk}>
                        MASUK
                    </Text>
                </TouchableOpacity>
             </View>

             <View style={styles.sandiArea}>
                <TouchableOpacity 
                    onPress={this.goToForg}>
                    <Text style={ styles.txtSandi}>
                        Lupa kata Sandi?
                    </Text>
                </TouchableOpacity>
             </View>

            </View>
        </View>
    </KeyboardAvoidingView>
    )
}}

export default Login

const styles = StyleSheet.create({
container: {
    flex: 1
},

split1: {
    width: normalize(390),
    backgroundColor: '#1E87F8'
},

split2: {
    backgroundColor: '#FFFFFF'
},

txtSandi: {
    color: '#2A77CB',
    fontSize: normalize(14),
    fontFamily: 'Montserrat-SemiBold'
},

txtInput: {
    fontFamily: 'Montserrat-Medium'
},

txtMasuk: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#FFFFFF'
},

txtError1: {
    width: normalize(200),
    height: normalize(18),
    fontSize: normalize(14),
    fontFamily: 'Monserrat-Medium',
    color: '#E56464',
    marginBottom: normalize(8),
    marginLeft: normalize(30)
},

txtError2: {
    width: 200,
    height: 18,
    fontSize: 14,
    fontFamily: 'Monserrat-Medium',
    color: '#E56464',
    marginBottom: 12,
    marginLeft: 30
},

btnMasuk: {
    width: normalize(170),
    height: normalize(46),
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(16)
},

btnEye: {
    marginTop: normalize(16),
    marginBottom: normalize(25),
    marginLeft: normalize(260),
    width: normalize(25),
    height: normalize(15.68),
    flex: 1,
    position: 'absolute'
},

sandiArea: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 24
},

dealerArea: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: normalize(157.66),
    height: normalize(25.2),
    marginTop: normalize(17.47),
    marginBottom: normalize(92.98),
},

btnArea: {
    justifyContent: 'center',
    alignSelf: 'center'
},

inputContainer1: {
    marginTop: normalize(36),
    marginBottom: normalize(8),
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 6,
    paddingLeft: normalize(45),
    marginLeft: normalize(25),
    marginRight: normalize(25)
},

inputContainer2: {
    marginBottom: normalize(8),
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 6,
    paddingLeft: normalize(45),
    marginLeft: normalize(25),
    marginRight: normalize(25)
},

logo: {
    width: normalize(158.11),
    height: normalize(122),
    marginTop: normalize(75),
    justifyContent: 'center',
    alignSelf: 'center'
},

lockLogo: {
    marginTop: normalize(15),
    marginBottom: normalize(14.25),
    marginLeft: normalize(12.69),
    marginRight: normalize(15.54),
    width: normalize(14.5),
    height: normalize(19),
    borderWidth: 0.8,
    flex: 1,
    position: 'absolute'
},

mailLogo: {
    marginTop: normalize(17),
    marginBottom: normalize(16.29),
    marginLeft: normalize(10.76),
    marginRight: normalize(15.54),
    width: normalize(19),
    height: normalize(15),
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

form: {
    width: '100%',
    height: normalize(468),
    paddingLeft: normalize(16),
    paddingRight: normalize(16)
},

error: {
    borderColor: 'red'
}})


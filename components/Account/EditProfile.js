import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  View,
  Text,
  Image,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios'

const NODEAPI = 'http://192.168.0.13:3000'

class EditProfile extends Component{
    constructor(props){
        super(props)
        this.state = {
         dealername: '',
         address: '',
         phone: '',
         email: '',
         isEmailValid: false,
         isPhoneValid: false,
        }
    }
    
goToAccount = () => {
    this.props.navigation.navigate('Account')
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

// checkUser = () => {
//     const _this = this
//     const {dealername, address, phone, email} = this.state

//     axios.post(`${NODEAPI}/editProfile/validate`, {
//         'dealername': dealername,
//         'address': address,
//         'phone': phone,
//         'email': email
//     })
// }

render(){
    return(
    <View style={styles.container}>
        <View style={styles.Header}>
         <TouchableOpacity
            onPress={this.goToAccount}
         >
          <Image 
              style={styles.btnBack}
              source={require('../../assets/images/back.png')}
          />
         </TouchableOpacity>
          <Text style={styles.txtEdit}>
              Edit Profile
          </Text>
        </View>
        
        <View>
            <Text style={styles.txtName}>
                Nama Dealer
            </Text>

            <TextInput
                style={styles.inputName}
            />

            <Text style={styles.txtAddress}>
                Alamat Dealer
            </Text>

            <TextInput
                style={styles.inputAddress}
            />

            <Text style={styles.txtPhone}>
                No. Handphone
            </Text>

            <TextInput
                style={styles.inputPhone}
                onChangeText={phone => this.handleChangePhone(phone)}
                value={this.state.phone}
                keyboardType='numeric'
            />

            <Text style={styles.txtEmail}>
                Email
            </Text>
        
        <KeyboardAvoidingView>
            <TextInput
                style={styles.inputEmail}
                onChangeText={email => this.handleChangeEmail(email)}
                value={this.state.email}
                keyboardType='email-address'
            />
        </KeyboardAvoidingView>

            <View style={styles.Areabtn}>
                <TouchableOpacity
                    style={styles.btnSave}
                >
                    <Text style={styles.txtSave}>
                        SIMPAN
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
  </View>
        )
    }
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    Header: {
        width: 412,
        height: 70,
        marginBottom: 24,
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: 32,
        height: 16,
        marginLeft: 16,
        marginTop: 30
    },

    txtEdit: {
        width: 100,
        height: 20,
        marginTop: 25,
        marginLeft: 115,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    txtName: {
        width: 150,
        height: 15,
        marginLeft: 20,
        fontSize: 14,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    inputName: {
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: 24,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 14,
      fontFamily: 'Montserrat-Medium'
    },

    txtAddress: {
        width: 150,
        height: 15,
        marginLeft: 20,
        fontSize: 14,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    inputAddress: {
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: 24,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 14,
      fontFamily: 'Montserrat-Medium'
    },

    txtPhone: {
        width: 150,
        height: 15,
        marginLeft: 20,
        fontSize: 14,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    inputPhone: {
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: 24,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 14,
      fontFamily: 'Montserrat-Medium'
    },

    txtEmail: {
        width: 150,
        height: 15,
        marginLeft: 20,
        fontSize: 14,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },
    
    inputEmail: {
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: 120,
      marginLeft: 20,
      marginRight: 20,
      fontSize: 14,
      fontFamily: 'Montserrat-Medium'
    },

    Areabtn: {
     justifyContent: 'center',
     alignSelf: 'center'
    },

    btnSave: {
        width: 100,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#0064D0'
    },

    txtSave:{
        width: 100,
        height: 18,
        marginTop: 11,
        marginLeft: 21,
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-SemiBold',
    }
})
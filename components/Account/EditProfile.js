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
import normalize from 'react-native-normalize'
import axios from 'axios'

class EditProfile extends Component{
    constructor(props){
        super(props)
        this.state = {
         dealername: '',
         isNameFilled: false,
         errorName: '',
         address: '',
         isAddressFilled: false,
         errorAddress: '',
         email: '',
         isEmaillFilled: false,
         errorEmail: '',
         phone: '',
         isPhoneFilled: false,
         errorPhone: '',
        }
    }
    
goToAccount = () => {
    this.props.navigation.navigate('Account')
  }

dataSaved = () => {
    this.props.navigation.navigate('Account')
    alert('Data berhasil diubah!')
}

handleChangeName = (dealername) => {
    this.setState({dealername})
    let reg = /([^\s])/
    if(reg.test(dealername) === true){
        this.setState({isNameFilled: true, errorName: ''})
    }else{
        this.setState({errorName: 'Tidak boleh kosong'})
    }
}

handleChangeAddress = (address) => {
    this.setState({address})
    let reg = /([^\s])/
    if(reg.test(address) === true){
        this.setState({isAddressFilled: true, errorAddress: ''})
    }else{
        this.setState({errorAddress: 'Tidak boleh kosong'})
    }
}

handleChangePhone = (phone) => {
    this.setState({phone})
    if(phone.length >= 11){
        this.setState({isPhoneFilled: true, errorPhone: ''})
    }else{
        this.setState({errorPhone: 'Minimal 11 karakter'})
    }
}

handleChangeEmail = (email) => {
    this.setState({email});
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (reg.test(email) === true) {
        this.setState({isEmailFilled: true, errorEmail: ''})
    } else {
        this.setState({errorEmail: 'Format: Example@adira.com'})
    }
}


render(){
    const{
        dealername,
        address,
        phone,
        email
     } = this.state

     let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
     let emptyReg = /([^\s])/

     const enabled = 
     (emptyReg.test(dealername) === true) &&
     phone.length >= 11 &&
     (emailReg.test(email) === true) &&
     (emptyReg.test(address) === true)

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
          
          <View style={styles.inputName}>
            <TextInput
                style={styles.txtinName}
                returnKeyType='next'
                value={this.state.dealername}
                onChangeText={dealername => this.handleChangeName(dealername)}
            />
          </View>

            <Text style={styles.txtAddress}>
                Alamat Dealer
            </Text>

          <View style={styles.inputAddress}>
            <TextInput
                style={styles.txtinAddress}
                returnKeyType='next'
                value={this.state.address}
                onChangeText={address => this.handleChangeAddress(address)}
            />
          </View>

            <Text style={styles.txtPhone}>
                No. Handphone
            </Text>

          <View style={styles.inputPhone}>
            <TextInput
                style={styles.txtinPhone}
                keyboardType={'numeric'}
                returnKeyType='next'
                maxLength={13}
                value={this.state.phone}
                onChangeText={phone => this.handleChangePhone(phone)}
            />
          </View>

            <Text style={styles.txtEmail}>
                Email
            </Text>
        
          <View style={styles.inputEmail}>
            <TextInput
                style={styles.txtinEmail}
                keyboardType='email-address'
                returnKeyType='next'
                value={this.state.email}
                onChangeText={email => this.handleChangeEmail(email)}
            />
          </View>

            <View style={styles.Areabtn}>
                <TouchableOpacity
                    style={styles.btnSave}
                    onPress={this.dataSaved}
                   // disabled = {!enabled}
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
        width: normalize(380),
        height: normalize(70),
        marginBottom: normalize(24),
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: normalize(32),
        height: normalize(16),
        marginLeft: normalize(16),
        marginTop: normalize(30)
    },

    txtEdit: {
        width: normalize(100),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(107),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    txtName: {
        width: normalize(150),
        height: normalize(15),
        marginLeft: normalize(20),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    inputName: {
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: normalize(24),
      marginLeft: normalize(20),
      marginRight: normalize(20),
      fontSize: normalize(14),
      fontFamily: 'Montserrat-Medium'
    },

    txtinName: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    txtAddress: {
        width: normalize(150),
        height: normalize(15),
        marginLeft: normalize(20),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    inputAddress: {
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: normalize(24),
      marginLeft: normalize(20),
      marginRight: normalize(20),
      fontSize: normalize(14),
      fontFamily: 'Montserrat-Medium'
    },

    txtinAddress: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    txtPhone: {
        width: normalize(150),
        height: normalize(15),
        marginLeft: normalize(20),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    inputPhone: {
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: normalize(24),
      marginLeft: normalize(20),
      marginRight: normalize(20),
      fontSize: normalize(14),
      fontFamily: 'Montserrat-Medium'
    },

    txtinPhone: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    txtEmail: {
        width: normalize(150),
        height: normalize(15),
        marginLeft: normalize(20),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },
    
    inputEmail: {
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: normalize(120),
      marginLeft: normalize(20),
      marginRight: normalize(20),
      fontSize: normalize(14),
      fontFamily: 'Montserrat-Medium'
    },

    txtinEmail: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    Areabtn: {
     justifyContent: 'center',
     alignSelf: 'center'
    },

    btnSave: {
        width: normalize(100),
        height: normalize(40),
        borderRadius: normalize(20),
        backgroundColor: '#0064D0'
    },

    txtSave:{
        width: normalize(100),
        height: normalize(18),
        marginTop: normalize(11),
        marginLeft: normalize(26),
        fontSize: normalize(14),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-SemiBold',
    }
})
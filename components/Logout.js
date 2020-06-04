import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native'

class Logout extends Component{
    constructor(props){
        super(props)
        this.state = {
         isPressed: false
        }
    }
    
  goToLogin = () => {
    this.props.navigation.navigate('Login')
  }
  goToAbout = () => {
    this.props.navigation.navigate('About')
  }
  goToPrivacy = () => {
    this.props.navigation.navigate('PrivacyPolicy')
  }
  goToTerms = () => {
    this.props.navigation.navigate('Terms')
  }
  goToFAQ = () => {
    this.props.navigation.navigate('FAQ')
  }

render(){
    return(
    <View style={styles.container}>
        <View style={styles.Header}>
          <Image 
              style={styles.momotor}
              source={require('../assets/images/Momotor.id.png')}
          />
        </View>

    <View style={styles.middle}>
      <TouchableOpacity style={styles.btnAbout}
        onPress={this.goToAbout}
      >
        <Image
        style={styles.imgAbout}
        source={require('../assets/images/about.png')}
        />

        <Text style={styles.txtAbout}>
          Tentang Kami
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnPrivacy}
        onPress={this.goToPrivacy}
      >
        <Image
        style={styles.imgPrivacy}
        source={require('../assets/images/privacypolicy.png')}
        />

        <Text style={styles.txtPrivacy}>
          Kebijakan Privasi
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnTerms}
        onPress={this.goToTerms}
      >
        <Image
        style={styles.imgTerms}
        source={require('../assets/images/termscondition.png')}
        />

        <Text style={styles.txtTerms}>
          Syarat dan Ketentuan
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnFaq}
        onPress={this.goToFAQ}
      >
        <Image
        style={styles.imgFaq}
        source={require('../assets/images/faq.png')}
        />

        <Text style={styles.txtFaq}>
          Pertanyaan Umum
        </Text>
      </TouchableOpacity>


      <Text style={styles.txtVer}>
        App version 0.0
      </Text>

      <TouchableOpacity
        style={styles.btnLogin}
        onPress={this.goToLogin}>
        <Text style={styles.txtLogin}>
          Masuk
        </Text>
      </TouchableOpacity>
    </View>
  </View>
        )
    }
}

export default Logout

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    Header: {
        width: 412,
        height: 65,
        marginBottom: 24,
        backgroundColor: '#0064D0',
    },

    momotor: {
        width: 143.52,
        height: 21.87,
        marginTop: 25,
        marginBottom: 22.13,
        marginLeft: 16,
        marginRight: 200.48
    },

    btnAbout: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: 17,
      marginLeft: 25,
      marginRight: 25
    },

    imgAbout: {
      width: 35,
      height: 25,
    },

    txtAbout: {
      width: 200,
      height: 21,
      marginLeft: 16,
      marginBottom: 18,
      fontSize: 16,
      fontFamily: 'Montserrat-Medium'
    },

    btnPrivacy: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: 16,
      marginLeft: 25,
      marginRight: 25
    },

    imgPrivacy: {
      width: 21,
      height: 25,
      marginLeft: 6
    },

    txtPrivacy: {
      width: 300,
      height: 20,
      marginLeft: 24,
      marginBottom: 18,
      fontSize: 16,
      fontFamily: 'Montserrat-Medium'
    },

    btnTerms: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: 17,
      marginLeft: 25,
      marginRight: 25
    },

    imgTerms: {
      width: 25,
      height: 26,
      marginLeft: 7
    },

    txtTerms: {
      width: 200,
      height: 20,
      marginLeft: 20,
      marginBottom: 18,
      fontSize: 16,
      fontFamily: 'Montserrat-Medium'
    },

    btnFaq: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: 20,
      marginLeft: 25,
      marginRight: 25
    }, 

    imgFaq: {
      width: 30,
      height: 23,
      marginLeft: 6
    },

    txtFaq: {
      width: 200,
      height: 20,
      marginLeft: 17,
      marginBottom: 18,
      fontSize: 16,
      fontFamily: 'Montserrat-Medium'
    },

    txtVer: {
      width: 410,
      height: 20,
      fontSize: 14,
      marginBottom: 16,
      color: '#7F7F7F',
      textAlign: 'center',
      fontFamily: 'Montserrat-Medium',
    },

    btnLogin: {
      width: 360,
      height: 48,
      borderWidth: 2,
      borderRadius: 6,
      marginLeft: 25,
      borderColor: '#0064D0',
    },

    txtLogin: {
        width: 350,
        height: 20, 
        fontSize: 16,
        marginTop: 10,
        color: '#0064D0',
        textAlign: 'center',
        fontFamily: 'Montserrat-SemiBold'
    },
})
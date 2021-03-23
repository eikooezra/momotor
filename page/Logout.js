import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native'
import normalize from 'react-native-normalize';

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
        width: normalize(412),
        height: normalize(65),
        marginBottom: normalize(24),
        backgroundColor: '#0064D0',
    },

    momotor: {
        width: normalize(144),
        height: normalize(24),
        marginTop: normalize(25),
        marginBottom: normalize(22.13),
        marginLeft: normalize(16),
        marginRight: normalize(200.48)
    },

    btnAbout: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: normalize(17),
      marginLeft: normalize(25),
      marginRight: normalize(25)
    },

    imgAbout: {
      width: normalize(35),
      height: normalize(25),
    },

    txtAbout: {
      width: normalize(200),
      height: normalize(21),
      marginLeft: normalize(16),
      marginBottom: normalize(18),
      fontSize: normalize(16),
      fontFamily: 'Montserrat-Medium'
    },

    btnPrivacy: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: normalize(16),
      marginLeft: normalize(25),
      marginRight: normalize(25)
    },

    imgPrivacy: {
      width: normalize(21),
      height: normalize(25),
      marginLeft: normalize(6)
    },

    txtPrivacy: {
      width: normalize(300),
      height: normalize(20),
      marginLeft: normalize(24),
      marginBottom: normalize(18),
      fontSize: normalize(16),
      fontFamily: 'Montserrat-Medium'
    },

    btnTerms: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: normalize(17),
      marginLeft: normalize(25),
      marginRight: normalize(25)
    },

    imgTerms: {
      width: normalize(25),
      height: normalize(26),
      marginLeft: normalize(7)
    },

    txtTerms: {
      width: normalize(200),
      height: normalize(20),
      marginLeft: normalize(20),
      marginBottom: normalize(18),
      fontSize: normalize(16),
      fontFamily: 'Montserrat-Medium'
    },

    btnFaq: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#E3DFDF',
      marginBottom: normalize(20),
      marginLeft: normalize(25),
      marginRight: normalize(25)
    }, 

    imgFaq: {
      width: normalize(30),
      height: normalize(23),
      marginLeft: normalize(6)
    },

    txtFaq: {
      width: normalize(200),
      height: normalize(20),
      marginLeft: normalize(17),
      marginBottom: normalize(18),
      fontSize: normalize(16),
      fontFamily: 'Montserrat-Medium'
    },

    txtVer: {
      width: normalize(380),
      height: normalize(20),
      fontSize: normalize(14),
      marginBottom: normalize(16),
      color: '#7F7F7F',
      textAlign: 'center',
      fontFamily: 'Montserrat-Medium',
    },

    btnLogin: {
      width: normalize(360),
      height: normalize(48),
      borderWidth: normalize(2),
      borderRadius: normalize(6),
      marginLeft: normalize(25),
      borderColor: '#0064D0',
    },

    txtLogin: {
        width: normalize(340),
        height: normalize(20), 
        fontSize: normalize(16),
        marginTop: normalize(10),
        color: '#0064D0',
        textAlign: 'center',
        fontFamily: 'Montserrat-SemiBold'
    },
})
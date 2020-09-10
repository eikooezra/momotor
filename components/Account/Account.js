import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native'
import normalize from 'react-native-normalize'

class Account extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

  goToLogout = () => {
     this.props.navigation.navigate('Logout')
  }
  goToEdit = () => {
    this.props.navigation.navigate('EditProfile')
  }
  goToSettings = () => {
    this.props.navigation.navigate('Settings')
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
          <View style={styles.insideHeader}>
            <Image 
                style={styles.momotor}
                source={require('../../assets/images/Momotor.id.png')}
            />

            <TouchableOpacity
              onPress={this.goToSettings}
            >
              <Image
                style={styles.btnSettings}
                source={require('../../assets/images/settings.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.upperBar}>
              <Image
                style={styles.dealerLogo}
                source={require('../../assets/images/dealer1.png')}
              />
              
              <View style={styles.infoArea}>
                <Text style={styles.name}>
                  Zemly Octo Pratama
                </Text>

                <Text style={styles.phone}>
                  +6281234567890
                </Text>

                <View style={styles.address}>
                  <Image
                  style={styles.imgLoc}
                  source={require('../../assets/images/location.png')}
                  />

                  <Text style={styles.txtAddress}>
                    Jl. Kemanggisan Raya 15, Jakarta
                    Barat, DKI Jakarta, Indonesia
                  </Text>
                </View>
              </View>
              
              <TouchableOpacity
                onPress={this.goToEdit}
              >
                <Image
                 style={styles.btnEdit}
                 source={require('../../assets/images/edit.png')}
                />
              </TouchableOpacity>
          </View>
    </View>

    <View style={styles.middle}>
      <TouchableOpacity style={styles.btnAbout}
        onPress={this.goToAbout}
      >
        <Image
        style={styles.imgAbout}
        source={require('../../assets/images/about.png')}
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
        source={require('../../assets/images/privacypolicy.png')}
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
        source={require('../../assets/images/termscondition.png')}
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
        source={require('../../assets/images/faq.png')}
        />

        <Text style={styles.txtFaq}>
          Pertanyaan Umum
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={this.goToLogout}
      >
        <Text style={styles.txtKeluar}>
          Keluar
        </Text>
      </TouchableOpacity>

      <Text style={styles.txtVer}>
        App version 0.0
      </Text>
    </View>

  
  </View>
        )
    }
}

export default Account

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    Header: {
        width: normalize(380),
        height: normalize(130),
        marginBottom: normalize(104),
        borderBottomLeftRadius: normalize(25),
        borderBottomRightRadius: normalize(25),
        backgroundColor: '#0064D0',
    },

    insideHeader: {
      flexDirection: 'row'
    },

    momotor: {
        width: normalize(145),
        height: normalize(24),
        marginTop: normalize(40),
        marginBottom: normalize(22.13),
        marginLeft: normalize(16),
        marginRight: normalize(185)
    },

    btnSettings: {
      width: normalize(20),
      height: normalize(20),
      marginTop: normalize(40),
    },
    
    upperBar: {
        height: normalize(120),
        borderRadius: 10,
        marginLeft: normalize(16),
        marginRight: normalize(16),
        elevation: 5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    dealerLogo: {
        width: normalize(84),
        height: normalize(84),
        marginTop: normalize(16),
        marginBottom: normalize(41),
        marginLeft: normalize(20)
    },

    infoArea:{
      marginLeft: normalize(10)
    },

    name: {
        width: normalize(174),
        height: normalize(20),
        marginTop: normalize(16),
        marginBottom: normalize(8),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold'
    },

    phone: {
        width: normalize(116),
        height: normalize(18),
        marginBottom: normalize(8),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    address: {
      flexDirection: 'row'
    },

    imgLoc: {
      width: normalize(10),
      height: normalize(13)
    },

    txtAddress: {
      width: normalize(170),
      height: normalize(34),
      fontSize: normalize(12),
      marginLeft: normalize(9),
      color: '#7F7F7F',
      fontFamily: 'Montserrat-Medium'
    },

    btnEdit: {
        width: normalize(34),
        height: normalize(34),
        marginTop: normalize(6),
        marginBottom: normalize(91),
        marginRight: normalize(7),
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
      marginBottom: normalize(102),
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

    txtKeluar: {
      width: normalize(400),
      height: normalize(20), 
      fontSize: normalize(16),
      marginBottom: normalize(5),
      marginLeft: normalize(170),
      color: '#0064D0',
      fontFamily: 'Montserrat-SemiBold'
    },

    txtVer: {
      width: normalize(400),
      height: normalize(20),
      fontSize: normalize(14),
      marginLeft: normalize(145),
      color: '#7F7F7F',
      fontFamily: 'Montserrat-Medium',
    }
})
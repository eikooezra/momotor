import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native'

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
        width: 412,
        height: 140,
        marginBottom: 104,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#0064D0',
    },

    insideHeader: {
      flexDirection: 'row'
    },

    momotor: {
        width: 143.52,
        height: 21.87,
        marginTop: 40,
        marginBottom: 22.13,
        marginLeft: 16,
        marginRight: 200.48
    },

    btnSettings: {
      width: 20,
      height: 20,
      marginTop: 40,
    },
    
    upperBar: {
        width: 380,
        height: 133,
        borderRadius: 10,
        marginLeft: 16,
        marginRight: 16,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    dealerLogo: {
        width: 84,
        height: 84,
        marginTop: 16,
        marginBottom: 41,
        marginLeft: 20
    },

    infoArea:{
      marginLeft: 10
    },

    name: {
        width: 174,
        height: 20,
        marginTop: 16,
        marginBottom: 8,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold'
    },

    phone: {
        width: 116,
        height: 18,
        marginBottom: 8,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    address: {
      flexDirection: 'row'
    },

    imgLoc: {
      width: 10,
      height: 13
    },

    txtAddress: {
      width: 202,
      height: 34,
      fontSize: 12,
      marginLeft: 9,
      color: '#7F7F7F',
      fontFamily: 'Montserrat-Medium'
    },

    btnEdit: {
        width: 34,
        height: 34,
        marginTop: 6,
        marginBottom: 91,
        marginRight: 7,
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
      marginBottom: 102,
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

    txtKeluar: {
      width: 400,
      height: 20, 
      fontSize: 16,
      marginBottom: 5,
      color: '#0064D0',
      textAlign: 'center',
      fontFamily: 'Montserrat-SemiBold'
    },

    txtVer: {
      width: 400,
      height: 20,
      fontSize: 14,
      color: '#7F7F7F',
      textAlign: 'center',
      fontFamily: 'Montserrat-Medium',
    }
})
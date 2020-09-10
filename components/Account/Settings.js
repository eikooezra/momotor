import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import normalize from 'react-native-normalize'

class Settings extends Component{
    constructor(props){
        super(props)
        this.state = {
            isSwitchOn: false
        }
    }
    
  goToAccount = () => {
    this.props.navigation.navigate('Account')
  }

  onToggle(isOn){
    console.log("Changed to" + isOn)
  }

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
          <Text style={styles.txtSettings}>
              Pengaturan
          </Text>
        </View>

        <View>
            <TouchableOpacity>
                <Text style={styles.txtSandi}>
                    Kata Sandi
                </Text>
            </TouchableOpacity>

          <View style={styles.notif}>
                <Text style={styles.txtNotif}>
                    Notifikasi
                </Text>

                <ToggleSwitch
                    onColor='#0064D0'
                    isOn={this.state.isSwitchOn}
                    onToggle={isSwitchOn => {
                        this.setState({isSwitchOn})
                        this.onToggle({isSwitchOn})
                    }}
                    />
          </View>

            <TouchableOpacity>
                <Text style={styles.txtKritik}>
                    Kirim kritik dan saran
                </Text>
            </TouchableOpacity>
        </View>
  </View>
        )
    }
}

export default Settings

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

    txtSettings: {
        width: normalize(100),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(107),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    txtSandi: {
        width: normalize(100),
        height: normalize(18),
        marginLeft: normalize(20),
        marginBottom: normalize(36),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-Medium'
    },

    notif: {
        flexDirection: 'row'
    },

    txtNotif: {
        width: normalize(100),
        height: normalize(18),
        marginLeft: normalize(20),
        marginBottom: normalize(36),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-Medium'
    },

    notifToggle: {
        marginLeft: normalize(20)
    },

    txtKritik: {
        width: normalize(100),
        height: normalize(18),
        marginLeft: normalize(20),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-Medium'
    },
})
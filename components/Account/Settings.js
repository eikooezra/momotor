import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'

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

    txtSettings: {
        width: 100,
        height: 20,
        marginTop: 25,
        marginLeft: 115,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    txtSandi: {
        width: 100,
        height: 18,
        marginLeft: 20,
        marginBottom: 36,
        fontSize: 16,
        fontFamily: 'Montserrat-Medium'
    },

    notif: {
        flexDirection: 'row'
    },

    txtNotif: {
        width: 100,
        height: 18,
        marginLeft: 20,
        marginBottom: 36,
        fontSize: 16,
        fontFamily: 'Montserrat-Medium'
    },

    notifToggle: {
        marginLeft: 20
    },

    txtKritik: {
        width: 100,
        height: 18,
        marginLeft: 20,
        fontSize: 16,
        fontFamily: 'Montserrat-Medium'
    },
})
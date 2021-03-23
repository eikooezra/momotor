import React, {Component} from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native'
import normalize from 'react-native-normalize'

class Notification extends Component{
    constructor(props){
        super(props)
        this.state = {
       
        }
    }
    


    render(){
      return(
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.notif}>
            <Image 
            style={styles.imgNotif}
            source={require('../../assets/images/aerox2.png')}
            />
          
          <View style={styles.txtContainer}>
            <Text style={styles.notifJC}>
              Selamat! Anda menang 
              Produk "Yamaha Mio So..
            </Text>
  
            <Text style={styles.note}>
              Kami akan menghubungi anda 
              untuk melanjutkan proses transaksi
            </Text>
          </View>
  
          <Text style={styles.clock}>
            13.00
          </Text>
          </View>
  
          <View style={styles.notif}>
            <Image 
            style={styles.imgNotif}
            source={require('../../assets/images/aerox2.png')}
            />
          
          <View style={styles.txtContainer}>
            <Text style={styles.notifJC}>
              Ayo! Naikkan Tawaranmu
              pada Produk "Yamaha Mi..
            </Text>
  
            <Text style={styles.note}>
              Silakan cek menu Jual Cepat
            </Text>
          </View>
  
          <Text style={styles.clock}>
            14.00
          </Text>
          </View>
  
          <View style={styles.notif}>
            <Image 
            style={styles.imgNotif}
            source={require('../../assets/images/aerox2.png')}
            />
          
          <View style={styles.txtContainer}>
            <Text style={styles.notifJC}>
              Ups! Produk "Yamaha 
              Mio Soul" Telah berakhir
            </Text>
  
            <Text style={styles.note}>
              Silakan cek menu Jual Cepat
            </Text>
          </View>
  
          <Text style={styles.clock}>
            13.00
          </Text>
          </View>

        </ScrollView>
    </View>
          )
      }
  }
  
  export default Notification
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: 'white'
      },
  
      notif: {
        flexDirection: 'row',
        marginTop: normalize(25),
      },
  
      imgNotif: {
        marginLeft: normalize(34),
        width: normalize(62),
        height: normalize(62),
      },
  
      txtContainer: {
        marginLeft: normalize(11),
        alignContent: 'center'
      },
  
      notifJC: {
        marginRight: normalize(160),
        marginBottom: normalize(6),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold'
      },
  
      note: {
        marginRight: normalize(160),
        marginBottom: normalize(24),
        fontSize: normalize(12),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
      },
  
      clock: {
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Regular'
      }
     
  })
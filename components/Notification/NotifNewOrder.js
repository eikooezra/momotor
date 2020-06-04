import React, {Component} from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native'

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
            <Text style={styles.notifBerhasil}>
              Pesanan dengan nama
              HARYANTO berhasil diaju..
            </Text>
  
            <Text style={styles.orderID}>
              Order ID UMCXXXXXXXXX
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
            <Text style={styles.notifBerhasil}>
              Pesanan dengan nama
              HARYANTO telah disetuj..
            </Text>
  
            <Text style={styles.noteGagal}>
              Silakan unduh dokumen "Pemesanan
              Pembelian" pada Detail Pesanan
            </Text>

            <Text style={styles.orderID}>
              Order ID UMCXXXXXXXXX
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
            <Text style={styles.notifBerhasil}>
              Pesanan dengan nama
              HARYANTO tidak disetuj..
            </Text>
  
            <Text style={styles.orderID}>
              Order ID UMCXXXXXXXXX
            </Text>
          </View>
  
          <Text style={styles.clock}>
            30 Jan
          </Text>
          </View>

          <View style={styles.notif}>
            <Image 
            style={styles.imgNotif}
            source={require('../../assets/images/aerox2.png')}
            />
          
          <View style={styles.txtContainer}>
            <Text style={styles.notifBerhasil}>
              Pesanan dengan nama
              HARYANTO Ditunda.
            </Text>
  
            <Text style={styles.noteGagal}>
              Mohon upload kekurangan dokumen
              untuk melanjutkan proses.
            </Text>

            <Text style={styles.orderID}>
              Order ID UMCXXXXXXXXX
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
        marginTop: 25,
      },
  
      imgNotif: {
        marginLeft: 34,
        width: 62,
        height: 62,
      },
  
      txtContainer: {
        marginLeft: 11,
        alignContent: 'center'
      },
  
      notifBerhasil: {
        marginRight: 160,
        marginBottom: 6,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold'
      },

      noteGagal: {
        marginRight: 160,
        fontSize: 12,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
      },
  
      orderID: {
        marginBottom: 24,
        fontSize: 12,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
      },
  
      clock: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
      }
     
  })
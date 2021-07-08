import React, { useState, useEffect } from 'react'
import { } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground
} from 'react-native'
import normalize from 'react-native-normalize';
import { NewestOrderComponent } from '../../components/components';
import { Fire } from '../../config';
import { getData } from '../../utils/localstorage/localstorage';

const Home = ({ navigation }) => {
  const [newOrder, setNewOrder] = useState([])
  useEffect(() => {
    getData('user').then(res => {
      const uid = res.uid
      Fire.database()
        .ref('order/' + uid + '/')
        .once('value')
        .then(res => {
          console.log('data: ', res.val())
          if (res.val()) {
            setNewOrder(Object.values(res.val()))
          }
        })
        .catch(err => {
          console.log('error: ', err)
        })
    })
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#0064D0' />
      <View style={styles.Header}>
        <Image
          style={styles.momotor}
          source={require('../../assets/images/Momotor.id.png')}
        />
        <View style={styles.upperBar}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DaftarProduk')}
            activeOpacity={0.1}
          >
            <Image
              style={styles.btnList}
              source={require('../../assets/images/list.png')}
            />
            <Text style={styles.txtList}>
              Daftar
              Produk
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('DaftarPesanan')}
          >
            <Image
              style={styles.btnClist}
              source={require('../../assets/images/checklist.png')}
            />
            <Text style={styles.txtClist}>
              Daftar
              Pesanan
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Calculator')}
          >
            <Image
              style={styles.btnCalc}
              source={require('../../assets/images/calculator.png')}
            />
            <Text style={styles.txtCalc}>
              Kalkulator
              Kredit
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.txtPesananTerbaru}>
        <Text style={styles.txtPesanan}>
          Pesanan Terbaru
        </Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {newOrder.map(item => {
          return (
            <NewestOrderComponent
              key={item.id}
              image={item.data_motor.images.image}
              name={item.data_customer.custName}
              product={item.data_motor.product}
              date={item.date}
              status={item.status}
              onPressProduct={() => navigation.navigate('DetailPesanan', item)}
              onPressAll={() => navigation.navigate('DaftarPesanan')}
            />
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  Header: {
    width: normalize(380),
    height: normalize(130),
    marginBottom: normalize(90),
    borderBottomLeftRadius: normalize(25),
    borderBottomRightRadius: normalize(25),
    backgroundColor: '#0064D0',
  },

  momotor: {
    width: normalize(145),
    height: normalize(24),
    marginTop: normalize(40),
    marginBottom: normalize(22.13),
    marginLeft: normalize(20),
    marginRight: normalize(200.48),
  },

  upperBar: {
    height: normalize(120),
    borderRadius: normalize(10),
    marginLeft: normalize(16),
    marginRight: normalize(16),
    marginBottom: normalize(15),
    elevation: 5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  btnList: {
    width: normalize(54),
    height: normalize(54),
    marginTop: normalize(20),
    marginBottom: normalize(10),
    marginLeft: normalize(50)
  },

  txtList: {
    width: normalize(60),
    fontSize: normalize(13),
    marginLeft: normalize(45),
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    color: '#000000',
  },

  btnClist: {
    width: normalize(54),
    height: normalize(54),
    marginTop: normalize(20),
    marginBottom: normalize(10),
    marginLeft: normalize(19)
  },

  txtClist: {
    width: normalize(60),
    fontSize: normalize(13),
    marginLeft: normalize(15),
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    color: '#000000',
  },

  btnJualCpt: {
    width: normalize(54),
    height: normalize(54),
    marginTop: normalize(20),
    marginBottom: normalize(10),
    marginLeft: normalize(16)
  },

  txtJualCpt: {
    width: normalize(58),
    fontSize: normalize(13),
    marginLeft: normalize(12),
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    color: '#000000',
  },

  btnCalc: {
    width: normalize(54),
    height: normalize(54),
    marginTop: normalize(20),
    marginBottom: normalize(10),
    marginLeft: normalize(13),
    marginRight: normalize(40)
  },

  txtCalc: {
    width: normalize(75),
    fontSize: normalize(13),
    marginRight: normalize(45),
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    color: '#000000',
  },

  txtPesananTerbaru: {
    marginBottom: normalize(20),
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtPesanan: {
    width: normalize(150),
    fontSize: normalize(16),
    marginLeft: normalize(60),
    marginRight: normalize(30),
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000'
  },

  txtJual: {
    width: normalize(110),
    fontSize: normalize(16),
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000'
  },

  scrollContainer: {
    height: normalize(400)
  },

  imgContainer: {
    width: normalize(348),
    height: normalize(246),
    borderRadius: 18,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
  },

  txtLihatContainer: {
    marginLeft: normalize(155),
    marginBottom: normalize(40),
  },

  txtLihat: {
    fontSize: normalize(14),
    fontFamily: 'Montserrat-SemiBold',
    color: '#0064D0'
  },

  //inside image background
  itemCon: {
    width: normalize(348),
    height: normalize(108),
    marginTop: normalize(140),
    borderTopRightRadius: 70,
    borderTopLeftRadius: 120,
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: '#0064D0'
  },

  detailsCon: {
    marginTop: normalize(25),
    marginLeft: normalize(16)
  },

  txtName: {
    marginBottom: normalize(2),
    fontSize: normalize(18),
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF'
  },

  txtModel: {
    marginBottom: normalize(6),
    fontSize: normalize(20),
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF'
  },

  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  txtDate: {
    marginTop: normalize(4),
    fontSize: normalize(12),
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF'
  },

  pill: {
    width: normalize(100),
    height: normalize(25),
    marginRight: normalize(16),
    borderRadius: 10,
    backgroundColor: '#D3942F'
  },

  txtStatus: {
    alignSelf: 'center',
    paddingVertical: 4,
    fontSize: normalize(12),
    fontFamily: 'Montserrat-Bold',
    color: '#FFFFFF'
  }
})
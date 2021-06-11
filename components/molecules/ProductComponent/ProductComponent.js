import React, { Component } from 'react'
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import normalize from 'react-native-normalize';
import { Button, Gap } from '../../atoms/atoms';

const images = [
  require('../../../assets/images/vario.png'),
  require('../../../assets/images/vario.png'),
  require('../../../assets/images/vario.png'),
  require('../../../assets/images/vario.png'),
  require('../../../assets/images/vario.png'),
]

const ProductComponent = ({ text, back }) => {

  return (
    <View style={styles.container}>
      <ScrollView>

        <TouchableOpacity onPress={back}>
          <ImageBackground
            style={styles.btnBack}
            source={require('../../../assets/images/back.png')}
          />
        </TouchableOpacity>

        <SliderBox
          images={images}
          sliderBoxHeight={400}
        />


        <View style={styles.content}>

          <View style={styles.status}>
            <Text style={styles.txtStatus}>{text}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.txtModel}>HONDA VARIO 125 CBS EPS ISS</Text>
            <Text style={styles.txtPrice}>Rp. 20.000.000</Text>
          </View>

          <View style={styles.whiteBox}>
            <Text style={styles.detailTitle}>Detail Produk</Text>
            <Text style={styles.txtDetailLeft}>Nama Pemesan</Text>
            <Text style={styles.txtDetailRight}>Sumanto Wijaya</Text>
            <Gap height={12} />
            <Text style={styles.txtDetailLeft}>Kode</Text>
            <Text style={styles.txtDetailRight}>1569825581305</Text>
            <Gap height={12} />
            <Text style={styles.txtDetailLeft}>Kode Referensi</Text>
            <Text style={styles.txtDetailRight}>55555</Text>
            <Gap height={12} />
            <Text style={styles.txtDetailLeft}>Tenor</Text>
            <Text style={styles.txtDetailRight}>12 Bulan</Text>
            <Gap height={12} />
            <Text style={styles.txtDetailLeft}>Tanggal Pembayaran</Text>
            <Text style={styles.txtDetailRight}>21/12/19</Text>
            <Gap height={16} />
          </View>

          <Text style={styles.txtTindakan}>Tindakan</Text>

          <TouchableOpacity style={styles.btnPerbarui}>
            <Text style={styles.txtPerbarui}>Perbarui</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  )
}

export default ProductComponent

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
  },

  btnBack: {
    width: 32,
    height: 16,
    marginLeft: 16,
    marginTop: 30,
    position: 'absolute',
  },

  content: {
    paddingHorizontal: 16,
  },

  status: {
    width: 100,
    height: 25,
    marginVertical: 16,
    borderRadius: 4,
    backgroundColor: '#EAF7EE'
  },

  txtStatus: {
    alignSelf: 'center',
    paddingVertical: 4,
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    color: '#3CB13C'
  },

  section: {
    borderBottomWidth: 1,
    borderBottomColor: '#0000001A'
  },

  txtModel: {
    marginBottom: 5,
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold'
  },

  txtPrice: {
    marginBottom: 12,
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: '#0064D0'
  },

  whiteBox: {
    width: 365,
    marginVertical: 16,
    alignSelf: 'center',
    borderWidth: 0.3,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },

  detailTitle: {
    marginTop: 10,
    marginBottom: 12,
    marginLeft: 16,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold'
  },

  txtDetailLeft: {
    marginLeft: 25,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular'
  },

  txtDetailRight: {
    alignSelf: 'flex-end',
    marginRight: 23,
    marginTop: -16,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold'
  },

  txtTindakan: {
    marginBottom: 12,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold'
  },

  btnPerbarui: {
    marginBottom: 31,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#0064D0',
    backgroundColor: '#FFFFFF'
  },

  txtPerbarui: {
    paddingVertical: 11,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#0064D0'
  }

})
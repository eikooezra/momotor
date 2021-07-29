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
import { Gap } from '../../atoms/atoms';

// const images = [
//   require('../../../assets/images/vario.png'),
//   require('../../../assets/images/vario.png'),
//   require('../../../assets/images/vario.png'),
//   require('../../../assets/images/vario.png'),
//   require('../../../assets/images/vario.png'),
// ]

const ProductComponent = ({
  images,
  status, 
  name, 
  price, 
  location, 
  kilometer, 
  ref_code, 
  year, 
  date,
  desc, 
  back,
  next,
  onPress 
}) => {

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

          <View style={[styles.status, 
            {
              backgroundColor: (status == 'Pending')
                  ? '#FEF2E6'
                  : (status == 'Unapproved')
                      ? '#FBEBEB'
                      : (status == 'Disembunyikan')
                          ? '#B7B7B7'
                          : '#EAF7EE'
          },
          ]}>
            <Text style={[styles.txtStatus, {
                                color: (status == 'Pending')
                                    ? '#F78103'
                                    : (status == 'Unapproved')
                                        ? '#DD3434'
                                        : (status == 'Disembunyikan')
                                            ? '#FFFFFF'
                                            : '#3CB13C'
                            },
                            ]}>{status}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.txtModel}>{name}</Text>
            <Text style={styles.txtPrice}>{'Rp ' + price}</Text>
          </View>

          <View style={styles.whiteBox}>
            <Text style={styles.detailTitle}>Detail Produk</Text>
            <Text style={styles.txtDetailLeft}>Lokasi</Text>
            <Text style={styles.txtDetailRight}>{location}</Text>
            <Gap height={12} />
            <Text style={styles.txtDetailLeft}>Jarak Tempuh</Text>
            <Text style={styles.txtDetailRight}>{kilometer + ' KM'}</Text>
            <Gap height={12} />
            <Text style={styles.txtDetailLeft}>Kode Referral</Text>
            <Text style={styles.txtDetailRight}>{ref_code}</Text>
            <Gap height={12} />
            <Text style={styles.txtDetailLeft}>Tahun</Text>
            <Text style={styles.txtDetailRight}>{year}</Text>
            <Gap height={12} />
            <Text style={styles.txtDetailLeft}>Tanggal Penambahan</Text>
            <Text style={styles.txtDetailRight}>{date}</Text>
            <Gap height={16} />
          </View>

          <View style={styles.whiteBox}>
            <Text style={styles.detailTitle}>Deskripsi</Text>
            <Text style={styles.txtDetailLeft}>{desc}</Text>
            <Gap height={16}/>
          </View>

          <Text style={styles.txtTindakan}>Tindakan</Text>

          <TouchableOpacity 
            style={styles.btnPerbarui}
            onPress={onPress}
          >
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
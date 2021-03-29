import React, {useState} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native'
import normalize from 'react-native-normalize';

const Home = ({navigation}) => {
    
    const [showJual, setShowJual] = useState(true)
    const [showPesanan, setShowPesanan] = useState(true)

    //Homepage tab
    const toggleShowJual = () => {
      if(showJual === false) {
        setShowJual({showJual: showPesanan, showPesanan: !showJual})
      }else{
        setShowPesanan({showPesanan: !showJual, showJual: showJual})
      }
    }

    const toggleShowPesanan = () => {
      if(showPesanan === false) {
        setShowPesanan({showPesanan: showJual, showPesanan: !showPesanan})
      }else{
        setShowJual({showJual: !showPesanan, showJual: showPesanan})
      }
    }

    return(
    <View style={styles.container}>
      <StatusBar backgroundColor='#0064D0'/>
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
                onPress={() => navigation.navigate('JualCepat')}
              >
                  <Image
                    style={styles.btnJualCpt}
                    source={require('../../assets/images/motor.png')}
                  />
                  <Text style={styles.txtJualCpt}>
                    Jual
                    Cepat
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

            <View style={styles.dblTxtContainer}>
              <TouchableOpacity
                onPress={toggleShowPesanan}
              >
                <Text style={[styles.txtPesanan, {
                    color: (showPesanan === true) ? '#000000' : '#7F7F7F'
                }
                ]}>
                    Pesanan Terbaru
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={toggleShowJual}
              >
                <Text style={[styles.txtJual, {
                    color: (showPesanan === true) ? '#7F7F7F' : '#000000'
                }
                ]}>
                    Jual Cepat
                </Text>
              </TouchableOpacity>
            </View>

            <View>
                {showPesanan && <ShowPesanan/> || showJual && <ShowJual/>}
            </View>
        </View>
        )
}

export default Home

export const ShowJual = () => {
    return (
      <ScrollView style={styles.scrollContainer}>
                  <TouchableOpacity style={styles.btnImg}>
                    <Image
                      style={styles.imgContainer}
                      source={require('../../assets/images/caferacer.png')}
                    >

                    </Image>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.btnImg}>
                    <Image
                      style={styles.imgContainer}
                      source={require('../../assets/images/caferacer.png')}
                    >

                    </Image>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btnImg}>
                    <Image
                      style={styles.imgContainer}
                      source={require('../../assets/images/caferacer.png')}
                    >

                    </Image>
                  </TouchableOpacity>

                  <View style={styles.txtLihatContainer}>
                    <TouchableOpacity
                    >
                      <Text style={styles.txtLihat}>
                        Lihat Semua
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
    );
  }

export const ShowPesanan = () => {
    return (
      <ScrollView style={styles.scrollContainer}>
                  <TouchableOpacity style={styles.btnImg}>
                    <Image
                      style={styles.imgContainer}
                      source={require('../../assets/images/vario.png')}
                    >

                    </Image>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.btnImg}>
                    <Image
                      style={styles.imgContainer}
                      source={require('../../assets/images/vario.png')}
                    >

                    </Image>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btnImg}>
                    <Image
                      style={styles.imgContainer}
                      source={require('../../assets/images/vario.png')}
                    >

                    </Image>
                  </TouchableOpacity>

                  <View style={styles.txtLihatContainer}>
                    <TouchableOpacity
                    >
                      <Text style={styles.txtLihat}>
                        Lihat Semua
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
    );
  }

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
        marginLeft: normalize(20)
    },
    
    txtList: {
        width: normalize(60),
        fontSize: normalize(13),
        marginLeft: normalize(15),
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
    },

    btnClist: {
        width: normalize(54),
        height: normalize(54),
        marginTop: normalize(20),
        marginBottom: normalize(10),
        marginLeft: normalize(16)
    },

    txtClist: {
        width: normalize(60),
        fontSize: normalize(13),
        marginLeft: normalize(12),
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
        marginLeft: normalize(13)
    },

    txtCalc: {
        width: normalize(75),
        fontSize: normalize(13),
        marginRight: normalize(10),
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
    },

    dblTxtContainer: {
        marginBottom: normalize(20),
        flexDirection: 'row'
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

    btnImg: {
        
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
    }
})
import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
         isPressed: false
        }
    }

    //navigation
    goToProductList = () => {
        this.props.navigation.navigate('DaftarProduk')
    }
    goToOrderList = () => {
        this.props.navigation.navigate('DaftarPesanan')
        console.log('hehe')
    }
    goToJualCpt = () => {
        this.props.navigation.navigate('JualCepat')
    }
    goToCalc = () => {
        this.props.navigation.navigate('Calculator')
    }
     goToHome = () => {
        this.props.navigation.navigate('Home')
    }

render(){
    return(
    <View style={styles.container}>
      <StatusBar backgroundColor='#0064D0'/>
        <View style={styles.Header}>
         {/* <Svg>
          <Circle
              cx={415 / 2}
              cy={`-${898 - 160 + 2}`}
              r="898.5"
              fill="#0064D0"
              strokeWidth="2"
          />
          </Svg> */}
          <Image 
              style={styles.momotor}
              source={require('../../assets/images/Momotor.id.png')}
          /> 
          <View style={styles.upperBar}>
              <TouchableOpacity
                onPress={this.goToProductList}
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
                onPress={this.goToOrderList}
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
                onPress={this.goToJualCpt}
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
                onPress={this.goToCalc}
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
                // onPress={this.goToNewOrder}
              >
                <Text style={[styles.txtPesanan, {
                    color: (this.state.isPressed === true) ? '#000000' : '#7F7F7F'
                }
                ]}>
                    Pesanan Terbaru
                </Text>
              </TouchableOpacity>
                            
              <TouchableOpacity>
                <Text style={[styles.txtJual, {
                    color: (this.state.isPressed === true) ? '#000000' : '#7F7F7F'
                }
                ]}>
                    Jual Cepat
                </Text>
              </TouchableOpacity>
            </View>
                
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
                </ScrollView>
        </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: wp(100),
        display: 'flex'
    },

    Header: {
        width: wp(100),
        height: hp(18),
        marginBottom: 90,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#0064D0',
    },

    momotor: {
        width: wp(36),
        height: hp(3),
        marginTop: 40,
        marginBottom: 22.13,
        marginLeft: 20,
        marginRight: 200.48,
    },
    
    upperBar: {
        height: hp(17),
        borderRadius: 10,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 15,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    btnList: {
        width: wp(13.7),
        height: hp(7.5),
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 22,
        marginRight: 40,
    },
    
    txtList: {
        width: wp(12),
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        marginLeft: 25,
        marginRight: 30,
    },

    btnClist: {
        width: wp(13.7),
        height: hp(7.5),
        marginTop: 20,
        marginBottom: 10,
        marginRight: 40,
    },

    txtClist: {
        width: wp(13),
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        marginRight: 35,
        marginLeft: 3
    },

    btnJualCpt: {
        width: wp(13.7),
        height: hp(7.5),
        marginTop: 20,
        marginBottom: 10,
    },

    txtJualCpt: {
        width: wp(13),
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        marginRight: 30,
    },

    btnCalc: {
        width: wp(13.7),
        height: hp(7.5),
        marginTop: 20,
        marginBottom: 10,
        marginRight: 30,
        marginLeft: 7,
    },

    txtCalc: {
        width: wp(16),
        fontSize: 12,
        marginRight: 15,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        display: 'flex'
    },

    dblTxtContainer: {
        marginBottom: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    txtPesanan: {
        width: wp(35),
        fontSize: 16,
        marginLeft: 60,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000'
    },

    txtJual: {
        width: wp(25),
        fontSize: 16,
        marginRight: 50,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000'
    },

    scrollContainer: {
        flexGrow: 1,
    },

    btnImg: {
        
    },

    imgContainer: {
        width: wp(92),
        height: hp(50),
        borderRadius: 18,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
    },
})
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
import normalize from 'react-native-normalize';

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
        width: normalize(144),
        height: normalize(22),
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
        marginLeft: normalize(22),
        marginRight: normalize(40),
    },
    
    txtList: {
        width: normalize(46),
        fontSize: normalize(13),
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        marginLeft: normalize(25),
        marginRight: normalize(30),
    },

    btnClist: {
        width: normalize(54),
        height: normalize(54),
        marginTop: normalize(20),
        marginBottom: normalize(10),
        marginRight: normalize(40),
    },

    txtClist: {
        width: normalize(54),
        fontSize: normalize(13),
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        marginRight: normalize(35),
        marginLeft: normalize(3)
    },

    btnJualCpt: {
        width: normalize(54),
        height: normalize(54),
        marginTop: normalize(20),
        marginBottom: normalize(10),
    },

    txtJualCpt: {
        width: normalize(46),
        fontSize: normalize(13),
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        marginRight: normalize(30),
    },

    btnCalc: {
        width: normalize(54),
        height: normalize(54),
        marginTop: normalize(20),
        marginBottom: normalize(10),
        marginRight: normalize(30),
        marginLeft: normalize(7),
    },

    txtCalc: {
        width: normalize(65),
        fontSize: normalize(13),
        marginRight: normalize(15),
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
    },

    dblTxtContainer: {
        marginBottom: normalize(20),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    txtPesanan: {
        width: normalize(138),
        fontSize: normalize(16),
        marginLeft: normalize(60),
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000'
    },

    txtJual: {
        width: normalize(86),
        fontSize: normalize(16),
        marginRight: normalize(50),
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000'
    },

    scrollContainer: {
        flexGrow: 1,
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
})
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
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    txtPesanan: {
        width: normalize(150),
        fontSize: normalize(16),
        marginLeft: normalize(60),
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000'
    },

    txtJual: {
        width: normalize(110),
        fontSize: normalize(16),
        marginRight: normalize(30),
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
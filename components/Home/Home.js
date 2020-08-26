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
        display: 'flex',
        backgroundColor: 'white'
    },

    Header: {
        width: 415,
        height: 145,
        marginBottom: 90,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#0064D0',
        display: 'flex'
    },

    momotor: {
        width: 144,
        height: 22,
        marginTop: 40,
        marginBottom: 22.13,
        marginLeft: 16,
        marginRight: 200.48,
        display: 'flex'
    },
    
    upperBar: {
        width: 378,
        height: 133,
        borderRadius: 10,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 15,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: 'flex'
    },

    btnList: {
        width: 54,
        height: 54,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 22,
        marginRight: 40,
        display: 'flex'
    },

    txtList: {
        width: 55,
        height: 29,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        marginLeft: 20,
        marginRight: 30,
        display: 'flex'
    },


    btnClist: {
        width: 54,
        height: 54,
        marginTop: 20,
        marginBottom: 10,
        marginRight: 40,
        display: 'flex'
    },

    txtClist: {
        width: 55,
        height: 29,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        marginRight: 35,
        display: 'flex'
    },

    btnJualCpt: {
        width: 54,
        height: 54,
        marginTop: 20,
        marginBottom: 10,
        display: 'flex'
    },

    txtJualCpt: {
        width: 53,
        height: 29,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        marginRight: 30,
        display: 'flex'
    },

    btnCalc: {
        width: 54,
        height: 54,
        marginTop: 20,
        marginBottom: 10,
        marginRight: 30,
        marginLeft: 7,
        display: 'flex'
    },

    txtCalc: {
        width: 66,
        height: 29,
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
        width: 139,
        height: 19,
        fontSize: 16,
        marginLeft: 60,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000'
    },

    txtJual: {
        width: 100,
        height: 19,
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
        width: 378,
        height: 300,
        borderRadius: 18,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
    },
})
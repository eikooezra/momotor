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
        this.props.navigation.navigate('OrderList')
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
    goToInstant = () => {
        this.props.navigation.navigate('InstantOrder')
    }
    goToNotif = () => {
        this.props.navigation.navigate('Notification')
    }
    goToAccount = () => {
        this.props.navigation.navigate('Account')
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
        backgroundColor: 'white'
    },

    Header: {
        width: 412,
        height: 140,
        marginBottom: 90,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#0064D0',
    },

    momotor: {
        width: 143.52,
        height: 21.87,
        marginTop: 40,
        marginBottom: 22.13,
        marginLeft: 16,
        marginRight: 200.48
    },
    
    upperBar: {
        width: 380,
        height: 133,
        borderRadius: 10,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 15,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    btnList: {
        width: 54,
        height: 54,
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 22,
        marginRight: 40
    },

    txtList: {
        width: 55,
        height: 29,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        marginLeft: 20,
        marginRight: 30
    },


    btnClist: {
        width: 54,
        height: 54,
        marginTop: 20,
        marginBottom: 10,
        marginRight: 40
    },

    txtClist: {
        width: 55,
        height: 29,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        marginRight: 35
    },

    btnJualCpt: {
        width: 54,
        height: 54,
        marginTop: 20,
        marginBottom: 10,
    },

    txtJualCpt: {
        width: 53,
        height: 29,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
        marginRight: 30
    },

    btnCalc: {
        width: 54,
        height: 54,
        marginTop: 20,
        marginBottom: 10,
        marginRight: 30,
        marginLeft: 7
    },

    txtCalc: {
        width: 65,
        height: 29,
        fontSize: 12,
        marginRight: 15,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        color: '#000000',
    },

    dblTxtContainer: {
        marginBottom: 20,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    txtPesanan: {
        width: 140,
        height: 19,
        fontSize: 16,
        marginLeft: 60,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000'
    },

    txtJual: {
        width: 138,
        height: 19,
        fontSize: 16,
        marginRight: 25,
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000'
    },

    scrollContainer: {
        flexGrow: 1,
    },

    btnImg: {
        
    },

    imgContainer: {
        width: 380,
        height: 270,
        borderRadius: 18,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
    },

    lowerbar: {
        width: 410,
        height: 60,
        bottom: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    btnHome: {
        width: 32,
        height: 32,
        marginTop: 7,
        marginBottom: 2,
        marginLeft: 50,
        marginRight: 40
    },

    txtHome: {
        width: 46,
        height: 13,
        fontSize: 10,
        marginLeft: 43,
        color: '#B7B7B7',
        fontFamily: 'Montserrat-SemiBold'
    },

    btnInstant: {
        width: 32,
        height: 32,
        marginTop: 7,
        marginBottom: 2,
        marginLeft: 25,
        marginRight: 40
    },

    txtInstant: {
        width: 80,
        height: 13,
        fontSize: 10,
        textAlign: 'center',
        color: '#B7B7B7',
        fontFamily: 'Montserrat-SemiBold'
    },

    btnNotif: {
        width: 32,
        height: 32,
        marginTop: 7,
        marginBottom: 2,
        marginLeft: 25,
        marginRight: 40
    },

    txtNotif: {
        width: 90,
        height: 13,
        fontSize: 10,
        color: '#B7B7B7',
        fontFamily: 'Montserrat-SemiBold'
    },

    btnAccount: {
        width: 32,
        height: 32,
        marginTop: 7,
        marginBottom: 2,
        marginLeft: 15,
        marginRight: 100
    },

    txtAccount: {
        width: 30,
        height: 13,
        fontSize: 10,
        marginLeft: 16,
        color: '#B7B7B7',
        fontFamily: 'Montserrat-SemiBold'
    }
})
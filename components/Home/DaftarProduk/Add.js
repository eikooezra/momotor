import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  Image,
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import normalize from 'react-native-normalize';

class Add extends Component{
    constructor(props){
        super(props)
        this.state = {
            Model: '',
            prodYear: '',
            location: '',
            price: '',
            isPrcFilled: false,
            refcode: '',
            isRefFilled: false,
            desc: '',
            isDescFilled: false,
            isPressed: false,
            null: true
        }
    }
    
    goBack = () => {
        this.props.navigation.navigate('DaftarProduk')
    }

    goToAddPics = () => {
        this.props.navigation.navigate('AddPics')
    }

    nullChecker = () => {
        if(this.state.isPressed === false){
            this.setState({null: true})
        } 
    }

    handleChangePrice = (price) => {
      this.setState({price})
      if(this.state.price !== ''){
        this.setState({isPrcFilled: true})
      }
    }

    handleChangeRef = (refcode) => {
      this.setState({refcode})
      if(this.state.refcode !== ''){
        this.setState({isRefFilled: true})
      }
    }

    handleChangeDesc = (desc) => {
      this.setState({desc})
      if(this.state.desc !== ''){
        this.setState({isDescFilled: true})
      }
    }
    
render(){
    const enabled = 
    this.state.prodYear !== '' &&
    this.state.location !== '' &&
    this.state.price !== '' &&
    this.state.refcode !== '' &&
    this.state.desc !== ''

    return(
    <View style={styles.container}>
        <View style={styles.Header}>
         <TouchableOpacity
            onPress={this.goBack}
         >
          <Image 
              style={styles.btnBack}
              source={require('../../../assets/images/back.png')}
          />
         </TouchableOpacity>
          <Text style={styles.txtAdd}>
              Tambah Produk
          </Text>
        </View>

        <View style={styles.searchContainer}>
            <Image
                source={require('../../../assets/images/greysearch.png')}
                style={styles.imgSearch}
            />

            <View style={styles.modelContainer}>
                <TextInput
                    style={styles.txtModel}
                    placeholder='Model Motor'
                    placeholderTextColor='#7F7F7F'
                />
            </View>
        </View>
        
         <View>
            <View>
            <DropDownPicker
                items={[
                    {label: '2015', value: '15'}, 
                    {label: '2016', value: '16'}, 
                    {label: '2017', value: '17'}, 
                    {label: '2018', value: '18'},
                    {label: '2019', value: '19'}, 
                    {label: '2020', value: '20'},
                ]}
                defaultNull={this.nullChecker}
                placeholder='Tahun Produksi'
                style={{
                    paddingVertical: 20
                }}
                containerStyle={{
                    width: normalize(350),
                    height: normalize(48),
                    marginLeft: normalize(16),
                    marginBottom: normalize(34),
                }}
                dropDownStyle={{
                    backgroundColor: '#FFFFFF'
                }}
                labelStyle={{
                    marginLeft: normalize(8),
                    fontSize: normalize(14.5),
                    color:'#7F7F7F',
                    fontFamily: 'Montserrat-SemiBold'
                }}
                arrowStyle={{
                    marginLeft: normalize(205)
                }}
                onChangeItem={item => this.setState({
                    prodYear: item,
                })}
            />
            </View>

            <View>
            <DropDownPicker
                items={[
                    {label: 'Jakarta', value: 'jakarta'},
                    {label: 'Bogor', value: 'bogor'},
                    {label: 'Depok', value: 'depok'},
                    {label: 'Tangerang', value: 'tangerang'},
                    {label: 'Bekasi', value: 'bekasi'},
                ]}
                defaultNull={this.nullChecker}
                placeholder='Lokasi'
                placeholderTextColor='#7F7F7F'
                style={{
                    paddingVertical: 20
                }}
                containerStyle={{
                    width: normalize(350),
                    height: normalize(46),
                    marginLeft: normalize(16),
                    marginBottom: normalize(34),
                }}
                dropDownStyle={{
                    backgroundColor: '#FFFFFF'
                }}
                labelStyle={{
                    marginLeft: normalize(8),
                    fontSize: normalize(14.5),
                    color:'#7F7F7F',
                    fontFamily: 'Montserrat-SemiBold'
                }}
                arrowStyle={{
                    marginLeft: normalize(270)
                }}
                onChangeItem={item => this.setState({
                    location: item,
                })}
                />
            </View>

                <View style={styles.txtInpHarga}>
                    <TextInput
                        style={styles.txtHarga}
                        placeholder='Harga'
                        value={this.state.price}
                        onChangeText={price => this.handleChangePrice(price)}
                    />
                </View>

                <View style={styles.txtInpCode}>
                    <TextInput
                        style={styles.txtCode}
                        placeholder='Kode Referral'
                        placeholderTextColor='#7F7F7F'
                        value={this.state.refcode}
                        onChangeText={refcode => this.handleChangeRef(refcode)}
                    />
                </View>

                <View style={styles.txtInpDesc}>
                    <TextInput
                        style={styles.txtDesc}
                        placeholder='Deskripsi'
                        placeholderTextColor='#7F7F7F'
                        value={this.state.desc}
                        onChangeText={desc => this.handleChangeDesc(desc)}
                    />
                </View>
        </View>

        <View style={styles.btnNxtArea}>
            <TouchableOpacity
                style={[styles.btnNxt, {
                    backgroundColor: (this.state.prodYear !== '' &&
                                      this.state.location !== '' &&
                                      this.state.price !== '' &&
                                      this.state.refcode !== '' &&
                                      this.state.desc !== ''
                        )
                    ? '#0064D0' 
                    : '#B7B7B7'
                    }
                ]}
                onPress={this.goToAddPics}
                // disabled={!enabled}
            >
                <Text style={styles.txtNxt}>
                    SELANJUTNYA
                </Text>
            </TouchableOpacity>
        </View>
  </View>
        )
    }
}

export default Add

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    Header: {
        width: normalize(380),
        height: normalize(70),
        marginBottom: normalize(15),
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: normalize(32),
        height: normalize(16),
        marginLeft: normalize(16),
        marginTop: normalize(30)
    },

    txtAdd: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(90),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    searchContainer: {
        flexDirection: 'row',
        marginBottom: normalize(34)
    },

    imgSearch: {
        width: normalize(22),
        height: normalize(22),
        marginTop: normalize(12),
        marginLeft: normalize(16),
    },

    modelContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#DDDDDD',
        marginLeft: normalize(15)
    },

    txtModel: {
        width: normalize(330),
        fontFamily: 'Montserrat-Medium',
    },

    txtInpHarga: {
        width: normalize(350),
        height: normalize(46),
        marginLeft: normalize(16),
        marginBottom: normalize(34),
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
        backgroundColor: '#EBEBEB'
    },

    txtHarga:{
        marginLeft: normalize(8),
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpCode: {
        width: normalize(350),
        height: normalize(46),
        marginLeft: normalize(16),
        marginBottom: normalize(34),
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtCode: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpDesc: {
        width: normalize(350),
        height: normalize(150),
        marginLeft: normalize(16),
        marginBottom: normalize(34),
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtDesc: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    btnNxtArea: {
        bottom: normalize(0),
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute'
    },

    btnNxt: {
        width: normalize(420),
        height: normalize(60),
    },
    
    txtNxt: {
        width: normalize(125),
        height: normalize(20),
        marginTop: normalize(20),
        marginLeft: normalize(160),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
    }
})
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


class Add extends Component{
    constructor(props){
        super(props)
        this.state = {
            Model: '',
            prodYear: [],
            location: [],
            price: '',
            refcode: '',
            desc: '',
            isAllFilled: false,
        }
    }
    
    goToDaftarprod = () => {
        this.props.navigation.navigate('DaftarProduk')
    }

    goToAddPics = () => {
        this.props.navigation.navigate('AddPics')
    }

    changeYear(item) {
        let prodYear
        switch (item,value) {
            case '2015':
                prodYear = [{label: '2015', value: 2015}]
                break;
            case '2016':
                prodYear = [{label: '2016', value: 2016}]
                break;
            case '2017':
                prodYear = [{label: '2017', value: 2017}]
                break;
            case '2018':
                prodYear = [{label: '2018', value: 2018}]
                break;
            case '2019':
                prodYear = [{label: '2019', value: 2019}]
                break;
            case '2020':
                prodYear = [{label: '2020', value: 2020}]
                break;
        }
        this.setState({
            prodYear
        })
    }
    
render(){
    return(
    <View style={styles.container}>
        <View style={styles.Header}>
         <TouchableOpacity
            onPress={this.goToDaftarprod}
         >
          <Image 
              style={styles.btnBack}
              source={require('../../assets/images/back.png')}
          />
         </TouchableOpacity>
          <Text style={styles.txtAdd}>
              Tambah Produk
          </Text>
        </View>

        <View style={styles.searchContainer}>
            <Image
                source={require('../../assets/images/greysearch.png')}
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
            <DropDownPicker
                items={[
                    {label: '2015', value: 2015}, 
                    {label: '2016', value: 2016}, 
                    {label: '2017', value: 2017}, 
                    {label: '2018', value: 2018},
                    {label: '2019', value: 2019}, 
                    {label: '2020', value: 2020},
                ]}
                defaultNull
                placeholder='Tahun Produksi'
                style={{
                    paddingVertical: 20
                }}
                containerStyle={{
                    width: 370,
                    height: 48,
                    marginLeft: 16,
                    marginBottom: 34,
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                }}
                labelStyle={{
                    marginLeft: 8,
                    fontSize: 14,
                    color:'#7F7F7F',
                    fontFamily: 'Montserrat-SemiBold'
                }}
                arrowStyle={{
                    marginLeft: 205
                }}
                onChangeItem={item => this.changeYear(item)}
            />

            <DropDownPicker
                items={[

                ]}
                defaultNull
                placeholder='Lokasi'
                placeholderTextColor='#7F7F7F'
                style={{
                    paddingVertical: 20
                }}
                containerStyle={{
                    width: 370,
                    height: 48,
                    marginLeft: 16,
                    marginBottom: 34,
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                }}
                labelStyle={{
                    marginLeft: 8,
                    fontSize: 14,
                    color:'#7F7F7F',
                    fontFamily: 'Montserrat-SemiBold'
                }}
                arrowStyle={{
                    marginLeft: 270
                }}
                />

                <View style={styles.txtInpHarga}>
                    <TextInput
                        style={styles.txtHarga}
                        placeholder='Harga'
                    />
                </View>

                <View style={styles.txtInpCode}>
                    <TextInput
                        style={styles.txtCode}
                        placeholder='Kode Referral'
                        placeholderTextColor='#7F7F7F'
                    />
                </View>

                <View style={styles.txtInpDesc}>
                    <TextInput
                        style={styles.txtDesc}
                        placeholder='Deskripsi'
                        placeholderTextColor='#7F7F7F'
                    />
                </View>
        </View>

        <View style={styles.btnNxtArea}>
            <TouchableOpacity
                style={[styles.btnNxt, {
                    backgroundColor: (this.state.isAllFilled === true)
                    ? '#0064D0' 
                    : '#B7B7B7'
                    }
                ]}
                onPress={this.goToAddPics}
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
        width: 412,
        height: 70,
        marginBottom: 15,
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: 32,
        height: 16,
        marginLeft: 16,
        marginTop: 30
    },

    txtAdd: {
        width: 200,
        height: 20,
        marginTop: 25,
        marginLeft: 95,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    searchContainer: {
        flexDirection: 'row',
        marginBottom: 34
    },

    imgSearch: {
        width: 22,
        height: 22,
        marginTop: 12,
        marginLeft: 16,
    },

    modelContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#DDDDDD',
        marginLeft: 15
    },

    txtModel: {
        width: 330,
        fontFamily: 'Montserrat-Medium',
    },

    txtInpHarga: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtHarga:{
        marginLeft: 8,
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpCode: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtCode: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpDesc: {
        width: 370,
        height: 180,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtDesc: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    btnNxtArea: {
        bottom: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute'
    },

    btnNxt: {
        width: 420,
        height: 60,
    },
    
    txtNxt: {
        width: 125,
        height: 20,
        marginTop: 18,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
        justifyContent: 'center',
        alignSelf: 'center'
    }
})
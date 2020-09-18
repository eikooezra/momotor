import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import normalize from 'react-native-normalize';

class AddPics extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAllFilled: false,
            imgSource: null
        }
    }
    
    // function image picker
    imgPickr = () => {
        ImagePicker.showImagePicker((response) => {
            console.log('Response = ', response )
        
            if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else {
                const source = { uri: response.uri };
        
                this.setState({
                    imgSource: source,
                  });
                }
              });
    }

    // Navigation
    goBack = () => {
        this.props.navigation.navigate('Add')
    }

    goToVerif = () => {
        this.props.navigation.navigate('Verification')
    }

    render(){
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

                <Text style={styles.txtAddPic}>
                    Tambah Foto
                </Text>
                </View>

                <View style={styles.imgContainer}>
                    <TouchableOpacity
                        style={styles.bluRectangle}
                        onPress={this.imgPickr}
                    >
                        <Image
                            style={styles.camLogo}
                            source={require('../../../assets/images/camLogo.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.btnNxtArea}>
                 <TouchableOpacity
                    style={[styles.btnNxt, {
                    backgroundColor: (this.state.isAllFilled === true)
                    ? '#0064D0' 
                    : '#B7B7B7'
                    }
                ]}
                onPress={this.goToVerif}
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

export default AddPics

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },

    Header: {
        width: normalize(380),
        height: normalize(70),
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: normalize(32),
        height: normalize(16),
        marginLeft: normalize(16),
        marginTop: normalize(30)
    },

    txtAddPic: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(103),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    imgContainer:{
        
    },

    bluRectangle: {
        width: normalize(125),
        height: normalize(125),
        marginTop: normalize(5),
        marginBottom: normalize(3),
        marginLeft: normalize(5),
        backgroundColor: '#0064D0'
    },

    camLogo: {
        width: normalize(27),
        height: normalize(24),
        marginTop: normalize(56),
        alignSelf: 'center'
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
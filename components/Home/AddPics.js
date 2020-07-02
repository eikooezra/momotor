import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import ImagePicker from 'react-native-image-picker'

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
                        source={require('../../assets/images/back.png')}
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
                            source={require('../../assets/images/camLogo.png')}
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
        width: 412,
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: 32,
        height: 16,
        marginLeft: 16,
        marginTop: 30
    },

    txtAddPic: {
        width: 200,
        height: 20,
        marginTop: 25,
        marginLeft: 105,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    imgContainer:{
        
    },

    bluRectangle: {
        width: 135,
        height: 135,
        marginTop: 3,
        marginBottom: 3,
        marginLeft: 3,
        backgroundColor: '#0064D0'
    },

    camLogo: {
        width: 27,
        height: 24,
        marginTop: 56,
        alignSelf: 'center'
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
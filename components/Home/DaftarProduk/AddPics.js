import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import {ActionSheet, Root} from 'native-base'
import ImagePicker from 'react-native-image-crop-picker'
import normalize from 'react-native-normalize'
import { FlatList } from 'react-native-gesture-handler'

class AddPics extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAllFilled: false,
            fileList: [],
            image: null,
            images: null,
        }
    }
    
    // function image picker
    takePhotoFromCam = (cropping, mediaType = 'photo') => {
        ImagePicker.openCamera({
            cropping: cropping,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType,
          })
            .then((image) => {
              console.log('received image', image);
              this.setState({
                image: {
                  uri: image.path,
                  width: image.width,
                  height: image.height,
                  mime: image.mime,
                },
                images: null,
              });
            })
            .catch((e) => alert(e));
      }
    
    choosePhotoFromLib = () => {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            sortOrder: 'desc',
            includeExif: true,
            forceJpg: true,
          })
            .then((images) => {
              this.setState({
                image: null,
                images: images.map((i) => {
                  console.log('received image', i);
                  return {
                    uri: i.path,
                    width: i.width,
                    height: i.height,
                    mime: i.mime,
                  };
                }),
              });
            })
            .catch((e) => alert(e));
      }    
    
    onClickAddImage = () => {
        const buttons = ['Take Photo', 'Choose Photo Library', 'Cancel']
        ActionSheet.show(
            {
                options: buttons, 
                cancelButtonIndex: 2, 
                title: 'Select a Photo'
            },
            buttonIndex => {
                switch (buttonIndex) {
                    case 0:
                        this.takePhotoFromCam.bind()
                        break;
                    case 1:
                        this.choosePhotoFromLib.bind()
                        break;
                    case 2:
                        break;
                            }
                        },
                        )
                    }
                    
    renderItem = ({item, index}) => {
        return (
            <View>
                <Image source={item.url}/>
            </View>
             )
          }

    renderImage(image) {
        return (
            <Image
                style={{ width: 300, height: 300, resizeMode: 'contain' }}
                source={image}
            />
            );
            }
        
    renderAsset(image) {
        if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
            return this.renderVideo(image);
        }
        return this.renderImage(image);
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
         <Root>

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
                        onPress={this.onClickAddImage}
                    >
                        <Image
                            style={styles.camLogo}
                            source={require('../../../assets/images/camLogo.png')}
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    {this.state.image ? this.renderAsset(this.state.image) : null}
                    {this.state.images
                    ? this.state.images.map((i) => (
                    <View key={i.uri}>{this.renderAsset(i)}</View>
                    ))
                    : null}
                </ScrollView>


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
         </Root>
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
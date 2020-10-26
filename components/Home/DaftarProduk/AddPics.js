import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import {ActionSheet, Root} from 'native-base'
import ImagePicker from 'react-native-image-crop-picker'
import normalize from 'react-native-normalize'

const AddPics = () =>{
    const [image, setImage] = useState(null)
    const [images, setImages] = useState(null)
    const [isAllFilled] = useState(true)

    // add image function
   const takePicture = (cropping, mediaType = 'photo') => {
        ImagePicker.openCamera({
            cropping: cropping,
            width: 500,
            height: 500,
            includeExif: true,
            mediaType,
          })
            .then((image) => {
              console.log('received image', image);
              setImage({
                  uri: image.path,
                  width: image.width,
                  height: image.height,
                  mime: image.mime,
              })
              setImages(null)
            })
        .catch((err) => { console.log("openCam catch" + err.toString()) })
    }
    
    const choosePhotoFromGal = () => {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            sortOrder: 'desc',
            includeExif: true,
            forceJpg: true,
          })
            .then((images) => {
              setImage(null)
              setImages(
                images.map((i) => {
                    console.log('received image', i)
                    return {
                      uri: i.path,
                      width: i.width,
                      height: i.height,
                      mime: i.mime,
                    }
                  }),
                )
              })
            .catch((err) => { console.log("openGallery catch" + err.toString()) })
      }    
    
    const onClickAddImage = () => {
        const buttons = ['Take Photo', 'Choose Photo Gallery', 'Cancel']
        ActionSheet.show(
            {
                options: buttons, 
                cancelButtonIndex: 2, 
                title: 'Select a Photo'
            },
            buttonIndex => {
                switch (buttonIndex) {
                    case 0:
                        takePicture()
                        break;
                    case 1:
                        choosePhotoFromGal()
                        break;
                    case 2:
                        break;
                            }
                        },
                        )
                    }
                    
    const renderAsset = (image) => {
        return renderImage(image);
    }

    const renderImage = (image) => {
        return (
          <Image
            style={{ 
                width: normalize(125),
                height: normalize(125),
                marginTop: normalize(5),
                marginLeft: normalize(5), 
                resizeMode: 'contain' }}
            source={image}
          />
        );
      }
    
    // Navigation
    const goBack = () => {
        this.props.navigation.navigate('Add')
    }

    const goToVerif = () => {
        this.props.navigation.navigate('Verification')
    }

        return(
         <Root>
            <View style={styles.container}>
                <View style={styles.Header}>
                <TouchableOpacity
                    onPress={goBack}
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

                <View>
                    <TouchableOpacity
                        style={styles.bluRectangle}
                        onPress={onClickAddImage.bind(this)}
                    >
                        <Image
                            style={styles.camLogo}
                            source={require('../../../assets/images/camLogo.png')}
                        />
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    {image ? renderAsset(image) : null}
                    {images
                    ? images.map((i) => (
                        <View key={i.uri}>{renderAsset(i)}</View>
                    ))
                    : null}
                </ScrollView>

                <View style={styles.btnNxtArea}>
                 <TouchableOpacity
                    style={[styles.btnNxt, {
                    backgroundColor: (isAllFilled === false)
                    ? '#0064D0' 
                    : '#B7B7B7'
                    }
                ]}
                onPress={goToVerif}
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

    imgContainer: {
        flexDirection: 'row'
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
    },
})
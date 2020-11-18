import React, { Component, useRef, useMemo } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    SafeAreaView,
    FlatList,
} from 'react-native'
import {ActionSheet, Root} from 'native-base'
import RBSheet from "react-native-raw-bottom-sheet"
import Animated from 'react-native-reanimated'
import BottomSheet from 'reanimated-bottom-sheet'
import ImagePicker from 'react-native-image-crop-picker'
import normalize from 'react-native-normalize'
import {TouchableOpacity} from 'react-native-gesture-handler'
import BSaddPics from '../BSaddPics'



class AddPics extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAllFilled: false,
            collectionImages: [
                // {
                //     "albumId": 1,
                //     "id": 1,
                //     "title": "accusamus beatae ad facilis cum similique qui sunt",
                //     "url": "https://via.placeholder.com/600/92c952",
                //     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
                //   },
                //   {
                //     "albumId": 1,
                //     "id": 2,
                //     "title": "reprehenderit est deserunt velit ipsam",
                //     "url": "https://via.placeholder.com/600/771796",
                //     "thumbnailUrl": "https://via.placeholder.com/150/771796"
                //   }
            ],
            selectedImages: [],
            isSelect: false,
            pressStatus: false
        }
    }

    // add image function
    takePicture = (cropping, mediaType = 'photo') => {
    ImagePicker.openCamera({
        cropping: cropping,
        width: 500,
        height: 500,
        includeExif: true,
        mediaType,
      })
        .then((image) => {
          const newData = {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime
          }
          this.setState({ collectionImages :[...this.state.collectionImages, newData]});
          console.log('log state baru', this.state.collectionImages)
        })
        .catch((err) => { console.log("openCam catch" + err.toString()) })
    }
    
    choosePhotoFromGal = () => {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            sortOrder: 'desc',
            includeExif: true,
            forceJpg: true,
          })
            .then((images) => {
                images.map(i => {    
                    const newData = {
                        uri: i.path,
                        width: i.width,
                        height: i.height,
                        mime: i.mime,
                      }
                    this.setState({ collectionImages :[...this.state.collectionImages, newData]});
                })
                  console.log('log state baru', this.state.collectionImages)
            })
            .catch((err) => { console.log("openGallery catch" + err.toString()) })
      }    

    onClickAddImage = () => {
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
                        this.takePicture()
                        break;
                    case 1:
                        this.choosePhotoFromGal()
                        break;
                    case 2:
                        break;
                            }
                        },
                        )
                    }
 
    renderAsset = (image) => {
        return this.renderImage(image);
    }
    
    renderImage = (image) => {
        return (
          <Image
            style={{ 
                width: normalize(120),
                height: normalize(120),
                marginTop: normalize(5),
                marginLeft: normalize(5),
                resizeMode: 'contain' }}
            source={image}
          />
        );
      }

    // highlight & multi-select items
    renderItem = () => {
        let {itemStyle} = styles
        return (
            <View style={itemStyle}>
                {this.state.collectionImages
                    ? this.state.collectionImages.map((i) => (
                            <View 
                                key={i.uri}
                            >
                                {this.renderAsset(i)}
                            </View>
                    ))
                    : []}
            </View>
        )
    }

    // bottom sheet
    renderScreen = () => {
        return(
        <View style={styles.panel}>
           <Text style={styles.txtChsPic}>
                    Foto yang dipilih
                </Text>

                <View style={styles.images}>
                    <Image 
                        style={styles.img}
                        source={require('../../../assets/images/vario.png')}
                    />

                    <Image 
                        style={styles.img}
                        source={require('../../../assets/images/vario.png')}
                    />

                    <Image 
                        style={styles.img}
                        source={require('../../../assets/images/vario.png')}
                    />

                    <Image 
                        style={styles.img}
                        source={require('../../../assets/images/vario.png')}
                    />
                </View>
    
                <Text style={styles.txtUtama}>
                    Utama
                </Text>
        </View>
        )
    }

    renderHeader = () => {
        return(
            <View style={styles.bsHeader}>
                <View style={styles.panelHeader}>
        <           View style={styles.panelHandle} />
                </View>
            </View>
        )
    }
    
    sheetRef = React.createRef()
    fall = new Animated.Value(1)
    
    // navigation
    goBack = () => {
        this.props.navigation.navigate('Add')
    }
    
    goToVerif = () => {
        this.props.navigation.navigate('Verification')
    }
    
    render(){
        return (
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

                <SafeAreaView>
                        <View style={styles.chosenPic}>
                            <TouchableOpacity
                                onPress={this.onClickAddImage.bind(this)}
                                style={styles.bluRectangle}
                            >
                                <Image
                                    style={styles.camLogo}
                                    source={require('../../../assets/images/camLogo.png')}/>
                            </TouchableOpacity>

                            {this.state.collectionImages
                            ? this.state.collectionImages.map((i) => (
                                    <View 
                                        key={i.uri}
                                    >
                                        {this.renderAsset(i)}
                                    </View>
                            ))
                            : []}
                        </View>
                </SafeAreaView>

                        <View style={styles.btmSht}>
                            <TouchableOpacity
                            onPress={
                                () => this.sheetRef.current.snapTo(0)
                            }
                            >
                                <Text style={styles.txtFoto}>
                                    Foto yang dipilih
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <BottomSheet
                            ref={this.sheetRef}
                            snapPoints={[330, 0]}
                            initialSnap={1}
                            callbackNode={this.fall}
                            renderHeader={this.renderHeader}
                            renderContent={this.renderScreen}
                            enabledGestureInteraction={true}
                        />

                <View style={styles.btnNxtArea}>
                    <TouchableOpacity
                        style={[styles.btnNxt, {
                        backgroundColor: (this.isAllFilled === true)
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

    bluRectangle: {
        height: normalize(120),
        width: normalize(120),
        marginTop: normalize(5),
        marginLeft: normalize(5),
        backgroundColor: '#0064D0',
    },

    camLogo: {
        width: normalize(27),
        height: normalize(24),
        marginTop: normalize(50),
        alignSelf: 'center'
    },
    
    chosenPic: {
        flexWrap: 'wrap',
        flexDirection: 'row',
    },

    btmSht: {
        width: normalize(360),
        height: normalize(40),
        marginTop: normalize(570),
        marginLeft: normalize(10),
        elevation: 0,
        borderRadius: 10,
        backgroundColor: '#0064D0',
        position: 'absolute',
    },  

    txtFoto: {
        width: normalize(125),
        marginTop: normalize(10),
        marginLeft: normalize(125),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
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

    //for bottom sheet screen
    bsHeader: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    panel: {
        padding: 10,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
      },

    panelHeader: {
        alignItems: 'center',
    },

    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },

    txtChsPic: {
        marginTop: normalize(21),
        marginLeft: normalize(12),
        marginBottom: normalize(18),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold',
        backgroundColor: '#FFFFFF'
    },

    images: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF'
    },

    img: {
        width: normalize(90),
        height: normalize(90),
        marginLeft: normalize(12),
        marginBottom: normalize(8),
        backgroundColor: '#FFFFFF'
    },

    txtUtama: {
        marginLeft: normalize(36),
        marginBottom: normalize(8),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-SemiBold',
        color: '#0064D0',
        backgroundColor: '#FFFFFF'
    }
})

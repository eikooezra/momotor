import React, { useState } from 'react';
import {
    Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import normalize from 'react-native-normalize';
import Animated from 'react-native-reanimated'
import BottomSheet from 'reanimated-bottom-sheet'
import { Fire } from '../../../config';
import { getData, storeData } from '../../../utils/localstorage/localstorage';

const AddPics = ({ navigation, route }) => {
    const {
        name,
        year,
        location,
        price,
        ref_code,
        desc,
        kilometer,
        images,
        id,
    } = route.params
    const [photoForDB, setPhotoForDB] = useState(images.image)
    const [photoForDB1, setPhotoForDB1] = useState(images.image1)
    const [photoForDB2, setPhotoForDB2] = useState(images.image2)
    const [photoForDB3, setPhotoForDB3] = useState(images.image3)
    const [photoForDB4, setPhotoForDB4] = useState(images.image4)
    const [photoForDB5, setPhotoForDB5] = useState(images.image5)
    const [photo, setPhoto] = useState({ uri: images.image })
    const [photo1, setPhoto1] = useState({ uri: images.image1 })
    const [photo2, setPhoto2] = useState({ uri: images.image2 })
    const [photo3, setPhoto3] = useState({ uri: images.image3 })
    const [photo4, setPhoto4] = useState({ uri: images.image4 })
    const [photo5, setPhoto5] = useState({ uri: images.image5 })

    const getImage = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
                setPhoto(source)
                if (response.didCancel) {
                    const last = { uri: images.image }
                    setPhoto(last)
                }
            })
    }

    const openCam = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
                setPhoto(source)
                if (response.didCancel) {
                    const last = { uri: images.image }
                    setPhoto(last)
                }
            })
    }

    const getImage1 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                setPhotoForDB1(`data:${response.type};base64, ${response.base64}`)
                setPhoto1(source)
                if (response.didCancel) {
                    const last = { uri: images.image1 }
                    setPhoto1(last)
                }
            })
    }

    const openCam1 = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                setPhotoForDB1(`data:${response.type};base64, ${response.base64}`)
                setPhoto1(source)
                if (response.didCancel) {
                    const last = { uri: images.image1 }
                    setPhoto1(last)
                }
            })
    }

    const getImage2 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                setPhotoForDB2(`data:${response.type};base64, ${response.base64}`)
                setPhoto2(source)
                if (response.didCancel) {
                    const last = { uri: images.image2 }
                    setPhoto2(last)
                }
            })
    }

    const openCam2 = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                setPhotoForDB2(`data:${response.type};base64, ${response.base64}`)
                setPhoto2(source)
                if (response.didCancel) {
                    const last = { uri: images.image2 }
                    setPhoto2(last)
                }
            })
    }

    const getImage3 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                setPhotoForDB3(`data:${response.type};base64, ${response.base64}`)
                setPhoto3(source)
                if (response.didCancel) {
                    const last = { uri: images.image3 }
                    setPhoto3(last)
                }
            })
    }

    const openCam3 = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                setPhotoForDB3(`data:${response.type};base64, ${response.base64}`)
                setPhoto3(source)
                if (response.didCancel) {
                    const last = { uri: images.image3 }
                    setPhoto3(last)
                }
            })
    }

    const getImage4 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                setPhotoForDB4(`data:${response.type};base64, ${response.base64}`)
                setPhoto4(source)
                if (response.didCancel) {
                    const last = { uri: images.image4 }
                    setPhoto4(last)
                }
            })
    }

    const openCam4 = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                setPhotoForDB4(`data:${response.type};base64, ${response.base64}`)
                setPhoto4(source)
                if (response.didCancel) {
                    const last = { uri: images.image4 }
                    setPhoto4(last)
                }
            })
    }

    const getImage5 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                setPhotoForDB5(`data:${response.type};base64, ${response.base64}`)
                setPhoto5(source)
                if (response.didCancel) {
                    const last = { uri: images.image5 }
                    setPhoto5(last)
                }
            })
    }

    const openCam5 = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                setPhotoForDB5(`data:${response.type};base64, ${response.base64}`)
                setPhoto5(source)
                if (response.didCancel) {
                    const last = { uri: images.image5 }
                    setPhoto5(last)
                }
            })
    }

    const uploadAndContinue = () => {
        const image = {
            image: photoForDB,
            image1: photoForDB1,
            image2: photoForDB2,
            image3: photoForDB3,
            image4: photoForDB4,
            image5: photoForDB5
        }
        storeData('productImage', image)
        navigation.navigate('VerificationEdit', image)
        // getData('user').then(res => {
        //     Fire
        //         .database()
        //         .ref('product/' + res.uid + '/' + id + '/images' + '/')
        //         .update({
        //             image: photoForDB.uri,
        //             image1: photoForDB1.uri,
        //             image2: photoForDB2.uri,
        //             image3: photoForDB3.uri,
        //             image4: photoForDB4.uri,
        //             image5: photoForDB5.uri,
        //         })

        // })
    }

    //Bottom sheet
    const renderScreen = () => {
        return (
            <View style={styles.panel}>
                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                        }}
                        onPress={openCam}
                    >
                        <Image
                            style={styles.imgCam}
                            source={require('../../../assets/images/camblk.png')}
                        />

                        <Text style={styles.txtBS}>
                            Camera
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                        }}
                        onPress={getImage}
                    >
                        <Image
                            style={styles.img3dots}
                            source={require('../../../assets/images/3dots2.png')}
                        />

                        <Text style={styles.txtBS}>
                            Browse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderScreen1 = () => {
        return (
            <View style={styles.panel}>
                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                        }}
                        onPress={openCam1}
                    >
                        <Image
                            style={styles.imgCam}
                            source={require('../../../assets/images/camblk.png')}
                        />

                        <Text style={styles.txtBS}>
                            Camera
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                        }}
                        onPress={getImage1}
                    >
                        <Image
                            style={styles.img3dots}
                            source={require('../../../assets/images/3dots2.png')}
                        />

                        <Text style={styles.txtBS}>
                            Browse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderScreen2 = () => {
        return (
            <View style={styles.panel}>
                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                        }}
                        onPress={openCam2}
                    >
                        <Image
                            style={styles.imgCam}
                            source={require('../../../assets/images/camblk.png')}
                        />

                        <Text style={styles.txtBS}>
                            Camera
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                        }}
                        onPress={getImage2}
                    >
                        <Image
                            style={styles.img3dots}
                            source={require('../../../assets/images/3dots2.png')}
                        />

                        <Text style={styles.txtBS}>
                            Browse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderScreen3 = () => {
        return (
            <View style={styles.panel}>
                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                        }}
                        onPress={openCam3}
                    >
                        <Image
                            style={styles.imgCam}
                            source={require('../../../assets/images/camblk.png')}
                        />

                        <Text style={styles.txtBS}>
                            Camera
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                        }}
                        onPress={getImage3}
                    >
                        <Image
                            style={styles.img3dots}
                            source={require('../../../assets/images/3dots2.png')}
                        />

                        <Text style={styles.txtBS}>
                            Browse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderScreen4 = () => {
        return (
            <View style={styles.panel}>
                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                        }}
                        onPress={openCam4}
                    >
                        <Image
                            style={styles.imgCam}
                            source={require('../../../assets/images/camblk.png')}
                        />

                        <Text style={styles.txtBS}>
                            Camera
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                        }}
                        onPress={getImage4}
                    >
                        <Image
                            style={styles.img3dots}
                            source={require('../../../assets/images/3dots2.png')}
                        />

                        <Text style={styles.txtBS}>
                            Browse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderScreen5 = () => {
        return (
            <View style={styles.panel}>
                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                        }}
                        onPress={openCam5}
                    >
                        <Image
                            style={styles.imgCam}
                            source={require('../../../assets/images/camblk.png')}
                        />

                        <Text style={styles.txtBS}>
                            Camera
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                        }}
                        onPress={getImage5}
                    >
                        <Image
                            style={styles.img3dots}
                            source={require('../../../assets/images/3dots2.png')}
                        />

                        <Text style={styles.txtBS}>
                            Browse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const sheetRef = React.createRef()
    const sheetRef1 = React.createRef()
    const sheetRef2 = React.createRef()
    const sheetRef3 = React.createRef()
    const sheetRef4 = React.createRef()
    const sheetRef5 = React.createRef()
    const fall = new Animated.Value(1)

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        style={styles.btnBack}
                        source={require('../../../assets/images/back.png')}
                    />
                </TouchableOpacity>

                <Text style={styles.txtAddPic}>
                    Ubah Foto
                </Text>
            </View>

            <View style={styles.chosenPic}>
                <TouchableOpacity
                    onPress={() => sheetRef.current.snapTo(0)}
                    style={styles.bluRectangle}
                >
                    <Image source={photo}
                        style={{
                            height: normalize(180),
                            width: normalize(180)
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => sheetRef1.current.snapTo(0)}
                    style={styles.bluRectangle}
                >
                    <Image source={photo1}
                        style={{
                            height: normalize(180),
                            width: normalize(180)
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => sheetRef2.current.snapTo(0)}
                    style={styles.bluRectangle}
                >
                    <Image source={photo2}
                        style={{
                            height: normalize(180),
                            width: normalize(180)
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => sheetRef3.current.snapTo(0)}
                    style={styles.bluRectangle}
                >
                    <Image source={photo3}
                        style={{
                            height: normalize(180),
                            width: normalize(180)
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => sheetRef4.current.snapTo(0)}
                    style={styles.bluRectangle}
                >
                    <Image source={photo4}
                        style={{
                            height: normalize(180),
                            width: normalize(180)
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => sheetRef5.current.snapTo(0)}
                    style={styles.bluRectangle}
                >
                    <Image source={photo5}
                        style={{
                            height: normalize(180),
                            width: normalize(180)
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.btnNxtArea}>
                <TouchableOpacity
                    style={styles.btnNxt}
                    onPress={uploadAndContinue}
                >
                    <Text style={styles.txtNxt}>
                        SELANJUTNYA
                    </Text>
                </TouchableOpacity>
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[90, 0]}
                initialSnap={1}
                callbackNode={fall}
                renderContent={renderScreen}
                enabledGestureInteraction={true}
            />

            <BottomSheet
                ref={sheetRef1}
                snapPoints={[90, 0]}
                initialSnap={1}
                callbackNode={fall}
                renderContent={renderScreen1}
                enabledGestureInteraction={true}
            />

            <BottomSheet
                ref={sheetRef2}
                snapPoints={[90, 0]}
                initialSnap={1}
                callbackNode={fall}
                renderContent={renderScreen2}
                enabledGestureInteraction={true}
            />

            <BottomSheet
                ref={sheetRef3}
                snapPoints={[90, 0]}
                initialSnap={1}
                callbackNode={fall}
                renderContent={renderScreen3}
                enabledGestureInteraction={true}
            />

            <BottomSheet
                ref={sheetRef4}
                snapPoints={[90, 0]}
                initialSnap={1}
                callbackNode={fall}
                renderContent={renderScreen4}
                enabledGestureInteraction={true}
            />

            <BottomSheet
                ref={sheetRef5}
                snapPoints={[90, 0]}
                initialSnap={1}
                callbackNode={fall}
                renderContent={renderScreen5}
                enabledGestureInteraction={true}
            />
        </View>
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
        marginTop: normalize(8),
        marginLeft: normalize(8),
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
        height: normalize(58),
        backgroundColor: '#0064D0'
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
    panel: {
        height: normalize(85),
        padding: normalize(10),
        backgroundColor: '#FFFFFF',
        paddingTop: normalize(1),
    },

    imgCam: {
        width: normalize(21),
        height: normalize(19)
    },

    img3dots: {
        width: normalize(22),
        height: normalize(22)
    },

    txtBS: {
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    }
})
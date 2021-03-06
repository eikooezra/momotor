import React, { useState } from 'react';
import {
    Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import normalize from 'react-native-normalize';
import { Fire } from '../../../config';
import { getData } from '../../../utils/localstorage/localstorage';

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
    const [photoForDB, setPhotoForDB] = useState({ uri: images.image })
    const [photoForDB1, setPhotoForDB1] = useState({ uri: images.image1 })
    const [photoForDB2, setPhotoForDB2] = useState({ uri: images.image2 })
    const [photoForDB3, setPhotoForDB3] = useState({ uri: images.image3 })
    const [photoForDB4, setPhotoForDB4] = useState({ uri: images.image4 })
    const [photoForDB5, setPhotoForDB5] = useState({ uri: images.image5 })
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
                const data = { uri: `data:${response.type};base64, ${response.base64}` }
                setPhotoForDB(data)
                setPhoto(source)
            })
    }

    const getImage1 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                const data = { uri: `data:${response.type};base64, ${response.base64}` }
                setPhotoForDB1(data)
                setPhoto1(source)
            })
    }

    const getImage2 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                const data = { uri: `data:${response.type};base64, ${response.base64}` }
                setPhotoForDB2(data)
                setPhoto2(source)
            })
    }

    const getImage3 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                const data = { uri: `data:${response.type};base64, ${response.base64}` }
                setPhotoForDB3(data)
                setPhoto3(source)
            })
    }

    const getImage4 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                const data = { uri: `data:${response.type};base64, ${response.base64}` }
                setPhotoForDB4(data)
                setPhoto4(source)
            })
    }

    const getImage5 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                const data = { uri: `data:${response.type};base64, ${response.base64}` }
                setPhotoForDB5(data)
                setPhoto5(source)
            })
    }

    const uploadAndContinue = () => {
        getData('user').then(res => {
            Fire
                .database()
                .ref('product/' + res.uid + '/' + id + '/images' + '/')
                .update({
                    image: photoForDB.uri,
                    image1: photoForDB1.uri,
                    image2: photoForDB2.uri,
                    image3: photoForDB3.uri,
                    image4: photoForDB4.uri,
                    image5: photoForDB5.uri,
                })
            navigation.navigate('Verification')
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Add')}
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

            <View style={styles.chosenPic}>
                <TouchableOpacity
                    onPress={getImage}
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
                    onPress={getImage1}
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
                    onPress={getImage2}
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
                    onPress={getImage3}
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
                    onPress={getImage4}
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
                    onPress={getImage5}
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
})
import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import Animated from 'react-native-reanimated'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import normalize from 'react-native-normalize'
import { ScrollView } from 'react-native-gesture-handler';

const AddPics = ({navigation}) =>  {
    const [photo, setPhoto] = useState(require('../../../assets/images/camLogo.png'))
    const [photo1, setPhoto1] = useState(require('../../../assets/images/camLogo.png'))
    const [photo2, setPhoto2] = useState(require('../../../assets/images/camLogo.png'))
    const [photo3, setPhoto3] = useState(require('../../../assets/images/camLogo.png'))
    const [photo4, setPhoto4] = useState(require('../../../assets/images/camLogo.png'))
    const [photo5, setPhoto5] = useState(require('../../../assets/images/camLogo.png'))

    const getImage = () => {
        launchImageLibrary(
            {mediaType: 'photo', quality: 1}, 
            (response) => {
            console.log('response: ', response)
            const source = {uri: response.uri}
            setPhoto(source)
        })
    }

    const getImage1 = () => {
        launchImageLibrary(
            {mediaType: 'photo', quality: 1}, 
            (response) => {
            console.log('response: ', response)
            const source = {uri: response.uri}
            setPhoto1(source)
        })
    }

    const getImage2 = () => {
        launchImageLibrary(
            {mediaType: 'photo', quality: 1}, 
            (response) => {
            console.log('response: ', response)
            const source = {uri: response.uri}
            setPhoto2(source)
        })
    }

    const getImage3 = () => {
        launchImageLibrary(
            {mediaType: 'photo', quality: 1}, 
            (response) => {
            console.log('response: ', response)
            const source = {uri: response.uri}
            setPhoto3(source)
        })
    }

    const getImage4 = () => {
        launchImageLibrary(
            {mediaType: 'photo', quality: 1}, 
            (response) => {
            console.log('response: ', response)
            const source = {uri: response.uri}
            setPhoto4(source)
        })
    }

    const getImage5 = () => {
        launchImageLibrary(
            {mediaType: 'photo', quality: 1}, 
            (response) => {
            console.log('response: ', response)
            const source = {uri: response.uri}
            setPhoto5(source)
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
                        onPress={() => navigation.navigate('Verification')}
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
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

const AddPics = ({navigation}) =>  {
    const [photo, setPhoto] = useState(require('../../../assets/images/camLogo.png'))

    const getImage = () => {
        launchImageLibrary({}, response => {
            console.log('response: ', response)
            const source = {uri: response.uri}
            setPhoto(source)
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
                        // style={styles.bluRectangle}
                    >
                        <Image source={photo}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.btnNxtArea}>
                    <TouchableOpacity
                        style={styles.btnNxt}
                        onPress={() => navigate.navigation('Verification')}
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
        height: normalize(120),
        width: normalize(120),
        marginTop: normalize(5),
        marginLeft: normalize(5),
        backgroundColor: 'transparent',
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
        flex: 1,
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
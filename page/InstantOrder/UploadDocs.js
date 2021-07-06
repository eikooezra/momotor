import React, { useState } from 'react'
import {
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Animated from 'react-native-reanimated'
import BottomSheet from 'reanimated-bottom-sheet'
import normalize from 'react-native-normalize'
// import { Fire } from '../../../config';
// import { getData } from '../../../utils/localstorage/localstorage';
import { Header, Title } from '../../components/components'


const UploadDocs = ({ navigation, route }) => {
    // const {
    //     name,
    //     year,
    //     location,
    //     price,
    //     ref_code,
    //     desc,
    //     kilometer,
    //     id
    // } = route.params

    const goBack = () => {
        navigation.navigate('DataKredit')
    }

    // const [photoForDB, setPhotoForDB] = useState('')
    // const [photoForDB1, setPhotoForDB1] = useState('')
    // const [photoForDB2, setPhotoForDB2] = useState('')
    // const [photoForDB3, setPhotoForDB3] = useState('')
    // const [photoForDB4, setPhotoForDB4] = useState('')
    // const [photoForDB5, setPhotoForDB5] = useState('')
    // const [photoForDB6, setPhotoForDB6] = useState('')
    // const [photoForDB7, setPhotoForDB7] = useState('')
    const [photo, setPhoto] = useState('')
    const [photo1, setPhoto1] = useState('')
    const [photo2, setPhoto2] = useState('')
    const [photo3, setPhoto3] = useState('')
    const [photo4, setPhoto4] = useState('')
    const [photo5, setPhoto5] = useState('')
    const [photo6, setPhoto6] = useState('')
    const [photo7, setPhoto7] = useState('')

    const getImage = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
                setPhoto(source)
            })
    }

    const openCam = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
                setPhoto(source)
            })
    }

    const getImage1 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB1(`data:${response.type};base64, ${response.base64}`)
                setPhoto1(source)
            })
    }

    const openCam1 = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
                setPhoto1(source)
            })
    }

    const getImage2 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB2(`data:${response.type};base64, ${response.base64}`)
                setPhoto2(source)
            })
    }

    const openCam2 = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
                setPhoto2(source)
            })
    }

    const getImage3 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB3(`data:${response.type};base64, ${response.base64}`)
                setPhoto3(source)
            })
    }

    const openCam3 = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
                setPhoto3(source)
            })
    }

    const getImage4 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB4(`data:${response.type};base64, ${response.base64}`)
                setPhoto4(source)
            })
    }

    const openCam4 = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
                setPhoto4(source)
            })
    }

    const getImage5 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB5(`data:${response.type};base64, ${response.base64}`)
                setPhoto5(source)
            })
    }

    const openCam5 = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
                setPhoto5(source)
            })
    }

    const getImage6 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB6(`data:${response.type};base64, ${response.base64}`)
                setPhoto6(source)
            })
    }

    const openCam6 = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
                setPhoto6(source)
            })
    }

    const getImage7 = () => {
        launchImageLibrary(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB7(`data:${response.type};base64, ${response.base64}`)
                setPhoto7(source)
            })
    }

    const openCam7 = () => {
        launchCamera(
            { mediaType: 'photo', quality: 1, includeBase64: true },
            (response) => {
                console.log('response: ', response)
                const source = { uri: response.uri }
                // setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
                setPhoto7(source)
            })
    }

    const uploadAndContinue = () => {
        getData('user').then(res => {
            Fire
                .database()
                .ref('product/' + res.uid + '/' + id + '/images' + '/')
                .update({
                    image: photoForDB,
                    image1: photoForDB1,
                    image2: photoForDB2,
                    image3: photoForDB3,
                    image4: photoForDB4,
                    image5: photoForDB5,
                    image6: photoForDB6,
                    image7: photoForDB7,
                })
            navigation.navigate('Verification')
        })
    }

    // bottom sheet
    const renderScreen = () => {
        return(
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
                            source={require('../../assets/images/camblk.png')}
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
                            source={require('../../assets/images/3dots2.png')}
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
        return(
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
                            source={require('../../assets/images/camblk.png')}
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
                            source={require('../../assets/images/3dots2.png')}
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
        return(
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
                            source={require('../../assets/images/camblk.png')}
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
                            source={require('../../assets/images/3dots2.png')}
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
        return(
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
                            source={require('../../assets/images/camblk.png')}
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
                            source={require('../../assets/images/3dots2.png')}
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
        return(
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
                            source={require('../../assets/images/camblk.png')}
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
                            source={require('../../assets/images/3dots2.png')}
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
        return(
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
                            source={require('../../assets/images/camblk.png')}
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
                            source={require('../../assets/images/3dots2.png')}
                        />

                        <Text style={styles.txtBS}>
                            Browse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderScreen6 = () => {
        return(
            <View style={styles.panel}>
                <View>
                    <TouchableOpacity 
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                            }}
                        onPress={openCam6}
                        >
                        <Image
                            style={styles.imgCam}
                            source={require('../../assets/images/camblk.png')}
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
                        onPress={getImage6}
                        >
                        <Image
                            style={styles.img3dots}
                            source={require('../../assets/images/3dots2.png')}
                        />

                        <Text style={styles.txtBS}>
                            Browse
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderScreen7 = () => {
        return(
            <View style={styles.panel}>
                <View>
                    <TouchableOpacity 
                        style={{
                            marginTop: 20,
                            marginLeft: 25,
                            flexDirection: 'row',
                            }}
                        onPress={openCam7}
                        >
                        <Image
                            style={styles.imgCam}
                            source={require('../../assets/images/camblk.png')}
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
                        onPress={getImage7}
                        >
                        <Image
                            style={styles.img3dots}
                            source={require('../../assets/images/3dots2.png')}
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
    const sheetRef6 = React.createRef()
    const sheetRef7 = React.createRef()
    const fall = new Animated.Value(1)

    return (
        <View style={styles.container}>
            <Header title="Instant Order" onPress={goBack} back />
            <Title text="Upload" />
            <ScrollView>
                <View style={styles.DisclaimerContainer}>
                    <Image
                        style={styles.imgInfo}
                        source={require('../../assets/images/info.png')}
                    />

                    <Text style={styles.txtDisclaimer}>
                        Format Dokumen: JPG, PNG
                    </Text>
                </View>

                <View style={styles.whiteBox}>
                    <View>
                        <Text style={styles.txtKTP}>
                            KTP (Kartu Tanda Penduduk)
                        </Text>

                        <Text style={styles.txtUpKTP}>
                            Upload KTP disini
                        </Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.btnUpload}
                        onPress={() => sheetRef.current.snapTo(0)}
                        >
                        <Image
                            style={styles.imgUpload}
                            source={require('../../assets/images/upload.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.whiteBox}>
                    <View>
                        <Text style={styles.txtKK}>
                            Kartu Keluarga
                        </Text>

                        <Text style={styles.txtUpKK}>
                            Upload Kartu Keluarga disini
                        </Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.btnUpload}
                        onPress={() => sheetRef1.current.snapTo(0)}
                    >
                        <Image
                            style={styles.imgUpload}
                            source={require('../../assets/images/upload.png')}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.txtBuktiRmh}>
                    Bukti Kepemilikan Rumah
                </Text>

                <View style={styles.whiteBox}>
                    <View>
                        <Text style={styles.txtPBB}>
                            PBB (Pajak Bumi dan Bangunan)
                        </Text>

                        <Text style={styles.txtUpPBB}>
                            Upload PBB disini
                        </Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.btnUpload}
                        onPress={() => sheetRef2.current.snapTo(0)}
                    >
                        <Image
                            style={styles.imgUpload}
                            source={require('../../assets/images/upload.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.whiteBox}>
                    <View>
                        <Text style={styles.txtSertifikat}>
                            Sertifikat Rumah
                        </Text>

                        <Text style={styles.txtUpSertifikat}>
                            Upload Sertifikat Rumah disini
                        </Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.btnUpload}
                        onPress={() => sheetRef3.current.snapTo(0)}
                    >
                        <Image
                            style={styles.imgUpload}
                            source={require('../../assets/images/upload.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.whiteBox}>
                    <View>
                        <Text style={styles.txtReklis}>
                            Rekening Listrik
                        </Text>

                        <Text style={styles.txtUpReklis}>
                            Upload Rekening Listrik disini
                        </Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.btnUpload}
                        onPress={() => sheetRef4.current.snapTo(0)}
                    >
                        <Image
                            style={styles.imgUpload}
                            source={require('../../assets/images/upload.png')}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.txtBuktiSal}>
                    Bukti Penghasilan
                </Text>

                <View style={styles.whiteBox}>
                    <View>
                        <Text style={styles.txtSalary}>
                            Slip Gaji
                        </Text>

                        <Text style={styles.txtUpSalary}>
                            Upload Slip Gaji disini
                        </Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.btnUpload}
                        onPress={() => sheetRef5.current.snapTo(0)}
                    >
                        <Image
                            style={styles.imgUpload}
                            source={require('../../assets/images/upload.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.whiteBox}>
                    <View>
                        <Text style={styles.txtRekkor}>
                            Rekening Koran
                        </Text>

                        <Text style={styles.txtUpRekkor}>
                            Upload Rekening Koran disini
                        </Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.btnUpload}
                        onPress={() => sheetRef6.current.snapTo(0)}
                    >
                        <Image
                            style={styles.imgUpload}
                            source={require('../../assets/images/upload.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.whiteBox}>
                    <View>
                        <Text style={styles.txtNota}>
                            Nota Penjualan
                        </Text>

                        <Text style={styles.txtUpNota}>
                            Upload Nota Penjualan disini
                        </Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.btnUpload}
                        onPress={() => sheetRef7.current.snapTo(0)}
                    >
                        <Image
                            style={styles.imgUpload}
                            source={require('../../assets/images/upload.png')}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.btnSubmit}
                // onPress={onContinue}
                // disabled={!enabled}
                >
                    <Text style={styles.txtSubmit}>
                        Submit Order
                    </Text>
                </TouchableOpacity>
            </ScrollView>

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

            <BottomSheet
                ref={sheetRef6}
                snapPoints={[90, 0]}
                initialSnap={1}
                callbackNode={fall}
                renderContent={renderScreen6}
                enabledGestureInteraction={true}
            />

            <BottomSheet
                ref={sheetRef7}
                snapPoints={[90, 0]}
                initialSnap={1}
                callbackNode={fall}
                renderContent={renderScreen7}
                enabledGestureInteraction={true}
            />
        </View>
    )
}

export default UploadDocs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    DisclaimerContainer: {
        width: normalize(350),
        height: normalize(35),
        marginLeft: normalize(16),
        marginBottom: normalize(20),
        borderRadius: 6,
        flexDirection: 'row',
        backgroundColor: '#E8F5FF'
    },

    imgInfo: {
        width: normalize(14),
        height: normalize(14),
        marginTop: normalize(12),
        marginLeft: normalize(16)
    },

    txtDisclaimer: {
        width: normalize(300),
        marginTop: normalize(8),
        marginLeft: normalize(8),
        fontSize: normalize(15),
        fontFamily: 'Montserrat-Medium'
    },

    whiteBox: {
        width: normalize(350),
        height: normalize(64),
        marginBottom: normalize(20),
        marginLeft: normalize(16),
        borderRadius: normalize(4),
        elevation: 5,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },

    btnUpload: {
        marginTop: normalize(35),
        marginLeft: normalize(60)
    },

    imgUpload: {
        width: normalize(14),
        height: normalize(18)
    },

    txtKTP: {
        width: normalize(250),
        marginTop: normalize(12),
        marginLeft: normalize(16),
        marginBottom: normalize(6),
        fontSize: normalize(14.5),
        fontFamily: 'Montserrat-Medium'
    },

    txtUpKTP: {
        width: normalize(100),
        marginLeft: normalize(16),
        fontSize: normalize(12.5),
        fontFamily: 'Montserrat-Regular'
    },

    txtKK: {
        width: normalize(250),
        marginTop: normalize(12),
        marginLeft: normalize(16),
        marginBottom: normalize(6),
        fontSize: normalize(14.5),
        fontFamily: 'Montserrat-Medium'
    },

    txtUpKK: {
        width: normalize(250),
        marginLeft: normalize(16),
        fontSize: normalize(12.5),
        fontFamily: 'Montserrat-Regular'
    },

    txtBuktiRmh: {
        width: normalize(200),
        marginBottom: normalize(20),
        marginLeft: normalize(16),
        fontSize: normalize(14.5),
        fontFamily: 'Montserrat-Medium'
    },

    txtPBB: {
        width: normalize(250),
        marginTop: normalize(12),
        marginLeft: normalize(16),
        marginBottom: normalize(6),
        fontSize: normalize(14.5),
        fontFamily: 'Montserrat-Medium'
    },

    txtUpPBB: {
        width: normalize(250),
        marginLeft: normalize(16),
        fontSize: normalize(12.5),
        fontFamily: 'Montserrat-Regular'
    },

    txtSertifikat: {
        width: normalize(250),
        marginTop: normalize(12),
        marginLeft: normalize(16),
        marginBottom: normalize(6),
        fontSize: normalize(14.5),
        fontFamily: 'Montserrat-Medium'
    },

    txtUpSertifikat: {
        width: normalize(250),
        marginLeft: normalize(16),
        fontSize: normalize(12.5),
        fontFamily: 'Montserrat-Regular'
    },

    txtReklis: {
        width: normalize(250),
        marginTop: normalize(12),
        marginLeft: normalize(16),
        marginBottom: normalize(6),
        fontSize: normalize(14.5),
        fontFamily: 'Montserrat-Medium'
    },

    txtUpReklis: {
        width: normalize(250),
        marginLeft: normalize(16),
        fontSize: normalize(12.5),
        fontFamily: 'Montserrat-Regular'
    },

    txtBuktiSal: {
        width: normalize(200),
        marginBottom: normalize(20),
        marginLeft: normalize(16),
        fontSize: normalize(14.5),
        fontFamily: 'Montserrat-Medium'
    },

    txtSalary: {
        width: normalize(250),
        marginTop: normalize(12),
        marginLeft: normalize(16),
        marginBottom: normalize(6),
        fontSize: normalize(14.5),
        fontFamily: 'Montserrat-Medium'
    },

    txtUpSalary: {
        width: normalize(250),
        marginLeft: normalize(16),
        fontSize: normalize(12.5),
        fontFamily: 'Montserrat-Regular'
    },

    txtRekkor: {
        width: normalize(250),
        marginTop: normalize(12),
        marginLeft: normalize(16),
        marginBottom: normalize(6),
        fontSize: normalize(14.5),
        fontFamily: 'Montserrat-Medium'
    },

    txtUpRekkor: {
        width: normalize(250),
        marginLeft: normalize(16),
        fontSize: normalize(12.5),
        fontFamily: 'Montserrat-Regular'
    },

    txtNota: {
        width: normalize(250),
        marginTop: normalize(12),
        marginLeft: normalize(16),
        marginBottom: normalize(6),
        fontSize: normalize(14.5),
        fontFamily: 'Montserrat-Medium'
    },

    txtUpNota: {
        width: normalize(250),
        marginLeft: normalize(16),
        fontSize: normalize(12.5),
        fontFamily: 'Montserrat-Regular'
    },

    btnSubmit: {
        width: normalize(350),
        height: normalize(43),
        marginLeft: normalize(16),
        marginBottom: normalize(20),
        borderRadius: 6,
        backgroundColor: '#B7B7B7',
    },

    txtSubmit: {
        width: normalize(120),
        marginTop: normalize(10),
        marginLeft: normalize(125),
        fontSize: normalize(16.5),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-SemiBold',
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
import React, {Component} from 'react'
import {
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import normalize from 'react-native-normalize'
import { Header, Title } from '../../components/components'
import RBSheet from 'react-native-raw-bottom-sheet'


const DataKredit = () => {
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
    // const [photo, setPhoto] = useState(require('../../../assets/images/camLogo.png'))
    // const [photo1, setPhoto1] = useState(require('../../../assets/images/camLogo.png'))
    // const [photo2, setPhoto2] = useState(require('../../../assets/images/camLogo.png'))
    // const [photo3, setPhoto3] = useState(require('../../../assets/images/camLogo.png'))
    // const [photo4, setPhoto4] = useState(require('../../../assets/images/camLogo.png'))
    // const [photo5, setPhoto5] = useState(require('../../../assets/images/camLogo.png'))

    // const getImage = () => {
    //     launchImageLibrary(
    //         { mediaType: 'photo', quality: 1, includeBase64: true },
    //         (response) => {
    //             console.log('response: ', response)
    //             const source = { uri: response.uri }
    //             setPhotoForDB(`data:${response.type};base64, ${response.base64}`)
    //             setPhoto(source)
    //         })
    // }

    // const getImage1 = () => {
    //     launchImageLibrary(
    //         { mediaType: 'photo', quality: 1, includeBase64: true },
    //         (response) => {
    //             console.log('response: ', response)
    //             const source = { uri: response.uri }
    //             setPhotoForDB1(`data:${response.type};base64, ${response.base64}`)
    //             setPhoto1(source)
    //         })
    // }

    // const getImage2 = () => {
    //     launchImageLibrary(
    //         { mediaType: 'photo', quality: 1, includeBase64: true },
    //         (response) => {
    //             console.log('response: ', response)
    //             const source = { uri: response.uri }
    //             setPhotoForDB2(`data:${response.type};base64, ${response.base64}`)
    //             setPhoto2(source)
    //         })
    // }

    // const getImage3 = () => {
    //     launchImageLibrary(
    //         { mediaType: 'photo', quality: 1, includeBase64: true },
    //         (response) => {
    //             console.log('response: ', response)
    //             const source = { uri: response.uri }
    //             setPhotoForDB3(`data:${response.type};base64, ${response.base64}`)
    //             setPhoto3(source)
    //         })
    // }

    // const getImage4 = () => {
    //     launchImageLibrary(
    //         { mediaType: 'photo', quality: 1, includeBase64: true },
    //         (response) => {
    //             console.log('response: ', response)
    //             const source = { uri: response.uri }
    //             setPhotoForDB4(`data:${response.type};base64, ${response.base64}`)
    //             setPhoto4(source)
    //         })
    // }

    // const getImage5 = () => {
    //     launchImageLibrary(
    //         { mediaType: 'photo', quality: 1, includeBase64: true },
    //         (response) => {
    //             console.log('response: ', response)
    //             const source = { uri: response.uri }
    //             setPhotoForDB5(`data:${response.type};base64, ${response.base64}`)
    //             setPhoto5(source)
    //         })
    // }

    // const uploadAndContinue = () => {
    //     getData('user').then(res => {
    //         Fire
    //             .database()
    //             .ref('product/' + res.uid + '/' + id + '/images' + '/')
    //             .update({
    //                 image: photoForDB,
    //                 image1: photoForDB1,
    //                 image2: photoForDB2,
    //                 image3: photoForDB3,
    //                 image4: photoForDB4,
    //                 image5: photoForDB5,
    //             })
    //         navigation.navigate('Verification')
    //     })
    // }

        return(
            <View style={styles.container}>
                <Header title="Instant Order" onPress={this.goBack} back/>
                <Title text="Upload"/>
                <ScrollView>
                    <View style={styles.DisclaimerContainer}>
                        <Image
                            style={styles.imgInfo}
                            source={require('../../assets/images/info.png')}
                        />

                        <Text style={styles.txtDisclaimer}>
                            Format Dokumen: JPG, PNG, PDF
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
                        
                        <TouchableOpacity style={styles.btnUpload}>
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

                        <TouchableOpacity style={styles.btnUpload}>
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

                        <TouchableOpacity style={styles.btnUpload}>
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

                        <TouchableOpacity style={styles.btnUpload}>
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

                        <TouchableOpacity style={styles.btnUpload}>
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

                        <TouchableOpacity style={styles.btnUpload}>
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

                        <TouchableOpacity style={styles.btnUpload}>
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

                        <TouchableOpacity style={styles.btnUpload}>
                            <Image
                                style={styles.imgUpload}
                                source={require('../../assets/images/upload.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                    style={styles.btnSubmit}
                    // onPress={this.goToUploadDocs}
                    // disabled={!enabled}
                    >
                        <Text style={styles.txtSubmit}>
                            Submit Order
                        </Text>
                     </TouchableOpacity>
                </ScrollView>

                <RBSheet
                ref={refRBSheet}
                height={300}
                openDuration={250}
                closeOnDragDown={true}
                customStyles={{
                    container: {
                        height: 250,
                        borderTopStartRadius: 10,
                        borderTopEndRadius: 10,
                    }
                }}
                >
                    <BottomSheet />
                 </RBSheet>
            </View>
        )
    }

export default DataKredit

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
})
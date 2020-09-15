import React, {Component} from 'react'
import {
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize'

class DataKredit extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    goBack = () => {
        this.props.navigation.navigate('DataKredit')
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

                    <Text style={styles.txtInstant}>
                        Instant Order
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txtUpload}>
                        Upload Dokumen
                    </Text>
                </View>

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

                
            </View>
        )
    }
}

export default DataKredit

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    Header: {
        width: normalize(412),
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

    txtInstant: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(103),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    containerTxt: {
        width: normalize(420),
        height: normalize(48),
        marginBottom: normalize(15),
        elevation: 4,
        backgroundColor: '#FFFFFF',
    },

    txtUpload: {
        width: normalize(124),
        height: normalize(19),
        marginTop: normalize(15),
        marginLeft: normalize(16),
        color: '#000000',
        fontFamily: 'Montserrat-SemiBold'
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
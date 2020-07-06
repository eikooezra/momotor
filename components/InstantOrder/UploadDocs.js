import React, {Component} from 'react'
import {
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

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
        width: 412,
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: 32,
        height: 16,
        marginLeft: 16,
        marginTop: 30
    },

    txtInstant: {
        width: 200,
        height: 20,
        marginTop: 25,
        marginLeft: 103,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    containerTxt: {
        width: 420,
        height: 48,
        marginBottom: 15,
        elevation: 4,
        backgroundColor: '#FFFFFF',
    },

    txtUpload: {
        width: 200,
        height: 19,
        marginTop: 15,
        marginLeft: 16,
        color: '#000000',
        fontFamily: 'Montserrat-SemiBold'
    },

    DisclaimerContainer: {
        width: 380,
        height: 39,
        marginLeft: 16,
        marginBottom: 20,
        borderRadius: 6,
        flexDirection: 'row',
        backgroundColor: '#E8F5FF'
    },

    imgInfo: {
        width: 14,
        height: 14,
        marginTop: 12,
        marginLeft: 16
    },

    txtDisclaimer: {
        width: 300,
        height: 18,
        marginTop: 8,
        marginLeft: 8,
        fontSize: 15,
        fontFamily: 'Montserrat-Medium'
    },

    whiteBox: {
        width: 380,
        height: 67,
        marginBottom: 20,
        marginLeft: 16,
        borderRadius: 4,
        elevation: 5,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
    },

    btnUpload: {
        marginTop: 35,
        marginLeft: 80
    },

    imgUpload: {
        width: 14,
        height: 18
    },

    txtKTP: {
        width: 250,
        height: 18,
        marginTop: 12,
        marginLeft: 16,
        marginBottom: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtUpKTP: {
        width: 250,
        height: 15,
        marginLeft: 16,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },

    txtKK: {
        width: 250,
        height: 18,
        marginTop: 12,
        marginLeft: 16,
        marginBottom: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtUpKK: {
        width: 250,
        height: 15,
        marginLeft: 16,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },

    txtBuktiRmh: {
        width: 200,
        height: 20,
        marginBottom: 20,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtPBB: {
        width: 250,
        height: 18,
        marginTop: 12,
        marginLeft: 16,
        marginBottom: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtUpPBB: {
        width: 250,
        height: 15,
        marginLeft: 16,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },

    txtSertifikat: {
        width: 250,
        height: 18,
        marginTop: 12,
        marginLeft: 16,
        marginBottom: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtUpSertifikat: {
        width: 250,
        height: 15,
        marginLeft: 16,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },

    txtReklis: {
        width: 250,
        height: 18,
        marginTop: 12,
        marginLeft: 16,
        marginBottom: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtUpReklis: {
        width: 250,
        height: 15,
        marginLeft: 16,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },

    txtBuktiSal: {
        width: 200,
        height: 20,
        marginBottom: 20,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtSalary: {
        width: 250,
        height: 18,
        marginTop: 12,
        marginLeft: 16,
        marginBottom: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtUpSalary: {
        width: 250,
        height: 15,
        marginLeft: 16,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },

    txtRekkor: {
        width: 250,
        height: 18,
        marginTop: 12,
        marginLeft: 16,
        marginBottom: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtUpRekkor: {
        width: 250,
        height: 15,
        marginLeft: 16,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },

    txtNota: {
        width: 250,
        height: 18,
        marginTop: 12,
        marginLeft: 16,
        marginBottom: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtUpNota: {
        width: 250,
        height: 15,
        marginLeft: 16,
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    },

    btnSubmit: {
        width: 380,
        height: 45,
        marginLeft: 16,
        marginBottom: 20,
        borderRadius: 6,
        backgroundColor: '#B7B7B7',
    },

    txtSubmit: {
        width: 120,
        height: 18,
        marginTop: 10,
        marginLeft: 135,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-SemiBold',
    },
})
import React, {Component} from 'react'
import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet,
} from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'

class ProsesVerif extends Component{
    constructor(props){
        super(props)
        this.state = {
            images: [
                require('../../../assets/images/vario.png'),
                require('../../../assets/images/vario.png'),
                require('../../../assets/images/vario.png'),
                require('../../../assets/images/vario.png'),
                require('../../../assets/images/vario.png')
            ]
        }
    }

    render(){
        return(
         <View style={styles.container}>
             <ScrollView>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={400}
                />

               <View style={styles.bkgProses}>
                    <Text style={styles.txtProses}>
                        Proses Verifikasi
                    </Text>
               </View>

                <View style={styles.section1}>
                    <Text style={styles.txtModel}>
                        HONDA VARIO 125 CBS EPS ISS
                    </Text>

                    <Text style={styles.txtPrice}>
                        Rp. 20.000.000
                    </Text>
                </View>

                <View style={styles.whiteBox}>
                    <Text style={styles.txtDP}>
                        Uang Muka (DP)
                    </Text>

                    <Text style={styles.txtPriceDP}>
                        Rp 2.000.0000
                    </Text>
                </View>

                <View style={styles.whiteBox}>
                    <Text style={styles.txtCicil}>
                        Jumlah Cicilan (Per Bulan)
                    </Text>

                    <Text style={styles.txtPriceCicil}>
                        Rp 770.000
                    </Text>
                </View>

                <View style={styles.whiteBox2}>
                    <Text style={styles.txtDetail}>
                        Detail Pesanan
                    </Text>

                    <View style={styles.nameContainer}>
                        <Text style={styles.txtNama}>
                            Nama Pemesan
                        </Text>

                        <Text style={styles.txtName}>
                            Sumanto Wijaya
                        </Text>
                    </View>

                    <View style={styles.codeContainer}>
                        <Text style={styles.txtKode}>
                            Kode
                        </Text>

                        <Text style={styles.txtCode}>
                            1569825581305
                        </Text>
                    </View>

                    <View style={styles.noRefContainer}>
                        <Text style={styles.txtRef}>
                            No. Referensi
                        </Text>

                        <Text style={styles.txtNoRef}>
                            UMCY1569825580096
                        </Text>
                    </View>

                    <View style={styles.tenorContainer}>
                        <Text style={styles.txtTenor}>
                            Tenor
                        </Text>

                        <Text style={styles.txtTenorMonths}>
                            12 Bulan
                        </Text>
                    </View>

                    <View style={styles.dateContainer}>
                        <Text style={styles.txtTanggal}>
                            Tanggal Pemesanan
                        </Text>

                        <Text style={styles.txtDate}>
                            21/12/19
                        </Text>
                    </View>
                </View>

                <Text style={styles.txtTindakan}>
                    Tindakan
                </Text>

                <TouchableOpacity
                    style={styles.btnPerbarui}
                >
                    <Text style={styles.txtPerbarui}>
                        Perbarui
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
        )
    }
}

export default ProsesVerif

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },

    bkgProses: {
        width: 120,
        height: 25,
        marginTop: 16,
        marginLeft: 16,
        marginBottom: 16,
        borderRadius: 4,
        backgroundColor: '#EAF7EE'
    },
    
    txtProses: {
        marginTop: 4,
        marginLeft: 8,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: '#3CB13C'
    },

    section1: {
        width: 378,
        marginBottom: 16,
        marginLeft: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#0000001A'
    },

    txtModel: {
        marginBottom: 5,
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold'
    },

    txtPrice: {
        marginBottom: 12,
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        color: '#0064D0'
    },

    whiteBox: {
        width: 378,
        height: 80,
        marginLeft: 16,
        marginBottom: 16,
        borderWidth: 0.3,
        borderRadius: 6,
        backgroundColor: '#FFFFFF'
    },

    txtDP: {
        marginTop: 10,
        marginBottom: 8,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtPriceDP: {
        marginLeft: 16,
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        color: '#0064D0'
    },

    txtCicil: {
        marginTop: 10,
        marginBottom: 8,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtPriceCicil: {
        marginLeft: 16,
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        color: '#0064D0'
    },

    whiteBox2: {
        width: 378,
        height: 200,
        marginLeft: 16,
        marginBottom: 16,
        borderWidth: 0.3,
        borderRadius: 6,
        backgroundColor: '#FFFFFF'
    },

    txtDetail: {
        marginTop: 10,
        marginBottom: 12,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    nameContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },

    txtNama: {
        marginLeft: 25,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    txtName: {
        marginLeft: 90,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    codeContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },

    txtKode: {
        marginLeft: 25,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    txtCode: {
        marginLeft: 180,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    noRefContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },

    txtRef: {
        marginLeft: 25,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    txtNoRef: {
        marginLeft: 75,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    tenorContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },

    txtTenor: {
        marginLeft: 25,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    txtTenorMonths: {
        marginLeft: 220,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    dateContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },

    txtTanggal: {
        marginLeft: 25,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    txtDate: {
        marginLeft: 120,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    txtTindakan: {
        marginBottom: 12,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    btnPerbarui: {
        width: 378,
        height: 50,
        marginBottom: 31,
        marginLeft: 16,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#0064D0',
        backgroundColor: '#FFFFFF'
    },

    txtPerbarui: {
        marginTop: 11,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#0064D0'
    }

})
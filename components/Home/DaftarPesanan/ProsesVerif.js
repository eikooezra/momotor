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
import normalize from 'react-native-normalize';

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
        width: normalize(100),
        height: normalize(25),
        marginTop: normalize(16),
        marginLeft: normalize(16),
        marginBottom: normalize(16),
        borderRadius: 4,
        backgroundColor: '#EAF7EE'
    },
    
    txtProses: {
        marginTop: normalize(5),
        marginLeft: normalize(8),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-SemiBold',
        color: '#3CB13C'
    },

    section1: {
        width: normalize(350),
        marginBottom: normalize(16),
        marginLeft: normalize(16),
        borderBottomWidth: 1,
        borderBottomColor: '#0000001A'
    },

    txtModel: {
        marginBottom: normalize(5),
        fontSize: normalize(20),
        fontFamily: 'Montserrat-SemiBold'
    },

    txtPrice: {
        marginBottom: normalize(12),
        fontSize: normalize(20),
        fontFamily: 'Montserrat-Bold',
        color: '#0064D0'
    },

    whiteBox: {
        width: normalize(350),
        height: normalize(80),
        marginLeft: normalize(16),
        marginBottom: normalize(16),
        borderWidth: 0.3,
        borderRadius: 6,
        backgroundColor: '#FFFFFF'
    },

    txtDP: {
        marginTop: normalize(10),
        marginBottom: normalize(8),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    txtPriceDP: {
        marginLeft: normalize(16),
        fontSize: normalize(20),
        fontFamily: 'Montserrat-Bold',
        color: '#0064D0'
    },

    txtCicil: {
        marginTop: normalize(10),
        marginBottom: normalize(8),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    txtPriceCicil: {
        marginLeft: normalize(16),
        fontSize: normalize(20),
        fontFamily: 'Montserrat-Bold',
        color: '#0064D0'
    },

    whiteBox2: {
        width: normalize(350),
        height: normalize(200),
        marginLeft: normalize(16),
        marginBottom: normalize(16),
        borderWidth: 0.3,
        borderRadius: 6,
        backgroundColor: '#FFFFFF'
    },

    txtDetail: {
        marginTop: normalize(10),
        marginBottom: normalize(12),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    nameContainer: {
        flexDirection: 'row',
        marginBottom: normalize(12),
    },

    txtNama: {
        marginLeft: normalize(25),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtName: {
        marginLeft: normalize(105),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    codeContainer: {
        flexDirection: 'row',
        marginBottom: normalize(12),
    },

    txtKode: {
        marginLeft: normalize(25),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtCode: {
        marginLeft: normalize(181),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    noRefContainer: {
        flexDirection: 'row',
        marginBottom: normalize(12),
    },

    txtRef: {
        marginLeft: normalize(25),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtNoRef: {
        marginLeft: normalize(91),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    tenorContainer: {
        flexDirection: 'row',
        marginBottom: normalize(12),
    },

    txtTenor: {
        marginLeft: normalize(25),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtTenorMonths: {
        marginLeft: normalize(216),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    dateContainer: {
        flexDirection: 'row',
        marginBottom: normalize(12),
    },

    txtTanggal: {
        marginLeft: normalize(25),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtDate: {
        marginLeft: normalize(120),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    txtTindakan: {
        marginBottom: normalize(12),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    btnPerbarui: {
        width: normalize(354),
        height: normalize(50),
        marginBottom: normalize(31),
        marginLeft: normalize(16),
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#0064D0',
        backgroundColor: '#FFFFFF'
    },

    txtPerbarui: {
        marginTop: normalize(13),
        marginLeft: normalize(148),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
        color: '#0064D0'
    }

})
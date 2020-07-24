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

class Tawar extends Component{
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

                <View style={styles.section1}>
                    <View style={styles.upperContainer}>
                        <View style={styles.bkgStatus}>
                            <Text style={styles.txtStatus}>
                                OPEN
                            </Text>
                        </View>

                        <Image
                            style={styles.imgLoc}
                            source={require('../../../assets/images/location.png')}
                        />

                        <Text style={styles.txtCity}>
                            Jakarta
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.txtModel}>
                            Honda Vario 125
                        </Text>

                        <Text style={styles.txtPrice}>
                            Rp 20.000.000
                        </Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.btnHasil}
                >
                    <View style={styles.btnHasilContainer}>
                        <Image
                            style={styles.imgLoupe}
                            source={require('../../../assets/images/loupe.png')}
                        />

                        <Text style={styles.txtHasil}>
                            HASIL INSPEKSI
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.whiteBox1}>
                    <Text style={styles.txtInfoMotor}>
                        Informasi Motor
                    </Text>

                    <View style={styles.YearContainer}>
                        <Text style={styles.txtTahun}>
                            Tahun
                        </Text>

                        <Text style={styles.txtYear}>
                            2017
                        </Text>
                    </View>

                    <View style={styles.DistanceContainer}>
                        <Text style={styles.txtJarak}>
                            Jarak Tempuh
                        </Text>

                        <Text style={styles.txtDistance}>
                            2.008 KM
                        </Text>
                    </View>

                    <View style={styles.CapacityContainer}>
                        <Text style={styles.txtKapasitas}>
                            Kapasitas Mesin
                        </Text>

                        <Text style={styles.txtCapacity}>
                            125 cc
                        </Text>
                    </View>

                    <View style={styles.TransmissionContainer}>
                        <Text style={styles.txtTransmisi}>
                            Transmisi
                        </Text>

                        <Text style={styles.txtTransmission}>
                            Otomatis
                        </Text>
                    </View>
                </View>

                <View style={styles.bidderCounter}>
                    <Text style={styles.countedBidder}>
                        18 Penawar
                    </Text>
                </View>

                <View style={styles.whiteBox2}>
                    <Text style={styles.txtPenawaran}>
                        Penawaran Tertinggi Saat Ini
                    </Text>

                    <Text style={styles.highestBid}>
                        Rp 32.000.000
                    </Text>
                </View>

                <Text style={styles.txtMasukkanHarga}>
                    Masukkan Harga Penawaran
                </Text>

                <View style={styles.tawarSection}>
                    <View style={styles.txtInpBidPrice}>
                        <TextInput
                            style={styles.txtBidPrice}
                            placeholder='Rp 32,000,000'
                        />
                    </View>

                    <TouchableOpacity 
                        style={styles.btnTawar}
                    >
                        <Text style={styles.txtTawar}>
                            Tawar
                        </Text>
                    </TouchableOpacity>
                </View>
             </ScrollView>
         </View>
        )
    }
}

export default Tawar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    section1: {
        width: 378,
        marginBottom: 16,
        marginLeft: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#0000001A'
    },

    upperContainer: {
        flexDirection: 'row'
    },

    bkgStatus: {
        width: 52,
        height: 22,
        marginTop: 16,
        marginBottom: 8,
        borderRadius: 6,
        backgroundColor: '#3CB13C',
    },

    txtStatus: {
        width: 40,
        height: 15,
        marginTop: 2,
        marginLeft: 8, 
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    imgLoc: {
        width: 10,
        height: 14,
        marginTop: 20,
        marginLeft: 245
    },

    txtCity: {
        width: 55,
        height: 18,
        marginTop: 17,
        marginLeft: 8,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtModel: {
        width: 170,
        height: 24,
        marginBottom: 4,
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold'
    },

    txtPrice: {
        width: 155,
        height: 24,
        marginBottom: 12,
        fontSize: 20,
        color: '#0064D0',
        fontFamily: 'Montserrat-Bold'
    },

    btnHasil: {
        width: 378,
        height: 40,
        marginLeft: 16,
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: '#0064D0'
    },

    btnHasilContainer: {
        flexDirection: 'row',
    },

    imgLoupe: {
        width: 20,
        height: 20,
        marginTop: 10,
        marginLeft: 122,
    },

    txtHasil: {
        width: 120,
        height: 18,
        marginTop: 10,
        marginLeft: 6,
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    whiteBox1: {
        width: 378,
        height: 184,
        marginBottom: 10,
        marginLeft: 16,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#FFFFFF'
    },

    txtInfoMotor: {
        width: 150,
        height: 18,
        marginTop: 10,
        marginBottom: 12,
        marginLeft: 17,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    YearContainer: {
        flexDirection: 'row'
    },

    txtTahun: {
        width: 45,
        height: 18,
        marginLeft: 26,
        marginBottom: 12,
        fontSize: 14,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Regular'
    },

    txtYear: {
        width: 35,
        height: 18,
        marginLeft: 250,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    DistanceContainer: {
        flexDirection: 'row'
    },

    txtJarak: {
        width: 100,
        height: 18,
        marginLeft: 26,
        marginBottom: 12,
        fontSize: 14,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Regular'
    },

    txtDistance: {
        width: 70,
        height: 18,
        marginLeft: 160,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    CapacityContainer: {
        flexDirection: 'row'
    },

    txtKapasitas: {
        width: 112,
        height: 18,
        marginLeft: 26,
        marginBottom: 12,
        fontSize: 14,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Regular'
    },

    txtCapacity: {
        width: 45,
        height: 18,
        marginLeft: 173,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    TransmissionContainer: {
        flexDirection: 'row'
    },

    txtTransmisi: {
        width: 70,
        height: 18,
        marginLeft: 26,
        marginBottom: 12,
        fontSize: 14,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Regular'
    },

    txtTransmission: {
        width: 70,
        height: 18,
        marginLeft: 190,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    bidderCounter: {
        marginLeft: 310,
        marginBottom: 10,
    },

    countedBidder: {
        width: 85,
        height: 18,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    whiteBox2: {
        width: 378,
        height: 84,
        marginBottom: 16,
        marginLeft: 16,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#FFFFFF'
    },

    txtPenawaran: {
        width: 210,
        height: 18,
        marginTop: 12,
        marginLeft: 16,
        marginBottom: 8,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    highestBid: {
        width: 200,
        height: 32,
        marginLeft: 16,
        fontSize: 26,
        color: '#0064D0',
        fontFamily: 'Montserrat-Bold'
    },

    txtMasukkanHarga: {
        width: 208,
        height: 18,
        marginBottom: 12,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    tawarSection: {
        flexDirection: 'row'
    },

    txtInpBidPrice: {
        width: 292,
        height: 40,
        marginBottom: 25,
        marginLeft: 16,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#C8C8C8'
    },

    txtBidPrice: {
        marginLeft: 16,
        fontFamily: 'Montserrat-SemiBold'
    },

    btnTawar: {
        width: 78,
        height: 40,
        marginLeft: 8,
        borderRadius: 6,
        backgroundColor: '#C8C8C8'
    },

    txtTawar: {
        width: 44,
        height: 18,
        marginTop: 11,
        marginLeft: 17,
        color: '#FFFFFF',
        fontFamily: '#Montserrat-SemiBold'
    }
})
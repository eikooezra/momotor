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

    goToHasilInspeksi = () =>{
        this.props.navigation.navigate('InspectResult')
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
                    onPress={this.goToHasilInspeksi}
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
        width: normalize(348),
        marginBottom: normalize(16),
        marginLeft: normalize(16),
        borderBottomWidth: 1,
        borderBottomColor: '#0000001A'
    },

    upperContainer: {
        flexDirection: 'row'
    },

    bkgStatus: {
        width: normalize(50),
        height: normalize(22),
        marginTop: normalize(16),
        marginBottom: normalize(8),
        borderRadius: normalize(6),
        backgroundColor: '#3CB13C',
    },

    txtStatus: {
        width: normalize(40),
        height: normalize(15),
        marginTop: normalize(4),
        marginLeft: normalize(10), 
        fontSize: normalize(12),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    imgLoc: {
        width: normalize(10),
        height: normalize(14),
        marginTop: normalize(20),
        marginLeft: normalize(220)
    },

    txtCity: {
        width: normalize(55),
        marginTop: normalize(17),
        marginLeft: normalize(8),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    txtModel: {
        width: normalize(170),
        marginBottom: normalize(4),
        fontSize: normalize(20),
        fontFamily: 'Montserrat-SemiBold'
    },

    txtPrice: {
        width: normalize(155),
        marginBottom: normalize(12),
        fontSize: normalize(20),
        color: '#0064D0',
        fontFamily: 'Montserrat-Bold'
    },

    btnHasil: {
        width: normalize(348),
        height: normalize(38),
        marginLeft: normalize(16),
        marginBottom: normalize(16),
        borderRadius: 8,
        backgroundColor: '#0064D0'
    },

    btnHasilContainer: {
        flexDirection: 'row',
    },

    imgLoupe: {
        width: normalize(20),
        height: normalize(20),
        marginTop: normalize(10),
        marginLeft: normalize(117),
    },

    txtHasil: {
        width: normalize(120),
        height: normalize(18),
        marginTop: normalize(10),
        marginLeft: normalize(6),
        fontSize: normalize(14.5),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    whiteBox1: {
        width: normalize(348),
        height: normalize(150),
        marginBottom: normalize(10),
        marginLeft: normalize(16),
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#FFFFFF'
    },

    txtInfoMotor: {
        width: normalize(150),
        marginTop: normalize(10),
        marginBottom: normalize(12),
        marginLeft: normalize(17),
        fontSize: normalize(14.5),
        fontFamily: 'Montserrat-SemiBold'
    },

    YearContainer: {
        flexDirection: 'row'
    },

    txtTahun: {
        width: normalize(45),
        marginLeft: normalize(26),
        marginBottom: normalize(12),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Regular'
    },

    txtYear: {
        width: normalize(35),
        marginLeft: normalize(237),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    DistanceContainer: {
        flexDirection: 'row'
    },

    txtJarak: {
        width: normalize(100),
        height: normalize(18),
        marginLeft: normalize(26),
        marginBottom: normalize(12),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Regular'
    },

    txtDistance: {
        width: normalize(70),
        height: normalize(18),
        marginLeft: normalize(152),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    CapacityContainer: {
        flexDirection: 'row'
    },

    txtKapasitas: {
        width: normalize(112),
        marginLeft: normalize(26),
        marginBottom: normalize(12),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Regular'
    },

    txtCapacity: {
        width: normalize(45),
        marginLeft: normalize(161),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    TransmissionContainer: {
        flexDirection: 'row'
    },

    txtTransmisi: {
        width: normalize(70),
        height: normalize(18),
        marginLeft: normalize(26),
        marginBottom: normalize(12),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Regular'
    },

    txtTransmission: {
        width: normalize(70),
        height: normalize(18),
        marginLeft: normalize(181),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    bidderCounter: {
        marginLeft: normalize(280),
        marginBottom: normalize(10),
    },

    countedBidder: {
        width: normalize(85),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    whiteBox2: {
        width: normalize(348),
        height: normalize(80),
        marginBottom: normalize(16),
        marginLeft: normalize(16),
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#FFFFFF'
    },

    txtPenawaran: {
        width: normalize(210),
        marginTop: normalize(12),
        marginLeft: normalize(16),
        marginBottom: normalize(8),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    highestBid: {
        width: normalize(200),
        marginLeft: normalize(16),
        fontSize: normalize(26),
        color: '#0064D0',
        fontFamily: 'Montserrat-Bold'
    },

    txtMasukkanHarga: {
        width: normalize(208),
        marginBottom: normalize(12),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    tawarSection: {
        flexDirection: 'row'
    },

    txtInpBidPrice: {
        width: normalize(268),
        height: normalize(40),
        marginBottom: normalize(25),
        marginLeft: normalize(16),
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#C8C8C8'
    },

    txtBidPrice: {
        marginLeft: normalize(16),
        fontFamily: 'Montserrat-SemiBold'
    },

    btnTawar: {
        width: normalize(78),
        height: normalize(40),
        marginLeft: normalize(8),
        borderRadius: 6,
        backgroundColor: '#C8C8C8'
    },

    txtTawar: {
        width: normalize(44),
        marginTop: normalize(11),
        marginLeft: normalize(23),
        color: '#FFFFFF',
        fontFamily: '#Montserrat-SemiBold'
    }
})
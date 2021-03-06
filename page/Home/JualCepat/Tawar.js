import React, {useState} from 'react'
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

const Tawar = () => {

    const [images, setImages] = useState(
        [
        require('../../../assets/images/vario.png'),
        require('../../../assets/images/vario.png'),
        require('../../../assets/images/vario.png'),
        require('../../../assets/images/vario.png'),
        require('../../../assets/images/vario.png')
    ])
        
    return(
         <View style={styles.container}>
             <ScrollView>
                <SliderBox
                    images={images}
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

                <View style={styles.whiteBox1}>
                    <Text style={styles.txtInfoMotor}>
                        Informasi Motor
                    </Text>

                    <View style={styles.rowTxtContainer}>
                        <Text style={styles.txtLeft}>
                            Tahun
                        </Text>

                        <Text style={styles.txtRight}>
                            2017
                        </Text>
                    </View>

                    <View style={styles.rowTxtContainer}>
                        <Text style={styles.txtLeft}>
                            Jarak Tempuh
                        </Text>

                        <Text style={styles.txtRight}>
                            2.008 KM
                        </Text>
                    </View>

                    <View style={styles.rowTxtContainer}>
                        <Text style={styles.txtLeft}>
                            Kapasitas Mesin
                        </Text>

                        <Text style={styles.txtRight}>
                            125 cc
                        </Text>
                    </View>

                    <View style={styles.rowTxtContainer}>
                        <Text style={styles.txtLeft}>
                            Transmisi
                        </Text>

                        <Text style={styles.txtRight}>
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

    rowTxtContainer: {
        marginBottom: normalize(12),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    txtLeft: {
        marginLeft: normalize(26),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Regular'
    },

    txtRight: {
        marginRight: normalize(23),
        fontSize: normalize(14),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Regular'
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
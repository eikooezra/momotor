import React, {Component} from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import CustomSlider from '../CustomSlider'
import normalize from 'react-native-normalize';

class InspectResult extends Component{
    constructor(props){
        super(props)
        this.state = {
            MultiSliderValues: []
        }
    }

    singleSliderValueCallback =(values)=> {
        this.setState({singleSliderValues : values})
      }
    
    multiSliderValueCallback = (values) => {
        this.setState({multiSliderValues : values})
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
                            source={require('../../../assets/images/back.png')}
                        />
                    </TouchableOpacity>

                    <Text style={styles.txtInspeksi}>
                        Inspeksi Motor
                    </Text>
                </View>
                
                <ScrollView>
                    <View style={styles.infoSection}>
                        <View style={styles.InfoContainer}>
                            <Text style={styles.txtInfo}>
                                Informasi Motor
                            </Text>
                        </View>

                        <View style={styles.typeContainer}>
                            <Text style={styles.txtJenis}>
                                Jenis Motor
                            </Text>

                            <Text style={styles.txtType}>
                                Honda Vario 125
                            </Text>
                        </View>

                        <View style={styles.yearContainer}>
                            <Text style={styles.txtTahun}>
                                Tahun
                            </Text>

                            <Text style={styles.txtYear}>
                                2017
                            </Text>
                        </View>

                        <View style={styles.distanceContainer}>
                            <Text style={styles.txtJarak}>
                                Jarak Tempuh
                            </Text>

                            <Text style={styles.txtDistance}>
                                2.008 KM
                            </Text>
                        </View>

                        <View style={styles.capacityContainer}>
                            <Text style={styles.txtKapasitas}>
                                Kapasitas Mesin
                            </Text>

                            <Text style={styles.txtCapacity}>
                                125 cc
                            </Text>
                        </View>

                        <View style={styles.transmissionContainer}>
                            <Text style={styles.txtTransmisi}>
                                Transmisi
                            </Text>

                            <Text style={styles.txtTransmission}>
                                Otomatis
                            </Text>
                        </View>

                        <View style={styles.dateContainer}>
                            <Text style={styles.txtTanggal}>
                                Tanggal Inspeksi
                            </Text>

                            <Text style={styles.txtDate}>
                                22/12/2019
                            </Text>
                        </View>

                        <View style={styles.locationContainer}>
                            <Text style={styles.txtLokasi}>
                                Lokasi
                            </Text>

                            <Text style={styles.txtLocation}>
                                Jakarta Barat
                            </Text>
                        </View>
                    </View>

                    <View style={styles.gradeSection}>
                        <Text style={styles.txtGrade}>
                            Grade
                        </Text>
                    </View>

                    <View style={styles.priceRangeSection}>
                        <Text style={styles.txtPerkiraan}>
                            Perkiraan Harga
                        </Text>

                        <CustomSlider
                            min={1}
                            max={5}
                            LRpadding={80}
                            callback={this.multiSliderValueCallback}
                            single={false}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default InspectResult

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    Header: {
        width: normalize(380),
        height: normalize(65),
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: normalize(32),
        height: normalize(16),
        marginTop: normalize(30),
        marginLeft: normalize(16),
    },

    txtInspeksi: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(98),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    infoSection: {
        width: normalize(348),
        height: normalize(245),
        marginTop: normalize(14),
        marginBottom: normalize(24),
        marginLeft: normalize(16),
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#B7B7B7'
    },

    InfoContainer: {
        width: normalize(340),
        marginBottom: normalize(10),
        marginLeft: normalize(16),
        borderBottomColor: '#0000001A',
        borderBottomWidth: 1
    },

    txtInfo: {
        width: normalize(135),
        marginTop: normalize(16),
        marginBottom: normalize(10),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold'
    },

    typeContainer: {
        flexDirection: 'row',
        marginBottom: normalize(12),
    },

    txtJenis: {
        width: normalize(82),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtType: {
        width: normalize(130),
        marginLeft: normalize(145),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    yearContainer: {
        flexDirection: 'row',
        marginBottom: normalize(12),
    },

    txtTahun: {
        width: normalize(45),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtYear: {
        width: normalize(32),
        marginLeft: normalize(251),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    distanceContainer: {
        flexDirection: 'row',
        marginBottom: normalize(12),
    },

    txtJarak: {
        width: normalize(100),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtDistance: {
        width: normalize(130),
        marginLeft: normalize(165),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    capacityContainer: {
        flexDirection: 'row',
        marginBottom: normalize(12),
    },

    txtKapasitas: {
        width: normalize(115),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtCapacity: {
        width: normalize(42),
        marginLeft: normalize(172),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },
    
    transmissionContainer: {
        flexDirection: 'row',
        marginBottom: normalize(12),
    },

    txtTransmisi: {
        width: normalize(70),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtTransmission: {
        width: normalize(68),
        marginLeft: normalize(195),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    dateContainer: {
        flexDirection: 'row',
        marginBottom: normalize(12),
    },

    txtTanggal: {
        width: normalize(120),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtDate: {
        width: normalize(72),
        marginLeft: normalize(141),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    locationContainer: {
        flexDirection: 'row',
        marginBottom: normalize(12),
    },

    txtLokasi: {
        width: normalize(46),
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtLocation: {
        width: normalize(98),
        marginLeft: normalize(193),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    gradeSection: {
        width: normalize(348),
        height: normalize(100),
        marginBottom: normalize(24),
        marginLeft: normalize(16),
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF'
    },

    priceRangeSection: {
        width: normalize(348),
        height: normalize(130),
        marginBottom: normalize(24),
        marginLeft: normalize(16),
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF'
    },

    txtGrade: {
        width: normalize(46),
        marginTop: normalize(12),
        marginBottom: normalize(11),
        marginLeft: normalize(12),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Bold',
        color: '#225C9A'
    },

    txtPerkiraan: {
        width: normalize(122),
        marginTop: normalize(12),
        marginBottom: normalize(16),
        marginLeft: normalize(12),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Bold',
        color: '#225C9A'
    }
})
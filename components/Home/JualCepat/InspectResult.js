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
        width: 412,
        height: 70,
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: 32,
        height: 16,
        marginTop: 30,
        marginLeft: 16,
    },

    txtInspeksi: {
        width: 200,
        height: 20,
        marginTop: 25,
        marginLeft: 100,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    infoSection: {
        width: 378,
        height: 275,
        marginTop: 14,
        marginBottom: 24,
        marginLeft: 16,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#B7B7B7'
    },

    InfoContainer: {
        width: 340,
        marginBottom: 10,
        marginLeft: 16,
        borderBottomColor: '#0000001A',
        borderBottomWidth: 1
    },

    txtInfo: {
        width: 135,
        height: 19,
        marginTop: 16,
        marginBottom: 10,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold'
    },

    typeContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },

    txtJenis: {
        width: 82,
        height: 18,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    txtType: {
        width: 130,
        height: 18,
        marginLeft: 145,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    yearContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },

    txtTahun: {
        width: 45,
        height: 18,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    txtYear: {
        width: 32,
        height: 18,
        marginLeft: 260,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    distanceContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },

    txtJarak: {
        width: 100,
        height: 18,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    txtDistance: {
        width: 130,
        height: 18,
        marginLeft: 170,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    capacityContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },

    txtKapasitas: {
        width: 115,
        height: 18,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    txtCapacity: {
        width: 42,
        height: 18,
        marginLeft: 180,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },
    
    transmissionContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },

    txtTransmisi: {
        width: 70,
        height: 18,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    txtTransmission: {
        width: 68,
        height: 18,
        marginLeft: 200,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    dateContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },

    txtTanggal: {
        width: 120,
        height: 18,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    txtDate: {
        width: 72,
        height: 18,
        marginLeft: 145,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    locationContainer: {
        flexDirection: 'row',
        marginBottom: 12,
    },

    txtLokasi: {
        width: 46,
        height: 18,
        marginLeft: 16,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    txtLocation: {
        width: 98,
        height: 18,
        marginLeft: 195,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    gradeSection: {
        width: 378,
        height: 100,
        marginBottom: 24,
        marginLeft: 16,
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF'
    },

    priceRangeSection: {
        width: 378,
        height: 130,
        marginBottom: 24,
        marginLeft: 16,
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF'
    },

    txtGrade: {
        width: 46,
        height: 18,
        marginTop: 12,
        marginBottom: 11,
        marginLeft: 12,
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
        color: '#225C9A'
    },

    txtPerkiraan: {
        width: 122,
        height: 18,
        marginTop: 12,
        marginBottom: 16,
        marginLeft: 12,
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
        color: '#225C9A'
    }
})
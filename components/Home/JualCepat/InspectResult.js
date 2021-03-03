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

    goBack = () =>{
        this.props.navigation.navigate('Tawar')
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

                        <View style={styles.rowTxtContainer}>
                            <Text style={styles.txtLeft}>
                                Jenis Motor
                            </Text>

                            <Text style={styles.txtRight}>
                                Honda Vario 125
                            </Text>
                        </View>

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

                        <View style={styles.rowTxtContainer}>
                            <Text style={styles.txtLeft}>
                                Tanggal Inspeksi
                            </Text>

                            <Text style={styles.txtRight}>
                                22/12/2019
                            </Text>
                        </View>

                        <View style={styles.rowTxtContainer}>
                            <Text style={styles.txtLeft}>
                                Lokasi
                            </Text>

                            <Text style={styles.txtRight}>
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
        width: normalize(320),
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

    rowTxtContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: normalize(12),
    },

    txtLeft: {
        marginLeft: normalize(16),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Regular'
    },

    txtRight: {
        marginRight: normalize(16),
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
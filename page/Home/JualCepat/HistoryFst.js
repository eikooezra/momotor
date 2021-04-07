import React, {useState} from 'react'
import {
    StyleSheet,
    Image,
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize';

const HistoryFst = ({navigation}) => {

    return (
        <View style={styles.container}>
           <View style={styles.Header}>
                <TouchableOpacity
                        onPress={() => navigation.navigate('JualCepat')}
                    >
                        <Image
                            style={styles.btnBack}
                            source={require('../../../assets/images/back.png')}
                        />
                </TouchableOpacity>

                <Text style={styles.txtJual}>
                   Riwayat Jual Cepat
                </Text>
           </View>
           
        <ScrollView>
           <View style={styles.FlatContainer}>
           <View style={styles.boxContainer1}>
                   <TouchableOpacity>
                    <Image
                        style={styles.imgUnit}
                        source={require('../../../assets/images/vario.png')}
                    />
                   </TouchableOpacity>
               </View> 

               <View style={styles.boxContainer2}>
                   <Text style={styles.txtModel}>
                       Honda Vario 125 
                   </Text>

                   <Text style={styles.txtPrice}>
                        Rp 13.000.000
                   </Text>

                   <Text style={styles.txtDate}>
                       19 Oktober 2019
                   </Text>
               </View>
            </View>

            <View style={styles.FlatContainer}>
            <View style={styles.boxContainer1}>
                   <TouchableOpacity>
                    <Image
                        style={styles.imgUnit}
                        source={require('../../../assets/images/vario.png')}
                    />
                   </TouchableOpacity>
               </View> 

               <View style={styles.boxContainer2}>
                   <Text style={styles.txtModel}>
                       Honda Vario 125 
                   </Text>

                   <Text style={styles.txtPrice}>
                        Rp 13.000.000
                   </Text>

                   <Text style={styles.txtDate}>
                       19 Oktober 2019
                   </Text>
               </View>
            </View>

            <View style={styles.FlatContainer}>
            <View style={styles.boxContainer1}>
                   <TouchableOpacity>
                    <Image
                        style={styles.imgUnit}
                        source={require('../../../assets/images/vario.png')}
                    />
                   </TouchableOpacity>
               </View> 

               <View style={styles.boxContainer2}>
                   <Text style={styles.txtModel}>
                       Honda Vario 125 
                   </Text>

                   <Text style={styles.txtPrice}>
                        Rp 13.000.000
                   </Text>

                   <Text style={styles.txtDate}>
                       19 Oktober 2019
                   </Text>
               </View>
            </View>

            <View style={styles.FlatContainer}>
            <View style={styles.boxContainer1}>
                   <TouchableOpacity>
                    <Image
                        style={styles.imgUnit}
                        source={require('../../../assets/images/vario.png')}
                    />
                   </TouchableOpacity>
               </View> 

               <View style={styles.boxContainer2}>
                   <Text style={styles.txtModel}>
                       Honda Vario 125 
                   </Text>

                   <Text style={styles.txtPrice}>
                        Rp 13.000.000
                   </Text>

                   <Text style={styles.txtDate}>
                       23 Oktober 2019
                   </Text>
               </View>
            </View>

            <View style={styles.FlatContainer}>
            <View style={styles.boxContainer1}>
                   <TouchableOpacity>
                    <Image
                        style={styles.imgUnit}
                        source={require('../../../assets/images/vario.png')}
                    />
                   </TouchableOpacity>
               </View> 

               <View style={styles.boxContainer2}>
                   <Text style={styles.txtModel}>
                       Honda Vario 125 
                   </Text>

                   <Text style={styles.txtPrice}>
                        Rp 13.000.000
                   </Text>

                   <Text style={styles.txtDate}>
                       19 Oktober 2019
                   </Text>
               </View>
            </View>
        </ScrollView>
        </View>
    )
}

export default HistoryFst

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        display: 'flex'
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

    txtJual: {
        width: normalize(200),
        marginTop: normalize(25),
        marginLeft: normalize(80),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    FlatContainer: {
        width: normalize(350),
        height: normalize(140),
        marginLeft: normalize(16),
        borderBottomWidth: 1,
        borderBottomColor: '#0000001A',
        flexDirection: 'row'
    },

    boxContainer1: {
        marginLeft: normalize(16)
    },

    imgUnit: {
        width: normalize(115),
        height: normalize(115),
        borderRadius: 4,
        marginTop: normalize(12),
    },

    boxContainer2: {
        marginLeft: normalize(16),
    },

    txtModel: {
        width: normalize(160),
        marginTop: normalize(12),
        marginBottom: normalize(6),
        fontSize: normalize(18),
        fontFamily: 'Montserrat-SemiBold'
    },

    txtPrice: {
        width: normalize(120),
        marginBottom: normalize(6),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
        color: '#2A77CB'
    },

    txtDate: {
        width: normalize(120),
        marginBottom: normalize(20),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-SemiBold',
        color: '#7F7F7F'
    },
    
    txtStatus1: {
        width: normalize(50),
        fontSize: normalize(14),
        color: '#3CB13C',
        fontFamily: 'Montserrat-Bold'
    },
})
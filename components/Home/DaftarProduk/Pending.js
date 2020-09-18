import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import RBSheet from 'react-native-raw-bottom-sheet'
import BottomSheet from '../BottomSheet'
import normalize from 'react-native-normalize';

class Pending extends Component {
render() {
    return (
        <View style={styles.container}>
        <ScrollView>
           <View style={styles.WhiteBox}>

               <View style={styles.boxContainer1}>
                   <Image
                     style={styles.imgUnit}
                     source={require('../../../assets/images/vario.png')}
                   />

                   <Text style={styles.date}>
                       22/07/2020
                   </Text>
               </View> 

               <View style={styles.boxContainer2}>
                   <Text style={styles.namaMotor}>
                       Honda Vario 125
                   </Text>

                   <View style={styles.speedoContainer}>
                       <Image
                           style={styles.imgSpeedo}
                           source={require('../../../assets/images/speedo.png')}
                       />

                       <Text style={styles.txtSpeedo}>
                           2.008 KM
                       </Text>

                       <Image
                           style={styles.imgYear}
                           source={require('../../../assets/images/year.png')}
                       />

                       <Text style={styles.txtYear}>
                           2012
                       </Text>
                   </View>

                   <View style={styles.locContainer}>
                       <Image
                           style={styles.imgLoc}
                           source={require('../../../assets/images/location.png')}
                       />
                       
                       <Text style={styles.txtLoc}>
                           Jakarta
                       </Text>
                   </View>

                   <Text style={styles.txtPrice}>
                       Rp 13.000.000
                   </Text>
               </View>

               <TouchableOpacity
                onPress={() => this.RBSheet.open()}
               >
                   <Image
                       style={styles.triDots}
                       source={require('../../../assets/images/3dots.png')}
                   />
               </TouchableOpacity>
           </View>
        </ScrollView>
        <RBSheet
                    ref={ref => {
                        this.RBSheet = ref
                    }}
                    height={300}
                    openDuration={250}
                    customStyles={{
                        container: {
                            height: 224,
                            borderTopStartRadius: 10,
                            borderTopEndRadius: 10,
                        }
                    }}
                >
                    <BottomSheet/>
                </RBSheet>
    </View>
    )
}}

export default Pending

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    WhiteBox: {
        width: normalize(350),
        height: normalize(121),
        marginTop: normalize(16),
        marginBottom: normalize(16),
        marginLeft: normalize(16),
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },

    WhiteBox2: {
        width: normalize(350),
        height: normalize(121),
        marginBottom: normalize(16),
        marginLeft: normalize(16),
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },

    boxContainer1: {
        marginLeft: normalize(16)
    },

    imgUnit: {
        width: normalize(65),
        height: normalize(65),
        borderRadius: 4,
        marginTop: normalize(16),
        marginBottom: normalize(14)
    },

    date: {
        width: normalize(70),
        height: normalize(15),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    boxContainer2: {
        marginLeft: normalize(16)
    },

    namaMotor: {
        width: normalize(115),
        height: normalize(18),
        marginTop: normalize(16),
        marginBottom: normalize(6),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    speedoContainer: {
        flexDirection: 'row'
    },

    imgSpeedo: {
        width: normalize(17),
        height: normalize(15)
    },

    txtSpeedo: {
        width: normalize(60),
        height: normalize(15),
        marginLeft: normalize(8),
        marginBottom: normalize(6),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    imgYear: {
        width: normalize(15),
        height: normalize(15),
        marginLeft: normalize(24),
    },

    txtYear: {
        width: normalize(27),
        height: normalize(15),
        marginLeft: normalize(8),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    locContainer: {
        flexDirection: 'row'
    },

    imgLoc: {
        width: normalize(7),
        height: normalize(10),
        marginLeft: normalize(6)
    },

    txtLoc: {
        width: normalize(50),
        height: normalize(15),
        marginLeft: normalize(13),
        marginBottom: normalize(12),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    txtPrice: {
        width: normalize(220),
        height: normalize(22),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-Bold',
    },

    triDots: {
        width: normalize(25),
        height: normalize(25),
        marginTop: normalize(16),
        marginLeft: normalize(15)
    }

})
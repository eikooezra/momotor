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
        width: 380 ,
        height: 121,
        marginTop: 16,
        marginBottom: 16,
        marginLeft: 16,
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },

    WhiteBox2: {
        width: 380,
        height: 121,
        marginBottom: 16,
        marginLeft: 16,
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },

    boxContainer1: {
        marginLeft: 16
    },

    imgUnit: {
        width: 65,
        height: 65,
        borderRadius: 4,
        marginTop: 16,
        marginBottom: 14
    },

    date: {
        width: 70,
        height: 15,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    boxContainer2: {
        marginLeft: 16
    },

    namaMotor: {
        width: 115,
        height: 18,
        marginTop: 16,
        marginBottom: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    speedoContainer: {
        flexDirection: 'row'
    },

    imgSpeedo: {
        width: 17,
        height: 15
    },

    txtSpeedo: {
        width: 60,
        height: 15,
        marginLeft: 8,
        marginBottom: 6,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    imgYear: {
        width: 15,
        height: 15,
        marginLeft: 24,
    },

    txtYear: {
        width: 27,
        height: 15,
        marginLeft: 8,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    locContainer: {
        flexDirection: 'row'
    },

    imgLoc: {
        width: 7,
        height: 10
    },

    txtLoc: {
        width: 50 ,
        height: 15,
        marginLeft: 6,
        marginBottom: 12,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    txtPrice: {
        width: 220,
        height: 22,
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
    },

    triDots: {
        width: 25,
        height: 25,
        marginTop: 16,
        marginLeft: 30
    }

})
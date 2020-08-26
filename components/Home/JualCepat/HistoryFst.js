import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native'

class HistoryFst extends Component {

goBack = () => {
    this.props.navigation.navigate('Home')
}

render() {
    return (
        <View style={styles.Header}>
           <View style={styles.Header}>
                <TouchableOpacity
                        onPress={this.goBack}
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
}}

export default HistoryFst

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        display: 'flex'
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

    txtJual: {
        width: 200,
        height: 20,
        marginTop: 25,
        marginLeft: 80,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    FlatContainer: {
        width: 380 ,
        height: 144,
        marginLeft: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#0000001A',
        flexDirection: 'row'
    },

    boxContainer1: {
        marginLeft: 16
    },

    imgUnit: {
        width: 120,
        height: 120,
        borderRadius: 4,
        marginTop: 12,
    },

    boxContainer2: {
        marginLeft: 16,
    },

    txtModel: {
        width: 160,
        height: 22,
        marginTop: 12,
        marginBottom: 6,
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold'
    },

    txtPrice: {
        width: 120,
        height: 20,
        marginBottom: 6,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#2A77CB'
    },

    txtDate: {
        width: 120,
        height: 20,
        marginBottom: 20,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: '#7F7F7F'
    },
    
    txtStatus1: {
        width: 50,
        height: 15,
        fontSize: 14,
        color: '#3CB13C',
        fontFamily: 'Montserrat-Bold'
    },



})
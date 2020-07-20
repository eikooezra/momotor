import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native'

class JualCepat extends Component {

goBack = () => {
    this.props.navigation.navigate('Home')
}

goToSearch = () => {
    this.props.navigation.navigate('SearchFst')
}

goToHistory = () => {
    this.props.navigation.navigate('HistoryFst')
}

render() {
    return (
        <View>
        <ScrollView>
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

export default JualCepat

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
       
    btnWrapper: {
        marginLeft: 60,
        flexDirection: 'row'
    },
    
    btnSearch: {
        width: 18,
        height: 18,
        marginTop: 26,
        marginRight: 13,
    },

    btnHistory: {
        width: 21,
        height: 18,
        marginTop: 26,
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
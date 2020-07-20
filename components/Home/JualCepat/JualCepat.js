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
                    Jual Cepat
                </Text>

            <View style={styles.btnWrapper}>
                <TouchableOpacity
                    onPress={this.goToSearch}
                >
                    <Image
                        style={styles.btnSearch}
                        source={require('../../../assets/images/search.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={this.goToHistory}
                >
                    <Image
                        style={styles.btnHistory}
                        source={require('../../../assets/images/history.png')}
                    />
                </TouchableOpacity>
            </View>
           </View>

           <View style={styles.WhiteBox}>
               <View style={styles.boxContainer1}>
                   <TouchableOpacity>
                    <Image
                        style={styles.imgUnit}
                        source={require('../../../assets/images/vario.png')}
                    />
                   </TouchableOpacity>
               </View> 

               <View style={styles.boxContainer2}>
                   <View style={styles.section1}>
                    <Text style={styles.txtModel}>
                        Honda Vario 125 
                    </Text>

                    <Text style={styles.txtPrice}>
                            Rp 13.000.000
                    </Text>

                    <Text style={styles.txtYear}>
                        2017
                    </Text>
                   </View>
                   
                    <Text style={styles.txtStatus1}>
                            OPEN
                    </Text>
               </View>

               <TouchableOpacity style={styles.btnTawar}>
                   <Text style={styles.txtTawar}>
                       Tawar
                   </Text>
               </TouchableOpacity>
           </View>

           <View style={styles.WhiteBox}>
               <View style={styles.boxContainer1}>
                   <TouchableOpacity>
                    <Image
                        style={styles.imgUnit}
                        source={require('../../../assets/images/vario.png')}
                    />
                   </TouchableOpacity>
               </View> 

               <View style={styles.boxContainer2}>
                   <View style={styles.section1}>
                     <Text style={styles.txtModel}>
                       Honda Vario 125 
                     </Text>

                     <Text style={styles.txtPrice}>
                        Rp 13.000.000
                    </Text>

                     <Text style={styles.txtYear}>
                       2017
                    </Text>
                   </View>

                   <Text style={styles.txtStatus2}>
                        CLOSED
                   </Text>
               </View>

               <TouchableOpacity style={styles.btnTawar}>
                   <Text style={styles.txtTawar}>
                       Tawar
                   </Text>
               </TouchableOpacity>
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
        width: 120,
        height: 20,
        marginTop: 25,
        marginLeft: 115,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    WhiteBox: {
        width: 380 ,
        height: 144,
        marginTop: 16,
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
        width: 120,
        height: 120,
        borderRadius: 4,
        marginTop: 12,
    },

    boxContainer2: {
        marginLeft: 16,
    },

    section1: {
        width: 210,
        marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#0000001A'
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
        fontFamily: 'Montserrat-SemiBold'
    },

    txtYear: {
        width: 120,
        height: 20,
        marginBottom: 12,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    btnTawar: {
        width: 90,
        height: 32,
        marginTop: 100,
        marginLeft: 226,
        borderRadius: 6,
        color: '#0064D0'
    },

    txtTawar: {
        width: 50,
        height: 20,
        marginTop: 7,
        marginLeft: 23,
        fontSize: 14,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },
    
    txtStatus1: {
        width: 50,
        height: 15,
        fontSize: 14,
        color: '#3CB13C',
        fontFamily: 'Montserrat-Bold'
    },

    txtStatus2: {
        width: 60,
        height: 16,
        fontSize: 14,
        color: '#E56464',
        fontFamily: 'Montserrat-Bold'
    }
})
import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize';

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

goToTawar = () => {
    this.props.navigation.navigate('Tawar')
}

render() {
    return (
        <View>
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
        
        <ScrollView>
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

               <TouchableOpacity 
               style={styles.btnTawar}
               onPress={this.goToTawar}
               >
                   <Text style={styles.txtTawar}>
                       Tawar
                   </Text>
               </TouchableOpacity>
           </View>

           <View style={styles.WhiteBox2}>
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

               <TouchableOpacity 
               style={styles.btnTawar}
               onPress={this.goToTawar}
               >
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
       
    btnWrapper: {
        marginLeft: normalize(60),
        flexDirection: 'row'
    },
    
    btnSearch: {
        width: normalize(18),
        height: normalize(18),
        marginTop: normalize(26),
        marginRight: normalize(13),
    },

    btnHistory: {
        width: normalize(21),
        height: normalize(18),
        marginTop: normalize(26),
    },

    txtJual: {
        width: normalize(100),
        marginTop: normalize(25),
        marginLeft: normalize(113),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    WhiteBox: {
        width: normalize(350),
        height: normalize(142),
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
        height: normalize(142),
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
        width: normalize(115),
        height: normalize(115),
        borderRadius: 4,
        marginTop: normalize(12),
    },

    boxContainer2: {
        marginLeft: normalize(16),
    },

    section1: {
        width: normalize(115),
        marginBottom: 12,
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
        fontFamily: 'Montserrat-SemiBold'
    },

    txtYear: {
        width: normalize(120),
        marginBottom: normalize(12),
        fontSize: normalize(13),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    btnTawar: {
        width: normalize(80),
        height: normalize(32),
        borderRadius: 6,
        marginTop: normalize(90),
        backgroundColor: '#0064D0'
    },

    txtTawar: {
        width: normalize(50),
        height: normalize(20),
        marginTop: normalize(7),
        marginLeft: normalize(23),
        fontSize: normalize(14),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },
    
    txtStatus1: {
        width: normalize(50),
        height: normalize(15),
        fontSize: normalize(14),
        color: '#3CB13C',
        fontFamily: 'Montserrat-Bold'
    },

    txtStatus2: {
        width: normalize(60),
        height: normalize(16),
        fontSize: normalize(14),
        color: '#E56464',
        fontFamily: 'Montserrat-Bold'
    }
})
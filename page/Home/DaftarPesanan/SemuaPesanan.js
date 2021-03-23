import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize';

class SemuaPesanan extends Component {
constructor(props){
    super(props)
    this.state = {
        isVerification: false,
        verification: '',
        isSurvey: false,
        survey: '',
        isCanceled: false,
        canceled: ''
    }
}

goToProsesVerif = () => {
    this.props.navigation.navigate('ProsesVerif')
}

VerifStatus = () => {
    if(isVerification === true){
        this.setState({verification: 'Proses Verifikasi'})
    }
}

SurveyStatus = () => {
    if(isSurvey === true){
        this.setState({survey: 'Proses Survey'})
    }
}

CanceledStatus = () => {
    if(isCanceled === true){
        this.setState({canceled: 'Proses Dibatalkan'})
    }
}

render() {
    return (
        <View style={styles.container}>
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
                   <Text style={styles.txtName}>
                       Sumanto Wijaya
                   </Text>

                   <Text style={styles.txtModel}>
                        Honda Vario 125
                   </Text>

                   <Text style={styles.txtDate}>
                       12/10/2019
                   </Text>

                   <TouchableOpacity
                    style={styles.btnProsesVerif}
                    onPress={this.goToProsesVerif}
                   >
                       <Text style={styles.txtProsesVerif}>
                           Proses Verifikasi
                       </Text>
                   </TouchableOpacity>
               </View>
           </View>
        </ScrollView>
    </View>
    )
}}

export default SemuaPesanan

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    WhiteBox: {
        width: normalize(350) ,
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
        width: normalize(98),
        height: normalize(98),
        marginTop: normalize(12),
        borderRadius: 4,
    },

    boxContainer2: {
        marginLeft: normalize(16)
    },

    txtName: {
        width: normalize(119),
        height: normalize(20),
        marginTop: normalize(12),
        marginBottom: normalize(6),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    txtModel: {
        width: normalize(120),
        height: normalize(20),
        marginBottom: normalize(6),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    txtDate: {
        width: normalize(120),
        height: normalize(20),
        marginBottom: normalize(6),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },   

    btnProsesVerif: {
        width: normalize(100),
        height: normalize(25),
        marginLeft: normalize(115),
        borderRadius: 4,
        backgroundColor: '#EAF7EE'
    },
    
    txtProsesVerif: {
        marginTop: normalize(4),
        marginLeft: normalize(8),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-SemiBold',
        color: '#3CB13C'
    }
})
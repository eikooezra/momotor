import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

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
        width: 98,
        height: 98,
        borderRadius: 4,
        marginTop: 12,
    },

    boxContainer2: {
        marginLeft: 16
    },

    txtName: {
        width: 119,
        height: 20,
        marginTop: 12,
        marginBottom: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },

    txtModel: {
        width: 120,
        height: 20,
        marginBottom: 6,
        fontSize: 14,
        fontFamily: 'Montserrat-Medium'
    },

    txtDate: {
        width: 120,
        height: 20,
        marginBottom: 6,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },   
})
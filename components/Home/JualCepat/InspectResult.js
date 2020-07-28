import React, {Compenent} from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
} from 'react-native'
import Slider from '@react-native-community/slider'

class InspectResult extends Compenent{
    constructor(props){
        super(props)
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

                    <Text style={styles.txtJual}>
                     Inspeksi Motor
                    </Text>
                </View>
                
                <ScrollView>
                    <View style={styles.infoSection}>
                        
                    </View>

                    <View style={styles.gradeSection}>

                    </View>

                    <View style={styles.priceRangeSection}>

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

    txtInspeksi: {
        width: 200,
        height: 20,
        marginTop: 25,
        marginLeft: 80,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    infoSection: {
        width: 378,
        height: 275,
        marginTop: 14,
        marginBottom: 24,
        marginLeft: 16,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#B7B7B7'
    },

    gradeSection: {
        width: 378,
        height: 100,
        marginBottom: 24,
        marginLeft: 16,
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF'
    },

    priceRangeSection: {
        width: 378,
        height: 130,
        marginBottom: 24,
        marginLeft: 16,
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF'
    }
})
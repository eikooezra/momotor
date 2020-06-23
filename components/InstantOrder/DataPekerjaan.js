import React, {Component} from 'react'
import {
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native'

class DataPekerjaan extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.Header}>
                    <Text style={styles.txtInstant}>
                        Instant Order
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txtData}>
                        Data Pekerjaan
                    </Text>
                </View>
            </View>
        )
    }
}

export default DataPekerjaan

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

    txtInstant: {
        width: 200,
        height: 20,
        marginTop: 25,
        marginLeft: 153,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    containerTxt: {
        width: 420,
        height: 48,
        marginBottom: 15,
        elevation: 4,
        backgroundColor: '#FFFFFF',
    },

    txtData: {
        width: 124,
        height: 19,
        marginTop: 15,
        marginLeft: 16,
        color: '#000000',
        fontFamily: 'Montserrat-SemiBold'
    },
})
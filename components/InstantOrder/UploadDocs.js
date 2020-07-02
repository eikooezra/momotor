import React, {Component} from 'react'
import {
    StyleSheet,
    ScrollView,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

class DataKredit extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    goBack = () => {
        this.props.navigation.navigate('DataKredit')
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
                            source={require('../../assets/images/back.png')}
                        />
                    </TouchableOpacity>

                    <Text style={styles.txtInstant}>
                        Instant Order
                    </Text>
                </View>

                <View style={styles.containerTxt}>
                    <Text style={styles.txtUpload}>
                        Upload Dokumen
                    </Text>
                </View>

                <ScrollView>
                    
                </ScrollView>

                
                <TouchableOpacity
                style={styles.btnSubmit}
                // onPress={this.goToUploadDocs}
                // disabled={!enabled}
            >
                <Text style={styles.txtSubmit}>
                    Submit Order
                </Text>
            </TouchableOpacity>
            </View>
        )
    }
}

export default DataKredit

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
        marginLeft: 16,
        marginTop: 30
    },

    txtInstant: {
        width: 200,
        height: 20,
        marginTop: 25,
        marginLeft: 103,
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

    txtUpload: {
        width: 200,
        height: 19,
        marginTop: 15,
        marginLeft: 16,
        color: '#000000',
        fontFamily: 'Montserrat-SemiBold'
    },

    btnSubmit: {
        width: 380,
        height: 45,
        marginLeft: 16,
        borderRadius: 6,
        backgroundColor: '#B7B7B7',
    },

    txtSubmit: {
        width: 120,
        height: 18,
        marginTop: 10,
        marginLeft: 135,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Montserrat-SemiBold',
    },
})
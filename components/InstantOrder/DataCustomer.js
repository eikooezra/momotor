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
import DropDownPicker from 'react-native-dropdown-picker'

class DataCustomer extends Component {
render() {
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.txtInstant}>
                    Instant Order
                </Text>
            </View>

            <View style={styles.containerTxt}>
                <Text style={styles.txtData}>
                    Data Customer
                </Text>
            </View>

        <ScrollView>
            <View style={styles.txtInpNama}>
                    <TextInput
                        style={styles.txtNama}
                        placeholder='Nama Lengkap (Sesuai KTP)'
                        placeholderTextColor='#7F7F7F'
                    />
            </View>

            <View>
                <DropDownPicker
                    items={[
                        {label: 'Pria', value: 'pria'},
                        {label: 'Wanita', value: 'Wanita'}
                    ]}
                    defaultNull
                    placeholder='Jenis Kelamin'
                    style={{
                        paddingVertical: 20
                    }}
                    containerStyle={{
                        width: 370,
                        height: 48,
                        marginLeft: 16,
                        marginBottom: 34,
                    }}
                    dropDownStyle={{
                        backgroundColor: '#FFFFFF'
                    }}
                    labelStyle={{
                        marginLeft: 8,
                        fontSize: 14,
                        color:'#7F7F7F',
                        fontFamily: 'Montserrat-SemiBold'
                    }}
                    arrowStyle={{
                        marginLeft: 205
                    }}
                />
            </View>

            <View style={styles.txtInpNIK}>
                    <TextInput
                        style={styles.txtNIK}
                        placeholder='NIK'
                        placeholderTextColor='#7F7F7F'
                    />
            </View>

            <View style={styles.txtInpPhone}>
                    <TextInput
                        style={styles.txtPhone}
                        placeholder='No. Handphone'
                        placeholderTextColor='#7F7F7F'
                    />
            </View>

            <View style={styles.txtInpEmail}>
                    <TextInput
                        style={styles.txtEmail}
                        placeholder='Email'
                        placeholderTextColor='#7F7F7F'
                    />
            </View>

            <View style={styles.txtInpBrthPlc}>
                    <TextInput
                        style={styles.txtBrthPlc}
                        placeholder='Tempat Lahir'
                        placeholderTextColor='#7F7F7F'
                    />
            </View>

            <View style={styles.txtInpDoB}>
                    <TextInput
                        style={styles.txtDoB}
                        placeholder='Tanggal Lahir'
                        placeholderTextColor='#7F7F7F'
                    />
            </View>

            <View style={styles.txtInpAddress}>
                    <TextInput
                        style={styles.txtAddress}
                        placeholder='Alamat Lengkap (Sesuai KTP)'
                        placeholderTextColor='#7F7F7F'
                    />
            </View>

            <View style={styles.flexContainer}>
                <View style={styles.txtInpRT}>
                    <TextInput
                        style={styles.txtRT}
                        placeholder='RT'
                        placeholderTextColor='#7F7F7F'
                    />
                </View>

                <View style={styles.txtInpRW}>
                    <TextInput
                        style={styles.txtRW}
                        placeholder='RW'
                        placeholderTextColor='#7F7F7F'
                    />
                </View>
            </View>

            <View style={styles.txtInpKelurahan}>
                    <TextInput
                        style={styles.txtKelurahan}
                        placeholder='Kelurahan Domisili'
                        placeholderTextColor='#7F7F7F'
                    />
            </View>

            <View style={styles.txtInpMom}>
                    <TextInput
                        style={styles.txtMom}
                        placeholder='Nama Ibu Kandung'
                        placeholderTextColor='#7F7F7F'
                    />
            </View>

            <View style={styles.txtInpKelurahanMom}>
                    <TextInput
                        style={styles.txtKelurahanMom}
                        placeholder='Kelurahan Domisili Ibu'
                        placeholderTextColor='#7F7F7F'
                    />
            </View>

            <TouchableOpacity
                // style={{
                //     backgroundColor: (this.state.prodYear !== '' &&
                //                       this.state.location !== '' &&
                //                       this.state.price !== '' &&
                //                       this.state.refcode !== '' &&
                //                       this.state.desc !== ''
                //         )
                //     ? '#0064D0' 
                //     : '#B7B7B7'
                //     }}
            >
                <Text style={styles.txtNxt}>
                    SELANJUTNYA
                </Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
    )
}}

export default DataCustomer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
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

    txtInpNama: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtNama: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpNIK: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtNIK: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpPhone: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtPhone: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpEmail: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtEmail: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpBrthPlc: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtBrthPlc: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpDoB: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtDoB: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpAddress: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },
    
    txtAddress: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    flexContainer: {
        flexDirection: 'row'
    },

    txtInpRT: {
        width: 160,
        height: 48,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtRT: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpRW: {
        width: 170,
        height: 48,
        marginLeft: 40,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtRW: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpKelurahan: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtKelurahan: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpMom: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 34,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtMom: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpKelurahanMom: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 24,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtKelurahanMom: {
        marginLeft: 8,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtNxt: {
        width: 125,
        height: 20,
        marginBottom: 24,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        justifyContent: 'center',
        alignSelf: 'center'
    }


})
import React, {Component} from 'react'
import {
    StyleSheet,
    KeyboardAvoidingView,
    TextInput,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

class DataCustomer extends Component {
    constructor(props){
        super(props)
        // let imgUrl = props 
        //            ? require('../../assets/images/alert.png')
        //            : require('../../assets/images/check.png')
        this.state = {
            name: '',
            isNameFilled: false,
            errorName: '',
            gender: '',
            isGenderPicked: false,
            errorGender: '',
            NIK: '',
            isNikFilled: false,
            errorNIK: '',
            phone: '',
            isPhoneFilled: false,
            errorPhone: '',
            email: '',
            isEmaillFilled: false,
            errorEmail: '',
            brthplc: '',
            isBrthplcFilled: false,
            errorBrthplc: '',
            DoB: '',
            isDobFilled: false,
            errorDoB: '',
            address: '',
            isAddressFilled: false,
            errorAddress: '',
            RT: '',
            isRtFilled: '',
            errorRT: '',
            RW: '',
            isRwFilled: false,
            errorRW: '',
            kelurahan: '',
            isKelurahanFilled: false,
            errorKelurahan: '',
            mom: '',
            isMomFilled: false,
            errorMom: '',
            kelMom: '',
            isKelMomFilled: false,
            errorKelmom: '',
            isPressed: false,
            null: true,
            // checkRender: imgUrl
        }
    }

    goToDataPekerjaan = () => {
        this.props.navigation.navigate('DataPekerjaan')
    }

    nullChecker = () => {
        if(this.state.isPressed === false){
            this.setState({null: true})
        } 
    }

    handleChangeName = (name) => {
        this.setState({name})
        let reg = /([^\s])/
        if(reg.test(name) === true){
            this.setState({isNameFilled: true, errorName: '', txtInpColor: '#EBEBEB',
        })
        }else{
            this.setState({errorName: 'Tidak boleh kosong', txtInpColor: '#D81818'})
        }
    }

    handleChangeGender = (gender) => {
        this.setState({gender})
        let reg = /([^\s])/
        if(reg.test(gender) === true){
            this.setState({isGenderPicked: true, errorGender: ''})
        }else{
            this.setState({errorGender: 'Pilih salah satu'})
        }
    }

    handleChangeNIK = (NIK) => {
        this.setState({NIK})
        if(NIK.length >= 16){
            this.setState({isNikFilled: true, errorNIK: ''})
        }else{
            this.setState({errorNIK: 'Minimal 16 karakter'})
        }
    }

    handleChangePhone = (phone) => {
        this.setState({phone})
        if(phone.length >= 11){
            this.setState({isPhoneFilled: true, errorPhone: ''})
        }else{
            this.setState({errorPhone: 'Minimal 11 karakter'})
        }
    }

    handleChangeEmail = (email) => {
        this.setState({email})
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(reg.test(email) === true){
            this.setState({isEmaillFilled: true, errorEmail: ''})
        }else{
            this.setState({errorEmail: 'Format: Example@adira.com'})
        }
    }

    handleChangeBrthPlc = (brthplc) => {
        this.setState({brthplc})
        let reg = /([^\s])/
        if(reg.test(brthplc) === true){
            this.setState({isBrthplcFilled: true, errorBrthplc: ''})
        }else{
            this.setState({errorBrthplc: 'Tidak boleh kosong'})
        }
    }

    handleChangeDoB = (DoB) => {
        this.setState({DoB})
        let reg = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
        if(reg.test(DoB) === true){
            this.setState({isDobFilled: true, errorDoB: ''})
        }else{
            this.setState({errorDoB: 'Format: dd/mm/yyyy'})
        }
    }

    handleChangeAddress = (address) => {
        this.setState({address})
        let reg = /([^\s])/
        if(reg.test(address) === true){
            this.setState({isAddressFilled: true, errorAddress: ''})
        }else{
            this.setState({errorAddress: 'Tidak boleh kosong'})
        }
    }

    handleChangeRT = (RT) => {
        this.setState({RT})
        let reg = /([^\s])/
        if(reg.test(RT) === true){
            this.setState({isRtFilled: true, errorRT: ''})
        }else{
            this.setState({errorRT: 'Tidak boleh kosong'})
        }
    }

    handleChangeRW = (RW) => {
        this.setState({RW})
        let reg = /([^\s])/
        if(reg.test(RW) === true){
            this.setState({isRwFilled: true, errorRW: ''})
        }else {
            this.setState({errorRW: 'Tidak boleh kosong'})
        }
    }

    handleChangeKelurahan = (kelurahan) => {
        this.setState({kelurahan})
        let reg = /([^\s])/
        if(reg.test(kelurahan) === true){
            this.setState({isKelurahanFilled: true, errorKelurahan: ''})
        }else{
            this.setState({errorKelurahan: 'Tidak boleh kosong'})
        }
    }

    handleChangeMom = (mom) => {
        this.setState({mom})
        let reg = /([^\s])/
        if(reg.test(mom) === true){
            this.setState({isMomFilled: true, errorMom: ''})
        }else{
            this.setState({errorMom: 'Tidak boleh kosong'})
        }
    }
    
    handleChangeKelMom = (kelMom) => {
        this.setState({kelMom})
        let reg = /([^\s])/
        if(reg.test(kelMom) === true){
            this.setState({isKelMomFilled: true, errorKelmom: ''})
        }else{
            this.setState({errorKelmom: 'Tidak boleh kosong'})
        }
    }

render() {
    const {
        name,
        gender,
        NIK,
        phone,
        email,
        brthplc,
        DoB,
        address,
        RT,
        RW,
        kelurahan,
        mom,
        kelMom,
    } = this.state

    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let dobReg = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/
    let emptyReg = /([^\s])/

    const enabled = 
    (emptyReg.test(name) === true) &&
    (emptyReg.test(gender) === true) &&
    NIK.length >= 16 &&
    phone.length >= 11 &&
    (emailReg.test(email) === true) &&
    (emptyReg.test(brthplc) === true) &&
    (dobReg.test(DoB) === true) &&
    (emptyReg.test(address) === true) &&
    (emptyReg.test(RT) === true) &&
    (emptyReg.test(RW) === true) &&
    (emptyReg.test(kelurahan) === true) &&
    (emptyReg.test(mom) === true) &&
    (emptyReg.test(kelMom) === true)

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
            <View 
            style={[styles.txtInpNama, {
                borderColor: (
                    this.state.name !== ''
                )
                ? '#EBEBEB'
                : '#D81818'
            }]}>
                    <TextInput
                        style={styles.txtNama}
                        placeholder='Nama Lengkap (Sesuai KTP)'
                        placeholderTextColor='#7F7F7F'
                        returnKeyType='next'
                        value={this.state.name}
                        onChangeText={name => this.handleChangeName(name)}
                    />

                    <Image
                        source={this.state.checkRender}
                    />
            </View>

            <Text style={styles.errorStyle}>
                {this.state.errorName}
            </Text>

            <View>
                <DropDownPicker
                    items={[
                        {label: 'Pria', value: 'pria'},
                        {label: 'Wanita', value: 'Wanita'}
                    ]}
                    defaultNull={this.nullChecker}
                    placeholder='Jenis Kelamin'
                    style={{
                        paddingVertical: 20
                    }}
                    containerStyle={{
                        width: 370,
                        height: 48,
                        marginLeft: 16,
                        marginBottom: 6,
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
                    onChangeItem={
                        item => this.setState({
                            gender: item
                        })
                    }
                    onChangeText={gender => this.handleChangeGender(gender)}
                />
            </View>

            <Text style={styles.errorStyle}>
                {this.state.errorGender}
            </Text>

            <View style={[styles.txtInpNIK, {
                borderColor: (
                    this.state.NIK !== ''
                )
                ? '#EBEBEB'
                : '#D81818'
            }]}>
                    <TextInput
                        style={styles.txtNIK}
                        placeholder='NIK'
                        placeholderTextColor='#7F7F7F'
                        returnKeyType='next'
                        maxLength={16}
                        value={this.state.NIK}
                        onChangeText={NIK => this.handleChangeNIK(NIK)}
                    />
            </View>

            <Text style={styles.errorStyle}>
                {this.state.errorNIK}
            </Text>

            <View style={[styles.txtInpPhone, {
                borderColor: (
                    this.state.phone !== ''
                )
                ? '#EBEBEB'
                : '#D81818'
            }]}>
                    <TextInput
                        style={styles.txtPhone}
                        placeholder='No. Handphone'
                        placeholderTextColor='#7F7F7F'
                        keyboardType={'numeric'}
                        returnKeyType='next'
                        maxLength={13}
                        value={this.state.phone}
                        onChangeText={phone => this.handleChangePhone(phone)}
                    />
            </View>

            <Text style={styles.errorStyle}>
                {this.state.errorPhone}
            </Text>

            <View style={[styles.txtInpEmail, {
                borderColor: (
                    this.state.email !== ''
                )
                ? '#EBEBEB'
                : '#D81818'
            }]}>
                    <TextInput
                        style={styles.txtEmail}
                        placeholder='Email'
                        placeholderTextColor='#7F7F7F'
                        keyboardType='email-address'
                        returnKeyType='next'
                        value={this.state.email}
                        onChangeText={email => this.handleChangeEmail(email)}
                    />
            </View>

            <Text style={styles.errorStyle}>
                {this.state.errorEmail}
            </Text>

            <View style={[styles.txtInpBrthPlc, {
                borderColor: (
                    this.state.brthplc !== ''
                )
                ? '#EBEBEB'
                : '#D81818'
            }]}>
                    <TextInput
                        style={styles.txtBrthPlc}
                        placeholder='Tempat Lahir'
                        placeholderTextColor='#7F7F7F'
                        returnKeyType='next'
                        value={this.state.brthplc}
                        onChangeText={brthplc => this.handleChangeBrthPlc(brthplc)}
                    />
            </View>

            <Text style={styles.errorStyle}>
                {this.state.errorBrthplc}
            </Text>

            <View style={[styles.txtInpDoB, {
                borderColor: (
                    this.state.DoB !== ''
                )
                ? '#EBEBEB'
                : '#D81818'
            }]}>
                    <TextInput
                        style={styles.txtDoB}
                        placeholder='Tanggal Lahir'
                        placeholderTextColor='#7F7F7F'
                        returnKeyType='next'
                        maxLength={10}
                        value={this.state.DoB}
                        onChangeText={DoB => this.handleChangeDoB(DoB)}
                    />
            </View>

            <Text style={styles.errorStyle}>
                {this.state.errorDoB}
            </Text>

            <View style={[styles.txtInpAddress, {
                borderColor: (
                    this.state.address !== ''
                )
                ? '#EBEBEB'
                : '#D81818'
            }]}>
                    <TextInput
                        style={styles.txtAddress}
                        placeholder='Alamat Lengkap (Sesuai KTP)'
                        placeholderTextColor='#7F7F7F'
                        returnKeyType='next'
                        value={this.state.address}
                        onChangeText={address => this.handleChangeAddress(address)}
                    />
            </View>

            <Text style={styles.errorStyle}>
                {this.state.errorAddress}
            </Text>

            <View style={styles.flexContainer}>
                <View style={[styles.txtInpRT, {
                    borderColor: (
                        this.state.RT !== ''
                    )
                    ? '#EBEBEB'
                    : '#D81818'
                }]}>
                    <TextInput
                        style={styles.txtRT}
                        placeholder='RT'
                        placeholderTextColor='#7F7F7F'
                        keyboardType={'numeric'}
                        returnKeyType='next'
                        maxLength={3}
                        value={this.state.RT}
                        onChangeText={RT => this.handleChangeRT(RT)}
                    />

                    <Text style={styles.errorStyle}>
                        {this.state.errorRT}
                    </Text>
                </View>

                <View style={[styles.txtInpRW, {
                    borderColor: (
                        this.state.RW !== ''
                    )
                    ? '#EBEBEB'
                    : '#D81818'
                }]}>
                    <TextInput
                        style={styles.txtRW}
                        placeholder='RW'
                        placeholderTextColor='#7F7F7F'
                        keyboardType={'numeric'}
                        returnKeyType='next'
                        maxLength={3}
                        value={this.state.RW}
                        onChangeText={RW => this.handleChangeRW(RW)}
                    />

                    <Text style={styles.errorStyle}>
                        {this.state.errorRW}
                    </Text>
                </View>

            </View>

            <View style={[styles.txtInpKelurahan, {
                borderColor: (
                    this.state.kelurahan !== ''
                )
                ? '#EBEBEB'
                : '#D81818'
            }]}>
                    <TextInput
                        style={styles.txtKelurahan}
                        placeholder='Kelurahan Domisili'
                        placeholderTextColor='#7F7F7F'
                        returnKeyType='next'
                        value={this.state.kelurahan}
                        onChangeText={kelurahan => this.handleChangeKelurahan(kelurahan)}
                    />
            </View>

            <Text style={styles.errorStyle}>
                {this.state.errorKelurahan}
            </Text>

            <View style={[styles.txtInpMom, {
                borderColor: (
                    this.state.mom !== ''
                )
                ? '#EBEBEB'
                : '#D81818'
            }]}>
                    <TextInput
                        style={styles.txtMom}
                        placeholder='Nama Ibu Kandung'
                        placeholderTextColor='#7F7F7F'
                        returnKeyType='next'
                        value={this.state.mom}
                        onChangeText={mom => this.handleChangeMom(mom)}
                    />
            </View>

            <Text style={styles.errorStyle}>
                {this.state.errorMom}
            </Text>

            <View style={[styles.txtInpKelurahanMom, {
                borderColor: (
                    this.state.kelMom !== ''
                )
                ? '#EBEBEB'
                : '#D81818'
            }]}>
                    <TextInput
                        style={styles.txtKelurahanMom}
                        placeholder='Kelurahan Domisili Ibu'
                        placeholderTextColor='#7F7F7F'
                        value={this.state.kelMom}
                        onChangeText={kelMom => this.handleChangeKelMom(kelMom)}
                    />
            </View>

            <Text style={styles.errorStyle}>
                {this.state.errorKelmom}
            </Text>

            <TouchableOpacity
                onPress={this.goToDataPekerjaan}
                //disabled={!enabled}
            >
                <Text style={[styles.txtNxt, {
                    color: (
                        this.state.name !== '' &&
                        this.state.gender !== '' &&
                        this.state.NIK !== '' &&
                        this.state.phone !== '' &&
                        this.state.email !== '' &&
                        this.state.brthplc !== '' &&
                        this.state.DoB !== '' &&
                        this.state.address !== '' &&
                        this.state.RT !== '' &&
                        this.state.RW !== '' &&
                        this.state.kelurahan !== '' &&
                        this.state.mom !== '' &&
                        this.state.kelMom !== '')
                    ? '#0064D0' 
                    : '#7F7F7F'
                }]}>
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

    errorStyle: {
        width: 200,
        height: 15,
        marginLeft: 17,
        marginBottom: 15,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: '#D81818'
    },

    txtInpNama: {
        width: 370,
        height: 48,
        marginLeft: 16,
        marginBottom: 6,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB'
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
        marginBottom: 6,
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
        marginBottom: 6,
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
        marginBottom: 6,
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
        marginBottom: 6,
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
        marginBottom: 6,
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
        marginBottom: 6,
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
        flexDirection: 'row',
        marginBottom: 34
    },

    txtInpRT: {
        width: 160,
        height: 48,
        marginLeft: 16,
        marginBottom: 8,
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
        marginBottom: 6,
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
        marginBottom: 6,
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
        marginBottom: 6,
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
        marginBottom: 6,
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
    },
})
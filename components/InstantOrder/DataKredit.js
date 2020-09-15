import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    TextInput,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import normalize from 'react-native-normalize'

class DataKredit extends Component{
    constructor(props){
        super(props)
        this.state={
            dp: '',
            isDpFilled: false,
            tenor: '',
            isTenorFilled: false,
            isPressed: true,
            null: false
        }
    }

    goBack = () => {
        this.props.navigation.navigate('DataMotor')
    }

    goToUploadDocs = () => {
        this.props.navigation.navigate('UploadDocs')
    }

    nullChecker = () => {
        if(this.state.isPressed === false){
            this.setState({null: true})
        } 
    }

    handleChangeDP = (dp) => {
        this.setState({dp})
        let reg = /([^\s])/
        if(reg.test(dp) === true){
            this.setState({isDpFilled: true})
        }
    }

    handleChangeSalary = (tenor) => {
        this.setState({tenor})
        let reg = /([^\s])/
        if(reg.test(tenor) === true){
            this.setState({isTenorFilled: true})
        }
    }

    render(){
        const {
            dp,
            tenor
        } = this.state

        let reg = /([^\s])/
        const enabled = (reg.test(dp) === true) && (reg.test(tenor) === true)

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
                    <Text style={styles.txtData}>
                        Data Kredit
                    </Text>
                </View>

                <View style={styles.txtInpDP}>
                    <TextInput
                        style={styles.txtDP}
                        placeholder='Uang Muka'
                        placeholderTextColor='#7F7F7F'
                        onChangeText={dp => this.handleChangeDP(dp)}
                    />
                </View>

                <Text style={styles.txtMinDP}>
                    Min. DP 10%
                </Text>

                <View>
                <DropDownPicker
                        items={[
                            {label: '12', value: '12'},
                            {label: '24', value: '24'},
                            {label: '36', value: '36'},
                            {label: '48', value: '48'},
                            {label: '60', value: '60'},
                        ]}
                        defaultNull={this.nullChecker}
                        placeholder='Tahun Produksi'
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
                                tenor: item
                            })
                        }
                        onChangeText={tenor => this.handleChangeTenor(tenor)}
                    />
                </View>

                <TouchableOpacity
                onPress={this.goToUploadDocs}
                // disabled={!enabled}
            >
                <Text style={[styles.txtNxt, {
                    color: (
                        this.state.dp !== '' &&
                        this.state.tenor !== '')
                    ? '#0064D0' 
                    : '#7F7F7F'
                }]}>
                    SELANJUTNYA
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
        width: normalize(412),
        height: normalize(70),
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: normalize(32),
        height: normalize(16),
        marginLeft: normalize(16),
        marginTop: normalize(30)
    },

    txtInstant: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(145),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    containerTxt: {
        width: normalize(420),
        height: normalize(48),
        marginBottom: normalize(15),
        elevation: 4,
        backgroundColor: '#FFFFFF',
    },

    txtData: {
        width: normalize(124),
        height: normalize(19),
        marginTop: normalize(15),
        marginLeft: normalize(16),
        color: '#000000',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtInpDP: {
        width: normalize(350),
        height: normalize(46),
        marginLeft: normalize(16),
        marginBottom: normalize(6),
        borderWidth: 2,
        borderRadius: 4,
        borderColor: '#EBEBEB'
    },

    txtDP: {
        marginLeft: normalize(8),
        color: '#7F7F7F',
        fontFamily: 'Montserrat-SemiBold'
    },

    txtMinDP: {
        width: 200,
        height: 15,
        marginLeft: 20,
        marginBottom: 15,
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
    },

    txtNxt: {
        width: normalize(125),
        height: normalize(20),
        marginTop: normalize(355),
        marginLeft: normalize(135),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
    },
})
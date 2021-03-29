import React, { Component } from 'react'
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
import { Button, Gap, Header, Input, Title } from '../../components/components'

class DataKredit extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
        if (this.state.isPressed === false) {
            this.setState({ null: true })
        }
    }

    handleChangeDP = (dp) => {
        this.setState({ dp })
        let reg = /([^\s])/
        if (reg.test(dp) === true) {
            this.setState({ isDpFilled: true })
        }
    }

    handleChangeSalary = (tenor) => {
        this.setState({ tenor })
        let reg = /([^\s])/
        if (reg.test(tenor) === true) {
            this.setState({ isTenorFilled: true })
        }
    }

    render() {
        const {
            dp,
            tenor
        } = this.state

        let reg = /([^\s])/
        const enabled = (reg.test(dp) === true) && (reg.test(tenor) === true)

        return (
            <View style={styles.container}>
                <Header title="Instant Order" onPress={this.goBack} back />
                <Title text="Data Kredit" />
                <View style={styles.content}>
                    <Gap height={8}/>
                    <Input placeholder="Uang Muka" />
                    <Gap height={5}/>
                    <Text style={styles.label}>Min. DP 10%</Text>
                    <Gap height={14}/>
                    <DropDownPicker
                        items={[
                            { label: '12', value: '12' },
                            { label: '24', value: '24' },
                            { label: '36', value: '36' },
                            { label: '48', value: '48' },
                            { label: '60', value: '60' },
                        ]}
                        defaultNull={this.nullChecker}
                        placeholder='Tahun Produksi'
                        style={{
                            paddingVertical: 20
                        }}
                        containerStyle={{
                            // width: 370,
                            // height: 48,
                            // marginLeft: 16,
                            // marginBottom: 6,
                        }}
                        dropDownStyle={{
                            backgroundColor: '#FFFFFF'
                        }}
                        labelStyle={{
                            marginLeft: 8,
                            fontSize: 14,
                            color: '#7F7F7F',
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
                <Button onPress={this.goToUploadDocs} title="SELANJUTNYA" />
                <Gap height={22}/>
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
    content: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
    },
    label: {
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
    },
})
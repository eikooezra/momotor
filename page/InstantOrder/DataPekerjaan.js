    import React, {Component} from 'react'
    import {
        StyleSheet,
        Image,
        TextInput,
        View,
        Text,
        TouchableOpacity
    } from 'react-native'
    import normalize from 'react-native-normalize'

    class DataPekerjaan extends Component{
        constructor(props){
            super(props)
            this.state={
                job: '',
                isJobFilled: false,
                errorJob: '',
                salary: '',
                isSalaryFilled: false,
                errorSalary: '',
                exp: '',
                isExpFilled: false,
                errorExp: '',
            }
        }

        goBack = () => {
            this.props.navigation.navigate('InstantOrder')
        }

        goToDataMotor = () => {
            this.props.navigation.navigate('DataMotor')
        }

        handleChangeJob = (job) => {
            this.setState({job})
            let reg = /([^\s])/
            if(reg.test(job) === true){
                this.setState({isJobFilled: true, errorJob: ''})
            }else{
                this.setState({errorJob: 'Tidak boleh kosong'})
            }
        }

        handleChangeSalary = (salary) => {
            this.setState({salary})
            let reg = /([^\s])/
            if(reg.test(salary) === true){
                this.setState({isSalaryFilled: true, errorSalary: ''})
            }else{
                this.setState({errorSalary: 'Tidak boleh kosong'})
            }
        }

        handleChangeExp = (exp) => {
            this.setState({exp})
            let reg = /([^\s])/
            if(reg.test(exp) === true){
                this.setState({isExpFilled: true, errorExp: ''})
            }else {
                this.setState({errorExp: 'Tidak boleh kosong'})
            }
        }

        render(){
            const {
                job,
                salary,
                exp
            } = this.state

            let emptyReg = /([^\s])/
            const enabled = 
            (emptyReg.test(job) === true) &&
            (emptyReg.test(salary) === true) &&
            (emptyReg.test(exp) === true)

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
                            Data Pekerjaan
                        </Text>
                    </View>

                    <View style={styles.txtInpJob}>
                        <TextInput
                            style={styles.txtJob}
                            placeholder='Pekerjaan'
                            placeholderTextColor='#7F7F7F'
                            onChangeText={job => this.handleChangeJob(job)}
                        />
                    </View>

                    <Text style={styles.errorStyle}>
                        {this.state.errorJob}
                    </Text>

                    <View style={styles.txtInpSalary}>
                    <TextInput
                            style={styles.txtSalary}
                            placeholder='Penghasilan per bulan'
                            placeholderTextColor='#7F7F7F'
                            onChangeText={salary => this.handleChangeSalary(salary)}
                        />
                    </View>

                    <Text style={styles.errorStyle}>
                        {this.state.errorSalary}
                    </Text>

                    <View style={styles.txtInpExp}>
                        <TextInput
                            style={styles.txtExp}
                            placeholder='Lama Bekerja'
                            placeholderTextColor='#7F7F7F'
                            onChangeText={exp => this.handleChangeExp(exp)}
                        />
                    </View>

                    <Text style={styles.errorStyle}>
                        {this.state.errorExp}
                    </Text>

                    <TouchableOpacity
                    onPress={this.goToDataMotor}
                    // disabled={!enabled}
                    >
                    <Text style={[styles.txtNxt, {
                        color: (
                            this.state.job !== '' &&
                            this.state.salary !== '' &&
                            this.state.exp !== '')
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

    export default DataPekerjaan

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
            marginLeft: normalize(100),
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

        errorStyle: {
            width: normalize(200),
            height: normalize(15),
            marginLeft: normalize(17),
            marginBottom: normalize(15),
            fontSize: normalize(12),
            fontFamily: 'Montserrat-Medium',
            color: '#D81818'
        },

        txtInpJob: {
            width: normalize(350),
            height: normalize(46),
            marginLeft: normalize(16),
            marginBottom: normalize(6),
            borderWidth: 2,
            borderRadius: 4,
            borderColor: '#EBEBEB',
        },

        txtJob: {
            marginLeft: normalize(8),
            color: '#7F7F7F',
            fontFamily: 'Montserrat-SemiBold'
        },

        txtInpSalary: {
            width: normalize(350),
            height: normalize(46),
            marginLeft: normalize(16),
            marginBottom: normalize(6),
            borderWidth: 2,
            borderRadius: 4,
            borderColor: '#EBEBEB'
        },

        txtSalary: {
            marginLeft: normalize(8),
            color: '#7F7F7F',
            fontFamily: 'Montserrat-SemiBold'
        },

        txtInpExp: {
            width: normalize(350),
            height: normalize(46),
            marginLeft: normalize(16),
            marginBottom: normalize(6),
            borderWidth: 2,
            borderRadius: 4,
            borderColor: '#EBEBEB'
        },

        txtExp: {
            marginLeft: normalize(8),
            color: '#7F7F7F',
            fontFamily: 'Montserrat-SemiBold'
        },

        txtNxt: {
            width: normalize(125),
            height: normalize(20),
            marginTop: normalize(250),
            marginLeft: normalize(135),
            fontSize: normalize(16),
            fontFamily: 'Montserrat-SemiBold',
        },
    })
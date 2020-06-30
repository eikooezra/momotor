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
    import DrawerLayout from 'react-native-gesture-handler/DrawerLayout'

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
                isPressed: true,
                null: false
            }
        }

        goToDataPekerjaan = () => {
            this.props.navigation.navigate('DataMotor')
        }

        nullChecker = () => {
            if(this.state.isPressed === false){
                this.setState({null: true})
            } 
        }

        handleChangeJob = (job) => {
            this.setState({job})
            let reg = /^[0-9]*$/
            if(reg.test(job) === true){
                this.setState({isJobFilled: true, errorJob: ''})
            }else{
                this.setState({errorJob: 'Tidak boleh kosong'})
            }
        }

        handleChangeSalary = (salary) => {
            this.setState({salary})
            let reg = /^[0-9]*$/
            if(reg.test(salary) === true){
                this.setState({isSalaryFilled: true, errorSalary: ''})
            }else{
                this.setState({errorSalary: 'Tidak boleh kosong'})
            }
        }

        handleChangeExp = (exp) => {
            this.setState({exp})
            let reg = /^[0-9]*$/
            if(reg.test(exp) === true){
                this.setState({isExpFilled: true, errorExp: ''})
            }else {
                this.setState({errorExp: 'Tidak boleh kosong'})
            }
        }

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
                        {this.state.errorPrice}
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

        txtInpJob: {
            width: 370,
            height: 48,
            marginLeft: 16,
            marginBottom: 6,
            borderWidth: 2,
            borderRadius: 4,
            borderColor: '#EBEBEB',
        },

        txtJob: {
            marginLeft: 8,
            color: '#7F7F7F',
            fontFamily: 'Montserrat-SemiBold'
        },

        txtInpSalary: {
            width: 370,
            height: 48,
            marginLeft: 16,
            marginBottom: 6,
            borderWidth: 2,
            borderRadius: 4,
            borderColor: '#EBEBEB',
        },

        txtSalary: {
            marginLeft: 8,
            color: '#7F7F7F',
            fontFamily: 'Montserrat-SemiBold'
        },

        txtInpExp: {
            width: 370,
            height: 48,
            marginLeft: 16,
            marginBottom: 6,
            borderWidth: 2,
            borderRadius: 4,
            borderColor: '#EBEBEB',
        },

        txtExp: {
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
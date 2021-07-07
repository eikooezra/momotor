import React, {useState, useRef, useEffect} from 'react'
import {
    Image,
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize'
import { useForm } from '../../utils/utils'

const ChangePass = ({navigation}) => {
    const [showPass, setShowPass] = useState(true)
    const [form, setForm] = useForm({
        newPass: '',
        conPass: ''
    })

    const goBack = () => {
        navigation.navigate('ConfirmEmail')
    }

        return(
            <View style={styles.container}>
             <View style={styles.Header}>
              <TouchableOpacity
                onPress={goBack}
              >
                <Image 
                 style={styles.btnBack}
                 source={require('../../assets/images/back.png')}
                />
              </TouchableOpacity>
                <Text style={styles.txtSandi}>
                 Kata Sandi
                </Text>
             </View>

             <View>
                <Text style={styles.txtUbah}>
                    Ubah Sandi Baru
                </Text>
             </View>
             
             <Text style={styles.txtSanLam}>
                Kata Sandi Baru
             </Text>

             <View style={styles.inputContainer1}>
                <Image style={styles.lockLogo}
                    source={require('../../assets/images/lockGre.png')}
                />
                <TextInput style={styles.txtInput}
                    placeholder='Masukkan kata sandi baru'
                    returnKeyType='next'
                    placeholderTextColor='#7F7F7F'
                    secureTextEntry={showPass}
                    value={form.newPass}
                    onChangeText={value => setForm('newPass', value)}
                    onSubmitEditing={() => secondTextInput.focus()}
                />

                <TouchableOpacity style={styles.btnEye}
                    onPress={() => setShowPass((prev) => !prev)}>
                        <Image style={styles.eyeLogo}
                            source={(showPass) 
                                ? require('../../assets/images/eyeGre.png')
                                : require('../../assets/images/eyeGreS.png')
                            }
                        />
                </TouchableOpacity>
             </View>

             <Text style={styles.txtSanBar}>
                Konfirmasi Kata Sandi Baru
             </Text>

             <View style={styles.inputContainer2}>
                <Image style={styles.lockLogo}
                    source={require('../../assets/images/lockGre.png')}
                />
                <TextInput style={styles.txtInput}
                    placeholder='Konfirmasi kata sandi baru'
                    placeholderTextColor='#7F7F7F'
                    secureTextEntry={true}
                    value={form.conPass}
                    onChangeText={value => setForm('conPass', value)}
                    ref={(input) => { secondTextInput = input }}
                />
             </View>
            
             <TouchableOpacity style={styles.btnReset}
                    // onPress={}
                    // disabled={!enabled}
                    >
                        
                    <Text style={styles.txtReset}>
                        Reset Kata Sandi
                    </Text>
             </TouchableOpacity>

            </View>
        )
}

export default ChangePass

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    Header: {
        width: normalize(380),
        height: normalize(70),
        marginBottom: normalize(15),
        flexDirection: 'row',
        backgroundColor: '#0064D0',
    },

    btnBack: {
        width: normalize(32),
        height: normalize(16),
        marginLeft: normalize(16),
        marginTop: normalize(30)
    },

    txtSandi: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(108),
        fontSize: normalize(16),
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Bold'
    },

    txtUbah: {
        marginLeft: normalize(16),
        marginTop: normalize(24),
        marginBottom: normalize(24),
        fontFamily: 'Montserrat-Bold',
        fontSize: normalize(16)
    },

    txtInput: {
        fontFamily: 'Montserrat-Medium'
    },

    btnEye: {
        marginTop: normalize(16),
        marginBottom: normalize(25),
        marginLeft: normalize(290),
        width: normalize(25),
        height: normalize(15.68),
        flex: 1,
        position: 'absolute'
    },

    lockLogo: {
        marginTop: normalize(14.5),
        marginBottom: normalize(14.25),
        marginLeft: normalize(12.69),
        marginRight: normalize(15.54),
        width: normalize(14.5),
        height: normalize(20),
        borderWidth: 0.8,
        flex: 1,
        position: 'absolute'
    },

    eyeLogo: {
        width: normalize(25),
        height: normalize(16.5),
        flex: 1,
        position: 'absolute'
    },

    txtSanLam: {
        marginLeft: normalize(25),
        marginBottom: normalize(8),
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(14)
    },

    txtSanBar: {
        marginLeft: normalize(25),
        marginBottom: normalize(8),
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(14)
    },

    inputContainer1: {
        width: normalize(328),
        height: normalize(48),
        marginBottom: normalize(10),
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: normalize(35),
        marginLeft: normalize(25),
    },
    
    inputContainer2: {
        width: normalize(328),
        height: normalize(48),
        marginBottom: normalize(10),
        borderWidth: 2,
        borderRadius: 5,
        paddingLeft: normalize(35),
        marginLeft: normalize(25),
    },

    btnReset: {
        backgroundColor: '#0064D0',
        marginTop: normalize(20),
        marginBottom: normalize(1),
        width: normalize(328),
        height: normalize(48),
        marginLeft: normalize(25),
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtReset: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: normalize(16),
    }
})

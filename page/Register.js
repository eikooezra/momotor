import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button2, Gap, Header, Input } from '../components/components';
import { Fire } from '../config';
import { getData, storeData } from '../utils/localstorage/localstorage';
import { useForm } from '../utils/utils';

const Register = ({ navigation }) => {
    const [form, setForm] = useForm({
        fullName: '',
        phoneNo: '',
        address: '',
        email: '',
        password: ''
    })

    const onContinue = () => {
        console.log('form: ', form)
        Fire.auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .then((success) => {
                const data = {
                    fullName: form.fullName,
                    phoneNo: form.phoneNo,
                    address: form.address,
                    email: form.email,
                    uid: success.user.uid
                }

                Fire
                    .database()
                    .ref('users/' + success.user.uid + '/')
                    .set(data)

                storeData('user', data);

                navigation.navigate('Home', data)
                console.log('register success: ', success)
            })
            .catch((err) => {
                console.log('error: ', err)
            })
    }
    return (
        <View style={styles.container}>
            <Header title="Register" back onPress={() => navigation.goBack()} />
            <Gap height={8} />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap height={34} />
                    <Input
                        placeholder="Nama Lengkap"
                        value={form.fullName}
                        onChangeText={value => setForm('fullName', value)}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="Nomor HP"
                        type="numeric"
                        value={form.phoneNo}
                        onChangeText={value => setForm('phoneNo', value)}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="Alamat"
                        value={form.address}
                        onChangeText={value => setForm('address', value)}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="Email"
                        value={form.email}
                        onChangeText={value => setForm('email', value)}
                    />
                    <Gap height={34} />
                    <Input
                        placeholder="Password"
                        value={form.password}
                        onChangeText={value => setForm('password', value)}
                    />
                    <Gap height={34} />
                    <View style={styles.btnArea}>
                        <Button2
                            onPress={onContinue}
                            title="DAFTAR"
                        />
                    </View>
                    <Gap height={18} />
                </ScrollView>
            </View>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    content: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
    },
    btnArea: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
});
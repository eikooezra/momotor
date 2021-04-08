import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Gap, Header, Input } from '../components/components';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Header title="Register" back onPress={() => navigation.goBack()}/>
        <Gap height={8}/>
        <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Gap height={34} />
                <Input placeholder="Nama Lengkap"/>
                <Gap height={34} />
                <Input placeholder="Nomor HP"/>
                <Gap height={34} />
                <Input placeholder="Alamat"/>
                <Gap height={34} />
                <Input placeholder="Email"/>
                <Gap height={34} />
                <Input placeholder="Password"/>
                <Gap height={34} />
                <Button
                    onPress={() => navigation.navigate('Home')}
                    title="SELANJUTNYA"
                />
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
});
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ScrollView } from 'react-native-gesture-handler';
import normalize from 'react-native-normalize'
import { Button, DropDown, Gap, Header, Input, Title } from '../../components/components';
import ModalDropdown from 'react-native-modal-dropdown';

const DataCustomer = ({ navigation }) => {
    const [value, setValue] = useState(null);
    return (
        <View style={styles.page}>
            <Header title="Instant Order" />
            <Title text="Data Customer" />
            <Gap height={8} />
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Input placeholder="Nama Lengkap (Sesuai KTP)" />
                    <Gap height={34} />
                    {/* <Input placeholder="Jenis Kelamin" /> */}
                    <View>
                        {/* <ModalDropdown
                            options={[
                                'Pria',
                                'Wanita'
                                // { label: 'Pria', value: 'pria' },
                                // { label: 'Wanita', value: 'Wanita' }
                            ]}
                            defaultValue='Jenis Kelamin'
                            style={{
                                paddingHorizontal: 16,
                                paddingVertical: 15,
                                borderWidth: 1,
                                borderRadius: 4,
                                borderColor: '#EBEBEB',
                            }}
                            dropDownStyle={{
                                backgroundColor: '#FFFFFF',
                                width: 300
                            }}
                            textStyle={{
                                // paddingHorizontal: 16,
                                // paddingRight: 290,
                                fontSize: 15,
                                color: '#7F7F7F',
                                fontFamily: 'Montserrat-Medium',
                            }}
                            isFullWidth={true}
                        /> */}
                        <DropDownPicker
                            items={[
                                { label: 'Pria', value: 'pria' },
                                { label: 'Wanita', value: 'Wanita' }
                            ]}
                            defaultNull
                            placeholder="Jenis Kelamin"
                            style={{
                                // paddingHorizontal: 16,
                                // paddingVertical: 15,
                                borderWidth: 1,
                                borderRadius: 4,
                                borderColor: '#EBEBEB',
                            }}
                            // containerStyle={{
                            //     // width: normalize(350),
                            //     // height: normalize(46),
                            //     // marginLeft: normalize(16),
                            //     // marginBottom: normalize(6),
                            // }}
                            dropDownStyle={{
                                backgroundColor: '#FFFFFF'
                            }}
                            labelStyle={{
                                // paddingHorizontal: 16,
                                // paddingRight: 290,
                                fontSize: 15,
                                color: '#7F7F7F',
                                fontFamily: 'Montserrat-Medium',
                            }}
                        />
                    </View>
                    <Gap height={34} />
                    <Input placeholder="NIK" type="numeric" />
                    <Gap height={34} />
                    <Input placeholder="No. Handphone" type="numeric" />
                    <Gap height={34} />
                    <Input placeholder="Email" />
                    <Gap height={34} />
                    <Input placeholder="Tempat Lahir" />
                    <Gap height={34} />
                    <Input placeholder="Tanngal Lahir" />
                    <Gap height={34} />
                    <Input placeholder="Alamat Lengkap (Sesuai KTP)" />
                    <Gap height={34} />
                    <View style={styles.flexContainer}>
                        <View style={styles.txtInpRT}>
                            <TextInput
                                style={styles.txtRT}
                                placeholder='RT'
                                placeholderTextColor='#7F7F7F'
                                keyboardType={'numeric'}
                            />
                        </View>
                        <Gap width={10} />
                        <View style={styles.txtInpRW}>
                            <TextInput
                                style={styles.txtRW}
                                placeholder='RW'
                                placeholderTextColor='#7F7F7F'
                                keyboardType={'numeric'}
                            />
                        </View>
                        {/* <Input placeholder="RT"/>
                        <Input placeholder="RW"/> */}
                    </View>
                    <Gap height={34} />
                    <Input placeholder="Kelurahan Domisili" />
                    <Gap height={34} />
                    <Input placeholder="Nama Ibu Kandung" />
                    <Gap height={34} />
                    <Input placeholder="Kelurahan Domisili Ibu" />
                    <Gap height={34} />
                    <Button
                        onPress={() => navigation.navigate('DataPekerjaan')}
                        title="SELANJUTNYA"
                    />
                    {/* <TouchableOpacity onPress={() => navigation.navigate('DataPekerjaan')}>
                        <Text style={styles.txtButton}>SELANJUTNYA</Text>
                    </TouchableOpacity> */}
                    <Gap height={18} />
                </ScrollView>
            </View>
        </View>
    );
};

export default DataCustomer;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    },
    content: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
        // paddingBottom: 100
    },
    RtRw: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // maxWidth: '90%'
    },
    txtButton: {
        width: normalize(125),
        height: normalize(20),
        marginBottom: normalize(24),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
        justifyContent: 'center',
        alignSelf: 'center',
        color: '#7F7F7F'
    },
    flexContainer: {
        flexDirection: 'row',
    },

    txtInpRT: {
        width: normalize(169),
        height: normalize(46),
        // marginLeft: normalize(16),
        // marginBottom: normalize(6),
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtRT: {
        paddingHorizontal: 16,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },

    txtInpRW: {
        width: normalize(169),
        height: normalize(46),
        // marginLeft: normalize(16),
        // marginBottom: normalize(6),
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#EBEBEB',
    },

    txtRW: {
        // marginLeft: normalize(8),
        paddingHorizontal: 16,
        color: '#7F7F7F',
        fontFamily: 'Montserrat-Medium'
    },
});
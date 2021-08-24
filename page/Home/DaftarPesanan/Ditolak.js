import React, { useCallback, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions, RefreshControl, ScrollView, StyleSheet, View
} from 'react-native';
import normalize from 'react-native-normalize';
import { OrderItem } from '../../../components/components';
import { Fire } from '../../../config';
import { getData } from '../../../utils/localstorage/localstorage';
import messaging from "@react-native-firebase/messaging";

const { height } = Dimensions.get("window");

const Ditolak = ({ navigation }) => {
    const [order, setOrder] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userProfile, setUserProfile] = useState({});

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        saveToken();
        getData("user").then((res) => {
            const uid = res.uid;
            Fire.database()
                .ref('order/' + res.uid + '/')
                .orderByChild('status')
                .equalTo('Ditolak')
                .once('value')
                .then(res => {
                    console.log('data: ', res.val())
                    if (res.val()) {
                        setOrder(Object.values(res.val()))
                    }
                })
                .catch((err) => {
                    console.log("error: ", err);
                })
                .finally(() => setRefreshing(false));
        });
    }, [userProfile]);

    const saveToken = async () => {
        const token = await messaging().getToken();
        if (userProfile.uid)
            Fire.database()
                .ref(`users/${userProfile.uid}`)
                .update({ token });
    };

    const getUid = () => {
        setIsLoading(true);
        getData("user").then((res) => {
            const uid = res.uid;
            setUserProfile(res);
            Fire.database()
                .ref('order/' + res.uid + '/')
                .orderByChild('status')
                .equalTo('Ditolak')
                .once('value')
                .then(res => {
                    console.log('data: ', res.val())
                    if (res.val()) {
                        setOrder(Object.values(res.val()))
                    }
                })
                .catch((err) => {
                    console.log("error: ", err);
                })
                .finally(() => setIsLoading(false));
        });
    };

    useEffect(() => {
        getUid();
    }, []);

    useEffect(() => {
        saveToken();
    }, [userProfile]);

    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollContainer}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {isLoading ? (
                    <View style={styles.loadingCont}>
                        <ActivityIndicator size="large" color="#0064D0" />
                    </View>
                ) : (
                    <>
                        {order.map(item => {
                            return (
                                <OrderItem
                                    key={item.orderId}
                                    image={item.data_motor.images.image}
                                    name={item.data_customer.custName}
                                    product={item.data_motor.product}
                                    date={item.date}
                                    status={item.status}
                                    onPress={() => navigation.navigate('DetailPesanan', item)}
                                />
                            )
                        })}
                    </>
                )}
            </ScrollView>
        </View>
    )
}

export default Ditolak

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    WhiteBox: {
        width: normalize(350),
        height: normalize(121),
        marginTop: normalize(16),
        marginBottom: normalize(16),
        marginLeft: normalize(16),
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },

    WhiteBox2: {
        width: normalize(350),
        height: normalize(121),
        marginBottom: normalize(16),
        marginLeft: normalize(16),
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },

    boxContainer1: {
        marginLeft: normalize(16)
    },

    imgUnit: {
        width: normalize(98),
        height: normalize(98),
        marginTop: normalize(12),
        borderRadius: 4,
    },

    boxContainer2: {
        marginLeft: normalize(16)
    },

    txtName: {
        width: normalize(119),
        height: normalize(20),
        marginTop: normalize(12),
        marginBottom: normalize(6),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-SemiBold'
    },

    txtModel: {
        width: normalize(120),
        height: normalize(20),
        marginBottom: normalize(6),
        fontSize: normalize(14),
        fontFamily: 'Montserrat-Medium'
    },

    txtDate: {
        width: normalize(120),
        height: normalize(20),
        marginBottom: normalize(6),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    btnProsesVerif: {
        width: normalize(100),
        height: normalize(25),
        marginLeft: normalize(115),
        borderRadius: 4,
        backgroundColor: '#EAF7EE'
    },

    txtProsesVerif: {
        marginTop: normalize(4),
        marginLeft: normalize(8),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-SemiBold',
        color: '#3CB13C'
    }
})
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

const SemuaPesanan = ({ navigation }) => {
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
                .ref("order/" + uid + "/")
                .once("value")
                .then((res) => {
                    if (res.val()) {
                        setOrder(Object.values(res.val()));
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
                .ref("order/" + uid + "/")
                .once("value")
                .then((res) => {
                    if (res.val()) {
                        setOrder(Object.values(res.val()));
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

export default SemuaPesanan

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    scrollContainer: {
        height: normalize(400),
    },

    loadingCont: {
        flex: 1,
        height: height - 350,
        justifyContent: "center",
        alignItems: "center",
    },
})
import messaging from "@react-native-firebase/messaging";
import React, { useCallback, useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Dimensions, RefreshControl, ScrollView, StyleSheet, View
} from 'react-native';
import { showMessage } from "react-native-flash-message";
import normalize from "react-native-normalize";
import { ProductItem } from '../../../components/components';
import { Fire } from '../../../config';
import { getData } from '../../../utils/localstorage/localstorage';

const { height } = Dimensions.get("window");

const SemuaProduk = ({ navigation }) => {
    const [product, setProduct] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [userProfile, setUserProfile] = useState({});

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        saveToken();
        getData("user").then((res) => {
            const uid = res.uid;
            Fire.database()
                .ref("product/" + uid + "/")
                .once("value")
                .then((res) => {
                    if (res.val()) {
                        setProduct(Object.values(res.val()));
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
                .ref("product/" + uid + "/")
                .once("value")
                .then((res) => {
                    if (res.val()) {
                        setProduct(Object.values(res.val()));
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

    const deleteData = (productId) => {
        getData('user').then(res => {
            const uid = res.uid
            Fire
                .database()
                .ref('product/' + uid + '/' + productId)
                .remove()

        })
    }

    const hideProd = (productId) => {
        getData('user').then(res => {
            const uid = res.uid
            Fire
                .database()
                .ref('product/' + uid + '/' + productId)
                .update({ status: 'Disembunyikan' })
        })
        showMessage({
            message: 'Produk berhasil disembunyikan',
            type: 'default',
            backgroundColor: '#20b53e',
            color: '#FFFFFF'
        })
    }
    const unhideProd = (productId, prevStatus) => {
        getData('user').then(res => {
            const uid = res.uid
            Fire
                .database()
                .ref('product/' + uid + '/' + productId)
                .update({ status: prevStatus })
        })
        showMessage({
            message: 'Produk berhasil ditampilkan kembali',
            type: 'default',
            backgroundColor: '#20b53e',
            color: '#FFFFFF'
        })
    }

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
                        {product.map(item => {
                            return (
                                <ProductItem
                                    key={item.id}
                                    date={item.date}
                                    name={item.name}
                                    kilometer={item.kilometer.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.") + ' KM'}
                                    image={item.images.image}
                                    location={item.location}
                                    year={item.year}
                                    price={'Rp ' + item.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                                    status={item.status}
                                    onPress={() => navigation.navigate('DetailProduk', item)}
                                    onPressEdit={() => navigation.navigate('EditProduct', item)}
                                    onPressDelete={() => deleteData(item.id)}
                                    onPressHide={() => hideProd(item.id)}
                                    onPressUnhide={() => unhideProd(item.id, item.prevStatus)}
                                />
                            )
                        })}
                    </>
                )}
            </ScrollView>
        </View>
    )
}

export default SemuaProduk

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
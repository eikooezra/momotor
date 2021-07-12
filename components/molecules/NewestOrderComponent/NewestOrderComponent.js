import React, { useState } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image,
    ScrollView,
    StatusBar,
    ImageBackground
} from 'react-native'
import normalize from 'react-native-normalize';

const NewestOrderComponent = ({ image, name, product, date, status, onPressProduct, onPressAll }) => {
    return (
        <View>
            <TouchableOpacity style={styles.btnImg} onPress={onPressProduct}>
                <ImageBackground
                    style={styles.imgContainer}
                    imageStyle={{ borderRadius: 18 }}
                    source={{ uri: image }}
                >
                    <View style={styles.itemCon}>
                        <View style={styles.detailsCon}>
                            <Text style={styles.txtName}>
                                {name}
                            </Text>

                            <Text style={styles.txtModel}>
                                {product}
                            </Text>

                            <View style={styles.flex}>
                                <Text style={styles.txtDate}>
                                    {date}
                                </Text>

                                <View style={styles.pill}>
                                    <Text style={styles.txtStatus}>
                                        {status}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

export default NewestOrderComponent;

const styles = StyleSheet.create({
    imgContainer: {
        width: normalize(348),
        height: normalize(246),
        borderRadius: 18,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
    },

    //inside image background
    itemCon: {
        width: normalize(348),
        height: normalize(108),
        marginTop: normalize(140),
        borderTopRightRadius: 70,
        borderTopLeftRadius: 120,
        borderBottomRightRadius: 18,
        borderBottomLeftRadius: 18,
        backgroundColor: '#0064D0'
    },

    detailsCon: {
        marginTop: normalize(25),
        marginLeft: normalize(16)
    },

    txtName: {
        marginBottom: normalize(2),
        fontSize: normalize(18),
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF'
    },

    txtModel: {
        marginBottom: normalize(6),
        fontSize: normalize(20),
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF'
    },

    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    txtDate: {
        marginTop: normalize(4),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF'
    },

    pill: {
        width: normalize(100),
        height: normalize(25),
        marginRight: normalize(16),
        borderRadius: 10,
        backgroundColor: '#D3942F'
    },

    txtStatus: {
        alignSelf: 'center',
        paddingVertical: 4,
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF'
    }
});
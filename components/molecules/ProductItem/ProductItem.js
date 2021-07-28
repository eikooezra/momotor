import React, { useEffect, useRef, useState } from 'react';
import normalize from 'react-native-normalize';
import RBSheet from "react-native-raw-bottom-sheet"
import BSDP1 from '../../../page/Home/BSDP1'
import BSDP2 from '../../../page/Home/BSDP2'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    Alert,
} from 'react-native';

const ProductItem = ({
    date,
    name,
    kilometer,
    image,
    location,
    year,
    price,
    onPress,
    status,
    onPressEdit,
    onPressHide,
    onPressUnhide
}) => {
    const refRBSheet1 = useRef()
    const refRBSheet2 = useRef()
    const onPress3Dot = () => {
        console.log('status', { status }.status)
        if ({ status }.status == 'Disembunyikan') {
            refRBSheet2.current.open()
        }
        else {
            refRBSheet1.current.open()
        }
    }
    return (
        <View>
            <RBSheet
                ref={refRBSheet1}
                height={300}
                openDuration={250}
                closeOnDragDown={true}
                customStyles={{
                    container: {
                        height: 250,
                        borderTopStartRadius: 10,
                        borderTopEndRadius: 10,
                    }
                }}>
                <BSDP1
                    onPressEdit={onPressEdit}
                    onPressHide={onPressHide}
                />
            </RBSheet>
            <RBSheet
                ref={refRBSheet2}
                height={300}
                openDuration={250}
                closeOnDragDown={true}
                customStyles={{
                    container: {
                        height: 250,
                        borderTopStartRadius: 10,
                        borderTopEndRadius: 10,
                    }
                }}>
                <BSDP2
                    onPressEdit={onPressEdit}
                    onPressUnhide={onPressUnhide}
                />
            </RBSheet>

            <TouchableOpacity onPress={onPress}>
                <View style={styles.WhiteBox}>

                    <View style={styles.boxContainer1}>
                        <Image
                            style={styles.imgUnit}
                            source={{ uri: image }}
                        />

                        <Text style={styles.date}>
                            {date}
                        </Text>
                    </View>

                    <View style={styles.boxContainer2}>
                        <Text style={styles.namaMotor}>
                            {name}
                        </Text>

                        <View style={styles.speedoContainer}>
                            <Image
                                style={styles.imgSpeedo}
                                source={require('../../../assets/images/speedo.png')}
                            />

                            <Text style={styles.txtSpeedo}>
                                {kilometer}
                            </Text>

                            <Image
                                style={styles.imgYear}
                                source={require('../../../assets/images/year.png')}
                            />

                            <Text style={styles.txtYear}>
                                {year}
                            </Text>
                        </View>

                        <View style={styles.locContainer}>
                            <Image
                                style={styles.imgLoc}
                                source={require('../../../assets/images/location.png')}
                            />

                            <Text style={styles.txtLoc}>
                                {location}
                            </Text>
                        </View>

                        <Text style={styles.txtPrice}>
                            {price}
                        </Text>


                    </View>

                    <View style={styles.btnArea}>
                        <TouchableOpacity
                            onPress={onPress3Dot}
                        // style={styles.touch}
                        >
                            <Image
                                style={styles.triDots}
                                source={require('../../../assets/images/3dots.png')}
                            />

                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={onPressDelete}>
                            <Text>Delete</Text>
                        </TouchableOpacity> */}
                    </View>

                    <View style={[styles.status, {
                        backgroundColor: (status == 'Pending')
                            ? '#FEF2E6'
                            : (status == 'Unapproved')
                                ? '#FBEBEB'
                                : (status == 'Disembunyikan')
                                    ? '#B7B7B7'
                                    : '#EAF7EE'
                    },
                    ]}
                    >
                        <Text
                            style={[styles.txtStatus, {
                                color: (status == 'Pending')
                                    ? '#F78103'
                                    : (status == 'Unapproved')
                                        ? '#DD3434'
                                        : (status == 'Disembunyikan')
                                            ? '#FFFFFF'
                                            : '#3CB13C'
                            },
                            ]}
                        >
                            {status}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    WhiteBox: {
        width: normalize(350),
        height: normalize(121),
        marginTop: normalize(16),
        marginBottom: normalize(16),
        marginLeft: normalize(16),
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    boxContainer1: {
        marginLeft: normalize(16)
    },

    imgUnit: {
        width: normalize(65),
        height: normalize(65),
        borderRadius: 4,
        marginTop: normalize(16),
        marginBottom: normalize(14)
    },

    date: {
        fontSize: 13,
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    boxContainer2: {
        marginLeft: normalize(16)
    },

    namaMotor: {
        marginTop: 16,
        marginBottom: 6,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold'
    },

    speedoContainer: {
        flexDirection: 'row'
    },

    imgSpeedo: {
        width: normalize(17),
        height: normalize(15)
    },

    txtSpeedo: {
        // width: normalize(60),
        // height: normalize(15),
        marginLeft: normalize(8),
        marginBottom: normalize(6),
        fontSize: 12,
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    imgYear: {
        width: normalize(15),
        height: normalize(15),
        marginLeft: normalize(24),
    },

    txtYear: {
        marginLeft: normalize(8),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    locContainer: {
        flexDirection: 'row'
    },

    imgLoc: {
        width: normalize(7),
        height: normalize(10),
        marginLeft: normalize(6)
    },

    txtLoc: {
        marginLeft: normalize(13),
        marginBottom: normalize(12),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-Medium',
        color: '#7F7F7F'
    },

    txtPrice: {
        // width: normalize(220),
        // height: normalize(22),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-Bold',
    },

    status: {
        width: normalize(100),
        height: normalize(25),
        marginTop: normalize(85),
        marginRight: normalize(10),
        borderRadius: 4,
        backgroundColor: '#EAF7EE'
    },

    txtStatus: {
        alignSelf: 'center',
        paddingVertical: 4,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: '#3CB13C'
    },

    btnArea: {
        width: normalize(24),
        height: normalize(24),
        marginLeft: normalize(320),
        marginTop: normalize(16),
        position: 'absolute'
    },

    triDots: {
        width: normalize(24),
        height: normalize(24),
    }
});
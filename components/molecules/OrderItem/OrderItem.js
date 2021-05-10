import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import normalize from 'react-native-normalize';

const OrderItem = ({image, name, product, date, status, onPress}) => {
    return (
        <View>
            <View style={styles.WhiteBox}>
                <View style={styles.boxContainer1}>
                    <TouchableOpacity>
                        <Image
                            style={styles.imgUnit}
                            source={{uri:image}}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.boxContainer2}>
                    <Text style={styles.txtName}>
                        {name}
                   </Text>

                    <Text style={styles.txtModel}>
                        {product}
                   </Text>

                    <Text style={styles.txtDate}>
                        {date}
                   </Text>

                    <TouchableOpacity
                        style={styles.btnProsesVerif}
                        onPress={onPress}
                    >
                        <Text style={styles.txtProsesVerif}>
                            {status}
                       </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default OrderItem;

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
        textAlign: 'center',
        paddingVertical: 4,
        // marginTop: normalize(4),
        // marginLeft: normalize(8),
        fontSize: normalize(12),
        fontFamily: 'Montserrat-SemiBold',
        color: '#3CB13C'
    }
});
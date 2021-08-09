import { Image } from "native-base";
import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import normalize from "react-native-normalize";
import IconOnly from "./IconOnly";

const Button = ({
    title,
    onPress,
    type,
    icon,
    disabled = false,
    areaStyle
}) => {
    if (type === "icon-only") {
        return <IconOnly icon={icon} onPress={onPress} />;
    }
    return (
        <View style={styles.btnNxtArea}>
            <TouchableOpacity
                style={[styles.btnNxt, areaStyle]}
                onPress={onPress}
                disabled={disabled}
            >
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
    title: {
        // width: normalize(125),
        // height: normalize(20),
        marginTop: normalize(20),
        marginLeft: normalize(160),
        fontSize: normalize(16),
        fontFamily: "Montserrat-SemiBold",
        color: "#FFFFFF",
    },

    btnNxtArea: {
        bottom: normalize(0),
        justifyContent: 'center',
        alignSelf: 'center'
    },

    btnNxt: {
        width: normalize(420),
        height: normalize(58),
        backgroundColor: '#0064D0'
    },
});

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
    textStyle,
}) => {
    if (type === "icon-only") {
        return <IconOnly icon={icon} onPress={onPress} />;
    }
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <Text style={[styles.title, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    title: {
        // width: normalize(125),
        // height: normalize(20),
        // marginTop: normalize(250),
        // marginLeft: normalize(135),
        textAlign: "center",
        fontSize: normalize(16),
        fontFamily: "Montserrat-SemiBold",
        color: "#7F7F7F",
    },
});

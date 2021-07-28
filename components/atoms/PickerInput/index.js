import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import normalize from "react-native-normalize";
import Gap from "../Gap/Gap";
import { AlertImg, Check } from "../../../assets";
import { strings as str } from "../../../utils/defaultValue";
import DropDownPicker from "react-native-dropdown-picker";

const PickerInput = ({
    data = [],
    defaultNull = false,
    placeholder = "",
    onChangeItem,
    errorInput = { isError: false, errorMsg: "" },
    value,
    overLabel = "",
    ...props
}) => {
    const [isFocus, setIsFocus] = useState(false);

    const { isError, errorMsg } = errorInput;

    const s = styles({ isFocus, isError });

    const overCondition =
        value !== undefined && value !== null && value.length !== 0;

    return (
        <View>
            {overCondition && (
                <View style={s.overlayTextCont}>
                    <Text style={s.overlayText}>{overLabel}</Text>
                </View>
            )}
            <DropDownPicker
                items={data}
                defaultNull={defaultNull}
                placeholder={placeholder}
                style={s.pickerStyle}
                dropDownStyle={s.dropDownStyle}
                labelStyle={s.labelStyle}
                value={value}
                onChangeItem={onChangeItem}
                {...props}
            />

            {isError && <Text style={s.errorText}>{errorMsg}</Text>}
        </View>
    );
};

export default PickerInput;

const styles = ({ isFocus, isError }) =>
    StyleSheet.create({
        dropDownStyle: {
            backgroundColor: "#FFFFFF",
        },

        errorText: {
            fontFamily: "Montserrat-SemiBold",
            color: "red",
            fontSize: 12,
        },

        labelStyle: {
            width: 120,
            marginRight: 200,
            fontSize: 14,
            color: "#7F7F7F",
            fontFamily: "Montserrat-SemiBold",
        },

        overlayText: { color: "#7f7f7f" },
        overlayTextCont: {
            position: "absolute",
            backgroundColor: "#FFF",
            top: -10,
            left: 16,
            zIndex: 10,
            paddingHorizontal: 4,
        },

        pickerStyle: {
            borderWidth: isError ? 2 : 1,
            borderRadius: 4,
            borderColor: isError ? "red" : "#EBEBEB",
        },
    });

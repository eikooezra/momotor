import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import normalize from "react-native-normalize";
import Gap from "../Gap/Gap";
import { AlertImg, Check } from "../../../assets";
import { strings as str } from "../../../utils/defaultValue";

const Input = ({
  overLabel = "Nama",
  value,
  defaultValue,
  onChangeText,
  placeholder,
  type,
  onFocus,
  onBlur,
  disable,
  iconType = "",
  isShowIcon = false,
  containerStyle,
  errorInput = { isError: false, errorMsg: "" },
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const { isError, errorMsg } = errorInput;

  const s = styles({ isFocus, isError });

  const overCondition =
    (value !== undefined && value !== null && value.length !== 0) ||
    (defaultValue !== undefined &&
      defaultValue !== null &&
      defaultValue.length !== 0);

  const focusInput = () => {
    setIsFocus(true);
    onFocus && onFocus();
  };

  const blurInput = () => {
    setIsFocus(false);
    onBlur && onBlur();
  };

  const renderIcon = (type) => {
    switch (type) {
      case str.inputIcon.alert:
        return (
          <Image
            source={AlertImg}
            style={{ width: 20, height: 18 }}
            resizeMode="contain"
          />
        );

      case str.inputIcon.check:
        return (
          <Image
            source={Check}
            style={{ width: 20, height: 18 }}
            resizeMode="contain"
          />
        );

      default:
        return (
          <Image
            source={Check}
            style={{ width: 20, height: 18 }}
            resizeMode="contain"
          />
        );
    }
  };

  return (
    <View style={s.parent}>
      <View style={[s.container, containerStyle]}>
        {overCondition && (
          <View style={s.overlayTextCont}>
            <Text style={s.overlayText}>{overLabel}</Text>
          </View>
        )}
        <View style={s.inputCont}>
          <TextInput
            style={s.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#7F7F7F"
            keyboardType={type === "numeric" ? "numeric" : "default"}
            editable={!disable}
            selectTextOnFocus={!disable}
            onFocus={focusInput}
            onBlur={blurInput}
            {...props}
          />
          <Gap width={16} />
          {isError ? (
            <View style={s.icon}>{renderIcon(str.inputIcon.alert)}</View>
          ) : (
            isShowIcon && <View style={s.icon}>{renderIcon(iconType)}</View>
          )}
        </View>
      </View>
      {isError && <Text style={s.errorText}>{errorMsg}</Text>}
    </View>
  );
};

export default Input;

const styles = ({ isFocus, isError }) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
      borderWidth: isFocus || isError ? 2 : 1,
      borderRadius: 4,
      borderColor: isError ? "red" : isFocus ? "#0064D0" : "#EBEBEB",
    },

    errorText: {
      fontFamily: "Montserrat-SemiBold",
      color: "red",
      fontSize: 12,
    },

    icon: {
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      // paddingVertical: 15,
      // width: 350,
      // height: 46,
      fontFamily: "Montserrat-SemiBold",
      color: "#7F7F7F",
      flex: 1,
    },
    inputCont: {
      flexDirection: "row",
      alignItems: "center",
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

    parent: { flex: 1 },
  });
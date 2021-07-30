import React, { useState, useMemo } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Button, Gap, Header, Input, Title } from "../../components/components";
import { storeData } from "../../utils/localstorage/localstorage";
import { useForm } from "../../utils/utils";
import { strings as str, general } from "../../utils/defaultValue";

const DataKredit = ({ navigation, route }) => {
    const { orderId, price } = route.params;
    const [form, setForm] = useForm({
        dp: "",
        tenor: "",
        cicilan: "",
    });
    const [cicilan, setCicilan] = useState("");

    const [formError, setFormError] = useState([]);

    const isEnabled = useMemo(() => {
        const currentValue = { dp: form.dp, tenor: form.tenor };
        const values = Object.values(currentValue);

        return (
            formError.length !== 0 &&
            (formError.every((item) => item.isChecked) &&
                values.every((item) => item !== ""))
        );
    }, [formError, form]);

    const [pressed, setPressed] = useState(false);

    const nullChecker = () => {
        if (pressed === false) {
            setPressed(true);
        }
    };

    const calculate = () => {
        if (form.tenor == "12") {
            // form.cicilan =
            const newPrice = price;
            const newDp = form.dp;
            const minus = newPrice - newDp;
            const tenor12 = minus / 12;
            setCicilan(tenor12);
        }
        if (form.tenor == "24") {
            const newPrice = price;
            const newDp = form.dp;
            const minus = newPrice - newDp;
            const tenor24 = minus / 24;
            setCicilan(tenor24);
        }
        if (form.tenor == "36") {
            const newPrice = price;
            const newDp = form.dp;
            const minus = newPrice - newDp;
            const tenor36 = minus / 36;
            setCicilan(tenor36);
        }
    };

    const onProcess = (data) => {
        storeData("dataKredit", data);
        navigation.navigate("UploadDocs", data);
    };

    const onContinue = () => {
        const emptyValidator = ["dp"];

        const currentError = formError.filter((item) => item.isChecked);

        emptyValidator.forEach((element) => {
            const condition =
                element === "dp"
                    ? form[element]?.length === undefined || form[element] / price < 0.1
                    : form[element]?.length === undefined || form[element]?.length === 0;
            if (condition) {
                currentError.push({
                    param: element,
                    errorMsg: element === "dp" ? "DP minimal 10%" : str.cantEmpty,
                    isChecked: false,
                    isError: true,
                });
            }
        });

        if (!currentError.every((item) => item.isChecked)) {
            setFormError(currentError);
            return;
        }

        calculate();
        const data = {
            orderId: orderId,
            dp: form.dp,
            tenor: form.tenor,
            cicilan: cicilan.toString(),
        };
        console.log('data kredit: ', data)

        onProcess(data);
    };

    const testError = (key) => {
        const errorIndex = formError.findIndex((error) => error.param === key);
        if (errorIndex === -1) {
            return { ...formError[errorIndex], isError: false, isChecked: false };
        }
        return formError[errorIndex];
    };

    const onBlurCheck = (param) => {
        const value = form[param];
        const currentError = [...formError];

        const isError = param === "dp" ? value / price < 0.1 : value?.length === 0;

        const errorIndex = currentError.findIndex((error) => error.param === param);

        if (errorIndex === -1) {
            setFormError((current) => [
                ...current,
                {
                    param,
                    errorMsg: param === "dp" ? "DP minimal 10%" : str.cantEmpty,
                    isError,
                    isChecked: !isError,
                },
            ]);
            return;
        }
        currentError[errorIndex].isError = isError;
        currentError[errorIndex].isChecked = !isError;
        setFormError(currentError);
    };

    return (
        <View style={styles.container}>
            <Header title="Instant Order" onPress={() => navigation.goBack()} back />
            <Title text="Data Kredit" />
            <ScrollView>
                <View style={styles.content}>
                    <Gap height={8} />
                    <Gap height={5} />
                    <Input
                        placeholder="Harga Produk"
                        value={price?.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        disable
                        overLabel="Harga Produk"
                    />
                    <Gap height={34} />
                    <Gap height={5} />
                    <Input
                        placeholder="Uang Muka"
                        overLabel="Min. DP 10%"
                        value={form.dp
                            .toString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                        onChangeText={(value) =>
                            setForm("dp", value.toString().replace(/\./g, ""))
                        }
                        errorInput={testError("dp")}
                        iconType="check"
                        isShowIcon={testError("dp").isChecked}
                        onBlur={() => onBlurCheck("dp")}
                    />
                    <Gap height={34} />
                    <DropDownPicker
                        items={[
                            { label: "12", value: "12" },
                            { label: "24", value: "24" },
                            { label: "36", value: "36" },
                        ]}
                        defaultNull={nullChecker}
                        placeholder="Tenor"
                        style={{
                            borderWidth: 1,
                            borderRadius: 4,
                            borderColor: "#EBEBEB",
                        }}
                        dropDownStyle={{
                            backgroundColor: "#FFFFFF",
                        }}
                        labelStyle={{
                            width: 120,
                            marginRight: 200,
                            fontSize: 14,
                            color: "#7F7F7F",
                            fontFamily: "Montserrat-SemiBold",
                        }}
                        value={form.tenor}
                        onChangeItem={({ value }) => setForm("tenor", value)}
                    />
                    <Gap height={150} />
                </View>
            </ScrollView>
            <Button
                onPress={onContinue}
                title="SELANJUTNYA"
                areaStyle={{backgroundColor: isEnabled ? '#0062CD' : '#B7B7B7'}}
                disabled={!isEnabled}
            />
        </View>
    );
};

export default DataKredit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    content: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
    },
    label: {
        fontSize: 12,
        fontFamily: "Montserrat-Medium",
    },
    cekCicilan: {
        width: 150,
        height: 80,
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: "#0064D0",
    },
    cekButton: {
        marginRight: 280,
        borderWidth: 2,
        borderRadius: 4,
        borderColor: "#EBEBEB",
    },
    cekTxt: {
        alignSelf: "flex-end",
        fontSize: 12,
        padding: 5,
        fontFamily: "Montserrat-Bold",
    },
    resultBorder: {
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#EBEBEB",
        backgroundColor: "#EBEBEB",
    },
    result: {
        marginHorizontal: 16,
        marginTop: 10,
        fontSize: 15,
        fontFamily: "Montserrat-SemiBold",
        color: "#7F7F7F",
    },
});

import React, { useState, useMemo } from "react";
import {
    StyleSheet,
    Image,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import normalize from "react-native-normalize";
import { Button, Gap, Header, Input, Title } from "../../components/components";
import { Fire } from "../../config";
import { getData, storeData } from "../../utils/localstorage/localstorage";
import { useForm } from "../../utils/utils";
import { strings as str, general } from "../../utils/defaultValue";

const DataPekerjaan = ({ navigation, route }) => {
    const { orderId } = route.params;
    const [form, setForm] = useForm({
        job: "",
        salary: "",
        workDuration: "",
    });

    const [formError, setFormError] = useState([]);

    const isEnabled = useMemo(() => {
        const currentValue = { ...form };
        const values = Object.values(currentValue);

        return (
            formError.length !== 0 &&
            (formError.every((item) => item.isChecked) &&
                values.every((item) => item !== ""))
        );
    }, [formError]);

    const onProcess = (data) => {
        storeData("dataPekerjaan", data);
        navigation.navigate("DataMotor", data);
    };

    const onContinue = () => {
        const emptyValidator = ["job", "salary", "workDuration"];

        const currentError = formError.filter((item) => item.isChecked);

        emptyValidator.forEach((element) => {
            if (form[element]?.length === undefined || form[element]?.length === 0) {
                currentError.push({
                    param: element,
                    errorMsg: str.cantEmpty,
                    isChecked: false,
                    isError: true,
                });
            }
        });

        // if (!currentError.every((item) => item.isChecked)) {
        //   setFormError(currentError);
        //   return;
        // }

        const data = {
            job: form.job,
            salary: form.salary,
            workDuration: form.workDuration,
        };

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

        const isError = value?.length === 0;

        const errorIndex = currentError.findIndex((error) => error.param === param);

        if (errorIndex === -1) {
            setFormError((current) => [
                ...current,
                { param, errorMsg: str.cantEmpty, isError, isChecked: !isError },
            ]);
            return;
        }
        currentError[errorIndex].isError = isError;
        currentError[errorIndex].isChecked = !isError;
        setFormError(currentError);
    };

    return (
        <View style={styles.container}>
            <Header title="Instant Order" back />
            <Title text="Data Pekerjaan" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <Gap height={8} />
                <Input
                    placeholder="Pekerjaan"
                    value={form.job}
                    onChangeText={(value) => setForm("job", value)}
                    overLabel="Pekerjaan"
                    errorInput={testError("job")}
                    iconType="check"
                    isShowIcon={testError("job").isChecked}
                    onBlur={() => onBlurCheck("job")}
                />
                <Gap height={34} />
                <Input
                    placeholder="Penghasilan per Bulan"
                    value={form.salary
                        .toString()
                        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
                    onChangeText={(value) =>
                        setForm("salary", value.toString().replace(/\./g, ""))
                    }
                    overLabel="Penghasilan per Bulan"
                    errorInput={testError("salary")}
                    iconType="check"
                    isShowIcon={testError("salary").isChecked}
                    onBlur={() => onBlurCheck("salary")}
                />
                <Gap height={34} />
                <Input
                    placeholder="Lama Bekerja"
                    value={form.workDuration}
                    onChangeText={(value) => setForm("workDuration", value)}
                    overLabel="Lama Bekerja"
                    errorInput={testError("workDuration")}
                    iconType="check"
                    isShowIcon={testError("workDuration").isChecked}
                    onBlur={() => onBlurCheck("workDuration")}
                />
                <Gap height={34} />
            </ScrollView>
            <Button
                onPress={onContinue}
                title="SELANJUTNYA"
                textStyle={{ color: isEnabled ? "#0064D0" : "#7F7F7F" }}
                disabled={!isEnabled}
            />
            <Gap height={22} />
        </View>
    );
};

export default DataPekerjaan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    content: {
        // flex: 1,
        padding: 16,
        paddingTop: 0,
    },
    txtInstant: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(100),
        fontSize: normalize(16),
        color: "#FFFFFF",
        fontFamily: "Montserrat-Bold",
    },
    errorStyle: {
        width: normalize(200),
        height: normalize(15),
        marginLeft: normalize(17),
        marginBottom: normalize(15),
        fontSize: normalize(12),
        fontFamily: "Montserrat-Medium",
        color: "#D81818",
    },
});

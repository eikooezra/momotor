import React, { useState, useMemo } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { ScrollView } from "react-native-gesture-handler";
import normalize from "react-native-normalize";
import {
    Button,
    DropDown,
    Gap,
    Header,
    Input,
    Title,
    PickerInput,
} from "../../components/components";
import { Fire } from "../../config";
import { getData, storeData } from "../../utils/localstorage/localstorage";
import { useForm } from "../../utils/utils";
import { strings as str, general } from "../../utils/defaultValue";

const DataCustomer = ({ navigation }) => {
    const [pressed, setPressed] = useState(false);

    const nullChecker = () => {
        if (pressed === false) {
            setPressed(true);
        }
    };

    const [form, setForm] = useForm({
        custName: "",
        gender: "",
        nik: "",
        phoneNo: "",
        email: "",
        birthPlace: "",
        birthDate: "",
        address: "",
        rt: "",
        rw: "",
        location: "",
        maidenName: "",
        maidenLoc: "",
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
        storeData("dataCustomer", data);

        navigation.navigate("DataPekerjaan", data);
    };

    const onContinue = () => {
        const regEmail = new RegExp(general.regexEmail);

        const emptyValidator = [
            "custName",
            "birthPlace",
            "birthDate",
            "address",
            "rt",
            "rw",
            "maidenName",
            "maidenLoc",
            "location",
            "gender",
        ];

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

        if (form?.nik === undefined || form?.nik?.length < 16) {
            currentError.push({
                param: "nik",
                errorMsg: str.nikLength,
                isError: true,
                isChecked: false,
            });
        }

        if (form?.phoneNo === undefined || form?.phoneNo?.length < 11) {
            currentError.push({
                param: "phoneNo",
                errorMsg: str.phoneLength,
                isError: true,
                isChecked: false,
            });
        }

        if (form?.email === undefined || !regEmail.test(form?.email)) {
            currentError.push({
                param: "email",
                errorMsg: str.emailInvalid,
                isError: true,
                isChecked: false,
            });
        }

        if (!currentError.every((item) => item.isChecked)) {
            setFormError(currentError);
            return;
        }

        const data = {
            custName: form.custName,
            gender: form.gender,
            nik: form.nik,
            phoneNo: form.phoneNo,
            email: form.email,
            birthPlace: form.birthPlace,
            birthDate: form.birthDate,
            address: form.address,
            rt: form.rt,
            rw: form.rw,
            location: form.location,
            maidenName: form.maidenName,
            maidenLoc: form.maidenLoc,
        };
        console.log('data', data)
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
        const regEmail = new RegExp(general.regexEmail);
        const value = form[param];
        const currentError = [...formError];

        const isError =
            param === "nik"
                ? value?.length < 16
                : param === "phoneNo"
                    ? value?.length < 11
                    : param === "email"
                        ? !regEmail.test(value)
                        : value?.length === 0;

        const errorMsg =
            param === "nik"
                ? str.nikLength
                : param === "phoneNo"
                    ? str.phoneLength
                    : param === "email"
                        ? str.emailInvalid
                        : str.cantEmpty;

        const errorIndex = currentError.findIndex((error) => error.param === param);

        if (errorIndex === -1) {
            setFormError((current) => [
                ...current,
                { param, errorMsg, isError, isChecked: !isError },
            ]);
            return;
        }
        currentError[errorIndex].isError = isError;
        currentError[errorIndex].isChecked = !isError;
        setFormError(currentError);
    };

    return (
        <View style={styles.page}>
            <Header title="Instant Order" />
            <Title text="Data Customer" withMargin={false} />
            {/* <Gap height={8} /> */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 16 }}
            >
                <Input
                    placeholder="Nama Lengkap (Sesuai KTP)"
                    value={form.custName}
                    onChangeText={(value) => setForm("custName", value)}
                    overLabel="Nama"
                    errorInput={testError("custName")}
                    iconType="check"
                    isShowIcon={testError("custName").isChecked}
                    onBlur={() => onBlurCheck("custName")}
                />
                <Gap height={34} />
                <PickerInput
                    data={[
                        { label: "Pria", value: "Pria" },
                        { label: "Wanita", value: "Wanita" },
                    ]}
                    defaultNull={!pressed}
                    placeholder="Jenis Kelamin"
                    value={form.gender}
                    onChangeItem={({ value }) => {
                        setForm("gender", value);
                        nullChecker();
                    }}
                    overLabel="Jenis Kelamin"
                    errorInput={testError("gender")}
                />
                <Gap height={34} />
                <Input
                    placeholder="NIK"
                    value={form.nik}
                    onChangeText={(value) => setForm("nik", value)}
                    type="numeric"
                    maxLength={16}
                    overLabel="NIK"
                    errorInput={testError("nik")}
                    iconType="check"
                    isShowIcon={testError("nik").isChecked}
                    onBlur={() => onBlurCheck("nik")}
                />
                <Gap height={34} />
                <Input
                    placeholder="No. Handphone"
                    value={form.phoneNo}
                    onChangeText={(value) => setForm("phoneNo", value)}
                    type="numeric"
                    maxLength={16}
                    overLabel="No. Handphone"
                    errorInput={testError("phoneNo")}
                    iconType="check"
                    isShowIcon={testError("phoneNo").isChecked}
                    onBlur={() => onBlurCheck("phoneNo")}
                />
                <Gap height={34} />
                <Input
                    placeholder="Email"
                    value={form.email}
                    onChangeText={(value) => setForm("email", value)}
                    overLabel="Email"
                    errorInput={testError("email")}
                    iconType="check"
                    isShowIcon={testError("email").isChecked}
                    onBlur={() => onBlurCheck("email")}
                />
                <Gap height={34} />
                <Input
                    placeholder="Tempat Lahir"
                    value={form.birthPlace}
                    onChangeText={(value) => setForm("birthPlace", value)}
                    overLabel="Tempat Lahir"
                    errorInput={testError("birthPlace")}
                    iconType="check"
                    isShowIcon={testError("birthPlace").isChecked}
                    onBlur={() => onBlurCheck("birthPlace")}
                />
                <Gap height={34} />
                <Input
                    placeholder="Tangal Lahir"
                    value={form.birthDate}
                    onChangeText={(value) => setForm("birthDate", value)}
                    overLabel="Tangal Lahir"
                    errorInput={testError("birthDate")}
                    iconType="check"
                    isShowIcon={testError("birthDate").isChecked}
                    onBlur={() => onBlurCheck("birthDate")}
                />
                <Gap height={34} />
                <Input
                    placeholder="Alamat Lengkap"
                    value={form.address}
                    onChangeText={(value) => setForm("address", value)}
                    overLabel="Alamat Lengkap (Sesuai KTP)"
                    errorInput={testError("address")}
                    iconType="check"
                    isShowIcon={testError("address").isChecked}
                    onBlur={() => onBlurCheck("address")}
                />
                <Gap height={34} />
                <View style={styles.flexContainer}>
                    <Input
                        placeholder="RT"
                        defaultValue={form.rt}
                        containerStyle={{ flex: 1 }}
                        onChangeText={(value) => setForm("rt", value)}
                        overLabel="RT"
                        keyboardType={"numeric"}
                        maxLength={3}
                        errorInput={testError("rt")}
                        iconType="check"
                        isShowIcon={testError("rt").isChecked}
                        onBlur={() => onBlurCheck("rt")}
                    />
                    <Gap width={10} />
                    <Input
                        containerStyle={{ flex: 1 }}
                        defaultValue={form.rw}
                        onChangeText={(value) => setForm("rw", value)}
                        placeholder="RW"
                        placeholderTextColor="#7F7F7F"
                        keyboardType={"numeric"}
                        overLabel="RW"
                        maxLength={3}
                        errorInput={testError("rw")}
                        iconType="check"
                        isShowIcon={testError("rw").isChecked}
                        onBlur={() => onBlurCheck("rw")}
                    />
                </View>
                <Gap height={34} />
                <Input
                    placeholder="Kelurahan Domisili"
                    value={form.location}
                    onChangeText={(value) => setForm("location", value)}
                    overLabel="Kelurahan Domisili"
                    errorInput={testError("location")}
                    iconType="check"
                    isShowIcon={testError("location").isChecked}
                    onBlur={() => onBlurCheck("location")}
                />
                <Gap height={34} />
                <Input
                    placeholder="Nama Ibu Kandung"
                    value={form.maidenName}
                    onChangeText={(value) => setForm("maidenName", value)}
                    overLabel="Nama Ibu Kandung"
                    errorInput={testError("maidenName")}
                    iconType="check"
                    isShowIcon={testError("maidenName").isChecked}
                    onBlur={() => onBlurCheck("maidenName")}
                />
                <Gap height={34} />
                <Input
                    placeholder="Kelurahan Domisili Ibu"
                    value={form.maidenLoc}
                    onChangeText={(value) => setForm("maidenLoc", value)}
                    overLabel="Kelurahan Domisili Ibu"
                    errorInput={testError("maidenLoc")}
                    iconType="check"
                    isShowIcon={testError("maidenLoc").isChecked}
                    onBlur={() => onBlurCheck("maidenLoc")}
                />
                <Gap height={34} />
                <Button
                    onPress={onContinue}
                    areaStyle={{backgroundColor: isEnabled ? '#0062CD' : '#B7B7B7'}}
                    disabled={!isEnabled}
                    title="SELANJUTNYA"
                />
            </ScrollView>
        </View>
    );
};

export default DataCustomer;

const styles = StyleSheet.create({
    page: {
        backgroundColor: "white",
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
        // paddingBottom: 100
    },
    RtRw: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        // maxWidth: '90%'
    },
    txtButton: {
        width: normalize(125),
        height: normalize(20),
        marginBottom: normalize(24),
        fontSize: normalize(16),
        fontFamily: "Montserrat-SemiBold",
        justifyContent: "center",
        alignSelf: "center",
        color: "#7F7F7F",
    },
    flexContainer: {
        flexDirection: "row",
        width: "100%",
    },

    txtInpRT: {
        // width: normalize(169),
        flex: 1,
        // height: normalize(48),
        // marginLeft: normalize(16),
        // marginBottom: normalize(6),
        // borderWidth: 1,
        // borderRadius: 4,
        // borderColor: "#EBEBEB",
    },

    txtRT: {
        paddingHorizontal: 16,
        color: "#7F7F7F",
        fontFamily: "Montserrat-SemiBold",
    },

    txtInpRW: {
        // width: normalize(169),
        flex: 1,
        // marginLeft: normalize(16),
        // marginBottom: normalize(6),
        // borderWidth: 1,
        // borderRadius: 4,
        // borderColor: "#EBEBEB",
    },

    txtRW: {
        // marginLeft: normalize(8),
        paddingHorizontal: 16,
        color: "#7F7F7F",
        fontFamily: "Montserrat-SemiBold",
    },
});

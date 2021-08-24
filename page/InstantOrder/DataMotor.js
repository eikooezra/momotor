import React, { Component, useEffect, useState, useMemo } from "react";
import {
    StyleSheet,
    Image,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import SearchableDropdown from "react-native-searchable-dropdown";
import normalize from "react-native-normalize";
import { FlatList, TapGestureHandler } from "react-native-gesture-handler";
import { Button, Title, Input, Gap, Header } from "../../components/components";
import { Fire } from "../../config";
import { getData, storeData } from "../../utils/localstorage/localstorage";
import { useForm } from "../../utils/utils";
import { strings as str } from "../../utils/defaultValue";
const items = [
    {
        id: 1,
        name: "JavaScript",
        value: "JavaScript",
    },
    {
        id: 2,
        name: "Java",
        value: "Java",
    },
    {
        id: 3,
        name: "Ruby",
        value: "Ruby",
    },
    {
        id: 4,
        name: "React Native",
        value: "React Native",
    },
    {
        id: 5,
        name: "PHP",
        value: "PHP",
    },
    {
        id: 6,
        name: "Python",
        value: "Python",
    },
    {
        id: 7,
        name: "Go",
        value: "Go",
    },
    {
        id: 8,
        name: "Swift",
        value: "Swift",
    },
];
const DataMotor = ({ navigation, route }) => {
    const { orderId } = route.params;
    const [masterProduct, setMasterProduct] = useState([]);
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [selectedPrice, setSelectedPrice] = useState();
    const [selectedYear, setSelectedYear] = useState();
    const [selectedId, setSelectedId] = useState();
    const [selectedImages, setSelectedImages] = useState();
    const [selectedRefCode, setSelectedRefCode] = useState([]);

    const [formError, setFormError] = useState([]);

    const [form, setForm] = useForm({
        model: "",
        year: "",
        price: "",
    });

    const isEnabled = useMemo(() => selectedModel !== "", [formError]);

    const getDataProduct = () => {
        getData("user").then((res) => {
            const uid = res.uid;
            Fire.database()
                .ref("product/" + uid + "/")
                .once("value")
                .then((res) => {
                    if (res.val()) {
                        setProduct(Object.values(res.val()));
                        setMasterProduct(Object.values(res.val()));
                    }
                })
                .catch((err) => {
                    const errorMessage = error.message;
                    showMessage({
                        message: errorMessage,
                        type: "default",
                        backgroundColor: "#E06379",
                        color: "#FFFFFF",
                    });
                    console.log("error: ", error);
                });
        });
    };
    const itemView = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => valueSelected(item)}>
                <Text style={{ padding: 10 }}>{item.name.toUpperCase()}</Text>
            </TouchableOpacity>
        );
    };
    const itemSeparatorView = () => {
        return (
            <View style={{ height: 0.5, width: "100%", backgroundColor: "black" }} />
        );
    };
    const valueSelected = (item) => {
        setFormError([]);
        setSelectedId(item.id);
        setSelectedModel(item.name);
        setSelectedPrice(item.price);
        setSelectedYear(item.year);
        setSelectedImages(item.images);
        setSelectedRefCode(item.ref_code)
    };

    const searchData = useMemo(() => {
        if (selectedModel.length === 0) {
            return [];
        }
        return product.filter((item) =>
            item.name.toLowerCase().includes(selectedModel.toLowerCase())
        );
    }, [selectedModel, product]);

    const searchFilter = (text) => {
        if (text) {
            const newData = masterProduct.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setProduct(newData);
            setSearch(text);
        } else {
            setProduct(masterProduct);
            setSearch(text);
        }
    };

    const onProcess = (data) => {
        storeData("dataMotor", data);
        navigation.navigate("DataKredit", data);
    };

    const onContinue = () => {
        const currentError = formError.filter((item) => item.isChecked);

        if (typeof selectedModel !== "string" || selectedModel?.length === 0) {
            currentError.push({
                param: "model",
                isError: true,
                isChecked: false,
                errorMsg: str.cantEmpty,
            });
        }

        if (!currentError.every((item) => item.isChecked)) {
            setFormError(currentError);
            return;
        }

        const data = {
            orderId: orderId,
            productId: selectedId,
            product: selectedModel,
            year: selectedYear,
            price: selectedPrice,
            images: selectedImages,
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
        const value = selectedModel;
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

    useEffect(() => {
        getDataProduct();
    }, []);

    return (
        <View style={styles.container}>
            <Header title="Instant Order" back onPress={() => navigation.goBack()} />
            <Title text="Data Motor" />
            <FlatList
                ListHeaderComponent={
                    <>
                        <View style={styles.content}>
                            <Gap height={8} />
                            <Input
                                placeholder="Model Motor"
                                value={selectedModel}
                                onChangeText={(text) => setSelectedModel(text)}
                                overLabel="Model Motor"
                                errorInput={testError("model")}
                                iconType="check"
                                isShowIcon={testError("model").isChecked}
                                onBlur={() => onBlurCheck("model")}
                            />
                            <FlatList
                                data={searchData}
                                keyExtractor={(items, index) => items.id}
                                ItemSeparatorComponent={itemSeparatorView}
                                renderItem={itemView}
                            />
                            <Gap height={34} />
                            <Input
                                placeholder="Tahun"
                                value={selectedYear}
                                onChangeText={(text) => setSelectedYear(text)}
                                disable
                                overLabel="Tahun"
                            />
                            <Gap height={34} />
                            <Input
                                placeholder="Harga"
                                value={selectedPrice}
                                onChangeText={(text) => setSelectedPrice(text)}
                                disable
                                overLabel="Harga"
                            />
                        </View>
                        {/* <Gap height={280} /> */}
                    </>
                }
            />
            <Button
                onPress={onContinue}
                title="SELANJUTNYA"
                areaStyle={{backgroundColor: isEnabled ? '#0062CD' : '#B7B7B7'}}
                disabled={!isEnabled}
            />
        </View>
    );
};

export default DataMotor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    txtInstant: {
        width: normalize(200),
        height: normalize(20),
        marginTop: normalize(25),
        marginLeft: normalize(145),
        fontSize: normalize(16),
        color: "#FFFFFF",
        fontFamily: "Montserrat-Bold",
    },
    content: {
        flex: 1,
        padding: 16,
        paddingTop: 0,
        // backgroundColor: 'yellow'
    },
});

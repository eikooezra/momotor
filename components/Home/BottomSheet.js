import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated,
    StyleSheet
} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'

class BottomSheet extends Component{
    constructor(props){
        super(props)
        this.state = {
            isSwitchOn: false,
        }
    }

    onToggle(isOn){
        console.log("Changed to" + isOn)
    }
    
    animatedValue = new Animated.Value(0)

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            useNativeDriver: true
        }).start()
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.txtTindakan}>
                        Tindakan
                    </Text>
                </View>

                <View style={styles.containerTindakan}>
                        <TouchableOpacity
                            style={styles.btnView}
                        >
                            <Image
                                style={styles.imgEdit}
                                source={require('../../assets/images/edit.png')}
                            />

                            <Text style={styles.txtEdit}>
                                Edit Produk
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                        style={styles.btnView}
                        >
                            <Image
                                style={styles.imgURL}
                                source={require('../../assets/images/URL.png')}
                            />

                            <Text style={styles.txtURL}>
                                URL Produk
                            </Text>
                        </TouchableOpacity>
             
                        <TouchableOpacity
                        style={styles.btnView}
                        >
                            <Image
                                style={styles.imgQR}
                                source={require('../../assets/images/QR.png')}
                            />

                            <Text style={styles.txtQR}>
                                QR Code
                            </Text>
                        </TouchableOpacity>
                </View>

                <Animated.View style={[styles.containerSwitch,
                    {opacity: this.animatedValue}
                ]}>
                    <Text style={styles.txtTampilkan}>
                        Tampilkan Produk
                    </Text>

                    <ToggleSwitch
                        onColor='#0064D0'
                        isOn={this.state.isSwitchOn}
                        onToggle={isSwitchOn => {
                            this.setState({isSwitchOn})
                            this.onToggle({isSwitchOn})
                        }}
                    />
                </Animated.View>
            </View>
        )
    }
    
}

export default BottomSheet

const styles = StyleSheet.create({
    
    container: {
        flex: 1
    },

    containerText: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#DDDDDD',
        marginBottom: 10
    },

    txtTindakan: {
        width: 80,
        height: 18,
        marginTop: 14,
        marginBottom: 14,
        marginLeft: 20,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold'
    },

    containerTindakan: {
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DDDDDD'
    },

    btnView: {
        flexDirection: 'row'
    },

    imgEdit: {
        width: 25,
        height: 25,
        marginBottom: 18,
        marginLeft: 5
    },

    txtEdit: {
        width: 85,
        height: 18,
        marginTop: 1,
        marginBottom: 18,
        marginLeft: 18,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    imgURL: {
        width: 22,
        height: 14,
        marginLeft: 5,
    },

    txtURL: {
        width: 86,
        height: 18,
        marginBottom: 18,
        marginLeft: 21,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    imgQR: {
        width: 18,
        height: 18,
        marginLeft: 5,
    },

    txtQR: {
        width: 62,
        height: 18,
        marginBottom: 18,
        marginLeft: 25,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },

    containerSwitch: {
        flexDirection: 'row'
    },

    txtTampilkan: {
        width: 129,
        height: 18,
        marginLeft: 26,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },
})
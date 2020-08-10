import React, {Component} from 'react'
import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet,
} from 'react-native'
import {SliderBox} from 'react-native-image-slider-box'

class ProsesVerif extends Component{
    constructor(props){
        super(props)
        this.state = {
            images: [
                require('../../../assets/images/vario.png'),
                require('../../../assets/images/vario.png'),
                require('../../../assets/images/vario.png'),
                require('../../../assets/images/vario.png'),
                require('../../../assets/images/vario.png')
            ]
        }
    }

    render(){
        return(
         <View style={styles.container}>
             <ScrollView>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={400}
                />

               <View style={styles.bkgProses}>
                    <Text style={styles.txtProses}>
                        Proses Verifikasi
                    </Text>
               </View>

                <View style={styles.section1}>
                    <Text style={styles.txtModel}>
                        HONDA VARIO 125 CBS EPS ISS
                    </Text>

                    <Text style={styles.txtPrice}>
                        Rp. 20.000.000
                    </Text>
                </View>

                <View style={styles.whiteBox}>

                </View>

            </ScrollView>
        </View>
        )
    }
}

export default ProsesVerif

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },

    bkgProses: {
        width: 120,
        height: 25,
        marginTop: 16,
        marginLeft: 16,
        marginBottom: 16,
        borderRadius: 4,
        backgroundColor: '#EAF7EE'
    },
    
    txtProses: {
        marginTop: 4,
        marginLeft: 8,
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: '#3CB13C'
    },

    section1: {
        width: 378,
        marginBottom: 16,
        marginLeft: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#0000001A'
    },

    txtModel: {
        marginBottom: 5,
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold'
    },

    txtPrice: {
        marginBottom: 12,
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        color: '#0064D0'
    },

    whiteBox: {
        width: 328,
        height: 76,
        borderRadius: 6,
    },
})
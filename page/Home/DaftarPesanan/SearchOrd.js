import React, {Component} from 'react'
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native'
import SearchInput from 'react-native-search-filter'
import normalize from 'react-native-normalize';

class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            searchFocused: false
        }
    }

    goToDaftarProduk = () => {
        this.props.navigation.navigate('DaftarPesanan')
    }

render() {
    return (
        <View style={styles.container}>
          <StatusBar backgroundColor='#FFFFFF'/>
            <View style={styles.searchContainer}>
                <View style={styles.searchBar}>
                <Image
                    style={styles.imgBlkSearch}
                    source={require('../../../assets/images/blacksearch.png')}
                />

                <SearchInput
                    style={styles.txtInput}
                    placeholder= 'Cari Pesanan . . .'
                    placeholderTextColor='#7F7F7F'
                />
                </View>
                
                <TouchableOpacity
                    onPress={this.goToDaftarProduk}
                >
                    <Text style={styles.txtBatal}>
                        Batal
                    </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    searchContainer: {
        flexDirection: 'row'
    },

    imgBlkSearch: {
        width: normalize(18),
        height: normalize(18),
        marginTop: normalize(11),
        marginLeft: normalize(10),
        marginRight: normalize(15),
    },

    searchBar: {
        width: normalize(280),
        height: normalize(40),
        marginTop: normalize(10),
        marginLeft: normalize(20),
        borderRadius: 10,
        backgroundColor: '#F4F4F4',
        flexDirection: 'row'
    },

    txtInput: {
        width: normalize(300),
        fontFamily: 'Montserrat-Medium'
    },

    txtBatal: {
        width: normalize(48),
        height: normalize(18),
        marginTop: normalize(18),
        marginLeft: normalize(20),
        fontSize: normalize(16),
        fontFamily: 'Montserrat-SemiBold',
        color: '#2A77CB'
    }
})


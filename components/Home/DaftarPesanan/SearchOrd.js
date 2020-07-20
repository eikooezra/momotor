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
        width: 18,
        height: 18,
        marginTop: 11,
        marginLeft: 10,
        marginRight: 15,
    },

    searchBar: {
        width: 304,
        height: 40,
        marginTop: 10,
        marginLeft: 20,
        borderRadius: 10,
        backgroundColor: '#F4F4F4',
        flexDirection: 'row'
    },

    txtInput: {
        width: 300,
        fontFamily: 'Montserrat-Medium'
    },

    txtBatal: {
        width: 48,
        height: 18,
        marginTop: 18,
        marginLeft: 20,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: '#2A77CB'
    }
})


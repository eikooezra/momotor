import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import WebView from 'react-native-webview'

class Terms extends Component{

render(){
    return(
    <View style={styles.container}>
       <WebView
        source={{uri: 'https://momotor.id/pusat-bantuan/list#tentang'}}
       />
  </View>
        )
    }
}

export default Terms

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import WebView from 'react-native-webview'

class FAQ extends Component{

render(){
    return(
    <View style={styles.container}>
       <WebView
        source={{uri: 'https://momotor.id/faq'}}
       />
  </View>
        )
    }
}

export default FAQ

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
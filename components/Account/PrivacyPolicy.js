import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import WebView from 'react-native-webview'

class PrivacyPolicy extends Component{

render(){
    return(
    <View style={styles.container}>
       <WebView
        source={{uri: 'https://momotor.id/kebijakan-privasi'}}
       />
  </View>
        )
    }
}

export default PrivacyPolicy

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
// import React, {Component} from 'react'
// import { 
// View, 
// Image, 
// StyleSheet, 
// } from 'react-native'
// import TabNavigator from 'react-native-tab-navigator'

// import Home from './Home/Home'
// import Notification from './Notification/Notification'
// import InstantOrder from './InstantOrder/InstantOrder'
// import Account from './Account/Account'

// class TabScreen extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             selectedTab: 'Home'
//         }
//     }

//     render(){
//         return(
//             <View style={styles.Container}>
//                 <TabNavigator>
//                     <TabNavigator.Item
//                         selected={this.state.selectedTab === 'Home'}
//                         title='Beranda'
//                         renderIcon={() => 
//                         <Image
//                             source={require('./assets/images/home.png')}
//                             style={styles.Icon}
//                         />}
//                         renderSelectedIcon={() =>
//                         <Image
//                             source={require('./assets/images/homeblu.png')}
//                             style={styles.Icon}
//                         />}
//                         titleStyle={{fontFamily: 'Montserrat-SemiBold'}}
//                         selectedTitleStyle={{color: '#0064D0', fontFamily: 'Montserrat-SemiBold'}}
//                         onPress={() => this.setState({selectedTab: 'Home'})}
//                         >
//                         {<Home/>}
//                     </TabNavigator.Item>

//                     <TabNavigator.Item
//                         selected={this.state.selectedTab === 'InstantOrder'}
//                         title='Instant Order'
//                         renderIcon={() => 
//                         <Image
//                             source={require('./assets/images/instant.png')}
//                             style={styles.Icon}
//                         />}
//                         renderSelectedIcon={() =>
//                         <Image
//                             source={require('./assets/images/instantblu.png')}
//                             style={styles.Icon}
//                         />}
//                         titleStyle={{fontFamily: 'Montserrat-SemiBold'}}
//                         selectedTitleStyle={{color: '#0064D0', fontFamily: 'Montserrat-SemiBold'}}
//                         onPress={() => this.setState({selectedTab: 'InstantOrder'})}
//                         >
//                         {<InstantOrder/>}
//                     </TabNavigator.Item>

//                     <TabNavigator.Item
//                         selected={this.state.selectedTab === 'Notification'}
//                         title='Pemberitahuan'
//                         renderIcon={() => 
//                         <Image
//                             source={require('./assets/images/notif.png')}
//                             style={styles.Icon}
//                         />}
//                         renderSelectedIcon={() =>
//                         <Image
//                             source={require('./assets/images/notifblu.png')}
//                             style={styles.Icon}
//                         />}
//                         titleStyle={{fontFamily: 'Montserrat-SemiBold'}}
//                         selectedTitleStyle={{color: '#0064D0', fontFamily: 'Montserrat-SemiBold'}}
//                         onPress={() => this.setState({selectedTab: 'Notification'})}
//                         >
//                         {<Notification/>}
//                     </TabNavigator.Item>

//                     <TabNavigator.Item
//                         selected={this.state.selectedTab === 'Account'}
//                         title='Akun'
//                         renderIcon={() => 
//                         <Image
//                             source={require('./assets/images/user.png')}
//                             style={styles.Icon}
//                         />}
//                         renderSelectedIcon={() =>
//                         <Image
//                             source={require('./assets/images/userblu.png')}
//                             style={styles.Icon}
//                         />}
//                         titleStyle={{fontFamily: 'Montserrat-SemiBold'}}
//                         selectedTitleStyle={{color: '#0064D0', fontFamily: 'Montserrat-SemiBold'}}
//                         onPress={() => this.setState({selectedTab: 'Account'})}
//                         >
//                         {<Account/>}
//                     </TabNavigator.Item>


//                 </TabNavigator>
//             </View>
//         )
//     }
// }

// export default TabScreen 

// const styles = StyleSheet.create({

//     Container: {
//         flex: 1
//     },

//     Icon: {
//         width: 28,
//         height: 28,
//         marginTop: 7
//     },
// })
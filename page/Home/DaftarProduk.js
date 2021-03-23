// import React, {Component} from 'react'
// import { createStackNavigator } from '@react-navigation/stack'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// const DaftarProdukTab = createMaterialTopTabNavigator()

// function DaftarProdukTabScreen(){
//   return(
//     <DaftarProdukTab.Navigator
//     tabBarOptions={{
//         labelStyle: {
//             fontFamily: 'Monserrat-Medium'
//         }
//     }}
//     >
//       <DaftarProdukTab.Screen
//         name='Semua Produk'
//         component={SemuaProduk}
//         options={{
//             title: 'Semua Produk',
//             labelStyle: {
//                 fontFamily: 'Montserrat-Medium'
//           }
//         }}
//       />

//       <DaftarProdukTab.Screen
//         name='Approved'
//         component={Approved}
//         options={{
//             title: 'Approved',
//             labelStyle: {
//                 fontFamily: 'Montserrat-Medium'
//             }
//         }}
//       />

//       <DaftarProdukTab.Screen
//         name='Pending'
//         component={Pending}
//         options={{
//             title: 'Pending',
//             labelStyle: {
//                 fontFamily: 'Montserrat-Medium'
//           }
//         }}
//       />

//       <DaftarProdukTab.Screen
//         name='Unapplied'
//         component={Unapplied}
//         options={{
//           title: 'Unapplied',
//           labelStyle: {
//             fontFamily: 'Montserrat-Medium'
//           }
//         }}
//       />
//     </DaftarProdukTab.Navigator>
//   )
// }

// function LogoAdd() {
//   return (
//     <Image
//       style={{ 
//         width: 18, height: 18, marginRight: 16}}
//       source={require('../assets/images/add.png')}
//     />
//   );
// }

// function LogoSearch() {
//   return (
//     <Image
//     style={{ 
//       width: 18, height: 18, marginRight: 16}}
//     source={require('../assets/images/search.png')}
//     />
//   )
// }

// function LogoBack(){
//   return(
//     <Image
//     style={{ 
//       width: 35, height: 18, marginLeft: 16}}
//     source={require('../assets/images/back.png')}
//     />
//   )
// }

// const DaftarProdukStack = createStackNavigator()
// class DaftarProduk extends Component{
//     render(){
//         return(
//             <DaftarProdukStack.Navigator>
//                   <DaftarProdukStack.Screen
//                     name='Daftar Produk'
//                     component={DaftarProdukTabScreen}
//                     options={{
//                       title: 'Daftar Produk',
//                       headerStyle:{
//                         height: 70,
//                         backgroundColor: '#0064D0',
//                       },
//                         headerTintColor: '#FFFFFF',
//                         headerTitleStyle: {
//                           width: 200,
//                           height: 20,
//                           marginLeft: 75,
//                           fontSize: 16,
//                           fontFamily: 'Montserrat-Bold'
//                         },
//                         headerRight: () => (
//                            <View style={{flexDirection: 'row'}}>
            
//                           <TouchableOpacity
//                             onPress={() => navigate('Search')}
//                           >
//                             <LogoSearch/>
//                           </TouchableOpacity>
            
//                           <TouchableOpacity
//                             onPress={() => navigate('Add')}
//                           >
//                             <LogoAdd/>
//                           </TouchableOpacity>
            
//                           </View>
//                         ),
//                         headerLeft: () => (
//                           <TouchableOpacity
//                             onPress={() => navigate('Home')}
//                           >
//                             <LogoBack/>
//                           </TouchableOpacity>
//                         )
//                     }}
//                   />
//                 </DaftarProdukStack.Navigator>
//         )
//     }
// }

// export default DaftarProduk
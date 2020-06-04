// import React, {Component} from 'react'
// import { createStackNavigator } from '@react-navigation/stack'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

// import NotifActivity from './NotifActivity'
// import NotifNewOrder from './NotifNewOrder'
// import NotifJualCepat from './NotifJualCepat'

// const NotificationTab = createMaterialTopTabNavigator()
// function NotificationTabScreen(){
//     return(
//         <NotificationTab.Navigator>
//       <NotificationTab.Screen 
//       name='Aktivitas' 
//       component={NotifActivity}
//       options={{
//           title: 'Aktivitas',
//           labelStyle: {
//               fontFamily: 'Montserrat-Medium'
//             }
//         }}
//         />
//       <NotificationTab.Screen 
//       name='Pesanan Baru' 
//       component={NotifNewOrder}
//       options={{
//           title: 'Pesanan Baru',
//           labelStyle: {
//               fontFamily: 'Montserrat-Medium'
//             }
//         }}
//         />
//       <NotificationTab.Screen 
//       name='Jual Cepat' 
//       component={NotifJualCepat}
//       options={{
//           title: 'Jual Cepat',
//           labelStyle: {
//               fontFamily: 'Montserrat-Medium'
//             }
//         }}
//         />
//     </NotificationTab.Navigator>
//   )
// }

// const NotificationStack = createStackNavigator()
// class Notification extends Component{
//     render(){
//         return(
//             <NotificationStack.Navigator>
//             <NotificationStack.Screen 
//             name='Pemberitahuan' 
//             component={NotificationTabScreen}
//             options={{
//               title: 'Pemberitahuan',
//               headerStyle:{
//               height: 70,
//               backgroundColor: '#0064D0',
//             },
//               headerTintColor: '#FFFFFF',
//               headerTitleStyle: {
//                 width: 200,
//                 height: 20,
//                 marginLeft: 120,
//                 fontSize: 16,
//                 fontFamily: 'Montserrat-Bold'
//               }
//           }}
//             />
//           </NotificationStack.Navigator>
//             )
//         }
//     }
    
// export default Notification
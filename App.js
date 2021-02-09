import React, { Component } from 'react'
import{ Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import normalize from 'react-native-normalize'

import Login from './components/Login'
import Forgot from './components/Forgot'
import Logout from './components/Logout'

import Home from './components/Home/Home'

import SemuaProduk from './components/Home/DaftarProduk/SemuaProduk' // 1st screen for daftar produk page
import Approved from './components/Home/DaftarProduk/Approved'
import Pending from './components/Home/DaftarProduk/Pending'
import Unapplied from './components/Home/DaftarProduk/Unapplied'
import SearchPrd from './components/Home/DaftarProduk/SearchPrd'
import Add from './components/Home/DaftarProduk/Add'
import AddPics from './components/Home/DaftarProduk/AddPics'
import Verification from './components/Home/DaftarProduk/Verification'

import SemuaPesanan from './components/Home/DaftarPesanan/SemuaPesanan' // 1st screen for daftar pesanan page
import Verifikasi from './components/Home/DaftarPesanan/Verifikasi'
import Survey from './components/Home/DaftarPesanan/Survey'
import AnalisaKredit from './components/Home/DaftarPesanan/AnalisaKredit'
import Disetujui from './components/Home/DaftarPesanan/Disetujui'
import Ditolak from './components/Home/DaftarPesanan/Ditolak'
import Dibatalkan from './components/Home/DaftarPesanan/Dibatalkan'
import SearchOrd from './components/Home/DaftarPesanan/SearchOrd'
import ProsesVerif from './components/Home/DaftarPesanan/ProsesVerif'

import JualCepat from './components/Home/JualCepat/JualCepat' // 1st screen for jual cepat page
import SearchFst from './components/Home/JualCepat/SearchFst'
import HistoryFst from './components/Home/JualCepat/HistoryFst'
import Tawar from './components/Home/JualCepat/Tawar'
import InspectResult from './components/Home/JualCepat/InspectResult'

import Calculator from './components/Home/Calculator'

import DataCustomer from './components/InstantOrder/DataCustomer' // 1st screen for instant order page
import DataPekerjaan from './components/InstantOrder/DataPekerjaan'
import DataMotor from './components/InstantOrder/DataMotor'
import DataKredit from './components/InstantOrder/DataKredit'
import UploadDocs from './components/InstantOrder/UploadDocs'

import NotifActivity from './components/Notification/NotifActivity' // 1st screen for notif page
import NotifNewOrder from './components/Notification/NotifNewOrder'
import NotifJualCepat from './components/Notification/NotifJualCepat'

import Account from './components/Account/Account' // 1st screen for account page
import Settings from './components/Account/Settings'
import EditProfile from './components/Account/EditProfile'
import About from './components/Account/About'
import PrivacyPolicy from './components/Account/PrivacyPolicy'
import Terms from './components/Account/Terms'
import FAQ from './components/Account/FAQ'

import ConfirmEmail from './components/Account/ConfirmEmail' // 1st screen for change password page
import ChangePass from './components/Account/ChangePass'

const HomeStack = createStackNavigator()

function HomeStackScreen(){
  return(
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name='Home' component={Home}/>
      <HomeStack.Screen name='DaftarProduk' component={DaftarProdukStackScreen} />
      <HomeStack.Screen name='DaftarPesanan' component={DaftarPesananStackScreen} />
      <HomeStack.Screen name='JualCepat' component={JualCepat} />
      <HomeStack.Screen name='Calculator' component={Calculator} />
    </HomeStack.Navigator>
  )
}

function LogoHome({color, focused, size}) {
  if(focused){
    console.log('onclick')
  }
  return (
    <Image
      style={{ 
        width: 32, height: 32,}}
      source={(focused) 
        ? require('./assets/images/homeblu.png') 
        : require('./assets/images/home.png')}
    />
  ); 
} 

function LogoAdd() {
  return (
    <Image
      style={{ 
        width: normalize(18), height: normalize(18), marginRight: normalize(16)}}
      source={require('./assets/images/add.png')}
    />
  );
}

function LogoSearch() {
  return (
    <Image
    style={{ 
      width: normalize(18), height: normalize(18), marginRight: normalize(16)}}
    source={require('./assets/images/search.png')}
    />
  )
}

function LogoBack(){
  return(
    <Image
    style={{ 
      width: normalize(32), height: normalize(16), marginLeft: normalize(16)}}
    source={require('./assets/images/back.png')}
    />
  )
}

const DaftarProdukStack = createStackNavigator()
const DaftarProdukTab = createMaterialTopTabNavigator()

function DaftarProdukStackScreen({navigation: {navigate}}){
  return(
    <DaftarProdukStack.Navigator>
      <DaftarProdukStack.Screen
        name='Daftar Produk'
        component={DaftarProdukTabScreen}
        options={{
          title: 'Daftar Produk',
          headerStyle:{
            height: 70,
            backgroundColor: '#0064D0',
          },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
              width: 200,
              height: 20,
              marginLeft: normalize(70),
              fontSize: 16,
              fontFamily: 'Montserrat-Bold'
            },
            headerRight: () => (
               <View style={{flexDirection: 'row'}}>

              <TouchableOpacity
                onPress={() => navigate('SearchPrd')}
              >
                <LogoSearch/>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigate('Add')}
              >
                <LogoAdd/>
              </TouchableOpacity>

              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigate('Home')}
              >
                <LogoBack/>
              </TouchableOpacity>
            )
        }}
      />
    </DaftarProdukStack.Navigator>
  )
}


function DaftarProdukTabScreen(){
  return(
    <DaftarProdukTab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontFamily: 'Monserrat-Medium'
        },
        scrollEnabled: true
      }}
    >
      <DaftarProdukTab.Screen
        name='Semua Produk'
        component={SemuaProduk}
        options={{
          title: 'Semua Produk',
          labelStyle: {
            fontFamily: 'Montserrat-Medium'
          }
        }}
      />

      <DaftarProdukTab.Screen
        name='Disetujui'
        component={Approved}
        options={{
          title: 'Disetujui',
          labelStyle: {
            fontFamily: 'Montserrat-Medium'
          }
        }}
      />

      <DaftarProdukTab.Screen
        name='Pending'
        component={Pending}
        options={{
          title: 'Pending',
          labelStyle: {
            fontFamily: 'Montserrat-Medium'
          }
        }}
      />

      <DaftarProdukTab.Screen
        name='Ditolak'
        component={Unapplied}
        options={{
          title: 'Ditolak',
          labelStyle: {
            fontFamily: 'Montserrat-Medium'
          }
        }}
      />
    </DaftarProdukTab.Navigator>
  )
}

const DaftarPesananStack = createStackNavigator()
const DaftarPesananTab = createMaterialTopTabNavigator()

function DaftarPesananStackScreen({navigation: {navigate}}){
  return(  
  <DaftarPesananStack.Navigator>
    <DaftarPesananStack.Screen
       name='Daftar Pesanan'
       component={DaftarPesananTabScreen}
       options={{
         title: 'Daftar Pesanan',
         headerStyle:{
           height: 70,
           backgroundColor: '#0064D0',
         },
           headerTintColor: '#FFFFFF',
           headerTitleStyle: {
             width: 200,
             height: 20,
             marginLeft: normalize(70),
             fontSize: 16,
             fontFamily: 'Montserrat-Bold'
           },
           headerRight: () => (
             <TouchableOpacity
               onPress={() => navigate('SearchOrd')}
             >
               <LogoSearch/>
             </TouchableOpacity>

           ),
           headerLeft: () => (
             <TouchableOpacity
               onPress={() => navigate('Home')}
             >
               <LogoBack/>
             </TouchableOpacity>
           )
       }}
    />
  </DaftarPesananStack.Navigator>
  )
}

function DaftarPesananTabScreen(){
  return(
    <DaftarPesananTab.Navigator
      swipeEnabled={true}
      tabBarOptions={{
        labelStyle: {
          fontFamily: 'Monserrat-Medium'
        },
        scrollEnabled: true
      }}
    >
      <DaftarPesananTab.Screen
        name='Semua Pesanan'
        component={SemuaPesanan}
        options={{
          title: 'Semua Pesanan',
          labelStyle: {
            fontFamily: 'Montserrat-Medium'
          },
        }}
      />

      <DaftarPesananTab.Screen
        name='Verifikasi'
        component={Verifikasi}
        options={{
          title: 'Verifikasi',
          labelStyle: {
            fontFamily: 'Montserrat-Medium'
          }
        }}
      />

      <DaftarPesananTab.Screen
        name='Survey'
        component={Survey}
        options={{
          title: 'Survey',
          labelStyle: {
            fontFamily: 'Montserrat-Medium'
          }
        }}
      />

      <DaftarPesananTab.Screen
        name='AnalisaKredit'
        component={Survey}
        options={{
          title: 'Analisa Kredit',
          labelStyle: {
            fontFamily: 'Montserrat-Medium'
          }
        }}
      />  

      <DaftarPesananTab.Screen
        name='Disetujui'
        component={Survey}
        options={{
          title: 'Disetujui',
          labelStyle: {
            fontFamily: 'Montserrat-Medium'
          }
        }}
      />

      <DaftarPesananTab.Screen
        name='Ditolak'
        component={Survey}
        options={{
          title: 'Ditolak',
          labelStyle: {
            fontFamily: 'Montserrat-Medium'
          }
        }}
      />

      <DaftarPesananTab.Screen
        name='Dibatalkan'
        component={Dibatalkan}
        options={{
          title: 'Dibatalkan',
          labelStyle: {
            fontFamily: 'Montserrat-Medium'
          }
        }}
      />
    </DaftarPesananTab.Navigator>
  )
}

const InstantOrderStack = createStackNavigator()

function InstantOrderStackScreen(){
  return(
    <InstantOrderStack.Navigator screenOptions={{headerShown:false}}>
      <InstantOrderStack.Screen name='InstantOrder' component={DataCustomer}/>
      <InstantOrderStack.Screen name='DataPekerjaan' component={DataPekerjaan}/>
      <InstantOrderStack.Screen name='DataMotor' component={DataMotor}/>
      <InstantOrderStack.Screen name='DataKredit' component={DataKredit}/>
      <InstantOrderStack.Screen name='UploadDocs' component={UploadDocs}/>
    </InstantOrderStack.Navigator>
  )
}

function LogoInstanOrder({focused}) {
  return (
    <Image
      style={{ width: 32, height: 32 }}
      source={(focused) 
        ? require('./assets/images/instantblu.png') 
        : require('./assets/images/instant.png')}
    />
  );
}


const NotificationStack = createStackNavigator()
const NotificationTab = createMaterialTopTabNavigator()

function NotificationStackScreen(){
  return(
    <NotificationStack.Navigator>
      <NotificationStack.Screen 
      name='Pemberitahuan' 
      component={NotificationTabScreen}
      options={{
        title: 'Pemberitahuan',
        headerStyle:{
        height: 70,
        backgroundColor: '#0064D0',
      },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          width: 200,
          height: 20,
          marginLeft: 120,
          fontSize: 16,
          fontFamily: 'Montserrat-Bold'
        }
    }}
      />
    </NotificationStack.Navigator>
  )
}

function NotificationTabScreen(){
  return(
    <NotificationTab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontFamily: 'Montserrat-Medium'
        }
      }}
    >
      <NotificationTab.Screen 
      name='Aktivitas' 
      component={NotifActivity}
      options={{
        title: 'Aktivitas',
      }}
      />
      <NotificationTab.Screen 
      name='Pesanan Baru' 
      component={NotifNewOrder}
      options={{
        title: 'Pesanan Baru',
      }}
      />
      <NotificationTab.Screen 
      name='Jual Cepat' 
      component={NotifJualCepat}
      options={{
        title: 'Jual Cepat',
      }}
      />
    </NotificationTab.Navigator>
  )
}

function LogoNotification({focused}) {
  return (
    <Image
      style={{ width: 32, height: 32 }}
      source={(focused) 
        ? require('./assets/images/notifblu.png') 
        : require('./assets/images/notif.png')}
    />
  );
}


const AccountStack = createStackNavigator()

function AccountStackScreen(){
  return(
    <AccountStack.Navigator screenOptions={{headerShown:false}}>
      <AccountStack.Screen name='Account' component={Account}/>
    </AccountStack.Navigator>
  )
}

function LogoAccount({focused}) {
  return (
    <Image
      style={{ width: 32, height: 32 }}
      source={(focused) 
        ? require('./assets/images/userblu.png') 
        : require('./assets/images/user.png')}
    />
  );
}

const Tab = createBottomTabNavigator()

// ToDo: Icon harus berubah warna, font juga harus sesuai mockup
function TabScreen(){
 return(
    <Tab.Navigator 
    tabBarOptions={{
      activeTintColor: '#0064D0',
      inactiveTintColor: '#B7B7B7',
      labelStyle: {
        fontFamily: 'Montserrat-SemiBold'
      }
    }}>

      <Tab.Screen 
      name='Beranda' component={HomeStackScreen}
      options={{
        title: 'Beranda',
        tabBarIcon: props => <LogoHome {...props}/>
    }}/>

      <Tab.Screen 
      name='Instant Order' component={InstantOrderStackScreen}
      options={{
        title: 'Instant Order',
        tabBarIcon: props => <LogoInstanOrder {...props}/>,
    }}/>

      <Tab.Screen 
      name='Pemberitahuan' component={NotificationStackScreen}
      options={{
        title: 'Pemberitahuan',
        tabBarIcon: props => <LogoNotification {...props}/>,
    }}/>

      <Tab.Screen 
      name='Akun' component={AccountStackScreen}
      options={{
        title: 'Akun',
        tabBarIcon: props => <LogoAccount {...props}/>,
    }}/>

    </Tab.Navigator>
  )
}

const Stack = createStackNavigator()

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Forgot' component={Forgot}/>
          <Stack.Screen name='Home' component={TabScreen}/>
          <Stack.Screen name='SearchPrd' component={SearchPrd}/>
          <Stack.Screen name='SearchOrd' component={SearchOrd}/>
          <Stack.Screen name='ProsesVerif' component={ProsesVerif}/>
          <Stack.Screen name='SearchFst' component={SearchFst}/>
          <Stack.Screen name='HistoryFst' component={HistoryFst}/>
          <Stack.Screen name='Tawar' component={Tawar}/>
          <Stack.Screen name='InspectResult' component={InspectResult}/>
          <Stack.Screen name='Add' component={Add}/>
          <Stack.Screen name='AddPics' component={AddPics}/>
          <Stack.Screen name='Verification' component={Verification}/>
          <Stack.Screen name='EditProfile' component={EditProfile}/>
          <Stack.Screen name='Settings' component={Settings}/>
          <Stack.Screen name='ConfirmEmail' component={ConfirmEmail}/>
          <Stack.Screen name='ChangePass' component={ChangePass}/>
          <Stack.Screen name='About' component={About}/>
          <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy}/>
          <Stack.Screen name='Terms' component={Terms}/>
          <Stack.Screen name='FAQ' component={FAQ}/>
          <Stack.Screen name='Logout' component={Logout}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
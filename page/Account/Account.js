import React, { useState, useEffect, useCallback } from "react";
import { } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
  RefreshControl,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import normalize from "react-native-normalize";
import { Gap, NewestOrderComponent, UserComponent } from "../../components/components";
import { Fire } from "../../config";
import { getData } from "../../utils/localstorage/localstorage";
import messaging from "@react-native-firebase/messaging";

const { height } = Dimensions.get("window");

const Account = ({ navigation, route }) => {
  const [user, setUser] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    saveToken();
    getData('user').then(res => {
      console.log('uid', res.uid)
      Fire.database()
        .ref('users/')
        .orderByChild('uid')
        .equalTo(res.uid)
        .once('value')
        .then(res => {
          console.log('data: ', res.val())
          if (res.val()) {
            console.log('a', Object.values(res.val()))
            setUser(Object.values(res.val()))
          }
        })
        .catch(err => {
          const errorMessage = err.message
          showMessage({
            message: errorMessage,
            type: 'default',
            backgroundColor: '#E06379',
            color: '#FFFFFF'
          })
          console.log('error: ', err)
        })
        .finally(() => setRefreshing(false));
    });
  }, [userProfile]);

  const saveToken = async () => {
    const token = await messaging().getToken();
    if (userProfile.uid)
      Fire.database()
        .ref(`users/${userProfile.uid}`)
        .update({ token });
  };

  const getUid = () => {
    setIsLoading(true);
    getData("user").then((res) => {
      const uid = res.uid;
      setUserProfile(res);
      getData('user').then(res => {
        console.log('uid', res.uid)
        Fire.database()
          .ref('users/')
          .orderByChild('uid')
          .equalTo(res.uid)
          .once('value')
          .then(res => {
            console.log('data: ', res.val())
            if (res.val()) {
              console.log('a', Object.values(res.val()))
              setUser(Object.values(res.val()))
            }
          })
          .catch(err => {
            const errorMessage = err.message
            showMessage({
              message: errorMessage,
              type: 'default',
              backgroundColor: '#E06379',
              color: '#FFFFFF'
            })
            console.log('error: ', err)
          })
      })
        .finally(() => setIsLoading(false));
    });
  };

  useEffect(() => {
    getUid();
  }, [])

  useEffect(() => {
    saveToken();
  }, [userProfile]);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.Header}>
          <View style={styles.insideHeader}>
            <Image
              style={styles.momotor}
              source={require('../../assets/images/Momotor.id.png')}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate('Settings')}
            >
              <Image
                style={styles.btnSettings}
                source={require('../../assets/images/settings.png')}
              />
            </TouchableOpacity>
          </View>

          {isLoading ? (
            <View style={styles.loadingCont}>
              <ActivityIndicator size="large" color="#0064D0" />
            </View>
          ) : (
            <>
              {user.map(item => {
                return (
                  <UserComponent
                    key={item.uid}
                    name={item.fullName}
                    phoneNo={item.phoneNo}
                    address={item.address}
                    onPressEdit={() => navigation.navigate('EditProfile', item)}
                  />
                )
              })}
            </>
          )}
        </View>
      </ScrollView>

      <View style={styles.middle}>
        <TouchableOpacity style={styles.btnAbout}
          onPress={() => navigation.navigate('About')}
        >
          <Image
            style={styles.imgAbout}
            source={require('../../assets/images/about.png')}
          />

          <Text style={styles.txtAbout}>
            Tentang Kami
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnPrivacy}
          onPress={() => navigation.navigate('PrivacyPolicy')}
        >
          <Image
            style={styles.imgPrivacy}
            source={require('../../assets/images/privacypolicy.png')}
          />

          <Text style={styles.txtPrivacy}>
            Kebijakan Privasi
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnFaq}
          onPress={() => navigation.navigate('FAQ')}
        >
          <Image
            style={styles.imgFaq}
            source={require('../../assets/images/faq.png')}
          />

          <Text style={styles.txtFaq}>
            Pertanyaan Umum
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.txtKeluar}>
            Keluar
          </Text>
        </TouchableOpacity>

        <Text style={styles.txtVer}>
          App version 1.0
        </Text>
        <Gap height={200} />
      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#FFFFFF'
  },

  Header: {
    width: normalize(380),
    height: normalize(130),
    marginBottom: normalize(104),
    borderBottomLeftRadius: normalize(25),
    borderBottomRightRadius: normalize(25),
    backgroundColor: '#0064D0',
  },

  insideHeader: {
    flexDirection: 'row'
  },

  momotor: {
    width: normalize(145),
    height: normalize(24),
    marginTop: normalize(40),
    marginBottom: normalize(22.13),
    marginLeft: normalize(16),
    marginRight: normalize(185)
  },

  btnSettings: {
    width: normalize(20),
    height: normalize(20),
    marginTop: normalize(40),
  },

  middle: {
    height: normalize(-50)
  },

  btnAbout: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E3DFDF',
    marginBottom: normalize(17),
    marginLeft: normalize(25),
    marginRight: normalize(25)
  },

  imgAbout: {
    width: normalize(35),
    height: normalize(25),
  },

  txtAbout: {
    width: normalize(200),
    height: normalize(21),
    marginLeft: normalize(16),
    marginBottom: normalize(18),
    fontSize: normalize(16),
    fontFamily: 'Montserrat-Medium'
  },

  btnPrivacy: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E3DFDF',
    marginBottom: normalize(16),
    marginLeft: normalize(25),
    marginRight: normalize(25)
  },

  imgPrivacy: {
    width: normalize(21),
    height: normalize(25),
    marginLeft: normalize(6)
  },

  txtPrivacy: {
    width: normalize(300),
    height: normalize(20),
    marginLeft: normalize(24),
    marginBottom: normalize(18),
    fontSize: normalize(16),
    fontFamily: 'Montserrat-Medium'
  },

  btnTerms: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E3DFDF',
    marginBottom: normalize(17),
    marginLeft: normalize(25),
    marginRight: normalize(25)
  },

  imgTerms: {
    width: normalize(25),
    height: normalize(26),
    marginLeft: normalize(7)
  },

  txtTerms: {
    width: normalize(200),
    height: normalize(20),
    marginLeft: normalize(20),
    marginBottom: normalize(18),
    fontSize: normalize(16),
    fontFamily: 'Montserrat-Medium'
  },

  btnFaq: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E3DFDF',
    marginBottom: normalize(102),
    marginLeft: normalize(25),
    marginRight: normalize(25)
  },

  imgFaq: {
    width: normalize(30),
    height: normalize(23),
    marginLeft: normalize(6)
  },

  txtFaq: {
    width: normalize(200),
    height: normalize(20),
    marginLeft: normalize(17),
    marginBottom: normalize(18),
    fontSize: normalize(16),
    fontFamily: 'Montserrat-Medium'
  },

  txtKeluar: {
    width: normalize(400),
    height: normalize(20),
    fontSize: normalize(16),
    marginBottom: normalize(5),
    marginLeft: normalize(170),
    color: '#0064D0',
    fontFamily: 'Montserrat-SemiBold'
  },

  txtVer: {
    width: normalize(400),
    height: normalize(20),
    fontSize: normalize(14),
    marginLeft: normalize(145),
    color: '#7F7F7F',
    fontFamily: 'Montserrat-Medium',
  }
})
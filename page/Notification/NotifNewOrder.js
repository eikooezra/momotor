import messaging from "@react-native-firebase/messaging";
import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions, RefreshControl, ScrollView, StyleSheet, View
} from 'react-native';
import { showMessage } from "react-native-flash-message";
import normalize from "react-native-normalize";
import { Fire } from '../../config';
import { NotifComponent } from '../../components/components'
import { getData } from "../../utils/localstorage/localstorage";

const Notification = ({ navigation }) => {
  const [notif, setNotif] = useState([])
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    saveToken();
    getData("user").then((res) => {
      const uid = res.uid;
      Fire.database()
        .ref("notification/" + uid + "/")
        .orderByChild('type')
        .equalTo('NewOrder')
        .once("value")
        .then((res) => {
          if (res.val()) {
            setNotif(Object.values(res.val()));
          }
        })
        .catch((err) => {
          console.log("error: ", err);
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
      Fire.database()
        .ref("notification/" + uid + "/")
        .orderByChild('type')
        .equalTo('NewOrder')
        .once("value")
        .then((res) => {
          if (res.val()) {
            setNotif(Object.values(res.val()));
          }
        })
        .catch((err) => {
          console.log("error: ", err);
        })
        .finally(() => setIsLoading(false));
    });
  };

  useEffect(() => {
    getUid();
  }, []);

  useEffect(() => {
    saveToken();
  }, [userProfile]);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <View style={styles.loadingCont}>
            <ActivityIndicator size="large" color="#0064D0" />
          </View>
        ) : (
          <>
            {notif.map(item => {
              return (
                <NotifComponent
                  key={item.id}
                  title={item.title}
                  message={item.message}
                  date={item.date}
                  hour={item.hour}
                />

              )
            })}
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  notif: {
    flexDirection: 'row',
    marginTop: normalize(25),
  },

  imgNotif: {
    marginLeft: normalize(34),
    width: normalize(62),
    height: normalize(62),
  },

  txtContainer: {
    marginLeft: normalize(11),
    alignContent: 'center'
  },

  notifBerhasil: {
    marginRight: normalize(160),
    marginBottom: normalize(6),
    fontSize: normalize(16),
    fontFamily: 'Montserrat-SemiBold'
  },

  noteGagal: {
    marginRight: normalize(160),
    fontSize: normalize(12),
    color: '#7F7F7F',
    fontFamily: 'Montserrat-Medium'
  },

  orderID: {
    marginBottom: normalize(24),
    fontSize: normalize(12),
    color: '#7F7F7F',
    fontFamily: 'Montserrat-Medium'
  },

  clock: {
    fontSize: normalize(12),
    fontFamily: 'Montserrat-Regular'
  }

})
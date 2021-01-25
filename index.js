/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification'

PushNotification.configure({
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    senderID: '87556405818',
    popInitialNotification: true,
  });

  PushNotification.createChannel(
    {
      channelId: "dealer-id", // (required)
      channelName: "momotor channel", // (required)
      channelDescription: "channel dedicated for dealer only"
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );

AppRegistry.registerComponent(appName, () => App);

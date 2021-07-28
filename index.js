/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
// import PushNotification from 'react-native-push-notification'
import messaging from "@react-native-firebase/messaging";

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log(remoteMessage);
});

messaging().onNotificationOpenedApp((message) => {
  console.log({ data: message.data });
  // return Linking.openURL(message.data.linking);
});

// PushNotification.configure({
//     onRegister: function (token) {
//       console.log("TOKEN:", token);
//     },
//     onNotification: function (notification) {
//       console.log("NOTIFICATION:", notification);
//     },
//     permissions: {
//       alert: true,
//       badge: true,
//       sound: true,
//     },
//     senderID: '53683180999',
//     popInitialNotification: true,
//   });

//   PushNotification.createChannel(
//     {
//       channelId: "dealer-id", // (required)
//       channelName: "momotor channel", // (required)
//       channelDescription: "channel dedicated for dealer only"
//     },
//     (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
//   );

AppRegistry.registerComponent(appName, () => App);

import React, {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

const RemoteNotification = () => {
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },
      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        console.log('onNotification:', notification);

        // process the notification here
      },

      onAction: function (notification) {
        console.log('onAction:', notification.action);
        console.log(' onAction NOTIFICATION:', notification);
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Android only: GCM or FCM Sender ID
      senderID: '171741756316',
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);
  return null;
};
export default RemoteNotification;

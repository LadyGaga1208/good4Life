import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import RNAccountKit from 'react-native-facebook-account-kit';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';
import firebase, { Notification } from 'react-native-firebase';


export default class Notifications extends Component {

  componentDidMount() {
    firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          firebase.messaging().getToken().then(token => {
            console.log("LOG: ", token);
          })
          // user has permissions
        } else {
          firebase.messaging().requestPermission()
            .then(() => {
              alert("User Now Has Permission")
            })
            .catch(error => {
              alert("Error", error)
              // User has rejected permissions  
            });
        }
      });

    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
      // Process your notification as required
      // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      const {
        body,
        data,
        notificationId,
        sound,
        subtitle,
        title
      } = notification;
      console.log("LOG: khi hien thi hihi ", title, body, JSON.stringify(data));
    });
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      // Process your notification as required
      const {
        body,
        data,
        notificationId,
        sound,
        subtitle,
        title
      } = notification;
      console.log("LOG: khi mo app ra haha ", title, body, JSON.stringify(data));
      console.log(notification, 'hihihi');
    });

    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      console.log(action, 'action gi day');
      // Get information about the notification that was opened
      const notification = notificationOpen.notification;
      console.log(notification, 'day là thông tin notification')
    });

    firebase.notifications().getInitialNotification()
      .then((notificationOpen) => {
        if (notificationOpen) {
          // App was opened by a notification
          // Get the action triggered by the notification being opened
          const action = notificationOpen.action;
          // Get information about the notification that was opened
          const notification = notificationOpen.notification;
          console.log(notification, 'longdq')
        }
      });

    const notification = new firebase.notifications.Notification()
      .setNotificationId('0:1537263664798006%6018f8e86018f8e8')
      .setTitle('My notification title')
      .setBody('My notification body')
      .setData({
        key1: 'value1',
        key2: 'value2',
      });

    notification
      .android.setChannelId('channelId')
      .android.setSmallIcon('ic_launcher');

    firebase.notifications().displayNotification(notification);

  }

  componentWillUnmount() {
    this.notificationDisplayedListener();
    this.notificationListener();
    this.notificationOpenedListener();
  }


  _smsfb() {
    RNAccountKit.loginWithPhone()
      .then((token) => {
        if (!token) {
          console.log('Login cancelled')
        } else {
          console.log(`Logged with phone. Token: ${token}`)
        }
      })
  }

  async _ggAuth() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true, showPlayServicesUpdateDialog: true });
      await GoogleSignin.configure({
        webClientId: '120639916537-q4iqf394iearhhqckv1nmb5cgitpas46.apps.googleusercontent.com',
        offlineAccess: false,
      });
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo, 'g+')
      // this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
        console.log('hahahahahah');
        console.log(error)
      }
    }
  }

  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => console.log("logout.")} />

        <TouchableOpacity onPress={this._smsfb}>
          <Text>SMS</Text>
        </TouchableOpacity>


        <GoogleSigninButton
          style={{ width: 48, height: 48 }}
          size={GoogleSigninButton.Size.Icon}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
        />

        <TouchableOpacity onPress={this._ggAuth}><Text>G+</Text></TouchableOpacity>
      </View>
    );
  }
}

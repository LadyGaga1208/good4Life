import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import RNAccountKit from 'react-native-facebook-account-kit';
import { GoogleSignin, GoogleSigninButton, statusCodes  } from 'react-native-google-signin';


export default class Notifications extends Component {

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

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import RNAccountKit from 'react-native-facebook-account-kit';


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
          onLogoutFinished={() => console.log("logout.")}/>

          <TouchableOpacity onPress={this._smsfb}>
            <Text>SMS</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

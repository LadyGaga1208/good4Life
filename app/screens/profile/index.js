import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';


export default class Authentication extends Component {

    loginFB = () => {
        let _self = this;
        LoginManager.logInWithReadPermissions(['public_profile']).then(
            function (result) {
                if (result.isCancelled) {
                    console.log('Login cancelled');
                } else {
                    console.log('Login success with permissions: '
                        + result.grantedPermissions.toString());
                    console.log(result, 'kq fb');
                    AccessToken.getCurrentAccessToken().then((data) => {
                        console.log(data, 'du lieu facebook');
                        const { accessToken } = data;
                        _self.initUser(accessToken);
                    });
                }
            },
            function (error) {
                console.log('Login fail with error: ' + error);
            }
        );
    }

    initUser(token) {
        fetch('https://graph.facebook.com/me?fields=email,name,friends&access_token=' + token)
            .then((response) => response.json())
            .then((json) => {
                // Some user object has been set up somewhere, build that user here
                console.log(json, 'hahahaha');
            })
            .catch(() => {
                reject('ERROR GETTING DATA FROM FACEBOOK')
            });
    }

    loginG = async () => {
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
                console.log(error);
            }
        }
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center'
                }}
            >
                <Text> Đăng nhập </Text>
                <TouchableOpacity
                    style={{
                        padding: 30,
                        backgroundColor: 'blue',
                        borderRadius: 5,
                        marginTop: 20
                    }}
                    onPress={this.loginFB.bind(this)}
                >
                    <Text>Đăng nhập bằng Facebook </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        padding: 30,
                        backgroundColor: 'red',
                        borderRadius: 5,
                        marginTop: 20
                    }}
                    onPress={this.loginG.bind(this)}
                >
                    <Text>Đăng nhập bằng G+ </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

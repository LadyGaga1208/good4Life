import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import RNAccountKit from 'react-native-facebook-account-kit';

import { screenHeight, screenWidth, primaryColor } from '../../styles/variables';
import Login from '../../components/Login';
import CreateAcount from '../../components/CreateAcount';

const iconSalad = require('../../images/icons/salad.png');

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true
        };
    }
    showLogin() {
        this.setState({
            showLogin: true
        });
    }
    showCreate() {
        this.setState({
            showLogin: false
        });
    }
    login() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Profile' })],
        });
        this.props.navigation.dispatch(resetAction);
    }
    createSMS() {
        RNAccountKit.loginWithPhone()
        .then((token) => {
          if (!token) {
            console.log('Login cancelled')
          } else {
            console.log(`Logged with phone. Token: ${token}`)
          }
        })
    }
    loginGg = async () => {
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
    loginFB = () => {
        let _self = this;
        LoginManager.logInWithReadPermissions(['email', 'public_profile'])
            .then(
                (result) => {
                    if (result.isCancelled) {
                        console.log('Login cancelled');
                    } else {
                        console.log('Login success with permissions: ' + result.grantedPermissions.toString());
                        console.log(result, 'kq fb');
                        AccessToken.getCurrentAccessToken().then((data) => {
                            console.log(data, 'du lieu facebook');
                            const { accessToken } = data;
                            _self.initUser(accessToken);
                        });
                    }
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );
    }
    initUser(token) {
        fetch('https://graph.facebook.com/me?fields=email,name,picture.type(large)&access_token=' + token)
            .then((response) => response.json())
            .then((json) => {
                // Some user object has been set up somewhere, build that user here
                console.log(json, 'hahahaha');
            })
            .catch((e) => {
                console.log(e);
                throw Error('ERROR GETTING DATA FROM FACEBOOK');
            });
    }
    render() {
        const { container, nav, iconSaladStyle, title, welcome } = styles;
        return (
            <ScrollView style={container}>
                <View style={nav}>
                    <Image source={iconSalad} style={iconSaladStyle} tintColor='#fff' />
                    <Text style={title}>Organic</Text>
                </View>
                <View>
                    <Text style={welcome}>Chào mừng bạn !</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    {this.state.showLogin ?
                        <Login
                            showCreate={this.showCreate.bind(this)}
                            loginFB={this.loginFB.bind(this)}
                            loginGg={this.loginGg.bind(this)}
                        />
                        :
                        <CreateAcount
                            showLogin={this.showLogin.bind(this)}
                            createSMS={this.createSMS.bind(this)}
                        />}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    nav: {
        flexDirection: 'row',
        height: (0.48 / 6) * screenHeight,
        width: screenWidth,
        alignItems: 'center',
        backgroundColor: primaryColor,
        elevation: 0.5,
    },
    title: {
        fontSize: 24,
        fontFamily: 'FondyScript_PERSONAL_USE_ONLY',
        color: '#fff',
        marginLeft: 5
    },
    iconSaladStyle: {
        width: 24,
        height: 24,
        resizeMode: 'stretch',
        marginLeft: 5
    },
    welcome: {
        marginTop: 10,
        color: '#111',
        fontSize: 24,
        // fontWeight: '500',
        marginLeft: 15,
        fontFamily: 'Comfortaa-Regular'
    }
});

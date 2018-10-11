import React, { Component } from 'react';
import {
    Text, View, Image, StyleSheet, TextInput, TouchableOpacity,
    ScrollView, Alert, ActivityIndicator, AsyncStorage
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import Toast from 'react-native-easy-toast';
import { NavigationActions } from 'react-navigation';


import { screenHeight, screenWidth } from '../../styles/variables';

const arrow = require('../../images/icons/arrow.png');
const face = require('../../images/icons/facebook.png');
const google = require('../../images/icons/google.png');

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            pass: '',
            email: ''
        };
    }

    checkRequire() {
        if (this.state.email.length === 0) {
            this.txtEmail.focus();
            this.refs.toast.show('Mời bạn cung cấp Email/SĐT', 3000);
            return false;
        }
        const phoneno = /^\d{10}$/;
        console.log(phoneno.test(this.state.email));
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.state.email) && !phoneno.test(this.state.email)) {
            this.txtEmail.focus();
            this.refs.toast.show('Email/SĐT không đúng định dạng', 3000);
            return false;
        }
        if (this.state.pass.length < 6) {
            this.txtPass.focus();
            this.refs.toast.show('Mật khẩu ít nhất 6 kí tự', 3000);
            return false;
        }
        return true;
    }

    loginGg = async () => {
        try {
            await GoogleSignin.hasPlayServices({ autoResolve: true, showPlayServicesUpdateDialog: true });
            await GoogleSignin.configure({
                webClientId: '120639916537-q4iqf394iearhhqckv1nmb5cgitpas46.apps.googleusercontent.com',
                offlineAccess: false,
            });
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo, 'g+');
            Alert.alert('hehe', userInfo.accessToken);
            console.log(userInfo.user, 'user google');
            // this.setState({ userInfo });
            const name = JSON.stringify(userInfo.user.name);
            const email = JSON.stringify(userInfo.user.email);
            const photo = JSON.stringify(userInfo.user.photo);

            const ws = new WebSocket('ws://202.191.56.103:5588/local-server/CreateAccount');
            ws.onopen = () => {
                this.setState({
                    loading: true
                });
                ws.send(`{"data":{"accountId": 0,"imagePath":${photo},"userName":${name},"password":"","address":"","phoneNumber":"","mail":${email},"typeSignIn":4}}`);
                ws.onmessage = async (e) => {
                    // a message was received
                    console.log(e.data);
                    const response = JSON.parse(e.data);
                    console.log(response, 'ket qua tra ve');
                    this.setState({
                        loading: false
                    });
                    const resetAction = NavigationActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'SplashScreen' })],
                    });
                    if (response.code === 200) {
                        await AsyncStorage.setItem('@token', JSON.stringify(response.jwt));
                        this.props.navigation.dispatch(resetAction);
                    }
                };

                ws.onerror = (e) => {
                    // an error occurred
                    console.log(e.message);
                };

                ws.onclose = (e) => {
                    // connection closed
                    console.log(e.code, e.reason);
                };
            };
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                Alert.alert('hehe', error.code);
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
                Alert.alert('hehe', error.code);
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                Alert.alert('hehe', error.code);
            } else {
                // some other error happened
                console.log('hahahahahah');
                console.log(error);
                Alert.alert('haha', error);
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
                            Alert.alert('fb', accessToken);
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
                const email = JSON.stringify(json.email);
                const name = JSON.stringify(json.name);
                const picture = JSON.stringify(json.picture.data.url);
                const ws = new WebSocket('ws://202.191.56.103:5588/local-server/CreateAccount');
                ws.onopen = () => {
                    this.setState({
                        loading: true
                    });
                    ws.send(`{"data":{"accountId": 0,"imagePath":${picture},"userName":${name},"password":"","address":"","phoneNumber":"","mail":${email},"typeSignIn":5}}`);
                    ws.onmessage = async (e) => {
                        // a message was received
                        console.log(e.data);
                        const response = JSON.parse(e.data);
                        console.log(response, 'ket qua tra ve');
                        this.setState({
                            loading: false
                        });
                        const resetAction = NavigationActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'SplashScreen' })],
                        });
                        console.log(response.code === 200, 'bieu thuc');
                        if (response.code === 200) {
                            await AsyncStorage.setItem('@token', JSON.stringify(response.jwt));
                            this.props.navigation.dispatch(resetAction);
                        }
                    };

                    ws.onerror = (e) => {
                        // an error occurred
                        console.log(e.message);
                    };

                    ws.onclose = (e) => {
                        // connection closed
                        console.log(e.code, e.reason);
                    };
                }

            })
            .catch((e) => {
                console.log(e);
                throw Error('ERROR GETTING DATA FROM FACEBOOK');
            });
    }
    countine() {
        if (!this.checkRequire()) {
            return;
        }
        const ws = new WebSocket('ws://202.191.56.103:5588/local-server/SignIn');
        const phoneno = /^\d{10}$/;
        ws.onopen = () => {
            // connection opened
            this.setState({
                loading: true
            });
            if (phoneno.test(this.state.email)) {
                ws.send(`{"data":{"password":${this.state.pass},"phoneNumber":${this.state.email},"mail":""},"typeSignIn":8}`);
            }
            ws.send(`{"data":{"password":${this.state.pass},"phoneNumber":"","mail":${this.state.email}},"typeSignIn":7}`);
        };

        ws.onmessage = async (e) => {
            // a message was received
            console.log(e.data);
            const response = JSON.parse(e.data);
            console.log(response, 'ket qua tra ve');
            this.setState({
                loading: false
            });
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'SplashScreen' })],
            });
            if (response.code === 200) {
                console.log('hahahahahaha');
                console.log(response.jwt);
                try {
                    await AsyncStorage.setItem('@token', JSON.stringify(response.jwt));
                    this.props.navigation.dispatch(resetAction);
                } catch (error) {
                    console.log(error);
                }
            }
        };

        ws.onerror = (e) => {
            // an error occurred
            console.log(e.message);
        };

        ws.onclose = (e) => {
            // connection closed
            console.log(e.code, e.reason);
        };
    }
    render() {
        const { wrap, create, choose, text1, text2, check, login, textInput1, textInput2,
            styleArrow, wrapForgetPass, wrapContinue, wrapFace, wrapGoogle } = styles;
        return (
            <ScrollView>
                <View style={wrap}>
                    {this.state.loading ?
                        (<View
                            style={{
                                position: 'absolute',
                                top: 110,
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                marginLeft: (0.4 * screenWidth) - 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(0,0,0,0.65)'
                            }}
                        >
                            <ActivityIndicator size="large" color="#ffffff" />
                        </View>) : null
                    }
                    <View style={create}>
                        <TouchableOpacity style={choose} onPress={this.props.showCreate} />
                        <Text style={text1}>Tạo tài khoản mới</Text>
                    </View>
                    <View>
                        <View style={login}>
                            <View style={choose} >
                                <View style={check} />
                            </View>
                            <Text style={text2}>Đăng nhập</Text>
                        </View>
                        <TextInput
                            style={textInput1}
                            placeholderTextColor='#9b9c9d'
                            placeholder='Email/SĐT'
                            ref={comp => (this.txtEmail = comp)}
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={this.state.email}
                            onChangeText={(text) => {
                                this.setState({ email: text });
                            }}
                        />
                        <TextInput
                            style={textInput2}
                            ref={comp => (this.txtPass = comp)}
                            placeholderTextColor='#9b9c9d'
                            placeholder='Mật khẩu'
                            value={this.state.pass}
                            secureTextEntry
                            onChangeText={(text) => {
                                this.setState({ pass: text });
                            }}
                        />
                        <TouchableOpacity style={wrapForgetPass}>
                            <Image source={arrow} style={styleArrow} tintColor='blue' />
                            <Text style={{ color: 'blue', fontSize: 12, marginLeft: 5 }}>Quên mật khẩu</Text>
                        </TouchableOpacity>
                        <LinearGradient colors={['#f7dd9f', '#f0c14d']} style={wrapContinue}>
                            <TouchableOpacity onPress={this.countine.bind(this)}>
                                <Text style={{ color: '#111' }}>Tiếp Tục</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                </View>
                <TouchableOpacity style={wrapFace} onPress={this.loginFB.bind(this)}>
                    <Image source={face} style={{ width: 22, height: 22 }} />
                    <Text style={{ color: '#fff', marginLeft: 10 }}>Tiếp tục với facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={wrapGoogle} onPress={this.loginGg.bind(this)}>
                    <Image source={google} style={{ width: 22, height: 22 }} />
                    <Text style={{ color: '#fff', marginLeft: 10 }}>Tiếp tục với google</Text>
                </TouchableOpacity>
                <Toast
                    ref="toast"
                    style={{ backgroundColor: '#F3553C', borderRadius: 5 }}
                    position='top'
                    positionValue={0}
                    fadeInDuration={150}
                    fadeOutDuration={150}
                    textStyle={{ color: '#ffffff' }}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        height: 0.5 * screenHeight,
        width: 0.8 * screenWidth,
        marginTop: 0.03 * screenHeight,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5
    },
    create: {
        height: (0.45 / 6) * screenHeight,
        backgroundColor: '#f4f4f4',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
        flexDirection: 'row'
    },
    choose: {
        height: 24,
        width: 24,
        borderRadius: 12,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#9b9c9d',
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        fontSize: 15,
        color: '#111',
        marginLeft: 5,
    },
    text2: {
        fontSize: 15,
        color: '#111',
        marginLeft: 5,
        fontWeight: '500'
    },
    login: {
        height: (0.45 / 6) * screenHeight,
        alignItems: 'center',
        flexDirection: 'row'
    },
    check: {
        backgroundColor: '#e77600',
        width: 12,
        height: 12,
        borderRadius: 6
    },
    textInput1: {
        height: (0.45 / 6) * screenHeight,
        borderRadius: 2,
        borderColor: '#9b9c9d',
        borderWidth: 1,
        marginHorizontal: 15,
        marginTop: 5
    },
    textInput2: {
        height: (0.45 / 6) * screenHeight,
        borderRadius: 2,
        borderColor: '#9b9c9d',
        borderWidth: 1,
        marginHorizontal: 15,
        marginTop: 15
    },
    styleArrow: {
        width: 10,
        height: 10,
        marginTop: 3
    },
    wrapForgetPass: {
        marginLeft: 15,
        marginTop: 10,
        flexDirection: 'row'
    },
    wrapContinue: {
        marginHorizontal: 15,
        height: (0.38 / 6) * screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        borderColor: '#9b9c9d',
        borderWidth: 1,
        marginTop: 15
    },
    wrapFace: {
        width: 0.8 * screenWidth,
        height: (0.45 / 6) * screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3b5998',
        borderRadius: 5,
        borderColor: '#9b9c9d',
        borderWidth: 1,
        marginTop: 30,
        flexDirection: 'row'
    },
    wrapGoogle: {
        width: 0.8 * screenWidth,
        height: (0.45 / 6) * screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e2353d',
        borderRadius: 5,
        borderColor: '#9b9c9d',
        borderWidth: 1,
        marginTop: 20,
        flexDirection: 'row'
    }
});


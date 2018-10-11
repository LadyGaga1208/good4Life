import React, { Component } from 'react';
import {
    Text, View, StyleSheet, ScrollView, TextInput,
    Image, TouchableOpacity, ActivityIndicator, Alert, AsyncStorage
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-easy-toast';
import { NavigationActions } from 'react-navigation';
import RNAccountKit from 'react-native-facebook-account-kit';

import { screenHeight, screenWidth } from '../../styles/variables';

const iconCheck = require('../../images/icons/circle.png');
const sms = require('../../images/icons/sms.png');
const iconChecked = require('../../images/icons/checked.png');

export default class CreateAcount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            name1: '',
            pass1: '',
            name2: '',
            pass2: '',
            hidePassword: true,
            createSMS: false,
            phone: ''
        };
    }

    checkRequireMail() {
        if (this.state.name1.length === 0) {
            this.txtName1.focus();
            this.refs.toast.show('Tên không được để trống', 3000);
            return false;
        }
        if (this.state.email.length === 0) {
            this.txtEmail.focus();
            this.refs.toast.show('Mời bạn cung cấp email', 3000);
            return false;
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.state.email)) {
            this.txtEmail.focus();
            this.refs.toast.show('Email không đúng định dạng', 3000);
            return false;
        }
        if (this.state.pass1.length < 6) {
            this.txtPass1.focus();
            this.refs.toast.show('Mật khẩu ít nhất 6 kí tự', 3000);
            return false;
        }
        return true;
    }

    checkRequirePhone() {
        if (this.state.name2.length === 0) {
            this.txtName2.focus();
            this.refs.toast.show('Tên không được để trống', 3000);
            return false;
        }
        if (this.state.pass2.length < 6) {
            this.txtPass2.focus();
            this.refs.toast.show('Mật khẩu ít nhất 6 kí tự', 3000);
            return false;
        }
        return true;
    }

    _regisMail = async () => {
        if (!this.checkRequireMail()) {
            return;
        }
        const ws = new WebSocket('ws://202.191.56.103:5588/local-server/CreateAccount');
        ws.onopen = () => {
            // connection opened
            this.setState({
                loading: true
            });
            ws.send(`{"data":{"accountId":0,"imagePath":"","userName":${this.state.name1},"password":${this.state.pass1},"address":"","phoneNumber":"","mail":${this.state.email}}}`); // send a message
        };
        ws.onmessage = async (e) => {
            // a message was received
            console.log(e.data, 'hihihihi');
            const response = JSON.parse(e.data);
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
            this.setState({
                loading: false
            });
            console.log(e.message, 'hahahaha');
        };
    }

    _regisPhone = async () => {
        if (!this.checkRequirePhone()) {
            return;
        }
        const ws = new WebSocket('ws://202.191.56.103:5588/local-server/CreateAccount');
        ws.onopen = () => {
            // connection opened
            this.setState({
                loading: true
            });
            ws.send(`{"data":{"accountId":0,"imagePath":"","userName":${this.state.name2},"password":${this.state.pass2},"address":"","phoneNumber":${this.state.phone},"mail":""}}`); // send a message
        };
        ws.onmessage = async (e) => {
            // a message was received
            console.log(e.data, 'hihihihi');
            const response = JSON.parse(e.data);
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
            this.setState({
                loading: false
            });
            console.log(e.message, 'hahahaha');
        };
    }

    createSMS() {
        const _self = this;
        RNAccountKit.loginWithPhone()
            .then((token) => {
                if (!token) {
                    console.log('Login cancelled');
                } else {
                    const tokenID = JSON.stringify(token);
                    console.log(`Logged with phone. Token: ${tokenID}`);
                    Alert.alert('sms', tokenID);
                }
            });

        RNAccountKit.getCurrentAccount()
            .then((account) => {
                console.log(`Current account: ${account}`);
                Alert.alert('Sms', JSON.stringify(account));
                console.log(account.phoneNumber.number);
                if (account.phoneNumber.number) {
                    _self.setState({
                        createSMS: true,
                        phone: `0${account.phoneNumber.number}`
                    });
                }
            });
    }

    render() {
        const { wrap, create, choose, text1, check, textInput, showPass, styleCheck, wrapContinue, login, text2,
            wrapFace } = styles;
        return (
            <ScrollView>
                {
                    this.state.createSMS ?
                        (
                            <View>
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
                                        <TouchableOpacity style={choose} >
                                            <View style={check} />
                                        </TouchableOpacity>
                                        <Text style={text1}>Tạo tài khoản mới</Text>
                                    </View>
                                    <TextInput
                                        style={textInput}
                                        placeholderTextColor='#9b9c9d'
                                        placeholder='Tên tài khoản'
                                        ref={comp => (this.txtName2 = comp)}
                                        autoCapitalize='none'
                                        value={this.state.name2}
                                        onChangeText={(text) => {
                                            this.setState({ name2: text });
                                        }}
                                    />
                                    <TextInput
                                        style={textInput}
                                        placeholderTextColor='#9b9c9d'
                                        placeholder='Email'
                                        ref={comp => (this.txtPhone = comp)}
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        textContentType='emailAddress'
                                        keyboardType='email-address'
                                        value={this.state.phone}
                                        onChangeText={(text) => {
                                            this.setState({ phone: text });
                                        }}
                                    />
                                    <TextInput
                                        ref={comp => (this.txtPass2 = comp)}
                                        style={textInput}
                                        placeholderTextColor='#9b9c9d'
                                        placeholder='Mật khẩu'
                                        value={this.state.pass2}
                                        secureTextEntry={this.state.hidePassword}
                                        onChangeText={(text) => {
                                            this.setState({ pass2: text });
                                        }}
                                    />
                                    <View style={showPass}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.setState({
                                                    hidePassword: !this.state.hidePassword
                                                });
                                            }
                                            }
                                        >
                                            {this.state.hidePassword ?
                                                <Image source={iconCheck} style={styleCheck} tintColor='#006BFF' /> : <Image source={iconChecked} style={styleCheck} tintColor='#006BFF' />
                                            }
                                        </TouchableOpacity>
                                        <Text style={{ color: '#006BFF', fontSize: 12, marginLeft: 5 }}>Show Password</Text>
                                    </View>
                                    <LinearGradient colors={['#f7dd9f', '#f0c14d']} style={wrapContinue}>
                                        <TouchableOpacity onPress={this._regisPhone.bind(this)}>
                                            <Text style={{ color: '#111' }}>Tiếp Tục</Text>
                                        </TouchableOpacity>
                                    </LinearGradient>
                                </View>
                                <View style={login}>
                                    <TouchableOpacity style={choose} onPress={this.props.showLogin} />
                                    <Text style={text2}>Đăng nhập</Text>
                                </View>
                                <Toast
                                    ref="toast"
                                    style={{ backgroundColor: '#F3553C', borderRadius: 5 }}
                                    position='top'
                                    positionValue={0}
                                    fadeInDuration={150}
                                    fadeOutDuration={150}
                                    textStyle={{ color: '#ffffff' }}
                                />
                            </View>
                        )
                        :
                        (<View>
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
                                    <TouchableOpacity style={choose} >
                                        <View style={check} />
                                    </TouchableOpacity>
                                    <Text style={text1}>Tạo tài khoản mới</Text>
                                </View>
                                <TextInput
                                    style={textInput}
                                    placeholderTextColor='#9b9c9d'
                                    placeholder='Tên tài khoản'
                                    ref={comp => (this.txtName1 = comp)}
                                    autoCapitalize='none'
                                    value={this.state.name1}
                                    onChangeText={(text) => {
                                        this.setState({ name1: text });
                                    }}
                                />
                                <TextInput
                                    style={textInput}
                                    placeholderTextColor='#9b9c9d'
                                    placeholder='Email'
                                    ref={comp => (this.txtEmail = comp)}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    textContentType='emailAddress'
                                    keyboardType='email-address'
                                    value={this.state.email}
                                    onChangeText={(text) => {
                                        this.setState({ email: text });
                                    }}
                                />
                                <TextInput
                                    ref={comp => (this.txtPass1 = comp)}
                                    style={textInput}
                                    placeholderTextColor='#9b9c9d'
                                    placeholder='Mật khẩu'
                                    value={this.state.pass1}
                                    secureTextEntry={this.state.hidePassword}
                                    onChangeText={(text) => {
                                        this.setState({ pass1: text });
                                    }}
                                />
                                <View style={showPass}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.setState({
                                                hidePassword: !this.state.hidePassword
                                            });
                                        }
                                        }
                                    >
                                        {this.state.hidePassword ?
                                            <Image source={iconCheck} style={styleCheck} tintColor='#006BFF' /> : <Image source={iconChecked} style={styleCheck} tintColor='#006BFF' />
                                        }
                                    </TouchableOpacity>
                                    <Text style={{ color: '#006BFF', fontSize: 12, marginLeft: 5 }}>Show Password</Text>
                                </View>
                                <LinearGradient colors={['#f7dd9f', '#f0c14d']} style={wrapContinue}>
                                    <TouchableOpacity onPress={this._regisMail.bind(this)}>
                                        <Text style={{ color: '#111' }}>Tiếp Tục</Text>
                                    </TouchableOpacity>
                                </LinearGradient>
                            </View>
                            <View style={login}>
                                <TouchableOpacity style={choose} onPress={this.props.showLogin} />
                                <Text style={text2}>Đăng nhập</Text>
                            </View>
                            <TouchableOpacity style={wrapFace} onPress={this.createSMS.bind(this)}>
                                <Image source={sms} style={{ width: 22, height: 22 }} />
                                <Text style={{ color: '#fff', marginLeft: 10 }}>Tiếp tục với SMS</Text>
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
                        </View>
                        )
                }

            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        height: 0.48 * screenHeight,
        width: 0.8 * screenWidth,
        marginTop: 0.03 * screenHeight,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    create: {
        height: (0.45 / 6) * screenHeight,
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
        fontWeight: '500'
    },
    check: {
        backgroundColor: '#e77600',
        width: 12,
        height: 12,
        borderRadius: 6
    },
    textInput: {
        height: (0.45 / 6) * screenHeight,
        borderRadius: 2,
        borderColor: '#9b9c9d',
        borderWidth: 1,
        marginHorizontal: 15,
        marginTop: 5
    },
    styleCheck: {
        width: 12,
        height: 12,
        resizeMode: 'stretch',
        marginTop: 3
    },
    showPass: {
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
    login: {
        height: (0.45 / 6) * screenHeight,
        backgroundColor: '#f4f4f4',
        borderColor: '#ddd',
        borderWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        borderLeftWidth: 1,
        borderBottomColor: '#ddd',
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    text2: {
        fontSize: 15,
        color: '#111',
        marginLeft: 5,
    },
    wrapFace: {
        width: 0.8 * screenWidth,
        height: (0.45 / 6) * screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff7619',
        borderRadius: 5,
        borderColor: '#9b9c9d',
        borderWidth: 1,
        marginTop: 30,
        flexDirection: 'row'
    },
    face: {

    }
});

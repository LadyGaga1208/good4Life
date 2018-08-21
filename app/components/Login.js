import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { screenHeight, screenWidth } from '../styles/variables';

const arrow = require('../images/icons/arrow.png');
const face = require('../images/icons/facebook.png');

export default class Login extends Component {
    render() {
        const { wrap, create, choose, text1, text2, check, login, textInput1, textInput2,
            styleArrow, wrapForgetPass, wrapContinue, wrapFace } = styles;
        return (
            <View>
                <View style={wrap}>
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
                            placeholder='Tên tài khoản(SĐT)'
                        />
                        <TextInput
                            style={textInput2}
                            placeholderTextColor='#9b9c9d'
                            placeholder='Mật khẩu'
                        />
                        <View style={wrapForgetPass}>
                            <Image source={arrow} style={styleArrow} tintColor='blue' />
                            <Text style={{ color: 'blue', fontSize: 12, marginLeft: 5 }}>Quên mật khẩu</Text>
                        </View>
                        <LinearGradient colors={['#f7dd9f', '#f0c14d']} style={wrapContinue}>
                            <Text style={{ color: '#111' }}>Tiếp Tục</Text>
                        </LinearGradient>
                    </View>
                </View>
                <TouchableOpacity style={wrapFace} onPress={this.props.login}>
                    <Image source={face} style={{ width: 22, height: 22 }} />
                    <Text style={{ color: '#fff', marginLeft: 10 }}>Tiếp tục với facebook</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        height: 0.5 * screenHeight,
        width: 0.8 * screenWidth,
        marginTop: 0.05 * screenHeight,
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
    }
});


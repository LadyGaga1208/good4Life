import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { screenHeight, screenWidth } from '../styles/variables';

const iconCheck = require('../images/icons/circle.png');
const face = require('../images/icons/facebook.png');

export default class CreateAcount extends Component {
    render() {
        const { wrap, create, choose, text1, check, textInput, showPass, styleCheck, wrapContinue, login, text2,
            wrapFace } = styles;
        return (
            <ScrollView>
                <View style={wrap}>
                    <View style={create}>
                        <TouchableOpacity style={choose} >
                            <View style={check} />
                        </TouchableOpacity>
                        <Text style={text1}>Tạo tài khoản mới</Text>
                    </View>
                    <TextInput
                        style={textInput}
                        placeholderTextColor='#9b9c9d'
                        placeholder='Số điện thoại'
                    />
                    <TextInput
                        style={textInput}
                        placeholderTextColor='#9b9c9d'
                        placeholder='Tên tài khoản'
                    />
                    <TextInput
                        style={textInput}
                        placeholderTextColor='#9b9c9d'
                        placeholder='Mật khẩu'
                    />
                    <View style={showPass}>
                        <Image source={iconCheck} style={styleCheck} tintColor='blue' />
                        <Text style={{ color: 'blue', fontSize: 12, marginLeft: 5 }}>Show Password</Text>
                    </View>
                    <LinearGradient colors={['#f7dd9f', '#f0c14d']} style={wrapContinue}>
                        <Text style={{ color: '#111' }}>Tiếp Tục</Text>
                    </LinearGradient>

                </View>
                <View style={login}>
                    <TouchableOpacity style={choose} onPress={this.props.showLogin} />
                    <Text style={text2}>Đăng nhập</Text>
                </View>
                <View style={wrapFace}>
                    <Image source={face} style={{ width: 22, height: 22 }} />
                    <Text style={{ color: '#fff', marginLeft: 10 }}>Tiếp tục với facebook</Text>
                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        height: 0.49 * screenHeight,
        width: 0.8 * screenWidth,
        marginTop: 0.05 * screenHeight,
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
        width: 10,
        height: 10,
        resizeMode: 'stretch',
        marginTop: 2
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
        backgroundColor: '#3b5998',
        borderRadius: 5,
        borderColor: '#9b9c9d',
        borderWidth: 1,
        marginTop: 30,
        flexDirection: 'row'
    },
    face: {

    }
});

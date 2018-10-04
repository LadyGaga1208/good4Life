import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { screenHeight, screenWidth } from '../../styles/variables';

const avatar = require('../../images/icons/avatar.png');
const list = require('../../images/icons/list.png');
const user = require('../../images/icons/user.png');
const help = require('../../images/icons/help.png');

export default class DefaultPr extends Component {

    gotoAuthentication() {
        this.props.navigation.navigate('Authentication');
    }

    gotoSetting() {
        this.props.navigation.navigate('Setting');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={{
                        height: 0.25 * screenHeight,
                        width: screenWidth,
                    }}
                    resizeMode='stretch'
                    source={{ uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/248680_146029758883933_1656016426_n.jpg?_nc_cat=102&oh=5304f06fe1ebf63065c8cbb8a378cf97&oe=5C4F1EB1' }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={avatar}
                            style={{
                                width: 45,
                                height: 45,
                                marginTop: 20,
                                marginLeft: 10
                            }}
                        />
                        <Text
                            style={{
                                fontFamily: 'Comfortaa-Regular',
                                fontSize: 12,
                                color: '#ffffff',
                                marginLeft: 5,
                                marginTop: 5,
                            }}
                        >
                            Chào mừng bạn đến với Organic !
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderColor: '#ffffff',
                            borderRadius: 5,
                            borderWidth: 2,
                            justifyContent: 'space-around',
                            width: 0.5 * screenWidth,
                            marginTop: 20,
                            marginLeft: 0.25 * screenWidth
                        }}
                        onPress={this.gotoAuthentication.bind(this)}
                    >
                        <Text style={styles.text}>Đăng kí</Text>
                        <Text style={styles.text}>||</Text>
                        <Text style={styles.text}>Đăng nhập</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <View
                    style={{
                        height: 0.08 * screenHeight,
                        backgroundColor: '#ffffff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: '#ddd',
                        marginTop: 15
                    }}
                >
                    <View
                        style={{
                            width: 24,
                            height: 24,
                            backgroundColor: '#0066cc',
                            justifyContent: 'center',
                            alignContent: 'center',
                            borderRadius: 12,
                            marginLeft: 20
                        }}
                    >
                        <Image
                            source={list}
                            style={{
                                width: 18,
                                height: 18,
                                marginLeft: 3
                            }}
                        />
                    </View>
                    <Text style={{ color: '#111', marginLeft: 10 }}>Đơn mua</Text>
                </View>
                <TouchableOpacity
                    style={{
                        height: 0.08 * screenHeight,
                        backgroundColor: '#ffffff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: '#ddd',
                        marginTop: 2
                    }}
                    onPress={this.gotoSetting.bind(this)}
                >
                    <View
                        style={{
                            width: 24,
                            height: 24,
                            backgroundColor: '#cc00c6',
                            justifyContent: 'center',
                            alignContent: 'center',
                            borderRadius: 12,
                            marginLeft: 20
                        }}
                    >
                        <Image
                            source={user}
                            style={{
                                width: 18,
                                height: 18,
                                marginLeft: 3
                            }}
                        />
                    </View>
                    <Text style={{ color: '#111', marginLeft: 10 }}>Tài khoản</Text>
                </TouchableOpacity>
                <View
                    style={{
                        height: 0.08 * screenHeight,
                        backgroundColor: '#ffffff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: '#ddd',
                        marginTop: 2
                    }}
                >
                    <View
                        style={{
                            width: 24,
                            height: 24,
                            backgroundColor: '#78cc00',
                            justifyContent: 'center',
                            alignContent: 'center',
                            borderRadius: 12,
                            marginLeft: 20
                        }}
                    >
                        <Image
                            source={help}
                            style={{
                                width: 18,
                                height: 18,
                                marginLeft: 3
                            }}
                        />
                    </View>
                    <Text style={{ color: '#111', marginLeft: 10 }}>Trợ giúp</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 12,
        color: '#ffffff',
    }
});


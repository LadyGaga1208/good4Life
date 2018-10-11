import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { screenHeight, screenWidth } from '../../styles/variables';

const list = require('../../images/icons/list.png');
const user = require('../../images/icons/user.png');
const help = require('../../images/icons/help.png');

export default class ProfileLogin extends Component {

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
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25,
                                overflow: 'hidden',
                                marginTop: 20,
                                marginLeft: 10,
                                borderColor: '#fff',
                                borderWidth: 2
                            }}
                        >
                            <Image
                                source={{ uri: 'https://znews-photo-td.zadn.vn/w1024/Uploaded/ofh_fdmzsofw/2018_02_15/201710100400051.jpg' }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: 'stretch',
                                }}
                            />
                        </View>
                        <Text
                            style={{
                                fontFamily: 'Comfortaa-Regular',
                                fontSize: 14,
                                color: '#ffffff',
                                marginLeft: 5,
                                marginTop: 5,
                            }}
                        >
                            Long Đoàn
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 5 }}>
                        <Text style={styles.text1}>hust@gmail.com</Text>
                        <Text style={[styles.text1, { marginHorizontal: 2 }]}>||</Text>
                        <Text style={styles.text1}> 0974539894</Text>
                    </View>
                </ImageBackground>
                <View
                    style={{
                        height: 0.08 * screenHeight,
                        backgroundColor: '#ffffff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderColor: '#ddd',
                        marginTop: 7
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
    },
    text1: {
        fontSize: 12,
        color: '#ffffff',
        fontWeight: 'bold',
    }
});


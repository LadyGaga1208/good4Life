import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';

import { screenHeight, screenWidth, primaryColor } from '../../styles/variables';


export default class Default extends Component {
    goToAuthentication() {
        this.props.navigation.navigate('Authentication');
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        height: (0.48 / 6) * screenHeight,
                        width: screenWidth,
                        alignItems: 'center',
                        backgroundColor: primaryColor,
                        elevation: 0.5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: '500',
                            marginLeft: 10,
                            color: '#ffffff'
                        }}
                    >
                        Thông báo</Text>
                </View>
                <View
                    style={{
                        // backgroundColor: 'red',
                        marginTop: 0.1 * screenHeight,
                        marginLeft: 15
                    }}
                >
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        source={require('../../animations/no_notifications!.json')}
                        autoPlay
                        loop
                        style={{ width: 200, height: 200 }}
                    />
                </View>
                <TouchableOpacity onPress={this.goToAuthentication.bind(this)}>
                    <LinearGradient colors={['#f7dd9f', '#f0c14d']} style={styles.countinue}>
                        <Text style={styles.textCountinue}>Đăng nhập</Text>
                        <Text style={styles.textCountinue}>||</Text>
                        <Text style={styles.textCountinue}>Đăng kí</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    countinue: {
        height: 40,
        width: 0.5 * screenWidth,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: '#111',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        marginLeft: 0.25 * screenWidth,
        marginTop: 10
    },
    textCountinue: {
        color: '#111',
        fontSize: 14,
    }
});


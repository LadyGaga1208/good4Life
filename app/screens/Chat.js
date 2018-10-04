import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { primaryColor, screenWidth, screenHeight } from '../styles/variables';

const message = require('../images/icons/message.png');

class Chat extends PureComponent {

    static navigationOptions = {
        tabBarVisible: false,
        title: 'Tin nhắn',
        headerStyle: {
            backgroundColor: primaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    render() {
        return (
            <View>
                <View
                    style={{
                        alignItems: 'center',
                        height: 0.35 * screenHeight,
                        justifyContent: 'flex-end'
                    }}
                >
                    <Image source={message} />
                    <Text style={{ marginTop: 10 }}>Đăng nhập để xem tin nhắn bị bỏ lỡ của bạn</Text>
                </View>
                <TouchableOpacity >
                    <LinearGradient colors={['#44ec1e', '#3cbd1f']} style={styles.countinue}>
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
        marginTop: 20
    },
    textCountinue: {
        color: '#111',
        fontSize: 14,
    }
});

export default Chat;

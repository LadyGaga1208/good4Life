import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import { screenHeight, screenWidth, primaryColor } from '../../styles/variables';

export default class Setting extends Component {
    static navigationOptions = {
        title: 'Thiết lập tài khoản',
        headerStyle: {
            backgroundColor: primaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    logout = async () => {
        try {
            await AsyncStorage.clear();
            this.props.navigation.navigate('SplashScreen');
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>

                <LinearGradient colors={['#f7dd9f', '#f0c14d']} style={styles.wrapContinue}>
                    <TouchableOpacity onPress={this.logout.bind(this)}>
                        <Text style={{ color: '#111' }}>Đăng xuất</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    wrapContinue: {
        marginHorizontal: 0.3 * screenWidth,
        height: (0.4 / 6) * screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        borderColor: '#9b9c9d',
        borderWidth: 1,
        marginTop: 0.75 * screenHeight
    },
});

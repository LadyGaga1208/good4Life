import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';

import { screenHeight, screenWidth, primaryColor } from '../../styles/variables';
import Register from './Register';
import Login from './Login';

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
                            navigation={this.props.navigation}

                        />
                        :
                        <Register
                            showLogin={this.showLogin.bind(this)}
                            navigation={this.props.navigation}
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

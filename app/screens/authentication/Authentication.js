import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { screenHeight, screenWidth, primaryColor } from '../../styles/variables';
import Login from '../../components/Login';
import CreateAcount from '../../components/CreateAcount';

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
    login() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Profile' })],
        });
        this.props.navigation.dispatch(resetAction);
    }
    render() {
        const { container, nav, iconSaladStyle, title } = styles;
        return (
            <View style={container}>
                <View style={nav}>
                    <Image source={iconSalad} style={iconSaladStyle} tintColor={primaryColor} />
                    <Text style={title}>Organic</Text>
                </View>
                {this.state.showLogin ? <Login showCreate={this.showCreate.bind(this)} login={this.login.bind(this)} /> : <CreateAcount showLogin={this.showLogin.bind(this)} />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    nav: {
        flexDirection: 'row',
        height: (0.48 / 6) * screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4',
        borderColor: '#ddd',
        elevation: 1,
        borderBottomWidth: 1
    },
    title: {
        fontSize: 24,
        fontFamily: 'FondyScript_PERSONAL_USE_ONLY',
        color: primaryColor
    },
    iconSaladStyle: {
        width: 24,
        height: 24,
        resizeMode: 'stretch',
        marginRight: 5
    },
});

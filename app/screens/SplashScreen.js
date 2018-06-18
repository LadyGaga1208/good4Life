import React, { PureComponent } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { screenHeight, screenWidth } from '../styles/variables';

const img = require('../images/imgSplash.png');

export default class SplashScreen extends PureComponent {

    componentDidMount() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'App' })],
        });
        setTimeout(() => this.props.navigation.dispatch(resetAction), 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={img}
                    style={styles.img}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: screenHeight,
        width: screenWidth,
        resizeMode: 'stretch'
    },
});


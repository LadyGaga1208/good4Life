import React, { PureComponent } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Image, View } from 'react-native';

import { screenHeight, screenWidth } from '../styles/variables';

const iconTop = require('../images/icons/gotop.png');

export default class ScrollToTop extends PureComponent {
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.scrollTop}>
                <View style={[styles.container, { opacity: this.props.show ? 1 : 0 }]}>
                    <Image source={iconTop} style={styles.img} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    img: {
        width: 25,
        height: 25
    },
    container: {
        backgroundColor: 'rgba(0, 130, 150, 0.6 )',
        height: 54,
        width: 54,
        borderRadius: 27,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0.78 * screenHeight,
        marginLeft: 0.8 * screenWidth,
    }
});

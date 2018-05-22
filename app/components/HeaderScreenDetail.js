import React, { PureComponent } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

import { screenHeight, screenWidth, primaryColor } from '../styles/variables';

const iconBack = require('../images/icons/back.png');

export default class HeaderScreenDetail extends PureComponent {
    render() {
        const { container, styleIcon, wrapIcon, textHeder, wrapText, styleIconCart } = styles;
        return (
            <View style={container}>
                <TouchableOpacity style={wrapIcon} onPress={this.props.back}>
                    <Image
                        source={iconBack}
                        style={styleIcon}
                    />
                </TouchableOpacity>
                <View style={wrapText}>
                    <Text style={textHeder} numberOfLines={1}>{this.props.name}</Text>
                </View>
                <TouchableOpacity style={wrapIcon} onPress={this.props.onPress}>
                    <Image
                        source={this.props.icon}
                        style={styleIconCart}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: primaryColor,
        height: (0.45 / 6) * screenHeight,
        justifyContent: 'space-between',
        borderColor: '#ddd',
        borderBottomWidth: 1,
        elevation: 2
    },
    wrapIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 0.13 * screenWidth
    },
    styleIcon: {
        width: 24,
        height: 24
    },
    styleIconCart: {
        width: 27,
        height: 27
    },
    wrapText: {
        width: 0.74 * screenWidth,
        justifyContent: 'center'
    },
    textHeder: {
        fontSize: 21,
        color: '#fff',
        fontWeight: '400',
    }
});


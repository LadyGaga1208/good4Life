import React, { PureComponent } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Image
} from 'react-native';

import { screenHeight, screenWidth } from '../styles/variables';

const iconMap = require('../images/icons/map1.png');
const iconFollow = require('../images/icons/follower.png');
const iconStar = require('../images/icons/stargray.png');

export default class ItemStore extends PureComponent {
    render() {
        const { container, imgStore, wrapInfoStore, nameStore, wrap, styleIconMap,
            wrapTextAddress, textAdressStyle, styleTextFollow, styleIconStar } = styles;
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={container}>
                    <Image source={{ uri: `${this.props.source}` }} style={imgStore} />
                    <View style={wrapInfoStore}>
                        <Text style={nameStore} numberOfLine={2}>{this.props.nameStore}</Text>
                        <View style={wrap}>
                            <Image source={iconMap} style={styleIconMap} />
                            <View style={wrapTextAddress}>
                                <Text style={textAdressStyle} numberOfLine={2}>
                                    {this.props.address}
                                </Text>
                            </View>
                        </View>
                        <View style={wrap}>
                            <Image source={iconFollow} style={styleIconMap} />
                            <Text style={styleTextFollow}>{this.props.follow}</Text>
                        </View>
                        <View style={wrap}>
                            <Image source={iconStar} style={styleIconStar} />
                            <Image source={iconStar} style={styleIconStar} />
                            <Image source={iconStar} style={styleIconStar} />
                            <Image source={iconStar} style={styleIconStar} />
                            <Image source={iconStar} style={styleIconStar} />
                            <Text style={styleTextFollow}>({this.props.rate})</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 0.6 * ((1 / 3) * screenHeight),
        flexDirection: 'row',
        marginTop: 10
    },
    imgStore: {
        height: 0.6 * ((1 / 3) * screenHeight),
        // resizeMode: 'stretch',
        width: 0.4 * screenWidth,
    },
    wrapInfoStore: {
        paddingLeft: 10,
        width: 0.6 * screenWidth
    },
    nameStore: {
        fontSize: 15,
        fontFamily: 'Comfortaa-Regular',
        color: '#111111',
    },
    wrap: {
        flexDirection: 'row',
        paddingTop: 5,
    },
    styleIconMap: {
        width: 13,
        height: 13,
        resizeMode: 'stretch',
        marginRight: 5,
        marginTop: 2
    },
    styleIconStar: {
        width: 10,
        height: 10,
        resizeMode: 'stretch',
        marginRight: 5,
        marginTop: 3
    },
    textAdressStyle: {
        fontStyle: 'italic',
        fontSize: 12,
        paddingRight: 5
    },
    wrapTextAddress: {
        width: 0.53 * screenWidth
    },
    styleTextFollow: {
        fontSize: 12
    }
});


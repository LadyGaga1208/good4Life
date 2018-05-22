import React, { PureComponent } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import * as variables from '../../styles/variables';

const iconChat = require('../../images/icons/chatWhite.png');
const iconSalad = require('../../images/icons/salad.png');

export default class Header extends PureComponent {
    render() {
        const { container, nav, wrapName, iconSaladStyle,
            nameApp, iconChatStyle, texInputStyle } = styles;
        return (
            <View style={container}>
                <View style={nav}>
                    <View style={wrapName}>
                        <TouchableOpacity>
                            <Image source={iconSalad} style={iconSaladStyle} />
                        </TouchableOpacity>
                        <Text style={nameApp}>Good for Life</Text>
                    </View>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Image source={iconChat} style={iconChatStyle} />
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={texInputStyle}
                    inlineImageLeft='search'
                    placeholder=' Bạn muốn mua gì ?'
                    placeholderTextColor='#879596'
                    underlineColorAndroid='transparent'
                />
            </View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: variables.primaryColor,
        height: (0.95 / 6) * variables.screenHeight,
    },
    nav: {
        flexDirection: 'row',
        height: (0.45 / 6) * variables.screenHeight,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapName: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    texInputStyle: {
        height: (0.4 / 6) * variables.screenHeight,
        backgroundColor: '#ffffff',
        marginHorizontal: 5
    },
    iconSaladStyle: {
        width: 26,
        height: 26,
        resizeMode: 'stretch',
        marginLeft: 5
    },
    nameApp: {
        fontSize: 20,
        fontFamily: 'Great CIties Personal Use',
        marginLeft: 10,
        color: '#ffffff'
    },
    iconChatStyle: {
        width: 26,
        height: 26,
        resizeMode: 'stretch',
        marginRight: 10
    }
};

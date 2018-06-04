import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { screenHeight, screenWidth } from '../styles/variables';

const iconChat = require('../images/icons/chat.png');
const iconCart = require('../images/icons/shopping.png');

class BuyProduct extends PureComponent {
    render() {
        const { wrap, buyNow, textBuy, icon, wrapIconChat,
            styleIconCart, wrapAddCart, textAddCart } = styles;
        return (
            <View style={wrap}>
                <TouchableOpacity style={wrapIconChat} onPress={this.props.chat}>
                    <Image source={iconChat} style={icon} />
                </TouchableOpacity>
                <TouchableOpacity style={wrapAddCart} onPress={this.props.addToCart}>
                    <Text style={textAddCart}>Thêm vào giỏ</Text>
                    <Image source={iconCart} style={styleIconCart} />
                </TouchableOpacity>
                <TouchableOpacity style={buyNow} onPress={this.props.buyNow}>
                    <Text style={textBuy}>Mua ngay</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    wrap: {
        position: 'absolute',
        bottom: 0,
        height: 0.075 * screenHeight,
        backgroundColor: '#f8f8f8',
        width: screenWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#ddd',
        borderWidth: 1,
        elevation: 2
    },
    buyNow: {
        backgroundColor: '#FF084A',
        width: 0.4 * screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddd',
        borderLeftWidth: 1,
        elevation: 2,
    },
    textBuy: {
        color: '#fff',
        fontSize: 17
    },
    icon: {
        width: 30,
        height: 30
    },
    wrapIconChat: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 0.2 * screenWidth,
        borderColor: '#ddd',
        borderRightWidth: 1,
    },
    styleIconCart: {
        width: 24,
        height: 24
    },
    wrapAddCart: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#111',
    },
    textAddCart: {
        color: '#111',
        fontSize: 15
    }
};

export default BuyProduct;

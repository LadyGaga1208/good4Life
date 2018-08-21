import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


import { screenHeight, screenWidth } from '../styles/variables';

const iconChat = require('../images/icons/chat.png');
const iconCart = require('../images/icons/shopping.png');

class BuyProduct extends PureComponent {
    render() {
        const { wrap, buyNow, textBuy, icon, wrapIconChat,
            styleIconCart, wrapAddCart, textAddCart } = styles;
        return (
            <View style={[wrap, { opacity: this.props.opacity }]}>
                <TouchableOpacity style={wrapIconChat} onPress={this.props.chat}>
                    <Image source={iconChat} style={icon} />
                </TouchableOpacity>
                <TouchableOpacity style={wrapAddCart} onPress={this.props.addToCart}>
                    <Text style={textAddCart}>Thêm vào giỏ</Text>
                    <Image source={iconCart} style={styleIconCart} />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.buyNow}>
                    <LinearGradient colors={['#f7dd9f', '#f0c14d']} style={buyNow}>
                        <Text style={textBuy}>Mua ngay</Text>
                    </LinearGradient>
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
        flex: 1,
        width: 0.4 * screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#111',
        borderLeftWidth: 0.5,
        borderTopWidth: 0.5,
        elevation: 0.5,
    },
    textBuy: {
        color: '#111',
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

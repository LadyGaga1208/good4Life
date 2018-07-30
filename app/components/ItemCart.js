import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import { screenHeight, screenWidth } from '../styles/variables';

const check = require('../images/icons/circle.png');
const checked = require('../images/icons/checked.png');
const iconPlus = require('../images/icons/plus.png');
const iconMinus = require('../images/icons/minus.png');
const iconDelete = require('../images/icons/delete.png');

export default class ItemCart extends Component {
    render() {
        const { container, wrapCheckbox, iconCheckStyle, image, wrapPrice, name, price, iconStyle, texInputStyle,
            iconNus, iconDeleteStyle, wrapImage, unit } = styles;
        return (
            <View style={container}>
                <View style={wrapCheckbox}>
                    <Image
                        tintColor={this.props.checked ? '#FFA500' : '#111'}
                        source={this.props.checked ? checked : check}
                        style={iconCheckStyle}
                    />
                </View>
                <View style={wrapImage}>
                    <Image
                        style={image}
                        source={{ uri: `${this.props.imgProduct}` }}
                    />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <View style={{ width: '70%' }}>
                        <Text numberOfLines={1} style={name}>{this.props.nameProduct}</Text>
                    </View>
                    <View style={wrapPrice}>
                        <Text style={price}>{this.props.price}</Text>
                        <Text style={unit}>đ</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 3 }}>
                        <View style={iconStyle}>
                            <Image source={iconMinus} style={iconNus} tintColor='#111' />
                        </View>
                        <TextInput style={texInputStyle} onChangeText={this.props.onChangeText} defaultValue={`${this.props.defaultValue}`} />
                        <View style={iconStyle}>
                            <Image source={iconPlus} style={iconNus} tintColor='#111' />
                        </View>
                        <View style={iconDeleteStyle}>
                            <Image source={iconDelete} style={iconCheckStyle} />
                        </View>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 0.14 * screenHeight,
        padding: 7,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },
    iconCheckStyle: {
        width: 18,
        height: 18,
        resizeMode: 'stretch'
    },
    wrapCheckbox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 0.14 * screenHeight,
    },
    wrapImage: {
        height: (0.11 * screenHeight) + 3,
        width: (0.15 * screenWidth) + 3,
        borderColor: '#111',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 0.11 * screenHeight,
        width: 0.15 * screenWidth,
        resizeMode: 'stretch'
    },
    name: {
        fontSize: 14,
        fontFamily: 'Roboto-Thin',
    },
    wrapPrice: {
        flexDirection: 'row',
        marginTop: 2
    },
    price: {
        fontSize: 17,
        color: 'orange',
        fontFamily: 'Neon'
    },
    iconNus: {
        width: 12,
        height: 12,
        resizeMode: 'stretch'
    },
    iconStyle: {
        width: 30,
        height: 0.04 * screenHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#ddd'
    },
    texInputStyle: {
        width: 40,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: '#ddd',
        fontSize: 14,
        height: 0.04 * screenHeight,
        textAlign: 'center',
        padding: 0
    },
    iconDeleteStyle: {
        marginLeft: '40%',
        width: 40,
        height: 0.04 * screenHeight,
        justifyContent: 'center'
    },
    unit: {
        fontSize: 16,
        color: 'orange',
        fontFamily: 'Neon',
        // textDecorationLine: 'underline'
    }
});

ItemCart.propTypes = {
    checked: PropTypes.bool.isRequired,
    imgProduct: PropTypes.string,
    nameProduct: PropTypes.string,
    price: PropTypes.string,
    onChangeText: PropTypes.func,
    defaultValue: PropTypes.number
};

ItemCart.defaultProps = {
    defaultValue: 1
};


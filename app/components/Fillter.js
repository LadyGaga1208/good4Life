import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { screenHeight, screenWidth } from '../styles/variables';

const iconFilter = require('../images/icons/filter.png');

class Fillter extends PureComponent {
    render() {
        const { wrapper, wrapTotal, wrapFilter, icon,
            text, textSpace, buttomFilter, text1 } = styles;
        return (
            <View style={wrapper}>
                <View style={wrapTotal}>
                    <Text style={text}>Tổng số</Text>
                    <Text style={textSpace}>:</Text>
                    <Text style={text}>45</Text>
                </View>
                <View style={wrapFilter}>
                    <Text style={text1}>Sản phẩm mới</Text>
                    <TouchableOpacity style={buttomFilter} onPress={this.props.show}>
                        <Image source={iconFilter} style={icon} />
                        <Text style={text}>Lọc</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    wrapper: {
        height: 0.075 * screenHeight,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
        backgroundColor: 'yellow',
        // position: 'absolute',
        // top: 0,
        width: screenWidth
    },
    icon: {
        height: 24,
        width: 24,
        resizeMode: 'stretch',
        marginLeft: 7
    },
    wrapFilter: {
        flexDirection: 'row',
        marginRight: 5
    },
    wrapTotal: {
        flexDirection: 'row'
    },
    text: {
        fontFamily: 'Roboto-Thin',
        color: '#111',
        fontSize: 16
    },
    textSpace: {
        fontFamily: 'Roboto-Thin',
        color: '#111',
        fontSize: 16,
        paddingHorizontal: 5
    },
    buttomFilter: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 2,
        borderWidth: 2,
        elevation: 2,
        borderColor: '#ddd',
        borderRadius: 8
    },
    text1: {
        fontFamily: 'Roboto-Thin',
        color: '#111',
        fontSize: 16,
        paddingTop: 6,
        marginRight: 5
    }
};

export default Fillter;


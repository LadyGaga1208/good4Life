import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { backgroundColorItem } from '../styles/variables';

export default class LoadMore extends Component {
    render() {
        console.log('render LoadMore');
        const { container, text, text1 } = styles;
        return (
            <TouchableOpacity
                style={[container, this.props.style]}
                onPress={this.props.onPress}
            >
                <Text style={text}>Xem</Text>
                <Text style={text1}>thêm</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColorItem,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    text: {
        fontFamily: 'Comfortaa-Regular',
        color: '#008296'
    },
    text1: {
        fontFamily: 'Comfortaa-Regular',
        color: '#008296',
        paddingTop: 20
    }
});


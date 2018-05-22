import React, { PureComponent } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';
import PropTypes from 'prop-types';

import * as variables from '../styles/variables';

export default class HeaderPart extends PureComponent {
    render() {
        const { container, line, icon, name } = styles;
        return (
            <View>
                <View style={line} />
                <View style={container}>
                    <Image source={this.props.source} style={icon} />
                    <Text style={name}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flexDirection: 'row',
        backgroundColor: variables.backgroundColorWhite
    },
    line: {
        height: 5,
        backgroundColor: '#d1d1d1'
    },
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'stretch',
        marginLeft: variables.marginLeft
    },
    name: {
        fontSize: 18,
        marginLeft: 5,
        color: '#111111'
    }
});

HeaderPart.propTypes = {
    name: PropTypes.string.isRequired,
};


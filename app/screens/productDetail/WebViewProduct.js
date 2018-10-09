import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

import { primaryColor } from '../../styles/variables';

export default class WebViewProduct extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        console.log(params);
        return {
            title: `${params.data.itemName}`,
            headerStyle: {
                backgroundColor: primaryColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <WebView
                source={{ uri: params.data.linkRefer }}
            />
        );
    }
}

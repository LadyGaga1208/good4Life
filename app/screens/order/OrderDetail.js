import React, { Component } from 'react';
import { Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import { primaryColor, screenHeight, screenWidth } from '../../styles/variables';

const map = require('../../images/icons/place.png');

export default class OrderDetail extends Component {

    static navigationOptions = {
        title: 'Thanh toán ',
        headerStyle: {
            backgroundColor: primaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        const { params } = this.props.navigation.state;
        console.log(params, 'hihjhjhjhjhjh');
        return (
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff'
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        // color: '#000000',
                        marginTop: 5,
                        marginLeft: 10
                    }}
                >
                    Giao hàng và chuyển hóa đơn đến
                </Text>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        width: screenWidth * 0.7,
                        marginHorizontal: 0.15 * screenWidth,
                        height: 0.12 * screenHeight,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // backgroundColor: '#ddd',
                        borderColor: '#FF3800',
                        borderWidth: 1,
                        marginTop: 10
                    }}
                >
                    <Image
                        source={map}
                        style={{
                            tintColor: '#FF3800'
                        }}
                    />
                    <Text
                        style={{
                            color: '#FF3800',
                            fontSize: 15,
                            marginLeft: 10
                        }}
                    >Thêm địa chỉ của bạn</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

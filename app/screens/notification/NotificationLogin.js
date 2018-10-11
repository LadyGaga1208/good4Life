import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import { screenHeight, screenWidth, primaryColor } from '../../styles/variables';

export default class NotificationLogin extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        height: (0.48 / 6) * screenHeight,
                        width: screenWidth,
                        alignItems: 'center',
                        backgroundColor: primaryColor,
                        elevation: 0.5,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: '500',
                            marginLeft: 10,
                            color: '#ffffff'
                        }}
                    >
                        Thông báo</Text>
                </View>
                <View style={{ height: 5, backgroundColor: '#ddd' }} />
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ddd' }}>
                    <View
                        style={{
                            height: 0.1 * screenHeight,
                            width: 0.2 * screenWidth,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={{ uri: 'http://file.hstatic.net/1000144808/file/logo_20tomita_20mart_20_2__grande.png' }}
                            style={{
                                width: 55,
                                height: 50,
                                resizeMode: 'stretch'
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: '500', color: '#000000', fontSize: 16 }}>Tomita</Text>
                        <Text numberOfLines={1} style={{ width: 0.78 * screenWidth }}>Sầu riêng mới nhập về thơm ngon, số lượng có hạn...</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ddd' }}>
                    <View
                        style={{
                            height: 0.1 * screenHeight,
                            width: 0.2 * screenWidth,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaUcZGzt9jJxgcawqFFhpgap-Oofr_MrR12yMRcPHLQwkk5yfLw' }}
                            style={{
                                width: 55,
                                height: 50,
                                resizeMode: 'stretch'
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: '500', color: '#000000', fontSize: 16 }}>Big Green</Text>
                        <Text numberOfLines={1} style={{ width: 0.78 * screenWidth }}>Rau cải xanh nhập khẩu, không thuốc bảo quản</Text>
                    </View>
                </View>
            </View>
        );
    }
}

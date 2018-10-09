import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

import { screenHeight, screenWidth, primaryColor } from '../styles/variables';

export default class NavigationBar extends PureComponent {
    render() {
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        height: (0.49 / 6) * screenHeight,
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
                        {this.props.name}
                    </Text>
                </View>
            </View>
        );
    }
}

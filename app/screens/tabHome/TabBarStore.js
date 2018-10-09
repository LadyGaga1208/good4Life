import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { TabBarTop } from 'react-navigation';
import NavigationBar from '../../components/NavigationBar';

export default class TabBarStore extends PureComponent {
    render() {
        return (
            <View>
                <NavigationBar name="Danh sách cửa hàng" />
                <TabBarTop {...this.props} />
            </View>
        );
    }
}


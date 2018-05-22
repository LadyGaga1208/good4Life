import React, { PureComponent } from 'react';
import { View } from 'react-native';
import HeaderScreenDetail from '../../components/HeaderScreenDetail';

export class TabBarContent extends PureComponent {
    render() {
        return (
            <View>
                <HeaderScreenDetail />
            </View>
        );
    }
}

export default TabBarContent;

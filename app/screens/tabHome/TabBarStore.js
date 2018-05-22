import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { TabBarTop } from 'react-navigation';

import Header from './Header';

export default class TabBarStore extends PureComponent {
    render() {
        return (
            <View>
                <Header />
                <TabBarTop {...this.props} />
            </View>
        );
    }
}


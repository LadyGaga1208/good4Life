import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Store from '../screens/tabStore/Store';
import StoreFollow from '../screens/tabStore/StoreFollow';
import StoreSuggest from '../screens/tabStore/StoreSuggest';
import TabBarStore from '../screens/tabHome/TabBarStore';
import TabStoreDetail from './TabStoreDetail';
import { backgroundColorWhite, primaryColor } from '../styles/variables';


const StackStore = StackNavigator({
    Store: {
        screen: Store,
        navigationOptions: {
            header: null
        }
    },
    TabStoreDetail: {
        screen: TabStoreDetail,
        navigationOptions: {
            tabBarVisible: false
        }
    }
});

const StackStoreFollow = StackNavigator({
    StoreFollow: {
        screen: StoreFollow,
        navigationOptions: {
            header: null,
        }
    },
    TabStoreDetail: {
        screen: TabStoreDetail,
        navigationOptions: {
            tabBarVisible: false
        }
    }
});

const StackStoreSuggest = StackNavigator({
    StoreSuggest: {
        screen: StoreSuggest,
        navigationOptions: {
            header: null,
        }
    },
    TabStoreDetail: {
        screen: TabStoreDetail,
        navigationOptions: {
            tabBarVisible: false
        }
    }
});

const TabStore = TabNavigator(
    {
        'Tất cả': { screen: StackStore },
        'Theo dõi': { screen: StackStoreFollow },
        'Gợi ý': { screen: StackStoreSuggest }
    },
    {
        tabBarPosition: 'top',
        tabBarComponent: props => (<TabBarStore {...props} />),
        tabBarOptions: {
            style: {
                backgroundColor: backgroundColorWhite,
            },
            indicatorStyle: {
                backgroundColor: primaryColor
            },
            labelStyle: {
                fontWeight: '400',
                fontSize: 14
            },
            activeTintColor: '#008296',
            inactiveTintColor: '#757575',
            upperCaseLabel: false,
        },
    }
);

export default TabStore;


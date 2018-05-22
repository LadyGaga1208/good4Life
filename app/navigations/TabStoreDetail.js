import { TabNavigator } from 'react-navigation';

import ProductStore from '../screens/tabStoreDetail/ProductStore';
import StoreDetail from '../screens/tabStoreDetail/StoreDetail';
import { primaryColor, backgroundColorWhite } from '../styles/variables';

const TabStoreDetail = TabNavigator(
    {
        'Thông tin': {
            screen: StoreDetail
        },
        'Sản phẩm': {
            screen: ProductStore
        }
    },
    {
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

export default TabStoreDetail;

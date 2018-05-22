import { TabNavigator } from 'react-navigation';

import FavoriteProduct from '../screens/tabProduct/FavoriteProduct';
import NewProduct from '../screens/tabProduct/NewProduct';
import SellProduct from '../screens/tabProduct/SellProduct';
import SellingProduct from '../screens/tabProduct/SellingProduct';
import { primaryColor } from '../styles/variables';

const TabProduct = TabNavigator(
    {
        'Sản phẩm mới': { screen: NewProduct },
        'Sản phẩm đang bán': { screen: SellProduct },
        'Sản phẩm bán chạy': { screen: SellingProduct },
        'Sản phẩm yêu thích': { screen: FavoriteProduct }
    },
    {
        tabBarOptions: {
            style: {
                backgroundColor: '#ffffff',
            },
            indicatorStyle: {
                backgroundColor: primaryColor
            },
            labelStyle: {
                fontWeight: '400',
                fontSize: 15,
            },
            tabStyle: {
                width: 165
            },
            activeTintColor: '#008296',
            inactiveTintColor: '#757575',
            upperCaseLabel: false,
            scrollEnabled: true
        },
    }
);

export default TabProduct;


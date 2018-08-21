import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import TabCatalogues from './TabCatalogues';
import TabProduct from './TabProduct';
import TabStoreDetail from './TabStoreDetail';
import ProductDetail from '../screens/productDetail/ProductDetail';
import Chat from '../screens/Chat';
import { primaryColor } from '../styles/variables';
import StackCart from '../screens/cart/StackCart';

const StackHome = StackNavigator(
    {
        Home: {
            screen: Home,
        },
        Chat: {
            screen: Chat,
            navigationOptions: {
                tabBarVisible: false,
            }
        },
        TabProduct: {
            screen: TabProduct,
            navigationOptions: {
                tabBarVisible: false,
                title: 'Danh mục sản phẩm',
                headerStyle: {
                    backgroundColor: primaryColor,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
        },
        TabCatalogues: {
            screen: TabCatalogues,
            navigationOptions: {
                tabBarVisible: false,
                title: 'Danh mục thể loại',
                headerStyle: {
                    backgroundColor: primaryColor,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
        },
        ProductDetail: {
            screen: ProductDetail,
            navigationOptions: {
                tabBarVisible: false
            }
        },
        StackCart: {
            screen: StackCart,
            navigationOptions: {
                tabBarVisible: false
            }
        },
        TabStoreDetail: {
            screen: TabStoreDetail,
            navigationOptions: {
                tabBarVisible: false,
            }
        }
    },
);

export default StackHome;

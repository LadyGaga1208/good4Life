import { TabNavigator } from 'react-navigation';

import Vegetables from '../screens/tabCatalogues/Vegetables';
import Cu from '../screens/tabCatalogues/Cu';
import QuaAn from '../screens/tabCatalogues/QuaAn';
import QuaNau from '../screens/tabCatalogues/QuaNau';
import ThuySan from '../screens/tabCatalogues/ThuySan';
import HaiSan from '../screens/tabCatalogues/HaiSan';
import ThitGiaCam from '../screens/tabCatalogues/ThitGiaCam';
import ThitGiaSuc from '../screens/tabCatalogues/ThitGiaSuc';
import DacSan from '../screens/tabCatalogues/DacSan';
import { primaryColor } from '../styles/variables';

const TabCatalogues = TabNavigator(
    {
        Rau: { screen: Vegetables },
        Cu: { screen: Cu },
        'Qua an': { screen: QuaAn },
        'Qua nau': { screen: QuaNau },
        'Thuy san': { screen: ThuySan },
        'Hai san': { screen: HaiSan },
        'Thit gia cam': { screen: ThitGiaCam },
        'Thit gia suc': { screen: ThitGiaSuc },
        'Dac san': { screen: DacSan }
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
                fontSize: 14
            },
            activeTintColor: '#008296',
            inactiveTintColor: '#757575',
            upperCaseLabel: false,
            scrollEnabled: true
        },
    }
);

export default TabCatalogues;

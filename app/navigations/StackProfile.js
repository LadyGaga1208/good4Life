import { StackNavigator } from 'react-navigation';
import Authentication from '../screens/authentication/Authentication';
import DefaultPr from '../screens/profile/Default';
import Setting from '../screens/profile/Setting';

const StackProfile = StackNavigator(
    {
        Authentication: {
            screen: Authentication,
            navigationOptions: {
                tabBarVisible: false,
                header: null
            }
        },
        Profile: {
            screen: DefaultPr,
            navigationOptions: {
                header: null
            }
        },
        Setting: {
            screen: Setting,
            navigationOptions: {
                tabBarVisible: false,
            }
        }
    },
    {
        initialRouteName: 'Profile'
    }
);

export default StackProfile;


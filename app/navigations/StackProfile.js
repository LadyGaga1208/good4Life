import { StackNavigator } from 'react-navigation';
import Profile from '../screens/profile/index';
import Setting from '../screens/profile/Setting';

const StackProfile = StackNavigator(
    {
        Profile: {
            screen: Profile,
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


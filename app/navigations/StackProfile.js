import { StackNavigator } from 'react-navigation';
import Authentication from '../screens/authentication/Authentication';
import Profile from '../screens/Profile';

const StackProfile = StackNavigator({
    Authentication: {
        screen: Authentication,
        navigationOptions: {
            tabBarVisible: false,
            header: null
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null
        }
    }
});

export default StackProfile;


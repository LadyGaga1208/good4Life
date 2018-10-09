import React, { Component } from 'react';

import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { BackHandler, Alert } from 'react-native';

import { addListener } from './redux/store';
import Root from './navigations/Root';

class AppNavigator extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress.bind(this));
    }
    handleBackPress = () => {
        const { dispatch, nav } = this.props;
        // console.log("Back pressed", nav);
        // const activeRoute = nav.routes[nav.index];
        // console.log(activeRoute, 'router key');
        // if (activeRoute.index === 0) {
        //     Alert.alert(
        //         '',
        //         'Bạn có muốn thoát ứng dụng',
        //         [
        //             // { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        //             { text: 'Không', onPress: () => { console.log('Cancel Pressed'); return true; }, style: 'cancel' },
        //             { text: 'Có', onPress: () => { console.log('OK Pressed'); BackHandler.exitApp(); } },
        //         ],
        //         { cancelable: false }
        //     );
        // }
        dispatch({ type: 'Navigation/BACK' });
        return true;
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress.bind(this));
    }
    render() {
        return (
            <Root
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav,
                    addListener,
                })}
            />
        );
    }
}

const mapStateToProp = (state) => ({
    nav: state.nav
});

export default connect(mapStateToProp)(AppNavigator);


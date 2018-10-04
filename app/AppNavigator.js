import React, { Component } from 'react';

import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import {BackHandler} from 'react-native';

import { addListener } from './redux/store';
import Root from './navigations/Root';

class AppNavigator extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress.bind(this));
    }
    handleBackPress = () => {
        const { dispatch, navigation, nav } = this.props;
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


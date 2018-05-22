import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { addListener } from './redux/store';
import Root from './navigations/Root';

class AppNavigator extends Component {
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


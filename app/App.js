import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './AppNavigator';
import store from './redux/store';


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}


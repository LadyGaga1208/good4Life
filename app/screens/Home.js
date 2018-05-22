import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';


import { getDataHome } from '../redux/action/getDataHome';
import Header from './tabHome/Header';
import NewProduct from './tabHome/NewProduct';
import Store from './tabHome/Store';
import Catalogues from './tabHome/Catalogues';
import ProductSuggest from './tabHome/ProductSuggest';

class Home extends Component {

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this.props.getDataHome();
    }

    goToChat() {
        const navigateChat = NavigationActions.navigate({
            routeName: 'Chat'
        });
        this.props.navigation.dispatch(navigateChat);
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <Header onPress={this.goToChat.bind(this)} />
                <NewProduct navigation={this.props.navigation} />
                <Store navigation={this.props.navigation} />
                <Catalogues navigation={this.props.navigation} />
                <ProductSuggest navigation={this.props.navigation} />
            </ScrollView>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getDataHome: () => {
        dispatch(getDataHome());
    }
});

export default connect(null, mapDispatchToProps)(Home);


import React, { PureComponent } from 'react';
import { ScrollView, View, NetInfo, BackHandler, Alert } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { getDataHome } from '../redux/action/getDataHome';
import Header from './tabHome/Header';
import NewProduct from './tabHome/NewProduct';
import Store from './tabHome/Store';
import Catalogues from './tabHome/Catalogues';
import ProductSuggest from './tabHome/ProductSuggest';
import ScrollToTop from '../components/ScrollToTop';
import OfflineNotice from '../components/OfflineNotice';

class Home extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        header: null,
        tabBarVisible: navigation.getParam('tabBarVisible', true),
    });
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.a = [];
    }
    componentDidMount() {
        console.log('home render kkkkkkkkkkkkk');
        this.props.getDataHome();
        // const resetAction = NavigationActions.reset({
        //     index: 0,
        //     actions: [NavigationActions.navigate({ routeName: 'Home' })],
        // });
        // this.props.navigation.dispatch(resetAction);
    }

    goToChat() {
        const navigateChat = NavigationActions.navigate({
            routeName: 'Chat'
        });
        this.props.navigation.dispatch(navigateChat);
    }

    scrollToTop() {
        this.refs.scrollViewMain.scrollTo({ x: 5, y: 5, animated: true });
    }

    handleScroll(event) {
        // console.log(event.nativeEvent.contentOffset.y);
        if (event.nativeEvent.contentOffset.y > 850) {
            this.setState({
                show: true
            });
        } else {
            this.setState({
                show: false
            });
        }

        this.a.push(event.nativeEvent.contentOffset.y);
        // if ((this.a[this.a.length - 1] - this.a[this.a.length - 2]) > 0) {
        //     this.props.navigation.setParams({ tabBarVisible: false });
        // } else {
        //     this.props.navigation.setParams({ tabBarVisible: true });
        // }
    }

    handleScrollEnd() {
        // this.a = [this.a[this.a.length - 1]];
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header onPress={this.goToChat.bind(this)} />
                <OfflineNotice />
                <ScrollView
                    ref='scrollViewMain'
                    onScroll={this.handleScroll.bind(this)}
                    onMomentumScrollEnd={this.handleScrollEnd.bind(this)}
                    scrollEventThrottle={5}
                    showsVerticalScrollIndicator={false}
                >
                    <NewProduct navigation={this.props.navigation} />
                    <Store navigation={this.props.navigation} />
                    <Catalogues navigation={this.props.navigation} />
                    <ProductSuggest navigation={this.props.navigation} />
                </ScrollView>
                <ScrollToTop
                    show={this.state.show}
                    scrollTop={this.scrollToTop.bind(this)}
                />
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    getDataHome: () => {
        dispatch(getDataHome());
    }
});

export default connect(null, mapDispatchToProps)(Home);


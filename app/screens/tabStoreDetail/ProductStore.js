import React, { PureComponent } from 'react';
import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import ItemProduct from '../../components/ItemProduct';
import Fillter from '../../components/Fillter';
import { url } from '../../api/Url';
import { getProductStore } from '../../redux/action/getProductStore';
import { primaryColor } from '../../styles/variables';

class ProductStore extends PureComponent {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            headerTitle: `${params.data.storeName}`,
            headerStyle: {
                backgroundColor: primaryColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    componentDidMount() {
        const { storeId } = this.props.navigation.state.params.data;
        this.props.getProductStore(this.state.value, storeId);
    }


    handleEnd() {
        const { storeId } = this.props.navigation.state.params.data;
        this.setState((previousState) => ({
            value: previousState.value + 1
        }), () => this.props.getProductStore(this.state.value, storeId));
    }

    goToProductDetail(item) {
        const navigateProductDetail = NavigationActions.navigate({
            routeName: 'ProductDetail',
            params: { data: item }
        });
        this.props.navigation.dispatch(navigateProductDetail);
    }

    showPopUp() {

    }

    renderItemProductStore({ item }) {
        return (
            <ItemProduct
                imgProduct={`${url}/product/${item.productId}/${item.imagePath}.png`}
                price={item.unitPrice}
                nameProduct={item.productName}
                nameStore={item.storeName}
                love={item.likeCount}
                rate={item.ratingCount}
                onPress={this.goToProductDetail.bind(this, item)}
            />
        );
    }

    render() {
        const { isLoading, dataProductStore } = this.props;
        return (
            <View style={styles.container}>
                <Fillter
                    show={this.showPopUp.bind(this)}
                />
                <View style={styles.wrap}>
                    {
                        isLoading ? <ActivityIndicator size='large' color='#008296' animating /> : (
                            <FlatList
                                data={dataProductStore}
                                keyExtractor={(item) => item.productId.toString()}
                                showsVerticalScrollIndicator={false}
                                numColumns={2}
                                renderItem={this.renderItemProductStore.bind(this)}
                                onEndReached={() => this.handleEnd()}
                                onEndReachedThreshold={0.2}
                            />
                        )
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

const mapStateToProps = (state) => ({
    dataProductStore: state.dataProductStore.dataProductStore,
    isLoading: state.dataProductStore.loading
});

const mapDispatchToProps = (dispatch) => ({
    getProductStore: (value, storeId) => {
        dispatch(getProductStore(value, storeId));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductStore);

import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import HeaderPart from '../../components/HeaderPart';
import ItemNewProduct from '../../components/ItemNewProduct';
import Loading from '../../components/Loading';
import LoadMore from '../../components/LoadMore';
import { url } from '../../api/ApiService';
import { screenHeight, screenWidth } from '../../styles/variables';

const iconNewPr = require('../../images/icons/new.png');

class NewProduct extends PureComponent {

    onPressItemFooter() {
        const navigateTabProduct = NavigationActions.navigate({
            routeName: 'TabProduct',
            action: NavigationActions.navigate({ routeName: 'NewProduct' }),
        });
        this.props.navigation.dispatch(navigateTabProduct);
    }

    goToProductDetail(item) {
        // console.log(item);
        const navigateProductDetail = NavigationActions.navigate({
            routeName: 'ProductDetail',
            params: { data: item }
        });
        this.props.navigation.dispatch(navigateProductDetail);
    }

    renderListFooterComponent() {
        return (
            <LoadMore style={styles.laodMore} onPress={this.onPressItemFooter.bind(this)} />
        );
    }

    renderItemNewProduct({ item }) {
        const till = new Date('6/18/2018 20:56:00');
        return (
            <View>
                <ItemNewProduct
                    till={till}
                    name={item.productName}
                    price={item.unitPrice}
                    store={item.storeName}
                    uri={`${url}/product/${item.productId}/${item.imagePath}.png`}
                    onPress={this.goToProductDetail.bind(this, item)}
                />
            </View>
        );
    }

    render() {
        const { isLoading, dataHome } = this.props;
        return (
            <View style={styles.container}>
                <HeaderPart source={iconNewPr} name='Sản phẩm mới' />
                {
                    isLoading ? <Loading style={styles.indicator} /> : (
                        <FlatList
                            data={dataHome.newProducts}
                            keyExtractor={(item) => item.productId.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={this.renderItemNewProduct.bind(this)}
                            ListFooterComponent={this.renderListFooterComponent.bind(this)}
                        />
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    indicator: {
        height: (1 / 3) * screenHeight,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    laodMore: {
        width: (0.9 / 5) * screenWidth,
        height: (1.01 / 3) * screenHeight,
    }
});

const mapStateToProps = (state) => ({
    dataHome: state.homeReducer.dataHome,
    isLoading: state.homeReducer.loading
});

export default connect(mapStateToProps)(NewProduct);

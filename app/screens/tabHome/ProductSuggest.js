import React, { PureComponent } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import HeaderPart from '../../components/HeaderPart';
import Loading from '../../components/Loading';
import ItemProduct from '../../components/ItemProduct';
import { url } from '../../api/Url';
import { screenHeight, primaryColor, screenWidth } from '../../styles/variables';
import { getDataProductSuggest } from '../../redux/action/getSuggestProduct';

const iconPrSuggest = require('../../images/icons/productSuggest.png');

class ProductSuggest extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    componentDidMount() {
        this.props.getDataProductSuggest(this.state.value);
    }

    onPressLoadMore() {
        this.setState((previousState) => ({
            value: previousState.value + 1
        }), () => this.props.getDataProductSuggest(this.state.value));
    }

    goToProductDetail(item) {
        const navigateProductDetail = NavigationActions.navigate({
            routeName: 'ProductDetail',
            params: { data: item }
        });
        this.props.navigation.dispatch(navigateProductDetail);
    }

    loadMore() {
        return (
            <TouchableOpacity style={styles.loadmore} onPress={this.onPressLoadMore.bind(this)}>
                <Text style={styles.textLoad}>Xem thêm</Text>
            </TouchableOpacity>
        );
    }

    renderItemProductSuggest({ item }) {
        return (
            <ItemProduct
                imgProduct={`${url}/product/${item.productId}/${item.imagePath}.png`}
                price={item.unitPrice}
                nameProduct={item.productName}
                nameStore={item.storeName}
                love={item.likeCount}
                rate={item.ratingCount}
                onPress={this.goToProductDetail.bind(this, item)}
                ratingScore={item.ratingScore}
            />
        );
    }

    render() {
        const { isLoading, dataProductSuggest } = this.props;
        return (
            <View style={styles.container}>
                <HeaderPart source={iconPrSuggest} name='Gợi ý sản phẩm' />
                {
                    isLoading ? <Loading style={styles.indicator} /> : (
                        <FlatList
                            data={dataProductSuggest}
                            keyExtractor={(item) => item.productId.toString()}
                            showsHorizontalScrollIndicator={false}
                            numColumns={2}
                            renderItem={this.renderItemProductSuggest.bind(this)}
                            ListFooterComponent={this.loadMore.bind(this)}
                        />
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    indicator: {
        height: 0.5 * screenHeight,
    },
    loadmore: {
        backgroundColor: primaryColor,
        height: 0.06 * screenHeight,
        width: 0.4 * screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 0.3 * screenWidth,
        marginTop: 5,
        borderRadius: 5
    },
    textLoad: {
        color: '#fff',
        fontFamily: 'Comfortaa-Regular',
    }
});

const mapStateToProps = (state) => ({
    dataProductSuggest: state.dataProductSuggest.dataProductSuggest,
    isLoading: state.dataProductSuggest.loading
});

const mapDispatchToProps = (dispatch) => ({
    getDataProductSuggest: (value) => {
        dispatch(getDataProductSuggest(value));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSuggest);

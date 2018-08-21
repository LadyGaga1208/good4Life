import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Text,
    TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { getDataNewProduct } from '../../redux/action/getDataTabProduct';
import ItemProduct from '../../components/ItemProduct';
import Fillter from '../../components/Fillter';
import ModalFilter from '../../components/ModalFilter';
import { url } from '../../api/ApiService';

class NewProduct extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            modalVisible: false,
            nameItem: '',
            productType: 0
        };
    }

    componentDidMount() {
        this.props.getDataNewProduct(this.state.value, this.state.productType);
    }

    handleEnd() {
        this.setState((previousState) => ({
            value: previousState.value + 1
        }), () => this.props.getDataNewProduct(this.state.value, this.state.productType));
    }

    goToProductDetail(item) {
        const navigateProductDetail = NavigationActions.navigate({
            routeName: 'ProductDetail',
            params: { data: item }
        });
        this.props.navigation.dispatch(navigateProductDetail);
    }

    showModalFilter() {
        this.setState({
            modalVisible: true
        });
    }

    hideModal() {
        this.setState({
            modalVisible: false
        });
    }

    async selectProductItem(item) {
        await this.setState({
            modalVisible: false,
            nameItem: item.itemName,
            productType: item.itemId,
            value: 0
        });
        await this.props.getDataNewProduct(this.state.value, this.state.productType);
    }

    renderProductItem({ item }) {
        return (
            <TouchableOpacity style={styles.itemProduct} onPress={this.selectProductItem.bind(this, item)}>
                <Text style={styles.text}>{item.itemName}</Text>
            </TouchableOpacity>
        );
    }

    renderItemNewProduct({ item }) {
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
        const { isLoading, dataNewProduct } = this.props;
        return (
            <View style={styles.wrap}>
                <Fillter
                    show={this.showModalFilter.bind(this)}
                    totalProduct={this.props.dataNewProduct.length > 0 ? this.props.dataNewProduct.length : 0}
                    nameItem={this.state.nameItem}
                />
                {
                    isLoading ? <ActivityIndicator size='large' color='#008296' animating /> : (
                        <FlatList
                            data={dataNewProduct}
                            keyExtractor={(item) => item.productId.toString()}
                            showsVerticalScrollIndicator={false}
                            numColumns={2}
                            renderItem={this.renderItemNewProduct.bind(this)}
                            onEndReached={() => this.handleEnd()}
                            onEndReachedThreshold={0.2}
                        />
                    )
                }
                <ModalFilter
                    modalVisible={this.state.modalVisible}
                    hideModal={this.hideModal.bind(this)}
                >
                    <TouchableOpacity style={styles.itemProduct} onPress={this.selectProductItem.bind(this, { itemId: 0, itemName: 'Tất cả' })}>
                        <Text style={styles.text}>Tất cả</Text>
                    </TouchableOpacity>
                    <FlatList
                        data={this.props.dataProductItems}
                        renderItem={this.renderProductItem.bind(this)}
                        keyExtractor={(item) => item.itemId.toString()}
                    />
                </ModalFilter>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemProduct: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: '#fff'
    },
    text: {
        fontFamily: 'Roboto-Thin',
        fontSize: 12,
        color: '#111'
    }
});

const mapStateToProps = (state) => ({
    dataNewProduct: state.dataNewProduct.dataNewProduct,
    isLoading: state.dataNewProduct.loading,
    dataProductItems: state.homeReducer.dataHome.productItems
});

const mapDispatchToProps = (dispatch) => ({
    getDataNewProduct: (value, productType) => {
        dispatch(getDataNewProduct(value, productType));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);

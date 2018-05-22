import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import { getDataNewProduct } from '../../redux/action/getDataNewProduct';
import ItemProduct from '../../components/ItemProduct';
import { url } from '../../api/Url';

class NewProduct extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    componentDidMount() {
        this.props.getDataNewProduct(this.state.value);
    }


    handleEnd() {
        this.setState((previousState) => ({
            value: previousState.value + 1
        }), () => this.props.getDataNewProduct(this.state.value));
    }
    goToProductDetail() {

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
            <View style={styles.container}>
                {
                    isLoading ? <ActivityIndicator size='large' color='#008296' animating /> : (
                        <FlatList
                            data={dataNewProduct}
                            keyExtractor={(item) => item.productId.toString()}
                            showsHorizontalScrollIndicator={false}
                            numColumns={2}
                            renderItem={this.renderItemNewProduct.bind(this)}
                            onEndReached={() => this.handleEnd()}
                            onEndReachedThreshold={0.2}
                        />
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const mapStateToProps = (state) => ({
    dataNewProduct: state.dataNewProduct.dataNewProduct,
    isLoading: state.dataNewProduct.loading
});

const mapDispatchToProps = (dispatch) => ({
    getDataNewProduct: (value) => {
        dispatch(getDataNewProduct(value));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);

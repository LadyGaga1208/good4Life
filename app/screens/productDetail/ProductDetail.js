import React, { PureComponent } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Image,
    TextInput,
    Keyboard
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Toast, { DURATION } from 'react-native-easy-toast';
import moment from 'moment';

import { primaryColor, screenHeight, screenWidth } from '../../styles/variables';
import ProductDetailDumb from '../../components/ProductDetailDumb';
import { getDataProductInfo } from '../../redux/action/getDataProductInfo';
import { showModalBuy, hideModalBuy } from '../../redux/action/modalBuyProduct';
import ItemFood from '../../components/ItemFood';
import ImageSwiper from '../../components/ImageSwiper';
import ItemProductSuggest from '../../components/ItemProductSuggest';
import Comment from '../../components/Comment';
import BuyProduct from '../../components/BuyProduct';
import ModalBuyProduct from '../../components/ModalBuyProduct';
import { url } from '../../api/ApiService';
import { getStoreFromProduct } from '../../redux/action/getStoreFromProduct';
import { addToCart, getCart, addToCartFromBuyNow } from '../../redux/action/cart';
import HeaderRight from './HeaderRight';

const iconCartAct = require('../../images/icons/cartAct.png');

const imageComment = 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/32595190_203015527167803_6157025275981856768_n.jpg?_nc_cat=0&oh=70e35a3cd0bca1d3645e116da6f776d9&oe=5B8280B3';

class ProductDetail extends PureComponent {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: `${params.data.productName}`,
            headerStyle: {
                backgroundColor: primaryColor,
            },
            headerRight: (
                <HeaderRight source={iconCartAct} tintColor='#fff' onPress={navigation.getParam('goToCart')} />
            ),
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            opacityBuy: 1,
            comment: '',
            dataComment: [],
            number: 1
        };
    }

    componentDidMount() {
        this.props.navigation.setParams({ goToCart: this.goToCart.bind(this) });
        const { data } = this.props.navigation.state.params;
        this.props.getCart();
        this.props.getDataProductInfo(data.productId);
        this.props.getStoreFromProduct(data.storeId);
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.cart.length > 0) {
            const { cart } = this.props;
            const product = this.props.navigation.state.params.data;
            const indexStore = cart.findIndex(item => item.itemsStore.store.storeId === product.storeId);
            const existsProduct = cart[indexStore].itemsProduct.some(e => e.product.productId === product.productId);
            const newCart = nextProps.cart;
            if (nextProps.cart.length > 0) {
                const indexStoreNew = newCart.findIndex(item => item.itemsStore.store.storeId === product.storeId);
                const existsProductNew = newCart[indexStoreNew].itemsProduct.some(e => e.product.productId === product.productId);
                if (existsProduct === false) {
                    if (existsProductNew) {
                        this.refs.toast.show('Thêm vào giỏ hàng thành công', DURATION.LENGTH_SHORT);
                    }
                }
            }
        }
    }

    keyboardDidShow() {
        this.setState({
            opacityBuy: 0,
        });
    }

    keyboardDidHide() {
        const { commentList } = this.props.dataProductInfo;
        const timeComment = moment().format('l HH:mm:ss');
        const newComment = {
            content: this.state.comment,
            accountId: 1,
            accountType: 1,
            time: timeComment,
            commentId: commentList.length + 1
        };
        if (this.state.comment !== '') {
            if (this.state.dataComment.length === 0) {
                this.setState({
                    opacityBuy: 1,
                    dataComment: [newComment, ...commentList],
                    comment: ''
                });
            } else {
                this.setState((previousState) =>
                    ({
                        opacityBuy: 1,
                        dataComment: [newComment, ...previousState.dataComment],
                        comment: ''
                    })
                );
            }
        }
        this.textInput.clear();
    }

    increQuantity() {
        const product = this.props.navigation.state.params.data;
        if (this.state.number < product.total) {
            this.setState((prevState) => ({
                number: prevState.number + 1
            }));
        }
    }

    decreQuantity() {
        if (this.state.number > 1) {
            this.setState((prevState) => ({
                number: prevState.number - 1
            }));
        }
    }

    onSubmitEditing(data) {
        console.log(this.state.number, '1111111111111111111111111111111');
        if (this.state.number >= 1 && this.state.number <= data.total) {
            this.setState((prevState) => ({
                number: prevState.number
            }), () => console.log(this.state.number, '22222222222222222222222222222'));
        } else {
            this.setState({
                number: 1
            }, () => console.log('kokokokokokok'));
        }
        if (isNaN(this.state.number)) {
            this.setState({
                number: 1
            }, console.log('hghghghghghghghg'));
        }
    }

    buyNow() {
        const { cart } = this.props;
        if (cart.length > 0) {
            const product = this.props.navigation.state.params.data;
            const indexStore = cart.findIndex(item => item.itemsStore.store.storeId === product.storeId);
            const existsProduct = cart[indexStore].itemsProduct.some(e => e.product.productId === product.productId);
            if (existsProduct) {
                const navigateStackCart = NavigationActions.navigate({
                    routeName: 'StackCart',
                });
                this.props.navigation.dispatch(navigateStackCart);
            } else {
                this.props.showModalBuy();
            }
        } else {
            this.props.showModalBuy();
        }
    }

    buyNowFromModal() {
        const product = this.props.navigation.state.params.data;
        const store = this.props.dataStore;
        const itemsStore = {
            store,
            marked: true
        };
        const itemsProduct = { product, quantity: this.state.number, marked: true };
        this.props.addToCartFromBuyNow(itemsStore, itemsProduct);
        this.props.hideModalBuy();
    }

    goToCart() {
        const navigateProductDetail = NavigationActions.navigate({
            routeName: 'StackCart',
        });
        this.props.navigation.dispatch(navigateProductDetail);
    }

    goToProductDetail(item) {
        const navigateProductDetail = NavigationActions.navigate({
            routeName: 'ProductDetail',
            params: { data: item }
        });
        this.props.navigation.dispatch(navigateProductDetail);
    }

    goToStore() {
        const data = this.props.dataStore;
        const navigateProductDetail = NavigationActions.navigate({
            routeName: 'TabStoreDetail',
            params: { data }
        });
        this.props.navigation.dispatch(navigateProductDetail);
    }

    addToCart() {
        const product = this.props.navigation.state.params.data;
        const store = this.props.dataStore;
        const itemsStore = {
            store,
            marked: true
        };
        const itemsProduct = { product, quantity: 1, marked: true };
        if (this.props.cart.length > 0) {
            const { cart } = this.props;
            const indexStore = cart.findIndex(item => item.itemsStore.store.storeId === product.storeId);
            const existsProduct = cart[indexStore].itemsProduct.some(e => e.product.productId === product.productId);
            if (existsProduct) {
                this.refs.toast.show('Sản phẩm đã có trong giỏ hàng', DURATION.LENGTH_SHORT);
            } else {
                this.props.addCart(itemsStore, itemsProduct);
            }
        } else {
            this.props.addCart(itemsStore, itemsProduct);
            this.refs.toast.show('Thêm vào giỏ hàng thành công', DURATION.LENGTH_SHORT);
        }
    }

    renderItemFood({ item }) {
        return (
            <ItemFood
                nameEating={item.itemName}
                clickView={this.clickView.bind(this, item)}
            />
        );
    }

    renderItemComment({ item }) {
        return (
            <Comment
                imgComment={imageComment}
                comment={item.content}
                timeComment={item.time}
            />
        );
    }

    renderProductSuggestItems({ item }) {
        return (
            <ItemProductSuggest
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

    clickView(item) {
        const navigateWebView = NavigationActions.navigate({
            routeName: 'WebViewProduct',
            params: { data: item }
        });
        this.props.navigation.dispatch(navigateWebView);
    }

    render() {
        const { wrapHeaderComment, wrapImgProfile, imgProfile, textInputStyle } = styles;
        const { isLoading } = this.props;
        const {
            delicousFoods,
            imageProductList,
            productInfoList,
            commentList
        } = this.props.dataProductInfo;
        const { data } = this.props.navigation.state.params;

        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.wrapImageProduct}>
                        {
                            isLoading ? <ActivityIndicator size='large' animating /> : (
                                <ImageSwiper
                                    source1={`${url}/product/${data.productId}/${imageProductList[0].imagePath}.png`}
                                    source2={`${url}/product/${data.productId}/${imageProductList[1].imagePath}.png`}
                                // source3={`${url}/product/${data.productId}/${imageProductList[2].imagePath}.png`}
                                // source4={`${url}/product/${data.productId}/${imageProductList[3].imagePath}.png`}
                                />
                            )
                        }
                    </View>
                    <ProductDetailDumb
                        nameProduct={data.productName}
                        price={data.unitPrice}
                        unit={data.unit}
                        rate={data.ratingScore}
                        rateCount={data.ratingCount}
                        like={data.likeCount}
                        start={data.startDate}
                        end={data.endDate}
                        total={data.total}
                        store={data.storeName}
                        catalogues={data.itemSubject}
                        textDescription={data.description}
                        goToStore={this.goToStore.bind(this)}
                    />
                    <View>
                        {
                            isLoading ? <ActivityIndicator size='large' animating /> : (
                                <FlatList
                                    data={delicousFoods}
                                    keyExtractor={(item) => item.itemId.toString()}
                                    showsHorizontalScrollIndicator={false}
                                    renderItem={this.renderItemFood.bind(this)}
                                />
                            )
                        }
                    </View>
                    <View style={styles.wrap}>
                        <Text style={styles.textSuggest}>Có thể bạn muốn mua</Text>
                        <View style={styles.wrapProductSuggest}>
                            <FlatList
                                data={productInfoList}
                                horizontal
                                keyExtractor={(item) => item.productId.toString()}
                                showsHorizontalScrollIndicator={false}
                                renderItem={this.renderProductSuggestItems.bind(this)}
                            />
                        </View>
                    </View>
                    <View style={styles.wrap}>
                        <Text style={styles.textSuggest}>Bình luận</Text>
                        <View style={wrapHeaderComment}>
                            <View style={wrapImgProfile}>
                                <Image source={{ uri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/19554954_830684580418444_953522966191010168_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeGg5YVHBStoai9L7gO4WCc4OdHel9-mohN3vKQJ8LPG7jGCKK5OFBDqzVh85pR_GUB6_0zEzvkorA-mVncSaieBvt6OGUGHQa13t1eabRS1RQ&oh=f2f753355217450bd77f7285c92fb0d1&oe=5B6C0071' }} style={imgProfile} />
                            </View>
                            <TextInput
                                ref={(component) => (this.textInput = component)}
                                underlineColorAndroid='#ddd'
                                placeholder='Viết bình luận...'
                                placeholderTextColor='#ddd'
                                style={textInputStyle}
                                onChangeText={(text) => (this.setState({
                                    comment: text
                                }))}
                                value={this.state.comment}
                            />
                        </View>
                        <FlatList
                            data={this.state.dataComment.length === 0 ? commentList : this.state.dataComment}
                            keyExtractor={(item) => item.commentId.toString()}
                            renderItem={this.renderItemComment.bind(this)}
                        />
                    </View>
                    <View style={{ height: 0.075 * screenHeight }} />
                </ScrollView>
                <ModalBuyProduct
                    modalVisible={this.props.modalVisible}
                    hideModal={() => this.props.hideModalBuy()}
                    img={`${url}/product/${data.productId}/${data.imagePath}.png`}
                    price={data.unitPrice}
                    unit={data.unit}
                    total={data.total}
                    onPress={this.buyNowFromModal.bind(this)}
                    increQuantity={this.increQuantity.bind(this)}
                    decreQuantity={this.decreQuantity.bind(this)}
                    onSubmitEditing={this.onSubmitEditing.bind(this, data)}
                    defaultValue={this.state.number}
                    onChangeText={(text) => {
                        return this.setState({
                            number: parseInt(text)
                        });

                    }
                    }
                    totalPrice={this.state.number ? this.state.number * parseInt(data.unitPrice) : data.unitPrice}
                />
                <BuyProduct
                    addToCart={this.addToCart.bind(this)}
                    buyNow={this.buyNow.bind(this)}
                    opacity={this.state.opacityBuy}
                />
                <Toast
                    ref="toast"
                    style={{ backgroundColor: '#111', borderRadius: 20 }}
                    position='bottom'
                    positionValue={200}
                    fadeInDuration={150}
                    fadeOutDuration={150}
                    textStyle={{ color: '#ffffff' }}
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    wrapImageProduct: {
        height: 0.42 * screenHeight,
        width: screenWidth,
        paddingTop: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrap: {
        marginTop: 15,
        marginHorizontal: 5
    },
    textSuggest: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#111',
        marginLeft: 5
    },
    wrapProductSuggest: {
        paddingTop: 5,
    },
    wrapHeaderComment: {
        flexDirection: 'row',
        marginTop: 10
    },
    imgProfile: {
        width: 46,
        height: 46,
        borderRadius: 23,
        borderColor: '#111',
        borderWidth: 1,
    },
    textInputStyle: {
        width: '75%',
        marginLeft: 5
    },
});

const mapStateToProps = (state) => ({
    dataProductInfo: state.dataProductInfo.dataProductInfo,
    isLoading: state.dataProductInfo.loading,
    modalVisible: state.modalBuy.modalVisible,
    cart: state.cartReducer.cart,
    error: state.cartReducer.error,
    dataStore: state.dataStoreFromProduct.dataStoreFromProduct
});

const mapDispatchToProps = (dispatch) => ({
    getDataProductInfo: (productID) => {
        dispatch(getDataProductInfo(productID));
    },
    showModalBuy: () => {
        dispatch(showModalBuy());
    },
    hideModalBuy: () => {
        dispatch(hideModalBuy());
    },
    getCart: () => {
        dispatch(getCart());
    },
    addCart: (itemsStore, itemProduct) => {
        dispatch(addToCart(itemsStore, itemProduct));
    },
    addToCartFromBuyNow: (itemsStore, itemProduct) => {
        dispatch(addToCartFromBuyNow(itemsStore, itemProduct));
    },
    getStoreFromProduct: (storeId) => {
        dispatch(getStoreFromProduct(storeId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

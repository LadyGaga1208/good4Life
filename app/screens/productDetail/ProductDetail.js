import React, { PureComponent } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Image,
    TextInput
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

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
import { url } from '../../api/Url';

class ProductDetail extends PureComponent {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        console.log(params);
        return {
            title: `${params.data.productName}`,
            headerStyle: {
                backgroundColor: primaryColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    }

    componentDidMount() {
        const { data } = this.props.navigation.state.params;
        this.props.getDataProductInfo(data.productId);
    }

    goToProductDetail(item) {
        const navigateProductDetail = NavigationActions.navigate({
            routeName: 'ProductDetail',
            params: { data: item }
        });
        this.props.navigation.dispatch(navigateProductDetail);
    }

    goToStore(data) {
        const navigateProductDetail = NavigationActions.navigate({
            routeName: 'TabStoreDetail',
            params: { data }
        });
        this.props.navigation.dispatch(navigateProductDetail);
    }

    renderItemFood({ item }) {
        return (
            <ItemFood
                nameEating={item.itemName}
            />
        );
    }

    renderItemComment({ item }) {
        return (
            <Comment
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
                                    source3={`${url}/product/${data.productId}/${imageProductList[2].imagePath}.png`}
                                    source4={`${url}/product/${data.productId}/${imageProductList[3].imagePath}.png`}
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
                        goToStore={this.goToStore.bind(this, data)}
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
                                underlineColorAndroid='#ddd'
                                placeholder='Viết bình luận...'
                                placeholderTextColor='#ddd'
                                style={textInputStyle}
                            />
                        </View>
                        <FlatList
                            data={commentList}
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
                />
                <BuyProduct
                    buyNow={() => this.props.showModalBuy()}
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    modalVisible: state.modalBuy.modalVisible
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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

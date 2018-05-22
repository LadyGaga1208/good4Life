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
import { connect } from 'react-redux';

import { primaryColor, screenHeight, screenWidth } from '../../styles/variables';
import ProductDetailDumb from '../../components/ProductDetailDumb';
import { getDataProductInfo } from '../../redux/action/getDataProductInfo';
import ItemFood from '../../components/ItemFood';
import ImageSwiper from '../../components/ImageSwiper';
import ItemProductSuggest from '../../components/ItemProductSuggest';
import Comment from '../../components/Comment';
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
            />
        );
    }

    render() {
        const { wrapHeaderComment, wrapImgProfile, imgProfile, textInputStyle } = styles;
        const { isLoading } = this.props;
        const { delicousFoods, imageProductList, productInfoList, commentList } = this.props.dataProductInfo;
        const { data } = this.props.navigation.state.params;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.wrapImageProduct}>
                    {
                        isLoading ? <ActivityIndicator size='large' animating /> : (
                            <ImageSwiper
                                source1={`${url}/product/${imageProductList[0].imageId}/${imageProductList[0].imagePath}.png`}
                                source2={`${url}/product/${imageProductList[1].imageId}/${imageProductList[1].imagePath}.png`}
                                source3={`${url}/product/${imageProductList[2].imageId}/${imageProductList[2].imagePath}.png`}
                                source4={`${url}/product/${imageProductList[3].imageId}/${imageProductList[3].imagePath}.png`}
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
            </ScrollView>
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
    isLoading: state.dataProductInfo.loading
});

const mapDispatchToProps = (dispatch) => ({
    getDataProductInfo: (productID) => {
        dispatch(getDataProductInfo(productID));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);

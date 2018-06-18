import React, { PureComponent } from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    Image,
    TextInput,
    FlatList,
    Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';

import { getDataStoreInfo } from '../../redux/action/getDataStoreInfo';
import StoreDetailDumb from '../../components/StoreDetailDumb';
import ImageSwiper from '../../components/ImageSwiper';
import { primaryColor, screenHeight, screenWidth } from '../../styles/variables';
import Comment from '../../components/Comment';
import { url } from '../../api/Url';

const imageComment = 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/32595190_203015527167803_6157025275981856768_n.jpg?_nc_cat=0&oh=70e35a3cd0bca1d3645e116da6f776d9&oe=5B8280B3';

class StoreDetail extends PureComponent {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            headerTitle: params.data.storeName,
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
            followed: false,
            comment: '',
            dataComment: []
        };
    }

    componentDidMount() {
        const { data } = this.props.navigation.state.params;
        this.props.getDataStoreInfo(data.storeId);
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardDidShow() {
    }

    keyboardDidHide() {
        const { commentList } = this.props.dataStoreInfo;
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

    following() {
        this.setState({
            followed: true
        });
    }

    unfollow() {
        this.setState({
            followed: false
        });
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

    render() {
        const { wrap, textSuggest, wrapHeaderComment,
            wrapImgProfile, imgProfile, textInputStyle } = styles;
        const { imageStoreList, commentList } = this.props.dataStoreInfo;
        const { isLoading } = this.props;
        const { data } = this.props.navigation.state.params;
        return (
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.wrapImageStore}>
                    {
                        isLoading ? <ActivityIndicator size='large' animating /> : (
                            <ImageSwiper
                                source1={`${url}/store/${data.storeId}/${imageStoreList[0].imagePath}.png`}
                                source2={`${url}/store/${data.storeId}/${imageStoreList[1].imagePath}.png`}
                                source3={`${url}/store/${data.storeId}/${imageStoreList[2].imagePath}.png`}
                                source4={`${url}/store/${data.storeId}/${imageStoreList[3].imagePath}.png`}
                            />
                        )
                    }
                </View>
                <StoreDetailDumb
                    logo={`${url}/store/${data.storeId}/${data.imagePath}.png`}
                    nameStore={data.storeName}
                    rate={data.ratingScore}
                    follow={data.followCount}
                    slogan={data.introduction}
                    phone={data.phoneNumber}
                    website={data.website}
                    address={data.storeAddress}
                    followed={this.state.followed}
                    unFollow={this.unfollow.bind(this)}
                    Follow={this.following.bind(this)}
                />
                <View style={wrap}>
                    <Text style={textSuggest}>Bình luận</Text>
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
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapImageStore: {
        height: 0.42 * screenHeight,
        width: screenWidth,
        paddingTop: 3,
        justifyContent: 'center',
        alignItems: 'center'
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
        marginLeft: 5,
    },
    textSuggest: {
        fontSize: 16,
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
    dataStoreInfo: state.dataStoreInfo.dataStoreInfo,
    isLoading: state.dataStoreInfo.loading
});

const mapDispatchToProps = (dispatch) => ({
    getDataStoreInfo: (storeId) => {
        dispatch(getDataStoreInfo(storeId));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreDetail);

import React, { PureComponent } from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    TouchableWithoutFeedback,
    Image,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import HeaderPart from '../../components/HeaderPart';
import Loading from '../../components/Loading';
import { url } from '../../api/Url';
import { backgroundColorWhite, screenHeight, screenWidth } from '../../styles/variables';

const iconCatalogues = require('../../images/icons/catalogues.png');

class Catalogues extends PureComponent {

    goToTabCatalogues(item) {
        const navigateTabCatalogues = NavigationActions.navigate({
            routeName: 'TabCatalogues',
            action: NavigationActions.navigate({ routeName: item.itemName }),
        });
        this.props.navigation.dispatch(navigateTabCatalogues);
    }

    renderItemCatalogues({ item }) {
        const { wrapItemCatalogues, wrapImage, wrapName, img, name } = styles;
        return (
            <TouchableWithoutFeedback
                onPress={this.goToTabCatalogues.bind(this, item)}
            >
                <View style={wrapItemCatalogues}>
                    <View style={wrapImage}>
                        <Image
                            source={{ uri: `${url}/product_item/${item.imagePath}.png` }}
                            style={img}
                        />
                    </View>
                    <View style={wrapName}>
                        <Text style={name}>{item.itemName}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    render() {
        const { container, line } = styles;
        const { isLoading, dataHome } = this.props;
        return (
            <View style={container}>
                <HeaderPart source={iconCatalogues} name='Danh mục' />
                {
                    isLoading ? <Loading style={styles.indicator} /> : (
                        <FlatList
                            data={dataHome.productItems}
                            keyExtractor={(item) => item.itemId.toString()}
                            showsHorizontalScrollIndicator={false}
                            numColumns={3}
                            renderItem={this.renderItemCatalogues.bind(this)}
                        />
                    )
                }
                <View style={line} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColorWhite
    },
    indicator: {
        height: (1.2 / 3) * screenHeight,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapItemCatalogues: {
        height: 0.5 * ((1 / 3) * screenHeight),
        width: 0.3 * screenWidth,
        marginTop: 10,
        marginLeft: 9,
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    wrapImage: {
        height: 0.35 * ((1 / 3) * screenHeight),
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        height: 0.25 * ((1 / 3) * screenHeight),
        width: 0.2 * screenWidth,
        resizeMode: 'stretch'
    },
    wrapName: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 12,
        fontFamily: 'Roboto-Thin',
        color: '#111111'
    },
    line: {
        height: 5,
        backgroundColor: backgroundColorWhite
    }
});

const mapStateToProps = (state) => ({
    dataHome: state.homeReducer.dataHome,
    isLoading: state.homeReducer.loading
});

export default connect(mapStateToProps)(Catalogues);

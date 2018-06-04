import React, { PureComponent } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { getDataStoreSuggest } from '../../redux/action/getDataTabStore';
import ItemStore from '../../components/ItemStore';
import Loading from '../../components/Loading';
import { url } from '../../api/Url';
import { backgroundColorWhite } from '../../styles/variables';

class StoreSuggest extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    componentDidMount() {
        this.props.getDataStoreSuggest(this.state.value);
    }

    goToStoreDetail(item) {
        const navigateStoreDetail = NavigationActions.navigate({
            routeName: 'TabStoreDetail',
            params: { data: item }
        });
        this.props.navigation.dispatch(navigateStoreDetail);
    }

    handleEnd() {
        this.setState((previousState) => ({
            value: previousState.value + 1
        }), () => this.props.getDataStoreSuggest(this.state.value));
    }

    renderItemStore({ item }) {
        return (
            <ItemStore
                source={`${url}/store/${item.storeId}/${item.imagePath}.png`}
                nameStore={item.storeName}
                address={item.storeAddress}
                follow={item.followCount}
                rate={item.ratingCount}
                onPress={this.goToStoreDetail.bind(this, item)}
                ratingScore={item.ratingScore}
            />
        );
    }

    render() {
        const { isLoading, dataStoreSuggest } = this.props;
        return (
            <View style={styles.container}>
                {
                    isLoading ? <Loading style={styles.indicator} /> : (
                        <FlatList
                            data={dataStoreSuggest}
                            keyExtractor={(item) => item.storeId}
                            showsVerticalScrollIndicator={false}
                            renderItem={this.renderItemStore.bind(this)}
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
        backgroundColor: backgroundColorWhite,
        flex: 1
    },
    indicator: {
        flex: 1
    }
});

const mapDispatchToProps = (dispatch) => ({
    getDataStoreSuggest: (value) => {
        dispatch(getDataStoreSuggest(value));
    }
});

const mapStateToProps = (state) => ({
    dataStoreSuggest: state.dataStoreSuggest.dataStoreSuggest,
    isLoading: state.dataStoreSuggest.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreSuggest);

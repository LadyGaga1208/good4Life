import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import {
    Menu,
    MenuContext,
    MenuOptions,
    MenuOption,
    MenuTrigger,
    renderers,
} from 'react-native-popup-menu';
import LinearGradient from 'react-native-linear-gradient';


const { ContextMenu, SlideInMenu, Popover } = renderers;

class BasicExampleComponent extends Component {

    constructor(props, ctx) {
        super(props, ctx);
        this.state = { renderer: ContextMenu };
    }

    render() {
        return (
            <Menu
                renderer={this.state.renderer}
                // rendererProps={{ anchorStyle: styles.anchorStyle }}
                style={{ height: 100, marginTop: 50, marginLeft: 100 }}
            >
                <Text>hihihiihihihhi</Text>
                <MenuTrigger customStyles={triggerStyles} >
                    <Haha />
                </MenuTrigger>
                <MenuOptions customStyles={optionsStyles}>
                    <MenuOption text='Context Menu'
                        onSelect={() => this.setState({ renderer: ContextMenu })} />
                    <MenuOption
                        customStyles={optionStyles}
                        onSelect={() => this.setState({ renderer: SlideInMenu })} >
                        <ScrollView>
                            <Text>yhihi</Text>
                            <Text>HAHAHA</Text>
                            <Text>HAHAHA</Text>
                            <Text>HAHAHA</Text>
                            <Text>HAHAHA</Text>
                            <Text>HAHAHA</Text>
                            <Text>HAHAHA</Text>
                            <Text>HAHAHA</Text>
                            <Text>HAHAHA</Text>
                            <Text>HAHAHA</Text>
                            <Text>HAHAHA</Text>
                            <Text>HAHAHA</Text>
                            <Text>HAHAHA</Text>
                            <Text>HAHAHA</Text>


                        </ScrollView>
                    </MenuOption>
                    <MenuOption text='Popover'
                        onSelect={() => this.setState({ renderer: Popover })} />
                    <MenuOption text='Three (custom)' customStyles={optionStyles}
                        onSelect={() => alert('Selected custom styled option')} />
                    <MenuOption disabled={true}>
                        <Text style={{ color: '#ccc' }}>Four (disabled)</Text>
                    </MenuOption>
                </MenuOptions>
                <View>
                    <Text>HAHAHAHAH</Text>
                </View>
            </Menu>
        );
    }

}

const Haha = () => (
    <View>
        <Text>HAHA</Text>
    </View>
);

const Notifications = () => (
    <MenuContext customStyles={menuProviderStyles}>
        <BasicExampleComponent />
        <LinearGradient colors={['#f7dd9f', '#f0c14d']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
                Sign in with Facebook
            </Text>
        </LinearGradient>
        <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            locations={[0, 0.5, 0.6]}
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>
                Sign in with Facebook
  </Text>
        </LinearGradient>
    </MenuContext>
);


export default Notifications;

const triggerStyles = {
    triggerText: {
        color: 'white',
    },
    triggerOuterWrapper: {
        backgroundColor: 'orange',
        padding: 5,
        flex: 1,
    },
    triggerWrapper: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    triggerTouchable: {
        underlayColor: 'darkblue',
        activeOpacity: 70,
        style: {
            flex: 1,
        },
    },
};

const optionsStyles = {
    optionsContainer: {
        marginTop: 10,
        backgroundColor: 'green',
        padding: 5,
    },
    optionsWrapper: {
        backgroundColor: 'purple',
    },
    optionWrapper: {
        backgroundColor: 'yellow',
        margin: 5,
    },
    optionTouchable: {
        underlayColor: 'gold',
        activeOpacity: 70,
    },
    optionText: {
        color: 'brown',
    },
};

const optionStyles = {
    optionTouchable: {
        underlayColor: 'red',
        activeOpacity: 40,
    },
    optionWrapper: {
        backgroundColor: 'pink',
        margin: 5,
        height: 30
    },
    optionText: {
        color: 'black',
    },
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 30,
    },
    backdrop: {
        backgroundColor: 'red',
        opacity: 0.5,
    },
    anchorStyle: {
        // backgroundColor: 'prink',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

const menuProviderStyles = {
    menuProviderWrapper: styles.container,
    backdrop: styles.backdrop,
};

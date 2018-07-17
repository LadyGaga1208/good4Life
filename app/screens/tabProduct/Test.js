import React from 'react';
import { Text, View } from 'react-native';
import {
    MenuContext,
    Menu,
    MenuTrigger,
    MenuOptions,
    MenuOption,
} from 'react-native-popup-menu';


const BasicExample = () => (
    // <MenuProvider style={{ flexDirection: 'column', padding: 30 }}>
    <MenuContext customStyles={menuProviderStyles}>
        <Text>Hello world!</Text>
        <Menu onSelect={value => alert(`Selected number: ${value}`)}>
            <MenuTrigger text='Select option' />
            <MenuOptions>
                <MenuOption value={1} text='One' />
                <MenuOption value={2}>
                    <Text style={{ color: 'red' }}>Two</Text>
                </MenuOption>
                <MenuOption value={3} disabled={true} text='Three' />
            </MenuOptions>
        </Menu>
    </MenuContext>
    // </MenuProvider>
);

const menuProviderStyles = {
    menuProviderWrapper: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
};
export default BasicExample;

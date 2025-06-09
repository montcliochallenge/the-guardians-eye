import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabs from './MainTabs';
import AboutScreen from '../screens/AboutScreen';
import HelpCenterScreen from '../screens/HelpCenterScreen';
import LogoutScreen from '../components/LogoutScreen'
import { View, Text, TouchableOpacity } from 'react-native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }) {
    const handleLogout = ({ navigation }) => {
        // lógica extra se precisar (limpar token, etc)
        navigation.navigate('Login');
    };

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#141A1F',
                },
                drawerLabelStyle: {
                    color: '#fff',
                },
            }}
        >
            <Drawer.Screen name="Início" component={MainTabs} />
            <Drawer.Screen name="Sobre o App" component={AboutScreen} />
            <Drawer.Screen name="Sair da Conta" component={LogoutScreen} />
            <Drawer.Screen name="HelpCenter" component={HelpCenterScreen}
                options={{
                    drawerItemStyle: { display: 'none' } // oculta da gaveta
                }}
            />
        </Drawer.Navigator>
    );
}

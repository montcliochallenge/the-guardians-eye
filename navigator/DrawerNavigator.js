import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabs from './MainTabs';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
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
                headerShown: true,
                drawerStyle: {
                    backgroundColor: '#141A1F',
                },
                drawerLabelStyle: {
                    color: '#fff',
                },
            }}
        >
            <Drawer.Screen name="Início" component={MainTabs} />
            <Drawer.Screen name="Configurações" component={SettingsScreen} />
            <Drawer.Screen name="Sobre o App" component={AboutScreen} />
            <Drawer.Screen name="Sair da Conta" component={LogoutScreen}
            />
        </Drawer.Navigator>
    );
}

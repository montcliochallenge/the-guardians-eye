import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ReportScreen from '../screens/ReportsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AlertScreen from '../screens/AlertScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs({ navigation }) {
    const drawerIcon = () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 15 }}>
            <Ionicons name="menu" size={24} color="#fff" />
        </TouchableOpacity>
    );

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: '#141A1F' },
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#141A1F',
                    borderTopColor: '#141A1F',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: '#DBE8F2',
                tabBarInactiveTintColor: '#888',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerLeft: drawerIcon,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                    title: 'Início',
                }}
            />
            <Tab.Screen
                name="Report"
                component={ReportScreen}
                options={{
                    headerLeft: drawerIcon,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="bar-chart" size={size} color={color} />
                    ),
                    title: 'Relatórios',
                }}
            />
            <Tab.Screen
                name="Alertas"
                component={AlertScreen}
                options={{
                    headerLeft: drawerIcon,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="bell" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={ProfileScreen}
                options={{
                    headerLeft: drawerIcon,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

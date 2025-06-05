// navigation/MainTabs.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ReportScreen from '../screens/ReportsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AlertScreen from '../screens/AlertScreen';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#141A1F', borderTopColor: '#141A1F', elevation: 0, shadowOpacity: 0, borderTopWidth: 0 },
                tabBarActiveTintColor: '#DBE8F2',
                tabBarInactiveTintColor: '#888',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Report"
                component={ReportScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="bar-chart" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Alertas"
                component={AlertScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="bell" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

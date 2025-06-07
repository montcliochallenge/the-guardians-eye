import React from 'react';
import { View, Text } from 'react-native';

export default function LogoutScreen({ navigation }) {
    React.useEffect(() => {
        navigation.replace('Login');
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#141A1F' }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Saindo...</Text>
        </View>
    );
}
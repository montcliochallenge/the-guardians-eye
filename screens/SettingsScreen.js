import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Configurações</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1B2A',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },
});

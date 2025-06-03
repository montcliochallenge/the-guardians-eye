import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AlertasScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Você não possui alertas novos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141A1F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#DBE8F2',
        fontSize: 18,
    },
});

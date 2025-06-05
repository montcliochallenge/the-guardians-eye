import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sobre o Aplicativo</Text>
            <Text style={styles.subtext}>
                Esse aplicativo fornece alertas em tempo real com base em dados climáticos,
                como pluviometria, temperatura e umidade do solo.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1B2A',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 22,
        color: '#fff',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    subtext: {
        color: '#CED4DA',
        fontSize: 16,
        textAlign: 'center',
    },
});

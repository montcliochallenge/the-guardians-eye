import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Alertas em Tempo Real</Text>

            <Image
                source={require('../assets/mapa-brasil.png')}
                style={styles.map}
                resizeMode="contain"
            />

            <View style={styles.indicators}>
                <View style={styles.card}>
                    <Text style={styles.label}>Pluviometria</Text>
                    <Text style={styles.value}>15mm</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.label}>Temperatura</Text>
                    <Text style={styles.value}>28°C</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.label}>Umidade do Solo</Text>
                    <Text style={styles.value}>65%</Text>
                </View>
            </View>

            <Button title="Ir para Relatórios" onPress={() => navigation.navigate('Reports')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D1B2A',
        flex: 1,
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold',
    },
    map: {
        width: '100%',
        height: 180,
        borderRadius: 10,
        marginBottom: 20,
    },
    indicators: {
        gap: 12,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#1B263B',
        padding: 15,
        borderRadius: 10,
    },
    label: {
        color: '#CED4DA',
        fontSize: 14,
    },
    value: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

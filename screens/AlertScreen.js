import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const alertas = [
    {
        id: '1',
        tipo: 'Chuva Intensa',
        nivel: 'Severo',
        descricao: 'Previsão de 60mm de chuva nas próximas 6h.',
        cor: '#E63946',
        icone: 'cloud-rain',
    },
    {
        id: '2',
        tipo: 'Alta Temperatura',
        nivel: 'Moderado',
        descricao: 'Temperaturas acima de 35°C previstas para a tarde.',
        cor: '#F4A261',
        icone: 'thermometer-full',
    },
    {
        id: '3',
        tipo: 'Risco de Deslizamento',
        nivel: 'Leve',
        descricao: 'Acúmulo de chuvas pode causar deslizamentos em áreas de risco.',
        cor: '#2A9D8F',
        icone: 'exclamation-triangle',
    },
];

export default function AlertasScreen() {
    const renderItem = ({ item }) => (
        <View style={[styles.alertaCard, { borderLeftColor: item.cor }]}>
            <View style={styles.alertaHeader}>
                <FontAwesome name={item.icone} size={24} color={item.cor} style={{ marginRight: 10 }} />
                <Text style={styles.alertaTitulo}>{item.tipo} ({item.nivel})</Text>
            </View>
            <Text style={styles.alertaDescricao}>{item.descricao}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Alertas Atuais</Text>
            <FlatList
                data={alertas}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141A1F',
        padding: 20,
    },
    titulo: {
        color: '#DBE8F2',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    alertaCard: {
        backgroundColor: '#1B263B',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        borderLeftWidth: 5,
    },
    alertaHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    alertaTitulo: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    alertaDescricao: {
        color: '#DBE8F2',
        fontSize: 14,
    },
});

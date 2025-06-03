import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function ReportsScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Relatórios</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Nível de Risco</Text>
                <Text style={styles.value}>Alto</Text>
                <Text style={styles.green}>+10% nos últimos 30 dias</Text>

                <LineChart
                    data={{
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
                        datasets: [{ data: [60, 75, 65, 80, 90] }],
                    }}
                    width={screenWidth - 40}
                    height={180}
                    chartConfig={chartConfig}
                    bezier
                    style={{ borderRadius: 10 }}
                />
            </View>

            <View style={styles.card}>
                <Text style={styles.label}>Tipos de Risco</Text>
                <BarChart
                    data={{
                        labels: ['Incêndio', 'Inundação', 'Deslizamento'],
                        datasets: [{ data: [3, 2, 1] }],
                    }}
                    width={screenWidth - 40}
                    height={200}
                    chartConfig={chartConfig}
                    fromZero
                    style={{ borderRadius: 10 }}
                />
            </View>

            <View style={styles.filters}>
                <TouchableOpacity style={styles.filter}><Text style={styles.text}>Filtrar Local</Text></TouchableOpacity>
                <TouchableOpacity style={styles.filter}><Text style={styles.text}>Filtrar Tipo</Text></TouchableOpacity>
                <TouchableOpacity style={styles.filter}><Text style={styles.text}>Filtrar Período</Text></TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.pdfButton}>
                <Text style={styles.text}>📄 Gerar PDF (simulado)</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={[styles.text, { marginTop: 20, textAlign: 'center' }]}>🔙 Voltar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const chartConfig = {
    backgroundColor: '#1B263B',
    backgroundGradientFrom: '#1B263B',
    backgroundGradientTo: '#1B263B',
    decimalPlaces: 0,
    color: () => '#4CC9F0',
    labelColor: () => '#fff',
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D1B2A',
        flex: 1,
        padding: 20,
    },
    header: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#1B263B',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    label: {
        color: '#ADB5BD',
        fontSize: 14,
    },
    value: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    green: {
        color: '#4CAF50',
        marginBottom: 10,
    },
    filters: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        marginBottom: 20,
    },
    filter: {
        backgroundColor: '#1B263B',
        padding: 10,
        borderRadius: 8,
        flex: 1,
        alignItems: 'center',
    },
    pdfButton: {
        backgroundColor: '#1B263B',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
});

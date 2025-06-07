import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import IndicatorCard from '../components/IndicatorCard';

export default function HomeScreen({ navigation }) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await fetch('http://localhost:5193/api/pessoalocalizada/ultimas-48h');
        const json = await response.json();
        
        const dadosMapeados = json.map(item => ({
          id: item.id,
          latitude: item.local.latitude,
          longitude: item.local.longitude,
          descNivel: item.impactoClassificacao?.descNivel || 'Desconhecido',
        }));


        setDados(dadosMapeados);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDados();
  }, []);

const getMarkerColor = (descNivel) => {
  console.log('descNivel recebido:', descNivel);  // Log do valor original

  if (!descNivel) return 'gray';

  const nivel = descNivel.trim().toLowerCase();
  console.log('nivel normalizado:', nivel);  // Log do valor normalizado

  switch (nivel) {
    case 'leve':
      return 'green';
    case 'moderado':
      return '#FFFF00'; // amarelo
    case 'grave':
      return 'red';
    default:
      return 'gray';
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alertas em Tempo Real</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: dados.length > 0 ? dados[0].latitude : -23.55052,
            longitude: dados.length > 0 ? dados[0].longitude : -46.633308,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          {dados.map((ponto) => (
            <Marker
              key={ponto.id}
              coordinate={{
                latitude: ponto.latitude,
                longitude: ponto.longitude,
              }}
              pinColor={getMarkerColor(ponto.descNivel)}
              title={`Impacto: ${ponto.descNivel}`}
            />
          ))}
        </MapView>
      )}

    <View style={styles.indicators}>
      <IndicatorCard label="Pluviometria" value="15mm" />
      <IndicatorCard label="Temperatura" value="28°C" />
      <IndicatorCard label="Umidade do Solo" value="65%" />
    </View>

      <Button title="Ir para Relatórios" onPress={() => navigation.navigate('Report')} />
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
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  indicators: {
    gap: 12,
    marginBottom: 20,
  },
});

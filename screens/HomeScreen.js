import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import IndicatorCard from '../components/IndicatorCard';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function HomeScreen({ navigation }) {
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clima, setClima] = useState(null);


function parseJwt(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}


  
useEffect(() => {
  const fetchClima = async () => {
    try {
      const apiKey = '70cc0c1697de029a20886485a3eef89a';
      const cidade = 'Sao Paulo';
      
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
      );
      const json = await res.json();
      setClima(json);
    } catch (error) {
      console.error('Erro ao buscar clima:', error);
    }
  };

  fetchClima();
}, []);

useEffect(() => {
  const fetchDados = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');

      const response = await fetch('http://192.168.1.32:5193/api/pessoalocalizada/ultimas-48h', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        throw new Error(`Erro ao buscar dados: ${response.status}`);
      }

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

        <IndicatorCard
            label="Vento"
            value={clima ? `${clima.wind.speed} m/s` : '...'}
        />
        <IndicatorCard
            label="Temperatura"
            value={clima ? `${clima.main.temp}°C` : '...'}
        />
        <IndicatorCard
            label="Umidade"
            value={clima ? `${clima.main.humidity}%` : '...'}
        />
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

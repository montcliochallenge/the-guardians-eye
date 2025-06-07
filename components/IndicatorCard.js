import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function IndicatorCard({ label, value }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1B263B',
    padding: 15,
    borderRadius: 10,
  },
  label: {
    color: '#B0BEC5',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  value: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
    label: {
    color: '#CED4DA',
    fontSize: 14,
  },
  value: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

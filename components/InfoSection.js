import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoSection ({ title, children })  {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.paragraph}>{children}</Text>
    </View>
  );

};

const styles = StyleSheet.create({
  title: { 
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    color: '#CED4DA',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  }
});


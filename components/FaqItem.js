import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FAQItem ({ question, answer })  {
  return (
    <View style={styles.section}>
      <Text style={styles.question}>{question}</Text>
      <Text style={styles.answer}>{answer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#1B263B',
    borderRadius: 8,
  },
  question: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  answer: {
    fontSize: 14,
    color: '#CED4DA',
    textAlign: 'justify',
  },
});


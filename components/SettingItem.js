import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SettingItem ({ icon, text, onPress, color = '#fff' })  {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.itemContent}>
        <Icon name={icon} size={24} color={color} />
        <Text style={[styles.itemText, { color }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#263648',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
    marginLeft: 12,
  },
});


import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function TeamMember ({ name, role, image })  {
  return (
    <View style={styles.teamMember}>
      <Image source={image} style={styles.avatar} />
      <View style={styles.memberInfo}>
        <Text style={styles.memberName}>{name}</Text>
        <Text style={styles.memberRole}>{role}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamMember: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B263B',
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  memberInfo: {
    flexDirection: 'column',
  },
  memberName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberRole: {
    color: '#A5A5A5',
    fontSize: 14,
  },
});

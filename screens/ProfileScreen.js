import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default function ProfileScreen() {
    const handleLogout = () => {
        Alert.alert('Logout', 'Função de logout ainda não implementada.');
    };

    const handleEditProfile = () => {
        Alert.alert('Editar Perfil', 'Função de editar perfil ainda não implementada.');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/user.png')}
                style={styles.avatar}
            />

            <Text style={styles.name}>User name</Text>
            <Text style={styles.username}>@username</Text>

            <Text style={styles.email}>user.name@gmail.com</Text>

            <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
                <Text style={styles.buttonText}>Editar Perfil</Text>
            </TouchableOpacity>

            <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>Telefone</Text>
                <Text style={styles.infoText}>+55 11 99999-9999</Text>
            </View>
            <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>Zona de Atuação</Text>
                <Text style={styles.infoText}>Zona Combustão 1</Text>
            </View>

            <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
                <Text style={[styles.buttonText, styles.logoutButtonText]}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#273A28',
        padding: 24,
        alignItems: 'center',
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
    },
    username: {
        fontSize: 18,
        color: '#A5A5A5',
        marginBottom: 8,
    },
    email: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 24,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 8,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    infoBox: {
        width: '100%',
        backgroundColor: '#364732',
        borderRadius: 8,
        padding: 16,
        marginVertical: 6,
    },
    infoTitle: {
        color: '#A5A5A5',
        fontSize: 14,
        marginBottom: 4,
    },
    infoText: {
        color: '#fff',
        fontSize: 16,
    },
    logoutButton: {
        backgroundColor: '#9E1B1B',
        marginTop: 40,
        width: '100%',
    },
    logoutButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
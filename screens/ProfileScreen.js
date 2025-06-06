import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
    const navigation = useNavigation();

    const handleEditProfile = () => {
        Alert.alert('Editar Perfil', 'Função de editar perfil ainda não implementada.');
    };

    const handleDeleteAccount = () => {
        Alert.alert('Excluir Conta', 'Tem certeza que deseja excluir sua conta?', [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Excluir', style: 'destructive', onPress: () => console.log('Conta excluída') },
        ]);
    };

    const handleHelpCenter = () => {
        navigation.navigate('HelpCenter');
    };

    const handleContactUs = () => {
        Alert.alert('Fale Conosco', 'Email: montclio@gmail.com');
    };

    return (
        <View style={styles.container}>

            {/* Foto e nome do perfil */}
            <View style={styles.profileContainer}>
                <Image source={require('../assets/user1.png')} style={styles.profileImage} />
                <Text style={styles.profileName}>Nome usuário</Text>
            </View>


            <TouchableOpacity style={styles.item} onPress={handleEditProfile}>
                <View style={styles.itemContent}>
                    <Icon name="edit" size={24} color="#4CAF50" />
                    <Text style={styles.itemText}>Editar Perfil</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={handleDeleteAccount}>
                <View style={styles.itemContent}>
                    <Icon name="delete" size={24} color="#E53935" />
                    <Text style={[styles.itemText, { color: '#E53935' }]}>Excluir Conta</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.divider} />

            <Text style={styles.sectionTitle}>Suporte</Text>

            <TouchableOpacity style={styles.item} onPress={handleHelpCenter}>
                <View style={styles.itemContent}>
                    <Icon name="help-outline" size={24} color="#fff" />
                    <Text style={styles.itemText}>Central de Ajuda</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item} onPress={handleContactUs}>
                <View style={styles.itemContent}>
                    <Icon name="email" size={24} color="#fff" />
                    <Text style={styles.itemText}>Fale Conosco</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1B2A',
        padding: 24,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50, // círculo
        borderWidth: 2,
        borderColor: '#4CAF50',
    },
    profileName: {
        marginTop: 8,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    header: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
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
        color: '#fff',
        marginLeft: 12,
    },
    sectionTitle: {
        fontSize: 18,
        color: '#A5A5A5',
        marginTop: 30,
        marginBottom: 12,
        fontWeight: '600',
    },
    divider: {
        height: 1,
        backgroundColor: '#263648',
        marginVertical: 24,
    },
});

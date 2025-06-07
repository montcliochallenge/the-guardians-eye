import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';




//Decodificando o token para obeter o ID do usuario
function parseJwt (token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
            '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        ).join(''));

        return JSON.parse(jsonPayload);
    } catch (e) {
        return null;
    }
}

export default function SettingsScreen() {
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({
  nome: '',
  sobrenome: '',
  cpf: '',
  funcao: '',
  email: '',
  senha: '',
  fotoUrl: null,
});


const fetchProfile = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    console.log('Token salvo:', token);

    if (!token) {
      Alert.alert('Erro', 'Usuário não autenticado.');
      navigation.navigate('Login');
      return;
    }

    const payload = parseJwt(token);
    if (!payload || !payload.nameid) {
      Alert.alert('Erro', 'Token inválido.');
      navigation.navigate('Login');
      return;
    }

    const API_URL = `http://localhost:5193/api/usuario/${payload.nameid}`;

    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

if (response.ok) {
  const data = await response.json();
  setProfile({
    nome: data.nome,
    sobrenome: data.sobrenome,
    cpf: data.cpf,
    funcao: data.funcao,
    email: data.email,
    senha: data.senha,
    fotoUrl: data.fotoUrl || null,
  });
}
 else {
      Alert.alert('Erro', 'Não foi possível carregar o perfil.');
    }
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    Alert.alert('Erro', 'Falha na conexão.');
  } finally {
    setLoading(false);
  }
};

    useEffect(() => {
        fetchProfile();
    }, []);


const handleEditProfile = () => {
  navigation.navigate('EditProfile', {
    nome: profile.nome,
    sobrenome: profile.sobrenome,
    cpf: profile.cpf,
    funcao: profile.funcao,
    email: profile.email,
    senha: profile.senha,
  });
};

    const handleDeleteAccount = () => {
    Alert.alert('Excluir Conta', 'Tem certeza que deseja excluir sua conta?', [
        { text: 'Cancelar', style: 'cancel' },
        {
            text: 'Excluir',
            style: 'destructive',
            onPress: async () => {
                try {
                    const token = await AsyncStorage.getItem('userToken');
                    if (!token) {
                        Alert.alert('Erro', 'Token não encontrado.');
                        return;
                    }

                    const payload = parseJwt(token);
                    if (!payload || !payload.nameid) {
                        Alert.alert('Erro', 'Token inválido.');
                        return;
                    }

                    const API_URL = `http://localhost:5193/api/usuario/${payload.nameid}`;

                    const response = await fetch(API_URL, {
                        method: 'DELETE',
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    });

                    if (response.ok) {
                        await AsyncStorage.removeItem('userToken');
                        Alert.alert('Conta excluída', 'Sua conta foi excluída com sucesso.');
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }],
                        });
                    } else {
                        Alert.alert('Erro', 'Não foi possível excluir sua conta.');
                    }
                } catch (error) {
                    console.error('Erro ao excluir conta:', error);
                    Alert.alert('Erro', 'Ocorreu um erro ao excluir sua conta.');
                }
            },
        },
    ]);
};

    const handleHelpCenter = () => {
        navigation.navigate('HelpCenter');
    };

    const handleContactUs = () => {
        Alert.alert('Fale Conosco', 'Email: montclio@gmail.com');
    };

    if (loading) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color="#4CAF50" />
            </View>
        );
    }

    

    return (
        <View style={styles.container}>

            <View style={styles.profileContainer}>
                {profile.fotoUrl ? (
                    <Image source={{ uri: profile.fotoUrl }} style={styles.profileImage} />
                ) : (
                    <Image source={require('../assets/user1.png')} style={styles.profileImage} />
                )}
                <Text style={styles.profileName}>{profile.nome} {profile.sobrenome}</Text>
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
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#4CAF50',
    },
    profileName: {
        marginTop: 8,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
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

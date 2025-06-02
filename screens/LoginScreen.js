import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        const carregarUsername = async () => {
            try {
                const savedUsername = await AsyncStorage.getItem('username');
                if (savedUsername) {
                    setUsername(savedUsername);
                }
            } catch (error) {
                console.log('Erro ao carregar username:', error);
            }
        };
        carregarUsername();
    }, []);

    const handleLogin = async () => {
        try {
            await AsyncStorage.setItem('username', username);
            console.log('Username:', username, 'Senha:', senha);
            navigation.navigate('Home');
        } catch (error) {
            console.log('Erro ao salvar username:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/user.png')}
                style={styles.avatar}
            />

            <View style={styles.inputContainer}>
                <FontAwesome name="user" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nome de usuário"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>Criar conta</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#273A28',
        paddingHorizontal: 24,
    },
    avatar: {
        width: 100,
        height: 100,
        marginBottom: 32,
        borderRadius: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        color: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 10,
        width: '100%',
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        color: '#fff'
    },
    button: {
        backgroundColor: '#000',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    link: {
        color: '#A5A5A5',
        textAlign: 'center',
        marginTop: 16,
    },
});

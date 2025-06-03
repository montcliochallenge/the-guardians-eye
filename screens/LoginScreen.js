import React, { useState } from 'react';
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

    const handleLogin = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'MainTabs' }],
        });
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
                    placeholderTextColor="#999"
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
                    placeholderTextColor="#999"
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
        backgroundColor: '#141A1F',
        paddingHorizontal: 24,
    },
    avatar: {
        width: 120,
        height: 120,
        marginBottom: 32,
        borderRadius: 50,
    },
    inputContainer: {
        backgroundColor: '#2B3640',
        borderColor: '#2B3640',
        flexDirection: 'row',
        alignItems: 'center',
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
        color: '#fff',
    },
    button: {
        backgroundColor: '#DBE8F2',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
        width: '100%',
    },
    buttonText: {
        color: '#141A1F',
        fontSize: 16,
    },
    link: {
        color: '#A5A5A5',
        textAlign: 'center',
        marginTop: 16,
    },
});

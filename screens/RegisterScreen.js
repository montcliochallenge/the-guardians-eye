import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function RegisterScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cargo, setCargo] = useState('ADM');
    const [funcao, setFuncao] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validateCPF = (cpf) => /^\d{11}$/.test(cpf.replace(/[.\-]/g, ''));
    const validateNome = (nome) => nome.trim().length >= 2;
    const validateSobrenome = (sobrenome) => sobrenome.trim().length >= 2;
    const validateSenha = (senha) => senha.length >= 6;
    const validateFuncao = (funcao) => funcao.trim().length > 0;

    const handleRegister = () => {
        if (!validateNome(nome)) {
            Alert.alert('Erro', 'Nome deve ter pelo menos 2 caracteres.');
            return;
        }
        if (!validateSobrenome(sobrenome)) {
            Alert.alert('Erro', 'Sobrenome deve ter pelo menos 2 caracteres.');
            return;
        }
        if (!validateCPF(cpf)) {
            Alert.alert('Erro', 'CPF deve conter 11 números.');
            return;
        }
        if (!validateFuncao(funcao)) {
            Alert.alert('Erro', 'Informe a função.');
            return;
        }
        if (!validateEmail(email)) {
            Alert.alert('Erro', 'Email inválido.');
            return;
        }
        if (!validateSenha(senha)) {
            Alert.alert('Erro', 'Senha deve ter pelo menos 6 caracteres.');
            return;
        }

        Alert.alert('Sucesso', 'Cadastro realizado!');
        navigation.navigate('Login');
    };

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>Cadastro</Text>

            <View style={styles.inputContainer}>
                <FontAwesome name="user" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#999"
                    value={nome}
                    onChangeText={setNome}
                    autoCapitalize="words"
                />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome name="user" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Sobrenome"
                    placeholderTextColor="#999"
                    value={sobrenome}
                    onChangeText={setSobrenome}
                    autoCapitalize="words"
                />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome name="id-card" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="CPF (somente números)"
                    placeholderTextColor="#999"
                    value={cpf}
                    onChangeText={setCpf}
                    keyboardType="numeric"
                    maxLength={11}
                />
            </View>

            <View style={styles.inputContainer}>
                <Feather name="briefcase" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Função"
                    placeholderTextColor="#999"
                    value={funcao}
                    onChangeText={setFuncao}
                    autoCapitalize="words"
                />
            </View>

            <View style={styles.inputContainer}>
                <Feather name="mail" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome name="lock" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Já tenho conta</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#141A1F',
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 60,
        alignSelf: 'center',
        marginTop: 100,
    },
    inputContainer: {
        backgroundColor: '#2B3640',
        borderColor: '#2B3640',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 8,
        paddingHorizontal: 10,
        height: 44,
    },
    button: {
        backgroundColor: '#000',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 4,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        color: '#F45366',
        flex: 1,
        height: 44,
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

import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    ScrollView
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cargo, setCargo] = useState('ADM'); // fixo, pode virar dropdown futuramente
    const [funcao, setFuncao] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const API_URL = 'http://192.168.1.32:5193/api/usuario';

    // Validações 
    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validateCPF = (cpf) => /^\d{11}$/.test(cpf.replace(/[.\-]/g, ''));
    const validateNome = (nome) => nome.trim().length >= 2;
    const validateSobrenome = (sobrenome) => sobrenome.trim().length >= 2;
    const validateSenha = (senha) => senha.length >= 6;
    const validateFuncao = (funcao) => funcao.trim().length > 0;

const handleRegister = async () => {
    // Tratamento de dados
    const nomeTratado = nome.trim();
    const sobrenomeTratado = sobrenome.trim();
    const cpfTratado = cpf.replace(/\D/g, '').trim();
    const cargoTratado = cargo.trim();
    const funcaoTratada = funcao.trim();
    const emailTratado = email.trim().toLowerCase();
    const senhaTratada = senha.trim();

    // Validações com os dados tratados
    if (!validateNome(nomeTratado)) {
        return Alert.alert('Erro', 'Nome deve ter pelo menos 2 caracteres.');
    }
    if (!validateSobrenome(sobrenomeTratado)) {
        return Alert.alert('Erro', 'Sobrenome deve ter pelo menos 2 caracteres.');
    }
    if (!validateCPF(cpfTratado)) {
        return Alert.alert('Erro', 'CPF deve conter 11 números.');
    }
    if (!validateFuncao(funcaoTratada)) {
        return Alert.alert('Erro', 'Informe a função.');
    }
    if (!validateEmail(emailTratado)) {
        return Alert.alert('Erro', 'Email inválido.');
    }
    if (!validateSenha(senhaTratada)) {
        return Alert.alert('Erro', 'Senha deve ter pelo menos 6 caracteres.');
    }

    const usuario = {
        nome: nomeTratado,
        sobrenome: sobrenomeTratado,
        cpf: cpfTratado,
        cargo: cargoTratado,
        funcao: funcaoTratada,
        email: emailTratado,
        senha: senhaTratada,
    };

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario),
        });

        if (response.ok) {
            Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
            navigation.navigate('Login');
        } else {
            let mensagemErro = 'Erro ao realizar cadastro.';
            try {
                const texto = await response.text();
                mensagemErro = texto || mensagemErro;
                console.error('Erro no cadastro:', texto);
            } catch (err) {
                console.error('Erro ao ler resposta como texto:', err);
            }
            Alert.alert('Erro', mensagemErro);
        }
    } catch (error) {
        console.error('Erro na requisição:', error);

        const mensagemErro =
            error?.message?.includes('Network') ?
                'Não foi possível conectar ao servidor. Verifique sua internet.' :
                'Erro inesperado.';

        Alert.alert('Erro', mensagemErro);
    }
};



    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>Cadastro</Text>

            <Input
                icon={<FontAwesome name="user" size={20} color="#666" />}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />

            <Input
                icon={<FontAwesome name="user" size={20} color="#666" />}
                placeholder="Sobrenome"
                value={sobrenome}
                onChangeText={setSobrenome}
            />

            <Input
                icon={<FontAwesome name="id-card" size={20} color="#666" />}
                placeholder="CPF (somente números)"
                value={cpf}
                onChangeText={setCpf}
                keyboardType="numeric"
                maxLength={11}
            />


            <Input
                icon={<Feather name="briefcase" size={20} color="#666" />}
                placeholder="Função"
                value={funcao}
                onChangeText={setFuncao}
            />

            <Input
                icon={<Feather name="mail" size={20} color="#666" />}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <Input
                icon={<FontAwesome name="lock" size={20} color="#666" />}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Já tenho conta</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

function Input({ icon, ...props }) {
    return (
        <View style={styles.inputContainer}>
            {icon}
            <TextInput
                style={styles.input}
                placeholderTextColor="#999"
                autoCapitalize="words"
                {...props}
            />
        </View>
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
        fontSize: 45,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 35,
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
        marginBottom: 12,
        paddingHorizontal: 10,
        height: 44,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        color: '#F45366',
        flex: 1,
        height: 44,
    },
    button: {
        backgroundColor: '#DBE8F2',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: '#A5A5A5',
        textAlign: 'center',
        marginTop: 20,
    },
});

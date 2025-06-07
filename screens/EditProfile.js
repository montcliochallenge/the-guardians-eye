import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Erro ao decodificar JWT:', error);
    return null;
  }
}
export default function EditProfile({ route, navigation }) {
    const { nome: nomeInicial, sobrenome: sobrenomeInicial, cpf: cpfInicial, funcao: funcaoInicial, email: emailInicial, senha: senhaInicial } = route.params;

    const [nome, setNome] = useState(nomeInicial);
    const [sobrenome, setSobrenome] = useState(sobrenomeInicial);
    const [cpf, setCpf] = useState(cpfInicial);
    const [funcao, setFuncao] = useState(funcaoInicial);
    const [email, setEmail] = useState(emailInicial);
    const [senha, setSenha] = useState(senhaInicial);

const handleUpdateProfile = async () => {
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

    const userId = payload.nameid;

    //Motntando o corpo do formulário
    const body = {
      nome,
      sobrenome,
      cpf,
      funcao,
      email,
      senha
    };

    const response = await fetch(`http://localhost:5193/api/usuario/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
      navigation.goBack(); //Volta para a tela de perfil
    } else {
      const errorData = await response.json();
      console.error('Erro na atualização:', errorData);
      Alert.alert('Erro', 'Não foi possível atualizar o perfil.');
    }

  } catch (error) {
    console.error('Erro ao atualizar perfil:', error);
    Alert.alert('Erro', 'Ocorreu um erro ao atualizar o perfil.');
  }
};

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>Editar Perfil</Text>
            <Input icon={<FontAwesome name="user" size={20} color="#666" />} placeholder="Nome" value={nome} onChangeText={setNome} />
            <Input icon={<FontAwesome name="user" size={20} color="#666" />} placeholder="Sobrenome" value={sobrenome} onChangeText={setSobrenome} />
            <Input icon={<FontAwesome name="id-card" size={20} color="#666" />} placeholder="CPF" value={cpf} onChangeText={setCpf} keyboardType="numeric" maxLength={11} />
            <Input icon={<Feather name="briefcase" size={20} color="#666" />} placeholder="Função" value={funcao} onChangeText={setFuncao} />
            <Input icon={<Feather name="mail" size={20} color="#666" />} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            <Input icon={<FontAwesome name="lock" size={20} color="#666" />} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
                <Text style={styles.buttonText}>Salvar Alterações</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

function Input({ icon, ...props }) {
    return (
        <View style={styles.inputContainer}>
            {icon}
            <TextInput style={styles.input} placeholderTextColor="#999" autoCapitalize="words" {...props} />
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
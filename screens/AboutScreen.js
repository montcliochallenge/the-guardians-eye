import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function AboutScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sobre o Aplicativo</Text>
            <Text style={styles.paragraph}>
                Esse aplicativo fornece alertas em tempo real com base em dados climáticos,
                como pluviometria, temperatura e umidade do solo.
            </Text>

            <Text style={styles.title}>Sobre Nós</Text>
            <Text style={styles.paragraph}>
                Na [Nome da Startup], nossa missão é capacitar indivíduos e comunidades a monitorar
                e mitigar riscos ambientais de forma proativa. Acreditamos que o conhecimento é a
                chave para a sustentabilidade e nos esforçamos para fornecer ferramentas acessíveis
                e precisas para a avaliação de riscos.
            </Text>

            <Text style={styles.title}>Nossa Equipe</Text>

            <View style={styles.teamMember}>
                <Image source={require('../assets/user1.png')} style={styles.avatar} />
                <View style={styles.memberInfo}>
                    <Text style={styles.memberName}>João Silva</Text>
                    <Text style={styles.memberRole}>Desenvolvedor Fullstack</Text>
                </View>
            </View>

            <View style={styles.teamMember}>
                <Image source={require('../assets/user1.png')} style={styles.avatar} />
                <View style={styles.memberInfo}>
                    <Text style={styles.memberName}>Maria Oliveira</Text>
                    <Text style={styles.memberRole}>Especialista em Dados Climáticos</Text>
                </View>
            </View>

            <View style={styles.teamMember}>
                <Image source={require('../assets/user1.png')} style={styles.avatar} />
                <View style={styles.memberInfo}>
                    <Text style={styles.memberName}>Carlos Mendes</Text>
                    <Text style={styles.memberRole}>Designer UX/UI</Text>
                </View>
            </View>

            <Text style={styles.title}>Contato</Text>
            <Text style={styles.paragraph}>
                Para dúvidas, sugestões ou parcerias, entre em contato conosco:{"\n"}
                <Text style={styles.email}>contato@nomedaempresa.com</Text>
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D1B2A',
        padding: 20,
        alignItems: 'center',
        paddingBottom: 50,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20,
        marginBottom: 10,
    },
    paragraph: {
        color: '#CED4DA',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
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
    email: {
        color: '#4CAF50',
        fontWeight: 'bold',

    },
});

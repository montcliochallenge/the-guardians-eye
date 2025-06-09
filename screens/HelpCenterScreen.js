import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import FAQItem from "../components/FaqItem";

export default function HelpCenterScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Central de Ajuda</Text>

      <FAQItem
        question="📱 Como editar meu perfil?"
        answer='Vá até a tela de configurações e toque em "Editar Perfil". Lá você pode atualizar seus dados.'
      />

      <FAQItem
        question="🗑️ Como excluo minha conta?"
        answer='Em "Configurações", toque em "Excluir Conta". Após confirmação, sua conta será removida permanentemente.'
      />

      <FAQItem
        question="⚠️ Não estou recebendo alertas climáticos"
        answer="Verifique se as permissões de notificação estão ativadas nas configurações do seu celular."
      />

      <FAQItem
        question="📧 Como entro em contato com o suporte?"
        answer="Você pode nos contatar via email: suporte@nomedaempresa.com"
      />

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D1B2A",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: "#1B263B",
    borderRadius: 8,
  },
  question: {
    fontSize: 16,
    color: "#4CAF50",
    fontWeight: "bold",
    marginBottom: 8,
  },
  answer: {
    fontSize: 14,
    color: "#CED4DA",
    textAlign: "justify",
  },
});

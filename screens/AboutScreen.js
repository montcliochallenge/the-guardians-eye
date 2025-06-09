import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import InfoSection from "../components/InfoSection";
import TeamMember from "../components/TeamMember";

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InfoSection title="Sobre o Aplicativo">
        Esse aplicativo fornece alertas em tempo real com base em dados
        climáticos, como pluviometria, temperatura e umidade do solo.
      </InfoSection>

      <InfoSection title="Sobre Nós">
        Na MontClio, nossa missão é capacitar indivíduos e comunidades a
        monitorar e mitigar riscos ambientais de forma proativa. Acreditamos que
        o conhecimento é a chave para a sustentabilidade e nos esforçamos para
        fornecer ferramentas acessíveis e precisas para a avaliação de riscos.
      </InfoSection>

      <Text style={styles.title}>Nossa Equipe</Text>

      <TeamMember
        name="Pedro Lima"
        role="Desenvolvedor Fullstack"
        image={require("../assets/user1.png")}
      />

      <TeamMember
        name="Vitor Gomes"
        role="Desenvolvedor Fullstack"
        image={require("../assets/user1.png")}
      />

      <TeamMember
        name="Leonardo Pimentel"
        role="Desenvolvedor Fullstack"
        image={require("../assets/user1.png")}
      />

      <InfoSection title="Contato">
        Para dúvidas, sugestões ou parcerias, entre em contato conosco:
        <Text style={{ color: "#4CAF50", fontWeight: "bold" }}>
          {" "}
          montclio@gmail.com
        </Text>
      </InfoSection>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0D1B2A",
    padding: 20,
    alignItems: "center",
    paddingBottom: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginBottom: 10,
  },
  teamMember: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1B263B",
    padding: 10,
    borderRadius: 10,
    marginVertical: 8,
    width: "100%",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  memberInfo: {
    flexDirection: "column",
  },
  memberName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  memberRole: {
    color: "#A5A5A5",
    fontSize: 14,
  },
});

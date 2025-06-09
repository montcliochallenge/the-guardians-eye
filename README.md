# 🌍 Sistema Inteligente de Monitoramento e Classificação de Riscos Ambientais

Este projeto tem como objetivo principal oferecer uma solução tecnológica e acessível para detectar, classificar e responder rapidamente a desastres naturais em áreas urbanas, por meio da integração de **IoT**, **visão computacional**, **inteligência artificial** e **sistemas web interativos**.

---

## 🧠 Contexto do Projeto

Desastres naturais, como deslizamentos de terra e enchentes, continuam a impactar gravemente vidas e estruturas urbanas. Muitas prefeituras carecem de ferramentas tecnológicas para monitorar, prever e responder de forma eficiente a esses eventos.

Pensando nisso, propusemos uma solução que une sensores ambientais, drones com visão computacional e IA, tudo integrado a uma API desenvolvida em .NET para monitoramento em tempo real, análise de gravidade e priorização de resposta.

---

## ✅ Solução Proposta

### 🛰️ Monitoramento com IoT
- Sensores posicionados em áreas de risco coletam dados como:
  - Velocidade do vento
  - Umidade do solo
  - Temperatura
  - Outros parâmetros ambientais relevantes

### 🚁 Apoio ao Resgate com Visão Computacional
- Drones sobrevoam automaticamente as áreas atingidas por desastres;
- Utilizam visão computacional para identificar **a presença de pessoas em risco**;
- Ao detectar uma pessoa:
  - A imagem e a **localização geográfica** são enviadas para a **API .NET**;
  - A imagem é repassada para a **API Python**, que classifica a **gravidade do local**;
  - A gravidade e a localização são então encaminhadas às **equipes de resgate**, permitindo que as áreas mais críticas tenham **prioridade no atendimento**.

> ⚠️ Importante: o sistema **não classifica o estado clínico da pessoa**, apenas a **gravidade da situação ambiental** ao redor.

### ⚙️ Processamento Inteligente com IA
- Imagens capturadas pelos drones e sensores são enviadas à **API Python**, que:
  - Classifica a **gravidade do desastre** (`leve`, `moderado` ou `pesado`);
  - Envia o resultado para a **API .NET**, que registra a ocorrência e dispara os alertas;
  - Permite priorização eficiente e baseada em dados reais.

### 📊 Visualização em Tempo Real
- **Dashboard interativa** com:
  - Alertas e ocorrências em tempo real;
  - Mapa georreferenciado;
  - Histórico completo de desastres;
  - Dados filtráveis e relatórios automáticos.

---

## 🧩 Dependências

Este projeto utiliza **React Native com Expo** e as bibliotecas abaixo para garantir uma experiência rica e funcional:

**🔀 Navegação:**
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `@react-navigation/bottom-tabs`
- `@react-navigation/drawer`

**🛠️ Utilitários para navegação:**
- `react-native-screens`
- `react-native-safe-area-context`
- `react-native-gesture-handler`
- `react-native-reanimated`

**📊 Gráficos:**
- `react-native-chart-kit`
- `react-native-svg`

**🗺️ Mapas:**
- `react-native-maps`

**🎛️ Picker (seleção de opções):**
- `@react-native-picker/picker`

**💾 Armazenamento local:**
- `@react-native-async-storage/async-storage`

> ⚠️ Algumas bibliotecas exigem instalação via `expo install` para garantir compatibilidade com o ambiente Expo.

---

## 🚀 Como Inicializar o Projeto

Siga os passos abaixo para executar o projeto localmente:

### 1. Clone o repositório:
```bash
git clone https://github.com/montcliochallenge/the-guardians-eye.git
cd the-guardians-eye
```

###  2. Instale as dependências:
```bash
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
npm install @react-navigation/native-stack
npm install @react-native-picker/picker
npm install react-native-chart-kit
npm install react-native-svg
npm install @react-navigation/bottom-tabs
npm install @react-navigation/drawer
npm install @react-native-async-storage/async-storage
npx expo install react-native-maps
```

### 3. Inicie o servidor de desenvolvimento:
```bash
npx expo start
```

### 4. Execute no dispositivo ou emulador:  

📱 Escaneie o QR Code com o aplicativo **Expo Go** no seu celular;  

💻 Ou selecione um emulador Android/iOS no menu web do Expo.

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

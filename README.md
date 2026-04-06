# 🎮 PokéDex - Aplicativo Mobile

<div align="center">

![Pokédex](./assets/logo-pokedex-option-2.png)

**Projeto de Prova de Conceito**

[![React Native](https://img.shields.io/badge/React%20Native-0.83.2-blue)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-~55.0.8-white)](https://expo.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

</div>

---

## 👥 Desenvolvedores

- **Pedro Henrique Xavier Constancio**
- **Iago Rodrigues Pinheiro**

### 🎓 Instituição

**FATEC Franca**  
Curso: **Desenvolvimento de Software Multiplataforma**  
Projeto de Prova de Conceito

---

## 📋 Sobre o Projeto

O PokéDex é uma aplicação mobile desenvolvida com **React Native** e **Expo** que permite aos usuários autenticar, buscar e coletar informações sobre Pokémon através da **PokéAPI** (API pública de Pokémon).

### ✨ Funcionalidades

- ✅ **Autenticação**: Login e cadastro de treinadores
- ✅ **Busca Dinâmica**: Procurar Pokémon por nome em tempo real
- ✅ **Coleção Pessoal**: Adicionar e gerenciar Pokémon favoritos
- ✅ **Detalhes Completos**: Visualizar tipos, raridade, movimentos
- ✅ **Armazenamento Local**: Dados persistidos mesmo offline

---

## 🛠️ Tecnologias

| Tecnologia        | Versão  | Descrição                     |
| ----------------- | ------- | ----------------------------- |
| React Native      | 0.83.2  | Framework mobile              |
| Expo              | ~55.0.8 | Plataforma de desenvolvimento |
| React Navigation  | ^7.2.0  | Navegação entre telas         |
| Axios             | ^1.13.6 | Cliente HTTP                  |
| AsyncStorage      | 2.2.0   | Persistência de dados         |
| Styled Components | ^6.3.12 | Estilização                   |

---

## 🚀 Como Executar o Projeto

### 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 14 ou superior)
  - [Download Node.js](https://nodejs.org/)
- **npm** ou **yarn**
  - npm vem com Node.js
  - Yarn: `npm install -g yarn`

- **Git** (opcional, para clonar o repositório)
  - [Download Git](https://git-scm.com/)

### 📥 Instalação Passo a Passo

#### 1️⃣ Clone o Repositório

```bash
git clone <url-do-repositorio>
cd pokeDex
```

#### 2️⃣ Instale as Dependências

```bash
npm install
# ou
yarn install
```

#### 3️⃣ Instale o Expo CLI (se não tiver)

```bash
npm install -g expo-cli
# ou
yarn add -g expo-cli
```

### ▶️ Executar a Aplicação

#### **Opção 1: Com Expo Go (⭐ Recomendado para Desenvolvimento)**

```bash
npm start
# ou
yarn start
# ou
expo start
```

O terminal exibirá um código QR. Você pode:

1. **Escanear o código QR** com:
   - 📱 **Expo Go** (disponível em App Store ou Google Play)
   - 📱 Câmera do celular (Android)

2. **Ou pressionar:**
   - `a` para abrir no Android Emulator
   - `i` para abrir no iOS Simulator (macOS apenas)
   - `w` para abrir na web

#### **Opção 2: Executar no Android**

```bash
npm run android
# Requer Android Emulator rodando ou dispositivo conectado
```

#### **Opção 3: Executar no iOS** (macOS apenas)

```bash
npm run ios
# Requer Xcode instalado
```

#### **Opção 4: Executar na Web**

```bash
npm run web
# Abre em http://localhost:8081
```

---

## 📱 Como Usar o Aplicativo

### 1️⃣ Primeira Utilização - Cadastro

```
[Tela Inicial: LOGIN]
         ↓
   [Clique em CADASTRAR]
         ↓
[Tela de CADASTRO]
  - Nome de Treinador: (ex: Ash Ketchum)
  - Senha: (ex: pikachu123)
         ↓
   [Clique em CADASTRAR]
         ↓
   [Sucesso! Volta ao LOGIN]
```

### 2️⃣ Fazer Login

```
[Tela de LOGIN]
  - Nome: (digite seu nome de treinador)
  - Senha: (digite sua senha)
         ↓
   [Clique em ENTRAR]
         ↓
   [HOME - Pokédex Principal]
```

### 3️⃣ Buscar Pokémon

```
[Tela HOME]
  - Campo de busca: "Digite o nome do Pokémon"
  - Exemplos: pikachu, charizard, mewtwo, dragonite
         ↓
   [Clique em + ou pressione Enter]
         ↓
   [Pokémon adicionado à sua coleção]
```

### 4️⃣ Ver Detalhes

```
[Home - Lista de Pokémon]
         ↓
 [Clique em VER POKÉMON]
         ↓
[Tela de DETALHES]
  - Nome
  - Tipo/Elemento
  - Raridade (MYTHICAL, LEGENDARY, RARE, UNCOMMON, COMMON)
  - Movimentos (primeiros 4)
```

### 5️⃣ Remover Pokémon

```
[Home - Lista de Pokémon]
         ↓
[Clique em EXCLUIR] (botão vermelho)
         ↓
 [Pokémon removido da coleção]
```

---

## 🗂️ Estrutura do Projeto

```
pokeDex/
├── 📁 assets/                          # Imagens e recursos
│   ├── bg-login.png
│   └── logo-pokedex-option-2.png
│
├── 📁 src/                             # Código-fonte
│   ├── 📁 pages/                       # Telas do app
│   │   ├── login.js                    # Autenticação
│   │   ├── cadastro.js                 # Registro de treinador
│   │   ├── home.js                     # Lista de Pokémon
│   │   └── pokemon.js                  # Detalhes do Pokémon
│   │
│   ├── 📁 services/                    # Serviços
│   │   └── api.js                      # Configuração da API
│   │
│   ├── styles.js                       # Componentes estilizados
│   ├── routes.js                       # Navegação entre telas
│
├── App.js                              # Componente raiz
├── index.js                            # Ponto de entrada
├── package.json                        # Dependências
├── app.json                            # Configuração do Expo
└── README.md                           # Este arquivo
```

---

## 🔌 API Utilizada

### PokéAPI

O aplicativo conecta-se à **[PokéAPI](https://pokeapi.co/)** - uma API REST gratuita e pública com dados de Pokémon.

**Endpoints principais:**

1. **Buscar Pokémon**

   ```
   GET https://pokeapi.co/api/v2/pokemon/{nome}
   ```

   Retorna: tipos, movimentos, sprite

2. **Buscar Espécie**
   ```
   GET https://pokeapi.co/api/v2/pokemon-species/{nome}
   ```
   Retorna: raridade, se é lendário/mitológico

**Exemplo:**

```bash
curl https://pokeapi.co/api/v2/pokemon/pikachu
```

---

## 💾 Dados e Armazenamento

### AsyncStorage

Os dados são salvos localmente no dispositivo usando **AsyncStorage**:

- **"user"** → Credenciais do treinador
- **"users"** → Coleção de Pokémon capturados

### Formato de Armazenamento

**Treinador (Cadastro):**

```json
{
  "nome": "Ash Ketchum",
  "password": "senha123"
}
```

**Pokémon (Coleção):**

```json
[
  {
    "login": "pikachu",
    "name": "pikachu",
    "bio": "ELECTRIC",
    "avatar": "https://raw.githubusercontent.com/...",
    "id": 25
  },
  {
    "login": "charizard",
    "name": "charizard",
    "bio": "FIRE / FLYING",
    "avatar": "https://raw.githubusercontent.com/...",
    "id": 6
  }
]
```

---

## 🎯 Fluxo de Navegação

```
┌─────────────────────────────────────────────┐
│                   LOGIN                     │
│  (Autenticação de Treinador)               │
└────────────┬─────────────────────────┬──────┘
             │                         │
        [Entrar]               [Cadastrar]
             │                         │
             v                         v
       ┌────────────┐         ┌────────────┐
       │    HOME    │         │  CADASTRO  │
       │  (Pokédex) │         │ (Registro) │
       └────────────┘         └──────┬─────┘
             ^                        │
             │                    [Cadastrar]
             │                        │
             └────────────────────────┘
             │
        [Ver Pokémon]
             │
             v
        ┌──────────────┐
        │   POKEMON    │
        │  (Detalhes)  │
        └──────────────┘
```

---

## ⚙️ Requisitos de Conexão

- 🌐 **Internet**: Obrigatória para buscar dados da PokéAPI
- 📱 **Smartphone/Emulador**: Para executar o app
- 💾 **Armazenamento Local**: Persiste dados mesmo offline

---

## 🎨 Tema e Design

O aplicativo utiliza um design temático retrô inspirado em Pokémon:

- 🟠 **Cor Primária**: Laranja (#E3350D)
- 🟦 **Cor Secundária**: Azul (#3B5FC9)
- 🟨 **Destaque**: Amarelo (#FBD743)
- 🟫 **Fundo**: Cinza escuro (#1A1C23)
- 🎮 **Fonte**: Press Start 2P (estilo retrô)

---

## 🧪 Testando o App

### Pokémon para Testar

```
Pokémon Comuns:
  - pikachu
  - charizard
  - blastoise
  - venusaur

Pokémon Raros:
  - dragonite
  - alakazam
  - gyarados

Pokémon Lendários:
  - mewtwo
  - zapdos
  - moltres
  - articuno

Pokémon Mitológicos:
  - mew
```

---

## 🐛 Tratamento de Erros

O aplicativo trata os seguintes cenários:

| Erro                   | Mensagem                      | Causa                     |
| ---------------------- | ----------------------------- | ------------------------- |
| Nenhum treinador       | "Nenhum treinador cadastrado" | Primeiro acesso           |
| Credenciais inválidas  | "Nome ou senha incorretos"    | Login errado              |
| Pokémon não encontrado | "Pokémon não encontrado"      | Nome digitado errado      |
| Pokémon duplicado      | "Pokémon já adicionado"       | Tentativa de adicionar 2x |
| Campos vazios          | "Preencha todos os campos"    | Formulário incompleto     |

---

## 📚 Documentação Adicional

Para mais informações técnicas:

- 📖 **[API_DOCUMENTATION.md](API_DOCUMENTATION.md)** - Detalhes dos endpoints
- 🏗️ **[ARCHITECTURE_GUIDE.md](ARCHITECTURE_GUIDE.md)** - Arquitetura do projeto
- ⚡ **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Referência rápida

---

## 💡 Dicas de Desenvolvimento

### Modo Debug

```bash
npm start
# Pressione 'd' para abrir menu de debug
```

### Recarregar a Aplicação

- Pressione 'r' no terminal
- Ou agite o dispositivo (Expo Go)

### Limpar Cache

```bash
expo start --clear
```

### Logs do Console

```bash
# Ver logs em tempo real no terminal
```

---

## 🚀 Próximos Passos (Futuras Melhorias)

- [ ] Adicionar filtro de raridade
- [ ] Implementar categorias de tipos
- [ ] Adicionar favoritos/starred Pokémon
- [ ] Integrar com Redux para estado global
- [ ] Suporte a múltiplos idiomas
- [ ] Modo escuro/claro
- [ ] Compartilhar coleção com amigos
- [ ] Animações de Pokémon

---

## 📞 Suporte

Para dúvidas sobre o projeto, consulte:

- 📧 Email: desenvolvimento@fatecfranca.edu.br
- 🏢 FATEC Franca

---

## 📄 Licença

Este projeto é fornecido como projeto educacional.

---

<div align="center">

**Desenvolvido com ❤️ por**

**Pedro Henrique Xavier Constancio**  
**Iago Rodrigues Pinheiro**

**FATEC Franca**  
**Curso: Desenvolvimento de Software Multiplataforma**

_6 de abril de 2026_

</div>

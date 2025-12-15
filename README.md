# ParkingZ 🅿️

Sistema web de controle de estacionamento com login, cadastro de usuários, registro de entrada e saída de veículos, integrado com MockAPI.

## 🎯 Funcionalidades

- **Autenticação**: Login e cadastro de usuários
- **Gestão de Veículos**: Entrada e saída de veículos com validação de placa
- **Listagem**: Visualização de veículos em tempo real
- **Validação de Placa**: Suporta formatos antigo (ABC-1234) e Mercosul (ABC1D23)
- **Menu Modal**: Navegação overlay que não quebra o layout da página
- **Notificações**: Mensagens toast sutis para feedback de ações (erros, sucesso)
- **Responsivo**: Design adaptável para desktop e mobile

## 🚀 Tecnologias

- **Frontend**: React 18 + Vite
- **Roteamento**: React Router v6
- **Estilos**: CSS puro (responsivo)
- **API**: MockAPI (https://68ebe9a476b3362414cf0a7f.mockapi.io/estacionamento)
- **Gerenciamento de Estado**: React Hooks (useState, useEffect)

## 📋 Pré-requisitos

- Node.js v14+ e npm v6+
- Git

## 🔧 Instalação e Setup

### 1. Clonar o repositório
```bash
git clone https://github.com/BiellNonato/parkingZWeb.git
cd parkingZWeb
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Iniciar servidor de desenvolvimento
```bash
npm run dev
```

O app estará disponível em `http://localhost:5173` (ou outra porta se a 5173 estiver em uso).

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layouts/
│   │   ├── Login/           # Página de login
│   │   ├── Cadastro/        # Página de cadastro
│   │   ├── entry/           # Página de entrada de veículo
│   │   ├── car-exit/        # Página de saída de veículo
│   │   ├── list-cars/       # Listagem de veículos
│   │   ├── cards/           # Componente card de veículo
│   │   └── Menu/            # Menu modal de navegação
│   └── Toast/               # Componente de notificações toast
├── services/
│   └── api.js               # Cliente HTTP para MockAPI
├── App.jsx                  # Router e estado principal
├── main.jsx                 # Entry point
└── index.css                # Estilos globais
```

## 🔌 API e Endpoints

Base URL: `https://68ebe9a476b3362414cf0a7f.mockapi.io/estacionamento`

### Usuários (`/users`)
- **GET** `/users?email=...&senha=...` — Login (filtro por email e senha)
- **POST** `/users` — Criar novo usuário (nome, email, senha)

### Veículos (`/Veiculos`)
- **GET** `/Veiculos` — Listar todos os veículos
- **GET** `/Veiculos?placa=...` — Buscar veículo por placa
- **POST** `/Veiculos` — Registrar entrada (placa, data)
- **DELETE** `/Veiculos/:id` — Registrar saída

## 🧪 Como Testar

### Fluxo de Cadastro
1. Acesse `/cadastro`
2. Preencha Nome, Email e Senha
3. Clique em "Cadastrar"
4. Será redirecionado para `/login`

### Fluxo de Login
1. Acesse `/login`
2. Use credenciais registradas
3. Será redirecionado para `/list` (listagem de veículos)

### Fluxo de Entrada
1. Na listagem, navegue para Entrada (menu ou URL `/entrada`)
2. Informe placa no formato:
   - Antigo: `ABC-1234` ou `ABC1234`
   - Mercosul: `ABC1D23`
3. Clique "Entrar"
4. Veículo aparece no topo da listagem

### Fluxo de Saída
1. Na listagem, clique em um veículo
2. Navegue para Saída (`/saida`)
3. Informe a mesma placa
4. Clique "Sair"
5. Veículo é removido da listagem

## ✨ Destaques

- **Validação rigorosa de placa**: Aceita somente formatos reconhecidos (antigo e Mercosul)
- **Menu modal não-intrusivo**: Overlay que não afeta o layout da página
- **Toast notifications**: Feedback visual discreto para erros e sucesso
- **Inputs com constraints**: maxlength, required, padrões de validação
- **Redirecionamento inteligente**: Após entrada/saída, volta automaticamente à listagem
- **Proteção de rotas**: Acesso ao app requer autenticação (token localStorage)

## 🐛 Conhecidos / Melhorias Futuras

- Implementar persistência de token com expiração
- Adicionar filtros e busca na listagem
- Exportar relatório de veículos
- Autenticação com JWT real (substituir mock token)
- Testes automatizados (Jest + React Testing Library)
- Dark mode nativo

## 📝 Licença

Projeto acadêmico — sinta-se livre para usar, modificar e distribuir.

## 👤 Autor

**Gabriel** — [GitHub](https://github.com/BiellNonato)

---

**Desenvolvido com ❤️ para estacionamento inteligente.**

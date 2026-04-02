# Web App Classe II — Sistema de Logística do Exército

Sistema web desenvolvido em React para gestão e emissão de formulários e notas fiscais relacionados ao controle de materiais da **Classe II** do Exército Brasileiro, contemplando movimentações de materiais provisórios e definitivos, como **TRP** (Termo de Responsabilidade Provisório) e **TRD** (Termo de Responsabilidade Definitivo).

> **Observação:** A interface foi projetada para uso em dispositivos móveis. Ao acessar no navegador, utilize o modo de inspeção (F12) com formato **mobile**.

---

## Funcionalidades

- **Login** — Autenticação de acesso ao sistema
- **Home** — Painel principal com navegação por seções e links rápidos
- **Seção de Expedição** — Gestão e controle de expedição de materiais
- **Depósitos** — Visualização e controle de depósitos
- **Formulários operacionais:**
  - **FormCadastro** — Cadastro de materiais/itens
  - **FormContagem** — Formulário de contagem de estoque
  - **FormRecebimento** — Formulário de recebimento de materiais
  - **FormSolicitacao** — Formulário de solicitação de materiais
  - **FormGF** — Formulário GF (Guia de Fornecimento)
  - **FormFechamento** — Formulário de fechamento de período

---

## Tecnologias Utilizadas

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [React](https://react.dev/) | 18.2.0 | Biblioteca de interface |
| [Vite](https://vitejs.dev/) | 4.1.0 | Bundler e servidor de desenvolvimento |
| [React Router DOM](https://reactrouter.com/) | 6.8.2 | Roteamento entre telas |
| [React Hook Form](https://react-hook-form.com/) | — | Gerenciamento de formulários |
| [Sass](https://sass-lang.com/) | 1.58.3 | Estilização com variáveis e módulos CSS |
| [localforage](https://localforage.github.io/localForage/) | 1.10.0 | Persistência local de dados |
| [match-sorter](https://github.com/kentcdodds/match-sorter) | 6.3.1 | Ordenação e filtragem de listas |

---

## Estrutura do Projeto

```
src/
├── main.jsx              # Ponto de entrada e configuração de rotas
├── index.scss            # Estilos globais
├── assets/               # Imagens e recursos estáticos
├── mock/                 # Dados de mock para desenvolvimento
├── sass/
│   └── _variables.scss   # Variáveis SASS globais
├── views/
│   ├── Login/            # Tela de login
│   ├── Home/             # Painel principal
│   └── Products/         # Tela de produtos/materiais
└── components/
    ├── Header/           # Cabeçalho da aplicação
    ├── HeaderMenu/       # Menu de navegação
    ├── Seções/           # Cards de seções/produtos
    ├── Expedicao/        # Seção de expedição
    ├── Depositos/        # Seção de depósitos
    ├── Recebimento/      # Seção de recebimento
    ├── FormCadastro/     # Formulário de cadastro
    ├── Form contagem/    # Formulário de contagem
    ├── FormRecebimento/  # Formulário de recebimento
    ├── FormSolicitacao/  # Formulário de solicitação
    ├── FormGF/           # Formulário de Guia de Fornecimento
    └── FormFechamento/   # Formulário de fechamento
```

---

## Rotas Disponíveis

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `Login` | Tela de autenticação |
| `/home` | `Home` | Painel principal |
| `/products/:productId` | `Products` | Detalhes de produto/material |
| `/Expedicao` | `Expedicao` | Seção de expedição |
| `/Depositos` | `Depositos` | Seção de depósitos |
| `/FormCadastro` | `FormCadastro` | Cadastro de materiais |
| `/formCont` | `FormCont` | Contagem de estoque |
| `/formReceb` | `FormReceb` | Recebimento de materiais |
| `/FormSolicitacao` | `FormSolicitacao` | Solicitação de materiais |
| `/FormGF` | `FormGF` | Guia de Fornecimento |
| `/FormFechamento` | `FormFechamento` | Fechamento de período |

---

## Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v16 ou superior
- npm

### Instalação

```bash
# Clone ou descompacte o projeto e acesse a pasta
cd Projeto_Classe_II_3_BSUP

# Instale as dependências principais
npm install react-router-dom localforage match-sorter sort-by

# Instale o Vite
npm install vite

# Instale o Sass como dependência de desenvolvimento
npm install sass -D

# Instale o React Hook Form
npm install react-hook-form
```

### Executar em desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:5173`.

### Build de produção

```bash
npm run build
```

---

## Materiais Gerenciados

O sistema foi desenvolvido para suporte à gestão de materiais da **Classe II** (Material de Intendência), contemplando:

- **TRP** — Termo de Responsabilidade Provisório
- **TRD** — Termo de Responsabilidade Definitivo
- Controle de entrada e saída de materiais
- Emissão de guias e formulários operacionais
- Acompanhamento de depósitos e expedição

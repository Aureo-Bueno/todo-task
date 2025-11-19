# Todo Task Project

Uma aplicação de gerenciamento de tarefas moderna e responsiva construída com React, Vite e TypeScript.

## 📋 Descrição

Todo Task é uma aplicação web que permite aos usuários criar, editar, concluir e deletar tarefas. Os dados são persistidos no **localStorage**, garantindo que as tarefas sejam mantidas mesmo após recarregar a página.

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Linguagem com tipagem estática
- **Vite** - Bundler e dev server de alta performance
- **Styled Components** - Biblioteca para CSS-in-JS
- **React Router DOM** - Roteamento de aplicação
- **Context API** - Gerenciamento de estado global
- **LocalStorage** - Persistência de dados local

## 📦 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── AddArea/         # Componente para adicionar novas tarefas
│   └── ListItem/        # Componente individual de tarefa
├── context/             # Context API e tipos
│   ├── TaskContext.tsx  # Provedor de contexto
│   └── types.ts         # Tipos TypeScript
├── hooks/               # Hooks customizados
│   └── useTask/         # Hook para usar TaskContext
├── pages/               # Páginas da aplicação
│   └── home/            # Página principal
├── routes/              # Configuração de rotas
├── styles/              # Estilos globais e tema
└── App.tsx              # Componente raiz
```

## 🚀 Como Subir o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos de Instalação

1. **Clone o repositório** (ou copie os arquivos)

```bash
cd todo-task
```

2. **Instale as dependências**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

A aplicação abrirá automaticamente em `http://localhost:8080`

4. **Build para produção**

```bash
npm run build
```

5. **Visualizar build de produção**

```bash
npm run preview
```

## ✨ Funcionalidades

- ✅ **Adicionar Tarefas** - Digite o nome da tarefa e pressione Enter ou clique no botão
- ✅ **Concluir Tarefas** - Marque como concluída ou pendente
- ✅ **Editar Tarefas** - Modifique o nome de uma tarefa existente
- ✅ **Deletar Tarefas** - Remova tarefas da lista
- ✅ **Persistência** - Tarefas são salvas automaticamente no localStorage
- ✅ **Design Responsivo** - Funciona perfeitamente em mobile, tablet e desktop

## 📱 Responsividade

A aplicação utiliza breakpoints definidos no tema:

- **Mobile**: 320px
- **Tablet**: 768px
- **Desktop**: 1024px
- **Wide**: 1280px
- **Ultra Wide**: 1440px

## 🎨 Customização

### Tema

O tema pode ser customizado em `src/styles/theme.ts`:

- Cores
- Espaçamento
- Tipografia
- Transições
- Sombras

### Adicionar Novas Funcionalidades

Para adicionar novas funcionalidades à aplicação:

1. Estenda a interface `TaskContextType` em `src/context/types.ts`
2. Implemente a lógica em `src/context/TaskContext.tsx`
3. Use o hook `useTask` nos componentes

## 💾 LocalStorage

Os dados são automaticamente sincronizados com o localStorage:

- **Chave**: `tasks_list`
- **Formato**: JSON
- **Sincronização**: Automática após cada alteração na lista

Exemplo de estrutura armazenada:

```json
[
  { "id": 1, "name": "Tarefa 1", "done": false },
  { "id": 2, "name": "Tarefa 2", "done": true }
]
```

## 📝 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria a build de produção |
| `npm run preview` | Visualiza a build de produção |

## 🌐 Browser Support

- Chrome (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Edge (últimas versões)

## 📄 Licença

Este projeto é de código aberto e está disponível para uso livre.

---

**Desenvolvido com ❤️ usando React e Vite**

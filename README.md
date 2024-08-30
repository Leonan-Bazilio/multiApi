# Projeto MainCarousel

Este projeto React é uma aplicação que utiliza autenticação JWT para gerenciar o acesso a uma tela principal com um carrossel de funcionalidades e uma barra de navegação lateral. Após o login, o usuário pode acessar diferentes componentes que oferecem diversas funcionalidades interativas.

## Funcionalidades

### Tela de Login

- **Autenticação JWT**: Acesso protegido com autenticação JWT. Após o login, utilizando **usuario: "admin" e senha "password"** o usuário é redirecionado para a tela principal.

### Tela Principal (MainCarousel)

- **Barra de Navegação**: Barra lateral com opções para acessar cada funcionalidade do carrossel.
- **Componente de Logout**: Permite que o usuário faça logout e retorne à tela de login.
- **Carrossel**: Mostra todos os components da barra de navegação exceto o Logout em forma de um carrosel

### Funcionalidades dos Componentes

1. **QRCodeGenerator**:
   - atravez da api de "qrcode.react" gera um QRcode a partir do que for digitado

2. **IPAddressFinder**:
   - consumindo a API da "https://ipinfo.io/" usando o IP mostra dados da cidade, regiao e pais

3. **MovieSearchEngine**:
   - consumindo a API da "http://www.omdbapi.com/" mostra os filmes a partir do que foi digitado.

4. **TodoApp**:
   - Lista de tarefas simples com funcionalidades básicas de CRUD (Criar, Ler, Atualizar, Deletar) e salvamento no LocalStorage

5. **QuizApp**:
   - Quiz com duas perguntas de multipla escolha simples que exibe a pontuação de acerto no final

6. **LanguageTranslator**:
   - Consumindo a API da "https://api.mymemory.translated.net" traduz texto entre duas linguagens selecionadas


## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Leonan-Bazilio/multiApi.git
   cd multiApi
2. Instale as dependências:
   ```bash
   npm install
3. Inicie a aplicação:
   ```bash
   npm run dev

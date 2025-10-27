#  CEP Inteligente - Zetta Lab 2025

## Índice

* [Sobre o Projeto](#sobre-o-projeto)
* [Funcionalidades](#funcionalidades)
* [API utilizada](#api-utilizada-viacep)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Estrutura de Pastas](#estrutura-de-pastas)
* [Como Executar](#como-executar)
  * [Pré-requisitos](#pré-requisitos)
  * [Opção 1: Docker (Recomendado)](#opção-1-via-docker-recomendado)
  * [Opção 2: Localmente (Desenvolvimento)](#opção-2-localmente-desenvolvimento)
* [Autor](#autor)

---

##  Sobre o Projeto

O **CEP Inteligente** é um projeto front-end desenvolvido para demonstrar o consumo de APIs públicas de forma moderna e eficiente. A aplicação permite aos usuários realizar três tipos de operações distintas com CEPs, tudo em uma interface limpa, moderna e totalmente responsiva.

O projeto foi construído com React, incluindo componentização, tipagem estática com TypeScript, estilização customizada com Sass sobre o Bootstrap, e está 100% containerizado com Docker para garantir um ambiente de execução consistente.

<img width="1921" height="3897" alt="FireShot Capture 001 - Cep inteligente -  localhost" src="https://github.com/user-attachments/assets/795cfb2e-0eb5-4880-bb12-4a145a4ed6af" />


##  API utilizada: **ViaCEP**

Toda a funcionalidade de consulta e validação de endereços deste projeto é alimentada pela **ViaCEP**.

Esta é uma API pública e gratuita que retorna dados de CEPs de todo o território nacional brasileiro. Ela foi escolhida por suas excelentes características para projetos de front-end:

* **100% Gratuita:** Não requer nenhum tipo de pagamento ou assinatura.
* **Sem Autenticação:** Não é necessário o uso de chaves de API (API Keys) ou tokens de acesso, facilitando o consumo direto pelo front-end.
* **Alta Performance:** As respostas são extremamente rápidas, o que contribui para uma ótima experiência do usuário.
* **Múltiplos Formatos:** Embora este projeto utilize `JSON`, a API também oferece outros formatos de retorno.

Para mais informações sobre os endpoints e como utilizá-la, consulte a [documentação oficial](https://viacep.com.br/).

## Funcionalidades

O projeto foi dividido nas seguintes rotas:

* **Home (`/`)**
    Uma landing page inicial de apresentação com seções de rolagem (100vh), animação de digitação e descrição das funcionalidades.

* **Consulta Individual (`/buscar-cep`)**
    Permite ao usuário digitar um CEP de 8 dígitos e retorna uma tabela com os dados completos do endereço.
    <img width="1921" height="944" alt="FireShot Capture 002 - Cep inteligente -  localhost" src="https://github.com/user-attachments/assets/56db400c-f9d7-4193-8327-ba2c55befd60" />
    
* **Busca por Endereço (`/consulta-endereco`)**
    Permite ao usuário encontrar um ou mais CEPs através do preenchimento de formulário com UF, Cidade e Logradouro. Os resultados são exibidos em uma tabela.
    <img width="1921" height="944" alt="FireShot Capture 003 - Cep inteligente -  localhost" src="https://github.com/user-attachments/assets/163e5b7d-ebe3-4e3f-876b-aa4b37301705" />

* **3. Validação em Lote (`/valida-cep`)**
    Uma ferramenta avançada onde o usuário pode adicionar dinamicamente múltiplas linhas de CEP, enviá-las para validação em paralelo e receber um status de "Válido" ou "Inválido" para cada um, com feedback visual.
    <img width="1921" height="944" alt="FireShot Capture 004 - Cep inteligente -  localhost" src="https://github.com/user-attachments/assets/e13e8bc4-55bb-4249-ba7d-2e3919899981" />


## Tecnologias Utilizadas

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

* **[React](https://reactjs.org/)**: Biblioteca principal para a construção da UI.
* **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para robustez e manutenibilidade do código.
* **[Bootstrap](https://getbootstrap.com/)**: Framework CSS para responsividade e componentes (Grid, Cards, Forms).
* **[Sass/SCSS](https://sass-lang.com/)**: Pré-processador para estilização avançada e customização do Bootstrap.
* **[React Router](https://reactrouter.com/)**: Gerenciamento de rotas (SPA).
* **[Axios](https://axios-http.com/)**: Cliente HTTP para consumir a API ViaCEP.
* **[Framer Motion](https://www.framer.com/motion/)** (ou **CSS Transitions**): Para animações de entrada dos resultados.
* **[React Bootstrap Icons](https://icons.getbootstrap.com/)**: Para iconografia.
* **[Docker](https://www.docker.com/)**: Para containerização da aplicação.
* **[Nginx](https://www.nginx.com/)**: Servidor web leve para servir a build de produção no Docker.

## Estrutura de Pastas

```bash
cep-inteligente/ 
├── public/
├── src/
│    ├── assets/          # Imagens, ícones, etc. 
│    ├── components/      # Componentes React reutilizáveis
│    ├── pages/           # Componentes das páginas
│    ├── routes/          # Guarda todas as rotas utilizada
│    ├── services/        # Lógica de chamada da API (EnderecoService)
│    │      └── api/      # Configuração do Axios
│    ├── styles/          # Arquivos SCSS
│    ├── types/           # Interfaces TypeScript (Endereco.ts)
│    ├── App.tsx          # Roteador principal da aplicação 
│    └── index.tsx        # Ponto de entrada da aplicação
├── .dockerignore    # Ignora arquivos no build do Docker 
├── .gitignore       # Ignora todos os arquivos no git
├── Dockerfile       # Receita para criar a imagem de produção
├── nginx.conf       # Configuração do Nginx (para o React Router)
├── package.json     # Dependências e scripts 
├── tsconfig.json    # Configurações do TypeScript 
└── README.md        # Documentação do projeto
```

## Como Executar
> Você pode executar o projeto de duas formas ( opção 1 e opção 2)

### Pré-requisitos

* **[Docker](https://www.docker.com/get-started)** (Obrigatório para a Opção 1)
* **[Node.js](https://nodejs.org/en/)** (v18 ou superior - Obrigatório para a Opção 2)
* **NPM** ou **Yarn**

---

## **Opção 1:** via Docker (Recomendado)

Esta é a forma mais simples de executar o projeto, pois ele será executado em um container isolado com todas as dependências pré-configuradas (servidor Nginx e build do React).

**1. Clone o repositório:**
```bash
git clone https://github.com/fabiovalim/cep-inteligente.git

cd cep-inteligente
```
**2. Construa a imagem Docker:**
```bash
docker build -t cep-inteligente .
```
> Este comando usa o Dockerfile para construir a imagem de produção

**3. Execute o container:**
```bash
docker run -d -p 8080:80 --name app-cep-container cep-inteligente
```
> Este comando inicia o contêiner em segundo plano e mapeia a porta 8080 do seu PC para a porta 80 do contêiner

**4. Acesse a aplicação:**
```bash
Abra seu navegador e acesse: http://localhost:8080
```

## **Opção 2:** Localmente (Desenvolvimento)

Esta forma é ideal para fazer alterações no código e ver as mudanças em tempo real.

**1. Clone o repositório:**
```bash
git clone https://github.com/fabiovalim/cep-inteligente.git

cd cep-inteligente
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Execute a aplicação:**
```bash
npm start
```

**4. Acesse a aplicação:**
```bash
Abra seu navegador e acesse: http://localhost:3000
```

#  Autor
- **Fábio Damas Valim** - www.linkedin.com/in/fabio-valim 

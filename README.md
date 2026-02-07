<h1 align="center">Calculadora de Orçamento de Bordados</h1>
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)
![localStorage](https://img.shields.io/badge/localStorage-used-blueviolet?style=flat)

Este projeto é uma calculadora de orçamentos de bordados online, criada para gerenciar orçamentos de bordados de forma prática, rápida e organizada. Foi desenvolvido para atender a uma necessidade pessoal em um ambiente de produção de vestuário e também serviu como um exercício prático de aprendizado em programação e desenvolvimento web.

## Como usar

- [basta clicar aqui](https://leo-rodrigs-a.github.io/Calculadora-Bordado-Local/) para acessar o aplicativo rapidamente.
- Os dados são salvos no localStorage, sem uso de banco de dados.

- Na primeira vez que for executado no seu navegador, uma lista de cards pré definidos de orçamentos será carregada para você começar.
- Clique no card para ver informações detalhadas
- você pode excluir orçamentos clicando no icone da lixeira no card do orçamento.
- Clique no botão "Novo" para calcular um novo orçamento com base na quantidade de camisetas que você bordará e na quantidade de pontos de bordado específicos.

- Agora você pode salvar ou descartar este orçamento.
- Se você salvar, ele aparecerá no topo da lista de orçamentos.
- Você pode pesquisar orçamentos na sua lista digitando o título na barra de pesquisa.
- Você pode clicar em um orçamento para ver mais detalhes.
- Você pode recalcular o preço de um orçamento já salvo, clicando em editar e alterando os dados
- Você pode excluir um orçamento da lista.

---

## 🚀 Recursos

- 📋 Crie e armazene orçamentos com detalhes essenciais.
- 🔍 Filtro de pesquisa dinâmico para orçamentos.
- 🗃️ Exibe os 12 orçamentos mais recentes.
- ➕ Botão "Carregar mais" para exibir orçamentos adicionais.
- 💾 Dados armazenados em `localStorage` (somente client side).

---

## 🧠 Conceitos e Tópicos Estudados

Este projeto me ajudou a aprender e aplicar os seguintes conceitos:

### 👨‍💻 Front-End

- **HTML Semântico**

- Uso correto de `<ul>`, `<li>`, `<button>`, `<input>`, etc.
- **CSS**

- Estilização básica para organização visual
- **JavaScript puro**

- Manipulação do DOM

- Tratamento de eventos (`click`, `input`, etc.)

- Validação de formulários

- Uso de `export/import` para código modular

- `localStorage` para persistência no lado do cliente

- Criação dinâmica de elementos HTML (`createElement`, `appendChild`, etc.)

- Gerenciamento do estado da aplicação com arrays e objetos

- Organização da lógica em arquivos separados e focados

### 📦 Estrutura e Organização

- Lógica de código dividida em múltiplos arquivos `.js` para seguir as práticas de código limpo
- Uso de IDs e datas de criação para classificar e gerenciar cotações
- Dados base iniciais carregados somente se o `localStorage` estiver vazio
- Implementação do botão **"Carregar mais"** para melhorar a experiência do usuário
- O usuário pode editar valores de **variáveis**, como o valor base para apenas 1 camiseta, para tornar as cotações mais detalhadas Precisão

---

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript ES6+
- API Web: LocalStorage

---

## 📚 Lições Aprendidas

Este projeto foi um laboratório pessoal para aprendizado e prática. Cada funcionalidade foi uma oportunidade para estudar e aplicar:

- **Como estruturar dados com arrays de objetos**
- **Como interagir com o DOM de forma organizada**
- **Como dividir a lógica em arquivos JavaScript modulares**
- **Como persistir dados sem um backend**
- **Princípios de código limpo e responsabilidade única**

---

## 📁 Estrutura de Pastas

```bash
📦 calculadora de bordado

├── README.md
├── index.html
└── src
    ├── css
    │   ├── color.css
    │   ├── lista.css
    │   ├── modal-mestre.css
    │   ├── reset.css
    │   ├── responsivo.css
    │   └── style.css
    ├── img
    │   ├── edit-icon.svg
    │   ├── favicon.webp
    │   ├── logo-dtex.webp
    │   └── lupa.svg
    └── js
        ├── acessar-local-storage
        │   ├── orcamento-service.js
        │   └── variaveis-service.js
        ├── atualizar-lista.js
        ├── atualizar-variaveis.js
        ├── dom-builder
        │   ├── construir-lista.js
        │   ├── construir-variaveis.js
        │   ├── modal-editar.js
        │   ├── modal-novo.js
        │   ├── modal-variaveis.js
        │   └── modal-visualizar.js
        ├── main.js
        ├── objetos
        │   ├── lista-base.js
        │   └── variaveis-base.js
        └── utils
            └── toggles.js
```

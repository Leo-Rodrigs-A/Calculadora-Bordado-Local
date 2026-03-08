<h1 align="center">Calculadora de Orçamento de Bordados</h1>

![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)
![localStorage](https://img.shields.io/badge/localStorage-used-blueviolet?style=flat)

Este projeto é uma calculadora de orçamentos de bordados online, criada para gerenciar orçamentos de forma prática, rápida e organizada. Foi desenvolvido para atender a uma necessidade pessoal em um ambiente de produção de vestuário e também serviu como exercício prático de aprendizado em programação e desenvolvimento web.

## Como usar

- [basta clicar aqui](https://leo-rodrigs-a.github.io/Calculadora-Bordado-Local/) para acessar o aplicativo rapidamente.
- Os dados são salvos no localStorage, sem uso de banco de dados.

- Na primeira execução no navegador, uma lista base de orçamentos é carregada automaticamente.
- Clique no card para ver informações detalhadas.
- Você pode excluir um orçamento pelo modal de visualização.
- Clique em "Novo" para abrir o formulário de criação de orçamento.
- Você pode pesquisar orçamentos na sua lista digitando o título na barra de pesquisa.
- Você pode clicar em um orçamento para ver mais detalhes.
- As variáveis globais podem ser ajustadas pelo painel principal ou pelo botão mobile.

---

## 🚀 Recursos

- 📋 Visualize e gerencie orçamentos com detalhes essenciais.
- 🔍 Filtro de pesquisa dinâmico para orçamentos.
- 🗃️ Exibe os 12 orçamentos mais recentes.
- ➕ Botão "Carregar mais" para exibir orçamentos adicionais.
- ⚙️ Edição de variáveis globais de cálculo com persistência local.
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
    ├── estilos
    │   ├── cores.css
    │   ├── global.css
    │   ├── lista-orcamentos.css
    │   ├── modal.css
    │   ├── reset.css
    │   └── responsividade.css
    ├── img
    │   ├── edit-icon.svg
    │   ├── favicon.webp
    │   ├── logo-dtex.webp
    │   └── lupa.svg
    └── js
        ├── app.js
        ├── componentes
        │   ├── lista-componente.js
        │   ├── modal-editar.js
        │   ├── modal-novo.js
        │   ├── modal-variaveis.js
        │   ├── modal-visualizar.js
        │   └── variaveis-painel.js
        ├── controladores
        │   ├── lista-controlador.js
        │   └── variaveis-controlador.js
        ├── dados-iniciais
        │   ├── orcamentos-iniciais.js
        │   └── variaveis-iniciais.js
        ├── regras
        │   └── calculo-orcamento.js
        ├── servicos
        │   ├── orcamentos-servico.js
        │   └── variaveis-servico.js
        └── utilitarios
            ├── formatadores.js
            └── gerenciador-toggles.js
```

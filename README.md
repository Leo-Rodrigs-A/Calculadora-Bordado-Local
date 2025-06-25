# 🧵 Embroidery Quote Calculator
![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=flat&logo=javascript&logoColor=black)
![localStorage](https://img.shields.io/badge/localStorage-used-blueviolet?style=flat)



This project is a web-based embroidery quotes calculator designed to manage embroidery quotes in a practical, fast, and organized way. It was built to solve a personal need within a clothing production environment and also served as a hands-on learning exercise in programming and web development.

## How to use it

- [just click here](bit.ly/bordcalc) for quickly access the website
- it saves data into the localStorage, no database use here.
- the firt time it runs into your browser, loads a base list of quotes where you can start from
- hit the novo button to calculate a new quote based on how many shirts you will do embroidery work, plus how many embroidery stiches that specific embroidery has.
- you can now save this quote or discard it
- if you save it, it will appear at the top of the quotes list.
- you can search for quote into your list by just typing the quotes tittle at the search bar
- you can click a quote to see more details
- you can recalculate an already saved quotes price
- you can delete a quote from the list
 
---

## 🚀 Features

- 📋 Create and store quotes with essential details
- 🔍 Dynamic search filter for quotes
- 🗃️ Displays the 12 most recent quotes
- ➕ "Load more" button to display additional quotes
- 💾 Data stored in `localStorage` (no backend yet)

---

## 🧠 Concepts and Topics Studied

This project helped me learn and apply the following concepts:

### 👨‍💻 Front-End

- **Semantic HTML**
  - Proper use of `<ul>`, `<li>`, `<button>`, `<input>`, etc.
- **CSS**
  - Basic styling for visual organization
- **Vanilla JavaScript**
  - DOM manipulation
  - Handling events (`click`, `input`, etc.)
  - Form validation
  - Using `export/import` for modular code
  - `localStorage` for client-side persistence
  - Dynamically creating HTML elements (`createElement`, `appendChild`, etc.)
  - Managing application state with arrays and objects
  - Organizing logic into separate, focused files

### 📦 Structure and Organization

- Divided code logic into multiple `.js` files to follow clean code practices
- Used IDs and creation dates to sort and manage quotes
- Loaded initial base data only if `localStorage` was empty
- Implemented **"Load more"** button for improved user experience
- user can edit **variable** values, like the base value for just 1 shirt, to make quotes more accurated

---

## 🛠️ Technologies

- HTML5  
- CSS3  
- JavaScript ES6+  
- Web API: LocalStorage  

---

## 📈 Future Improvements

- Connect to a real backend (Node.js or Firebase)
- Add user authentication
- Implement advanced filters by name, date, and urgency
- Export quotes as PDF files
- Make layout responsive for mobile devices

---

## 📚 Lessons Learned

This project was a personal lab for learning and practice. Each feature was an opportunity to study and apply:

- **How to structure data with arrays of objects**
- **How to interact with the DOM in a clean way**
- **How to split logic across modular JavaScript files**
- **How to persist data without a backend**
- **Clean Code principles and single responsibility**

---

## 📁 Folder Structure

```bash
📦 embroidery-quote-calculator
├── index.html
└── README.md
├── src
      |── css
      |    |── reset.css
      |    |── styles.css
      |    |── modal-novo-orcamento.css
      |    └── modal-bordado.css
      ├── js
           ├── main.js
           ├── construir-componentes.js
           ├── salvar-item.js
           ├── excluir-item.js
           ├── filtar-item.js
           └── lista-base.js
      

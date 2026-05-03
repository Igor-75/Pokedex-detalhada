# 🧩 Pokédex Interativa

Aplicação web desenvolvida com **HTML, CSS e JavaScript**, consumindo a **PokéAPI**, com o objetivo de listar Pokémon e exibir seus detalhes em uma interface dinâmica e responsiva.

---

## 🚀 Funcionalidades

* 📋 Listagem de Pokémon em formato de cards
* 🔄 Paginação com botão **"Load More"**
* 🎨 Cores dinâmicas baseadas no tipo do Pokémon
* 🔍 Navegação para página de detalhes ao clicar no card
* 📄 Tela individual com informações completas de cada Pokémon:

  * Nome e número
  * Tipos
  * Imagem
  * Altura e peso
  * Habilidades
* 🔙 Botão para retornar à Pokédex

---

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Consumo de API REST (Fetch API)
* PokéAPI (https://pokeapi.co)

---

## 🧠 Conceitos aplicados

* Manipulação de DOM
* Requisições assíncronas (Promises / Fetch)
* Estruturação de dados com classes (Model)
* Modularização de código
* Query String para navegação entre páginas
* Responsividade com CSS Grid

---

## 📂 Estrutura do projeto

```
pokedex/
│
├── index.html
├── details.html
└── assets/
    ├── css/
    │   ├── global.css
    │   ├── pokedex.css
    │   └── details.css
    └── js/
        ├── main.js
        ├── details.js
        ├── poke-api.js
        └── pokemon-model.js
```

---

## 💡 Melhorias futuras

* 🔍 Campo de busca por nome
* 📊 Exibição de status base (HP, ataque, defesa)
* 🎨 Melhorias visuais e animações
* ⚡ Transformar em SPA (Single Page Application)
* 💾 Cache de dados com localStorage

---

## 👨‍💻 Autor

Desenvolvido por **Igor Oliveira** 🚀
Projeto com foco em aprendizado prático de JavaScript e consumo de APIs.

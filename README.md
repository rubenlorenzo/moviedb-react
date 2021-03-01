# Moviedb React

Un proyecto de un catalogo de películas, para practicar desarrollo FrontEnd y consultas a  [The Movie Database API](https://developers.themoviedb.org/3/getting-started/).

[Características](##Características) | [Tecnologías utilizadas](##Tecnologías-utilizadas) | [Instalación](##Instalación)

## Características

### Componentes
Contiene los siguientes:

+ [x] Listas de Películas más populares (Top10).
+ [x] Película
+ [x] Buscador 
+ [x] Paginado

### Usos 
Las siguientes páginas **Top 10**, **Buscador** y **Película**. Se tienen que poder: 

| | **Top 10** | **Buscador** | **Película**
|-------|-------|-------|-------|
| Listar   | :ballot_box_with_check: | :ballot_box_with_check: |  |
| Paginar |  			     | :ballot_box_with_check: |  |
| Mostrar  |  			     |  		       | :ballot_box_with_check: |
 

## Tecnologías utilizadas 
+ HTML5
+ Sass
+ Bootstrap
+ Git
+ ES6
+ React - Hooks


## Instalación
```
git clone https://github.com/rubenlorenzo/kanban-project.git
```

Crear el fichero src/env.js, con los siguientes datos:
```
const api_key = "token-de-la-api";

export {api_key};
```

Instalar dependencias y lanzar:
``` 
yarn install
yarn start
```

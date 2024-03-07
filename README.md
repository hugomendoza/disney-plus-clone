
# Disney App Clone

Projecto inspirado en la app de streaming de Disney Plus.

El usuario puede hacer login usando su correo y contraseña, al ingresar se le mostraran las categorias a las que tiene acceso junto con carrusel que muestra los estrenos de la plataforma.

## Stack

**Cliente:** React, Redux, Styled Components, React Router Dom, Axios, React Slick, Toastify Js

**Iconos:** Tabler Icons

**Servidor:** JSON server v 0.17.4, JSON server auth

**Archivo DB:** db.json

**Usuarios de prueba:**

```json
[
    {
        "email": "test1@gmail.com",
        "password": "123456",
    },
    {
        "email": "test2@gmail.com",
        "password": "123456",
    },
    {
        "email": "test3@gmail.com",
        "password": "123456",
    }
]
```


## Installation


```bash
    https://github.com/hugomendoza/disney-plus-clone.git
    cd disney-plus-clone
    npm install
    npm run dev
```
```npm
    "dev:api": "json-server --watch db.json --middlewares ./node_modules/json-server-auth --port 3001",
    "dev:vite": "vite",
    "dev": "concurrently \"npm run dev:vite\" \"npm run dev:api\"",
```

El comando `npm run dev` inicializa simultaneamente el API y sus endpoints junto con el ambiente de desarrollo
## API Reference

#### URLs de consulta

```http
   GET http://localhost:3001/users
   GET http://localhost:3001/categories
   GET http://localhost:3001/movies
```

#### Ejemplo de solicitud para validación de usuario
```http
   POST http://localhost:3001/login
```

Usuarios válidos para ingresar a la APP

```http
[
    {
        "id": "1",
        "name": "usuario1",
        "email": "test1@gmail.com",
        "avatar": "https://randomuser.me/api/portraits/lego/1.jpg",
        "password": "$2a$10$KiIqyRDPjBEXRsNOajo2wuZHX1x08belJ8VMKk/WSEWEksAHpSEfq",
        "allowedCategories": [
            "1",
            "2",
            "3",
            "5"
        ]
    },
    {
        "id": "2",
        "name": "usuario2",
        "email": "test2@gmail.com",
        "avatar": "https://randomuser.me/api/portraits/lego/2.jpg",
        "password": "$2a$10$KiIqyRDPjBEXRsNOajo2wuZHX1x08belJ8VMKk/WSEWEksAHpSEfq",
        "allowedCategories": [
            "1",
            "2",
            "4"
        ]
    },
    {
        "id": "3",
        "name": "usuario3",
        "email": "test3@gmail.com",
        "avatar": "https://randomuser.me/api/portraits/lego/3.jpg",
        "password": "$2a$10$KiIqyRDPjBEXRsNOajo2wuZHX1x08belJ8VMKk/WSEWEksAHpSEfq",
        "allowedCategories": [
            "1",
            "3",
            "4",
            "5"
        ]
    }
]
```
#### Ejemplo de solicitud para obtener peliculas por categorías
```http
   GET http://localhost:3001/categories/1?_embed=movies

   {
    "id": "1",
    "name": "disney",
    "slug": "disney",
    "logo": "disney",
    "movies": [
        {
            "id": "1",
            "slug": "hercules",
            "title": "Hércules",
            "synopsis": "Laborum consectetur anim aliquip eiusmod minim officia nulla veniam ex proident cillum pariatur mollit. Officia ex pariatur esse do dolor consectetur incididunt mollit pariatur exercitation. Qui nulla ad esse proident velit voluptate ullamco nisi irure nostrud in minim adipisicing ut. Do fugiat consectetur officia voluptate occaecat commodo commodo nulla laboris sint voluptate commodo enim. Incididunt magna voluptate ad et nulla aliquip commodo incididunt non sint magna non culpa sit. Nulla adipisicing id sunt deserunt enim non et qui enim velit mollit laborum enim. Exercitation aute laboris irure deserunt dolor anim id ad sint do incididunt mollit labore.",
            "categoryId": "1",
            "image": "https://hips.hearstapps.com/hmg-prod/images/hercules-disney-pelicula-1667464184.jpg",
            "trailer": "HyafJaKlH_g",
            "premier": true
        },
        {
            "id": "2",
            "slug": "la-bella-durmiente",
            "title": "La Bella Durmiente",
            "synopsis": "Laborum consectetur anim aliquip eiusmod minim officia nulla veniam ex proident cillum pariatur mollit. Officia ex pariatur esse do dolor consectetur incididunt mollit pariatur exercitation. Qui nulla ad esse proident velit voluptate ullamco nisi irure nostrud in minim adipisicing ut. Do fugiat consectetur officia voluptate occaecat commodo commodo nulla laboris sint voluptate commodo enim. Incididunt magna voluptate ad et nulla aliquip commodo incididunt non sint magna non culpa sit. Nulla adipisicing id sunt deserunt enim non et qui enim velit mollit laborum enim. Exercitation aute laboris irure deserunt dolor anim id ad sint do incididunt mollit labore.",
            "categoryId": "1",
            "image": "https://images-1.rakuten.tv/storage/snapshot/shot/423413de-42b0-4184-9d45-0f7a9f6750af-snapshot-1590666325-width936-quality90.jpeg",
            "trailer": "3D8ZtKRa5Bs",
            "premier": false
        },
        {
            "id": "3",
            "slug": "el-planeta-del-tesoro",
            "title": "El Planeta del Tesoro",
            "synopsis": "Laborum consectetur anim aliquip eiusmod minim officia nulla veniam ex proident cillum pariatur mollit. Officia ex pariatur esse do dolor consectetur incididunt mollit pariatur exercitation. Qui nulla ad esse proident velit voluptate ullamco nisi irure nostrud in minim adipisicing ut. Do fugiat consectetur officia voluptate occaecat commodo commodo nulla laboris sint voluptate commodo enim. Incididunt magna voluptate ad et nulla aliquip commodo incididunt non sint magna non culpa sit. Nulla adipisicing id sunt deserunt enim non et qui enim velit mollit laborum enim. Exercitation aute laboris irure deserunt dolor anim id ad sint do incididunt mollit labore.",
            "categoryId": "1",
            "image": "https://2.bp.blogspot.com/-2RNu4IubU10/W5KOLWxuqlI/AAAAAAAAoRw/NF9gosJVE0w_BeqSV366llRVEKVM_5MfwCLcBGAs/s1600/John%2BSilver%2By%2BJim%2BHawkins%2Ben%2BEl%2Bplaneta%2Bdel%2Btesoro%2B-%2BCine%2Bde%2BEscritor.png",
            "trailer": "uokpV_AkQAc",
            "premier": false
        },
    ]
}
```
#### Ejemplo de solicitud para obtener datos de peliculas por id
```http
GET http://localhost:3001/movies/1
{
    "id": "1",
    "slug": "hercules",
    "title": "Hércules",
    "synopsis": "Laborum consectetur anim aliquip eiusmod minim officia nulla veniam ex proident cillum pariatur mollit. Officia ex pariatur esse do dolor consectetur incididunt mollit pariatur exercitation. Qui nulla ad esse proident velit voluptate ullamco nisi irure nostrud in minim adipisicing ut. Do fugiat consectetur officia voluptate occaecat commodo commodo nulla laboris sint voluptate commodo enim. Incididunt magna voluptate ad et nulla aliquip commodo incididunt non sint magna non culpa sit. Nulla adipisicing id sunt deserunt enim non et qui enim velit mollit laborum enim. Exercitation aute laboris irure deserunt dolor anim id ad sint do incididunt mollit labore.",
    "categoryId": "1",
    "image": "https://hips.hearstapps.com/hmg-prod/images/hercules-disney-pelicula-1667464184.jpg",
    "trailer": "HyafJaKlH_g",
    "premier": true
}
```

## To Do

* [ ]  Hacer que el sitio sea adaptativo a dispositivos móviles
* [ ]  Utilizar servicios como Firebase o Supabase para almacenar la data
* [ ]  En la página de categorías utilizar elementos que ayuden a  diferenciar
* [ ]  Agregar transiciones para mejorar la experiencia de usuario
## Authors

- [@hugomendoza](https://github.com/hugomendoza)



## Paises App

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


![Logo](/assets/LOGOTIPO.png)


## API Reference

Todos los endpoints deben comenzar con **/api** al principio del endpoint, referencia 👇

#### Get unique artesano

```http
  GET /api/artesano
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `tokenAccesso` | `string` | **Required**. Your JWT |


Estructura de Carpetas
============================

> Convencion utlizada para las diferentes carpetas, Tomando como referencia los principios de **Clean Architecture**.

### Estructure a nivel de desarrollo (Nivel de carpeta Src)

    .
    ├── src                  
    │   ├── api
    │   │   ├── graphql       # Contiene todos los archivos relacionados con graphos
    │   │   |   ├──  apollo   # Contiene el cliente de Apollo
    |   |   |   └──  queries  #
    │   ├── assets          # 
    │   ├── components      #
    │   ├── router          #
    │   ├── services        #
    │   └── views           # 






## Environment Variables

Se ha facilitado un archivo .env.development en cual contendra las variables necesarias para desplegar la app en desarrollo.


`VITE_API_URI`

`VITE_PIXABAY_API_KEY`


## Deployment

Para desplegar este proyecto en desarrollo, utiliza:

```bash
  npm run dev
```

## Tech Stack

Vue 3, Typescript, CSS, Boostrap

## System Requiremnts

**Node Js** >= 20.11.1 (Utilizada para la construccion del proyecto) 




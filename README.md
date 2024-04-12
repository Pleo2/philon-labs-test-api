# Philon Labs Test 
>! IMPORTANTE
### Importante antes de realizar el compose se deben agregar los respectivos archivos .env 

Para el frontend-sprite-pokemon se deben agregar `.env`, `.env.local` 

Para Backend-sprite-pokemon se debe agregar `.env` unicamente

> Instalacion de Dependencias
### Installar dempendencias en ambas carpetas
    ```
       ./ npm install
       cd frontend-sprite-pokemon && npm install 
       cd ..
       cd backend-sprite-pokemon && npm install
    ```


## Descripción general:

Este documento explica el propósito y el uso de cada script dentro del package.json proporcionado. Estos scripts están destinados a la gestión de una aplicación Docker Compose, posiblemente una configuración de frontend y backend.

### Estos script se deben ejecutar a traves de `npm run <nombre del script>`

## Scripts relacionados con el frontend:
### `startfront:dev`

* **Descripción:** Inicia el entorno de desarrollo para la aplicación frontend.
* **Comando:** `docker-compose up client-dev --renew-anon-volumes`
    * `docker-compose up`: Inicia los servicios Docker Compose definidos en el archivo `docker-compose.yml` predeterminado (a menos que se anule).
    * `client-dev`: Especifica los nombres de los servicios a iniciar, en este caso, el servicio de desarrollo del frontend (probablemente llamado `client-dev` en `docker-compose.yml`).
    * `--renew-anon-volumes`: (Opcional) Fuerza la recreación de volúmenes anónimos asociados con los servicios. Esto puede ser útil para limpiar datos durante el desarrollo.

### `endfront:dev`

* **Descripción:** Detiene el entorno de desarrollo para la aplicación frontend.
* **Comando:** `docker-compose down client-dev --renew-anon-volumes`
    * `docker-compose down`: Detiene los servicios Docker Compose en ejecución.
    * `client-dev`: Especifica los nombres de los servicios a detener.

## Scripts relacionados con el backend:

### `startback:prod`

* **Descripción:** Inicia el entorno de producción para la aplicación backend.
* **Comando:** `docker-compose up backend-prod --renew-anon-volumes`
    * Similar a `startfront:dev`, pero apunta al servicio de producción backend (`backend-prod`).

### `endback:prod`

* **Descripción:** Detiene el entorno de producción para la aplicación backend.
* **Comando:** `docker-compose down backend-prod --renew-anon-volumes`
    * Similar a `endfront:dev`, pero apunta al servicio de producción backend.

## Scripts relacionados con la aplicación completa:

### `startapp:prod`

* **Descripción:** Inicia toda la aplicación en modo producción (probablemente utilizando un archivo `docker-compose.prod.yml` separado).
* **Comando:** `docker compose -f docker-compose.prod.yml up`
    * `docker compose`: Usa el comando `docker-compose` directamente.
    * `-f docker-compose.prod.yml`: Especifica el archivo `docker-compose.prod.yml` alternativo para la configuración de producción.

### `endapp:prod`

* **Descripción:** Detiene toda la aplicación que se ejecuta en modo producción.
* **Comando:** `docker compose -f docker-compose.prod.yml down`
    * Similar a `startapp:prod`, pero con el comando `down` para detener los servicios.

## Scripts de limpieza:

### `clean`

* **Descripción:** Detiene todos los servicios Docker Compose y elimina cualquier volumen asociado.
* **Comando:** `docker-compose down -v`
    * `-v`: Elimina volúmenes además de detener los servicios.

## Consideraciones adicionales:

* Los nombres exactos de los servicios y las imágenes pueden variar según la configuración de su proyecto específico.
* Considere usar variables de entorno para almacenar información sensible como credenciales de base de datos en lugar de codificarlas en los scripts.
* Para implementaciones de producción, se recomienda utilizar herramientas de implementación automatizadas que puedan manejar las actualizaciones de imágenes y las reversiones de forma más elegante.

Al comprender estos scripts y sus funcionalidades, puede administrar de manera efectiva los entornos de desarrollo, prueba y producción de su aplicación Docker Compose.

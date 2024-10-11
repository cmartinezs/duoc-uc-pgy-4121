# Consumo de API usando Json Server

## Descripción

Se debe levantar el servicio de json server para que este exponga el archivo info.json, el cual contiene la información de los usuarios.

Pra instalar json-server se debe ejecutar el siguiente comando

```bash
npm install -g json-server
```

Para utilizar este servicio, se deben actualizar las librerias del proyecto
```bash
npm install
```
Para levantar el servidor se debe ejecutar el siguiente comando:
```bash
json-server info.json
```
Se puede acceder a la api mediante la siguiente url:
```bash
http://localhost:3000/users
```
Se puden utilizar los metodos GET, POST, PUT y DELETE para interactuar con la api.

## Actividad

1. Utilizar el proyecto base para crear un CRUD consumiento la api de json-server.
2. La página principal debe mostrar la lista de usuarios.
3. Se debe poder agregar un nuevo usuario mediante un boton en la pagina principal que lleve a la pagina de creación de usuario.
4. Se debe poder eliminar un usuario desde la pagina principal con un boton de eliminar en cada fila.

## Tutorial

En el siguiente link se puede encontrar un tutorial para crear una api con json server:

```bash
https://code.tutsplus.com/es/fake-rest-api-up-and-running-using-json-server--cms-27871t
```

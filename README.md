# PGY-4121

## Como desplegar la apk desde Ionic

1. Instalación de dependencias
```bash
npm install
```
2. Construcción de la aplicación (crea carpera www)
```bash
ionic build --prod 
```
3. Añadir la libreria capacitor/android (se debe realizar una sola vez)
```bash
npm install @capacitor/android
```
4. Añadir la plataforma android (crea carpeta android) (se debe realizar una sola vez)
```bash
npx cap add android
```
5. Sincronizar la aplicación con el proyecto de android
```bash
ionic capacitor sync android
```
6. Construir la aplicación en android y abre Android Studio
```bash
ionic capacitor build android --prod
```
7. Construir APK, en Android Studio
```
Menu: Build -> Build Bundle(s) / APK(s) -> Build APK(s)
```

## Ejercicio Práctico

APP de Ventas de Entradas

Se debe crear una APP de ventas de entradas (cine, eventos, deportes, conciertos, etc)

Consideraciones:

- La app debe permitir la venta de entradas para diferentes eventos
- La app debe permitir ingresa la información base del cliente: nombre, apellido edad
- Se debe mostrar la lista de eventos y los tipos de entradas (VIP, Prefencial, General, etc), con su respectivo precio. Se debe indicar la cantidad de entradas
- Se deben aplicar descuentos por edad del cliente, el descuento es a criterio del alumno. Ejemplos
- si el cliente es menor de 18 años, tiene un 10% de descuento
- si es adulto mayor de 60 años tiene un 20% de descuento
- Al finalizar la compra se debe mostrar el total a pagar, el detalle de las entradas con su precio real y el descuento aplicado

requisitos técnicos

* header y footer
* campos de formulario
* botones
* navegación
* alertas y/o mensajes emergentes
* animacion
* *ngFor
* ngModel
* logs
* services


Se debe entregar el proyecto en github

## Ejercicio Consumo de API
Considerando la app base de consumo de Rick And Morty:
1. Mejorar la navegacion, impidiendo que se pueda llegar a paginas negativas o inexistentes
2. Para cada personaje de la lista, permitir ver el detalle de su información, lo que aparece en la api respectiva: https://rickandmortyapi.com/api/character/${id}, donde ${id} se debe reemplazar por el id del personaje

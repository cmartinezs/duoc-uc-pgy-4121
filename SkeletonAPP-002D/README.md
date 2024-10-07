# Como desplegar la apk desde Ionic

1. Instalación de dependencias
```bash
npm install
```
2. Construcción de la aplicación (crea carpera www)
```bash
ionic build --prod 
```
3. Añadir la libreria capacitor/android
```bash
npm install @capacitor/android
```
4. Añadir la plataforma android (crea carpeta android)
```bash
npx cap add android
```
5. Sinconizar la aplicación con el proyecto de android
```bash
ionic capacitor sync android
```
6. Construir la aplicación en android y abre Android Studio
```bash
ionic capacitor build android --prod
```
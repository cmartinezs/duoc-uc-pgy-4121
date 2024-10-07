# Como desplegar la apk desde Ionic

1. Instalación de dependencias
```bash
npm install
```
2. Construcción de la aplicación www
```bash
ionic build --prod 
```
3. Añadir la plataforma android
```bash
npx cap add android
```
4. Sinconizar la aplicación con el proyecto de android
```bash
ionic capacitor sync android
```
5. Construir la aplicación en android y abre Android Studio
```bash
ionic capacitor build android --prod
```
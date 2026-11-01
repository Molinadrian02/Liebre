# Liebre

App para correr con avisos sonoros de ritmo, rutinas por bloques, plan semanal adaptativo hasta tu carrera y subida a Strava.

Hay dos versiones del mismo código:

- **Web** (GitHub Pages): https://molinadrian02.github.io/Liebre/ — necesita la pantalla encendida durante la carrera.
- **App Android** (Capacitor): el GPS, los pitidos y la voz siguen con el móvil bloqueado gracias a un servicio en primer plano. Sube las carreras a Strava.

## Instalar y actualizar la app Android

Cada cambio en `main` compila el APK en GitHub Actions y lo publica en *Releases*.

1. Instala **Obtainium** en el móvil (desde su GitHub o F-Droid).
2. En Obtainium: *Añadir app* → `https://github.com/Molinadrian02/Liebre` → *Añadir*.
3. Instala Liebre desde Obtainium. Cuando haya versión nueva, Obtainium avisa y se actualiza con un toque. Los datos se conservan.

### Firma (una sola vez)

El workflow necesita dos secretos en *Settings → Secrets and variables → Actions*:

- `LIEBRE_KEYSTORE_B64`: el keystore en base64.
- `LIEBRE_KEYSTORE_PASSWORD`: su contraseña.

Sin ellos se compila una versión de prueba que no se publica. Guarda el keystore: si se pierde, las actualizaciones dejan de instalarse encima y habría que desinstalar.

## Strava

En la app: *Ajustes → Strava*. Crea tu propia aplicación en https://www.strava.com/settings/api con *Authorization Callback Domain* = `localhost`, pega el Client ID y el Client Secret y pulsa *Conectar*.

## Desarrollo

- `index.html` es toda la app. La web la sirve tal cual; `npm run build:web` la copia a `www/` añadiendo el runtime de Capacitor.
- `npm run sync` prepara `www/` y sincroniza el proyecto `android/`.
- Al cambiar iconos o el manifest de la web, sube la versión de `CACHE` en `sw.js`.
- Probar en casa: *Ajustes → Modo prueba → GPS simulado*.

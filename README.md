# Liebre

App web para correr con avisos sonoros de ritmo y rutinas por bloques.

## Publicarla (GitHub Pages)
1. Crea un repositorio público, por ejemplo `liebre`, y sube estos archivos a la raíz.
2. Settings → Pages → Source: «Deploy from a branch», rama `main`, carpeta `/ (root)`.
3. Abre `https://<tu-usuario>.github.io/liebre/` en Chrome del Android → menú ⋮ → «Instalar aplicación».

Necesita HTTPS (GitHub Pages lo da) para acceder al GPS.

## Al actualizar
Cambia `CACHE = 'liebre-v1'` en `sw.js` a `v2`, `v3`… para que el móvil coja la versión nueva.

## Probar en casa
Ajustes → Modo prueba → GPS simulado.

// Copia la app web (raíz del repo, la misma que sirve GitHub Pages) a www/ para empaquetarla en Android.
// En la copia de Android se añade el runtime de Capacitor antes del script de la app.
import { mkdirSync, copyFileSync, rmSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
rmSync('www', { recursive: true, force: true });
mkdirSync('www/sounds', { recursive: true });
for (const f of ['manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png']) copyFileSync(f, `www/${f}`);
for (const f of readdirSync('sounds')) copyFileSync(`sounds/${f}`, `www/sounds/${f}`);
copyFileSync('node_modules/@capacitor/core/dist/capacitor.js', 'www/capacitor.js');
const html = readFileSync('index.html', 'utf8');
const marker = "<script>\n'use strict';";
if (!html.includes(marker)) throw new Error('No encuentro el script principal en index.html');
writeFileSync('www/index.html', html.replace(marker, '<script src="capacitor.js"></script>\n' + marker));
console.log('www/ listo');

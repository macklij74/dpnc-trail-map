# DPNC Trails — Progressive Web App

A fun, family-friendly trail guide app for Denison Pequotsepos Nature Center & Coogan Farm.

## Files
- `index.html` — The entire app (one file!)
- `manifest.json` — PWA metadata (name, icon, theme color)
- `sw.js` — Service worker for offline support
- `icon-192.svg` / `icon-512.svg` — App icons

## Features
- 🥾 **8 trails** with difficulty, distance, time, and elevation
- 🗺️ **Trail map** overview
- 🦉 **Wildlife spotting guide** — 12 species with locations & seasons
- 🎒 **Trail tips** — safety, gear, rules, contact info
- 📱 **Install to home screen** on Android and iPhone
- 📡 **Works offline** once installed

## Deploy (free options)

### Option 1 — Netlify (easiest, 2 min)
1. Go to https://netlify.com → sign up free
2. Drag the entire `dpnc-trail-app` folder onto the Netlify dashboard
3. Done! You get a URL like `https://dpnc-trails.netlify.app`

### Option 2 — GitHub Pages (free)
1. Create a free GitHub account
2. New repository → upload these 5 files
3. Settings → Pages → Deploy from main branch
4. URL: `https://yourusername.github.io/dpnc-trails`

### Option 3 — Your existing website
Upload all 4 files to a folder on your server.
Must be served over **HTTPS** for PWA install to work.

## Installing on phones

### Android
1. Open the app URL in Chrome
2. Tap the "Install" banner at the top, OR tap ⋮ menu → "Add to Home Screen"
3. Tap Install — it appears on the home screen like a real app!

### iPhone
1. Open the app URL in Safari (must be Safari, not Chrome)
2. Tap the Share button (box with arrow) at the bottom
3. Tap "Add to Home Screen"
4. Tap Add — it appears on the home screen!

## Customizing
All trail data is in the `TRAILS` array in `index.html` — easy to edit!
Wildlife data is in the `WILDLIFE_ALL` array.
Colors are CSS variables at the top of the `<style>` block.

## Contact
DPNC: (860) 536-1216 | 109 Pequotsepos Road, Mystic, CT 06355

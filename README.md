# JOMOUD Stock & Retours — Logiciel Windows (PC)

Logiciel de bureau pour JOMOUD Comércio Geral :
- 📦 Suivi du stock et des dates d'expiration
- 🔔 Notification sur le PC quand des produits expirent bientôt (1x/jour, app ouverte)
- 🟣 Suivi des produits gâtés et des pertes en Kwanza
- ↩️ Fiches de retour clients : PDF, WhatsApp, export CSV Excel
- 💾 Sauvegarde et restauration des données

## Comment obtenir le logiciel (.exe) — même méthode que l'APK

1. Va sur **github.com** et crée un nouveau dépôt (ex : `jomoud-stock-pc`)
2. **Add file → Upload files** : glisse-dépose TOUT le contenu de ce dossier
   (⚠️ y compris le dossier `.github/workflows/`)
3. Clique sur **"Commit changes"**
4. Onglet **Actions** → le build "Construire logiciel Windows JOMOUD" démarre
5. Quand c'est vert ✅ → clique dessus → section **Artifacts** →
   télécharge **JOMOUD-Stock-Windows**
6. Décompresse : tu obtiens 2 fichiers :
   - `JOMOUD Stock & Retours Setup 1.0.0.exe` → **installateur** (crée un
     raccourci sur le bureau, installation en 1 clic)
   - le fichier `portable` → à lancer directement **sans installation**
     (pratique sur clé USB pour tes promotrices !)

## Utilisation

- Double-clique sur l'icône **JOMOUD Stock** sur le bureau
- À l'ouverture, si des produits expirent bientôt, une notification Windows apparaît
- Les fichiers exportés (PDF, CSV, sauvegardes) s'enregistrent avec la boîte
  "Enregistrer sous" — choisis le dossier que tu veux
- Le bouton WhatsApp ouvre WhatsApp Web dans ton navigateur

## Structure

```
├── .github/workflows/build-exe.yml  ← compilation automatique du .exe
├── main.js                          ← fenêtre du logiciel (Electron)
├── index.html                       ← l'application complète
├── jspdf.umd.min.js                 ← génération PDF hors ligne
├── build/icon.ico / icon.png        ← icône JOMOUD
└── package.json                     ← configuration
```

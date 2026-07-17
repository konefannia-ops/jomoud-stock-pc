const { app, BrowserWindow, shell, dialog, Menu } = require('electron');
const path = require('path');

function creerFenetre() {
  const fen = new BrowserWindow({
    width: 1100,
    height: 780,
    minWidth: 420,
    minHeight: 600,
    title: 'JOMOUD — Stock & Retours',
    icon: path.join(__dirname, 'build', 'icon.png'),
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  Menu.setApplicationMenu(null);
  fen.loadFile('index.html');

  // Liens externes (WhatsApp Web, etc.) -> navigateur par défaut
  fen.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http')) shell.openExternal(url);
    return { action: 'deny' };
  });

  // Téléchargements (PDF, CSV, sauvegardes) -> boîte "Enregistrer sous"
  fen.webContents.session.on('will-download', (event, item) => {
    const nom = item.getFilename();
    const chemin = dialog.showSaveDialogSync(fen, {
      title: 'Enregistrer le fichier',
      defaultPath: path.join(app.getPath('downloads'), nom)
    });
    if (chemin) item.setSavePath(chemin);
    else item.cancel();
  });
}

app.whenReady().then(() => {
  creerFenetre();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) creerFenetre();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

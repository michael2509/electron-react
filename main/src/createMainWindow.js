const { BrowserWindow } = require('electron');

const createMainWindow = (mainWindow) => {
    mainWindow = new BrowserWindow({
      icon: __dirname + '/assets/app-icon.png',
      show: false,
      webPreferences: { // <--- (1) Additional preferences
      nodeIntegration: false,
      contextIsolation: false,
      preload: __dirname + '/preload.js' // <--- (2) Preload script
    }});

    if (process.env.NODE_ENV === 'dev') {
        mainWindow.loadURL('http://localhost:3000');
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadURL(`file://${process.resourcesPath}/build/html/index.html`);
    }

    mainWindow.once('ready-to-show', () => {
      mainWindow.maximize();
      mainWindow.show();
    })

    mainWindow.on('closed', () => mainWindow = null);
};

module.exports = createMainWindow;
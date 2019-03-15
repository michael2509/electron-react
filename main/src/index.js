const { app, ipcMain } = require('electron');
const createMainWindow = require('./createMainWindow');
const db = require('./db/db');
const formatUser = require('./formatUsers');

let mainWindow;

app.on('ready', () => createMainWindow(mainWindow));

ipcMain.on('get-users', async (event) => {
  const users = await db.getUsers();
  const usersData = users.map((user) => user._doc);
  const formattedUser = formatUser(usersData);

  event.returnValue = formattedUser;
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow()
  }
});
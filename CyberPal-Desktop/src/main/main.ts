/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
import { installNmap, executeNmapCommand, stopNmapCommand } from '../Utils/NmapTool';
import { executeTcpdumpCommand, installTcpdump, stopTcpdumpCommand } from '../Utils/TcpdumpTool';
import { executeAircrackCommand, installAircrack, stopAircrackCommand } from '../Utils/AircrackTool';
import { executeNetcatCommand, installNetcat, stopNetcatCommand } from '../Utils/NetcatTool';
import { executeJohnCommand, installJohn, stopJohnCommand } from '../Utils/JohnTheRipperTool';
import { executeWiresharkCommand, installWireshark, stopWiresharkCommand } from '../Utils/WiresharkTool';
import { executeArachniCommand, installArachni, stopArachniCommand } from '../Utils/ArachniTool';
import { executeOpenvpnCommand, installOpenvpn, stopOpenvpnCommand } from '../Utils/OpenvpnTool';
import { createUserScript, executeScriptFile } from '../Utils/UserScripts';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      nodeIntegration: true,
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

// Nmap tool

ipcMain.on('install-nmap', async () => {
  console.log('listened on install-nmap channel'); 
  const win = BrowserWindow.getFocusedWindow();
  const savePath = app.getPath('downloads');
  // let downloaded_file_path = '';
  const options = {
    savePath,
    openFolderWhenDone: false,
    onStarted: (dl) => {
      console.log('Download started:', dl.getSavePath());
    },
    onProgress: (progress) => {
      console.log('Download progress:', progress);
    },
  };
  const result = await installNmap(win, options);
  console.log(result);
  return result;
});

ipcMain.handle('start-nmap', async (event, args) => {
  console.log("listening on start-nmap channel");
  const result = await executeNmapCommand(args.nmapPath, args.nmapArgs);
  console.log(result);
  return result
})

ipcMain.on('stop-nmap', (event, args) => {
  console.log("listening on stop-nmap channel");
  stopNmapCommand();
})

// Tcpdump tool

ipcMain.on('install-tcpdump', async () => {
  console.log('listened on install-tcpdump channel'); 
  const win = BrowserWindow.getFocusedWindow();
  const savePath = app.getPath('downloads');
  // let downloaded_file_path = '';
  const options = {
    savePath,
    openFolderWhenDone: false,
    onStarted: (dl) => {
      console.log('Download started:', dl.getSavePath());
    },
    onProgress: (progress) => {
      console.log('Download progress:', progress);
    },
  };
  const result = await installTcpdump(win, options);
  console.log(result);
  return result;
});

ipcMain.handle('start-tcpdump', async (event, args) => {
  console.log("listening on start-tcpdump channel");
  // executeTcpdumpCommand(args.tcpdumpPath, args.tcpdumpArgs);
  const result = await executeTcpdumpCommand(args.nmapPath, args.nmapArgs);
  console.log(result);
  return result
})

ipcMain.on('stop-tcpdump', (event, args) => {
  console.log("listening on stop-tcpdump channel");
  stopTcpdumpCommand();
})

// Aircrack tool

ipcMain.on('install-aircrack', async () => {
  console.log('listened on install-aircrack channel'); 
  const win = BrowserWindow.getFocusedWindow();
  const savePath = app.getPath('downloads');
  const options = {
    savePath,
    openFolderWhenDone: false,
    onStarted: (dl) => {
      console.log('Download started:', dl.getSavePath());
    },
    onProgress: (progress) => {
      console.log('Download progress:', progress);
    },
  };
  const result = await installAircrack(win, options);
  console.log(result);
  return result;
});

ipcMain.on('start-aircrack', (event, args) => {
  console.log("listening on start-aircrack channel");
  executeAircrackCommand(args.aircrackPath, args.aircrackArgs);
})

ipcMain.on('stop-aircrack', (event, args) => {
  console.log("listening on stop-aircrack channel");
  stopAircrackCommand();
})

// Netcat tool

ipcMain.on('install-netcat', async () => {
  console.log('listened on install-netcat channel'); 
  const win = BrowserWindow.getFocusedWindow();
  const savePath = app.getPath('downloads');
  const options = {
    savePath,
    openFolderWhenDone: false,
    onStarted: (dl) => {
      console.log('Download started:', dl.getSavePath());
    },
    onProgress: (progress) => {
      console.log('Download progress:', progress);
    },
  };
  const result = await installNetcat(win, options);
  console.log(result);
  return result;
});

ipcMain.on('start-netcat', (event, args) => {
  console.log("listening on start-netcat channel");
  executeNetcatCommand(args.netcatPath, args.netcatArgs);
})

ipcMain.on('stop-netcat', (event, args) => {
  console.log("listening on stop-netcat channel");
  stopNetcatCommand();
})

// John the Ripper tool

ipcMain.on('install-john', async () => {
  console.log('listened on install-john channel'); 
  const win = BrowserWindow.getFocusedWindow();
  const savePath = app.getPath('downloads');
  const options = {
    savePath,
    openFolderWhenDone: false,
    onStarted: (dl) => {
      console.log('Download started:', dl.getSavePath());
    },
    onProgress: (progress) => {
      console.log('Download progress:', progress);
    },
  };
  const result = await installJohn(win, options);
  console.log(result);
  return result;
});

ipcMain.on('start-john', (event, args) => {
  console.log("listening on start-john channel");
  executeJohnCommand(args.johnPath, args.johnArgs);
})

ipcMain.on('stop-john', (event) => {
  console.log("listening on stop-john channel");
  stopJohnCommand();
})

// Wireshark tool

ipcMain.on('install-wireshark', async () => {
  console.log('listened on install-wireshark channel'); 
  const win = BrowserWindow.getFocusedWindow();
  const savePath = app.getPath('downloads');
  const options = {
    savePath,
    openFolderWhenDone: false,
    onStarted: (dl) => {
      console.log('Download started:', dl.getSavePath());
    },
    onProgress: (progress) => {
      console.log('Download progress:', progress);
    },
  };
  const result = await installWireshark(win, options);
  console.log(result);
  return result;
});

ipcMain.on('start-wireshark', (event, args) => {
  console.log("listening on start-wireshark channel");
  executeWiresharkCommand(args.wiresharkPath, args.wiresharkArgs);
})

ipcMain.on('stop-wireshark', (event) => {
  console.log("listening on stop-wireshark channel");
  stopWiresharkCommand();
})

// Arachni tool

ipcMain.on('install-arachni', async () => {
  console.log('listened on install-arachni channel'); 
  const win = BrowserWindow.getFocusedWindow();
  const savePath = app.getPath('downloads');
  const options = {
    savePath,
    openFolderWhenDone: false,
    onStarted: (dl) => {
      console.log('Download started:', dl.getSavePath());
    },
    onProgress: (progress) => {
      console.log('Download progress:', progress);
    },
  };
  const result = await installArachni(win, options);
  console.log(result);
  return result;
});

ipcMain.on('start-arachni', (event, args) => {
  console.log("listening on start-arachni channel");
  executeArachniCommand(args.arachniPath, args.arachniArgs);
})

ipcMain.on('stop-arachni', (event) => {
  console.log("listening on stop-arachni channel");
  stopArachniCommand();
})

// Openvpn tool

ipcMain.on('install-openvpn', async () => {
  console.log('listened on install-openvpn channel'); 
  const win = BrowserWindow.getFocusedWindow();
  const savePath = app.getPath('downloads');
  const options = {
    savePath,
    openFolderWhenDone: false,
    onStarted: (dl) => {
      console.log('Download started:', dl.getSavePath());
    },
    onProgress: (progress) => {
      console.log('Download progress:', progress);
    },
  };
  const result = await installOpenvpn(win, options);
  console.log(result);
  return result;
});

ipcMain.on('start-openvpn', (event, args) => {
  console.log("listening on start-openvpn channel");
  executeOpenvpnCommand(args.openvpnPath, args.openvpnArgs);
})

ipcMain.on('stop-openvpn', (event) => {
  console.log("listening on stop-openvpn channel");
  stopOpenvpnCommand();
})

// User scripts

ipcMain.on('run-script', (event, args) => {
  console.log("listening on run-script channel");
  const scriptFilePath = createUserScript(args.scriptContents, args.scriptName, args.username);
  executeScriptFile(scriptFilePath);
  console.log("done");
})
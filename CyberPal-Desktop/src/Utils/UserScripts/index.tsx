import { app } from "electron";
const fs = require('fs');
const path = require('path');

function createUserScript(scriptContents: string, scriptName: string, username: string) {

  const documentsFolderPath = app.getPath('documents');
  const appFolderPath = path.join(documentsFolderPath, 'CyberPal');
  if (!fs.existsSync(appFolderPath)) {
    fs.mkdirSync(appFolderPath);
  }
  const userPath = path.join(appFolderPath, username)
  if (!fs.existsSync(userPath)) {
    fs.mkdirSync(userPath);
  }
  const userScriptsPath = path.join(userPath, "Scripts")
  if (!fs.existsSync(userScriptsPath)) {
    fs.mkdirSync(userScriptsPath);
  }

  const scriptFilePath = path.join(userScriptsPath, scriptName);
  fs.writeFileSync(scriptFilePath, scriptContents);
  return scriptFilePath;
}
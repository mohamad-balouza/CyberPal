import { app } from "electron";
import { exec } from 'child_process';
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
import { shell } from 'electron';

export const createUserScript = (scriptContents: string, scriptName: string, username: string) => {

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


export const executeScriptFileInProcess = (scriptFilePath: string) => {
  const scriptProcess = spawn('cmd.exe', ['/c', scriptFilePath]);

  scriptProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  scriptProcess.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  scriptProcess.on('close', (code) => {
    console.log(`.bat file exited with code ${code}`);
  });
}

export const executeScriptFile = (scriptFilePath: string) => {
    shell.openPath(scriptFilePath);
}
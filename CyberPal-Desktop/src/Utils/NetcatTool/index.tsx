import { spawn } from "child_process";
import { download } from 'electron-dl';
import { app } from "electron";
import extract = require('extract-zip');
import path = require('path');

export const installNetcat = async (win, options) => {
    console.log("I'm trying to install netcat");
    const netcatDownloadURL = 'https://nmap.org/dist/ncat-portable-5.59BETA1.zip';
  
    try {
      const downloadedNetcat= await download(win, netcatDownloadURL, options);
      console.log('Download completed:', downloadedNetcat.getSavePath());
      let downloadedNetcatPath = downloadedNetcat.getSavePath().split("\\");
      let downloadedNetcatPathFixed = downloadedNetcatPath.join("\\\\");

      try {
        const downloadsFolder = app.getPath('downloads');
        const targetDir = path.join(downloadsFolder,'netcat');
        await extract(downloadedNetcatPathFixed, { dir: targetDir });
        console.log('Netcat extracted');
      } catch (error) {
        console.error('Error extracting Netcat:', error);
        throw(error);
      }

    } catch (error) {
      console.error('Failed to download Netcat Zip:', error);
    }
  };
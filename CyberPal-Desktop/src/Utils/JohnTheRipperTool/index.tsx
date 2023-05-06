import { app } from "electron";
import { download } from 'electron-dl';
import extract = require('extract-zip');
import path = require('path');
import { spawn } from "child_process";
import { exec } from 'child_process';


export const installJohn = async (win, options) => {
    console.log("I'm trying to install John the Ripper");
    const johnDownloadURL = 'https://www.openwall.com/john/k/john-1.9.0-jumbo-1-win64.7z';
  
    try {
      const downloadedJohn= await download(win, johnDownloadURL, options);
      console.log('Download completed:', downloadedJohn.getSavePath());
      let downloadedJohnPath = downloadedJohn.getSavePath().split("\\");
      let downloadedJohnPathFixed = downloadedJohnPath.join("\\\\");

      try {
        const downloadsFolder = app.getPath('downloads');
        const targetDir = path.join(downloadsFolder,'john');
        await extract(downloadedJohnPathFixed, { dir: targetDir });
        console.log('John The Ripper extracted');
      } catch (error) {
        console.error('Error extracting John The Ripper:', error);
        throw(error);
      }

    } catch (error) {
      console.error('Failed to download John The Ripper Zip:', error);
    }
};
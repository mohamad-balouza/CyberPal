import { app } from "electron";
import { download } from 'electron-dl';
import extract = require('extract-zip');
import path = require('path');


export const installAircrack = async (win, options) => {
    console.log("I'm trying to install aircrack");
    const aircrackDownloadURL = 'https://download.aircrack-ng.org/aircrack-ng-1.7-win.zip';
  
    try {
      const downloadedTcpdump= await download(win, aircrackDownloadURL, options);
      console.log('Download completed:', downloadedTcpdump.getSavePath());
      let downloadedTcpdumpPath = downloadedTcpdump.getSavePath().split("\\");
      let downloadedTcpdumpPathFixed = downloadedTcpdumpPath.join("\\\\");

      try {
        const downloadsFolder = app.getPath('downloads');
        const targetDir = path.join(downloadsFolder,'aircrack');
        await extract(downloadedTcpdumpPathFixed, { dir: targetDir });
        console.log('Aircrack extracted');
      } catch (error) {
        console.error('Error extracting Aircrack:', error);
        throw(error);
      }

    } catch (error) {
      console.error('Failed to download Aircrack installer:', error);
    }
  };
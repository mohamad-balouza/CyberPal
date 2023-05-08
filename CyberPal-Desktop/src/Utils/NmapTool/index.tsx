import { exec } from 'child_process';
import { download } from 'electron-dl';
import { spawn } from "child_process";


export const installNmap = async (win, options) => {
  console.log("I'm trying to install nmap");
  const nmapDownloadUrl = 'https://nmap.org/dist/nmap-7.93-setup.exe';

  try {
    const downloadedNmap= await download(win, nmapDownloadUrl, options);
    console.log('Download completed:', downloadedNmap.getSavePath());

    let downloadedNmapPath = downloadedNmap.getSavePath().split("\\");
    let downloadedNmapPathFixed = downloadedNmapPath.join("\\\\");

    exec(downloadedNmapPathFixed, (error, stdout, stderr) => {
      if (error) {
        console.error('Failed to execute Nmap installer:', error);
        return;
      }
      console.log('Nmap installer executed successfully');
    });
  } catch (error) {
    console.error('Failed to download Nmap installer:', error);
  }
};


let nmap;

export const executeNmapCommand = (nmapPath: string, nmapArgs: Array<string>) => {
    nmap = spawn(nmapPath, nmapArgs);

    nmap.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    })

    nmap.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    })

    nmap.on('close', (code) => {
        console.log(`nmap process exited with code ${code}`);
    })
}

export const stopNmapCommand = () => {
  if(nmap) {
      nmap.kill();
      console.log('nmap stopped');
  }
}
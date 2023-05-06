import { exec } from 'child_process';
import { download } from 'electron-dl';


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


export const executeNmapCommand = (command: string) => {
  console.log("executing the Nmap command");
  console.log(command);
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Nmap command: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Nmap command stderr: ${stderr}`);
      return;
    }
    console.log(`Nmap command output: ${stdout}`);
  });
}
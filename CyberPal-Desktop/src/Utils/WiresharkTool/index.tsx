import { exec } from 'child_process';
import { download } from 'electron-dl';

export const installWireshark = async (win, options) => {
    console.log("I'm trying to install Wireshark");
    const wiresharkDownloadURL = 'https://www.openwall.com/wireshark/k/wireshark-1.9.0-jumbo-1-win64.7z';
  
    try {
        const downloadedWireshark= await download(win, wiresharkDownloadURL, options);
        console.log('Download completed:', downloadedWireshark.getSavePath());

        let downloadedWiresharkPath = downloadedWireshark.getSavePath().split("\\");
        let downloadedWiresharkPathFixed = downloadedWiresharkPath.join("\\\\");

        exec(downloadedWiresharkPathFixed, (error, stdout, stderr) => {
            if (error) {
              console.error('Failed to execute Wireshark installer:', error);
              return;
            }
            console.log('Wireshark installer executed successfully');
          });
      
    } catch (error) {
      console.error('Failed to download Wireshark installer:', error);
    }
};
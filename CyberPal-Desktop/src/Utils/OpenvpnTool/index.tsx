import { exec } from 'child_process';
import { download } from 'electron-dl';
import { spawn } from "child_process";


export const installOpenvpn = async (win, options) => {
    console.log("I'm trying to install Openvpn");
    const openvpnDownloadURL = 'https://openvpn.net/downloads/openvpn-connect-v3-windows.msi';
  
    try {
        const downloadedOpenvpn= await download(win, openvpnDownloadURL, options);
        console.log('Download completed:', downloadedOpenvpn.getSavePath());

        let downloadedOpenvpnPath = downloadedOpenvpn.getSavePath().split("\\");
        let downloadedOpenvpnPathFixed = downloadedOpenvpnPath.join("\\\\");

        exec(downloadedOpenvpnPathFixed, (error, stdout, stderr) => {
            if (error) {
              console.error('Failed to execute Openvpn installer:', error);
              return;
            }
            console.log('Openvpn installer executed successfully');
          });
      
    } catch (error) {
      console.error('Failed to download Openvpn installer:', error);
    }
};

let openvpn;

export const executeOpenvpnCommand = (openvpnPath: string, openvpnArgs: Array<string>) => {
    openvpn = spawn(openvpnPath, openvpnArgs);

    openvpn.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    })

    openvpn.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    })

    openvpn.on('close', (code) => {
        console.log(`openvpn process exited with code ${code}`);
    })
}
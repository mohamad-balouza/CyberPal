import { exec } from 'child_process';
import { download } from 'electron-dl';
import { spawn } from "child_process";


export const installArachni = async (win, options) => {
    console.log("I'm trying to install Arachni");
    const arachniDownloadURL = 'https://github.com/Arachni/arachni/releases/download/v1.6.1.3/arachni-1.6.1.3-0.6.1.1-windows-x86_64.exe';
  
    try {
        const downloadedArachni= await download(win, arachniDownloadURL, options);
        console.log('Download completed:', downloadedArachni.getSavePath());

        let downloadedArachniPath = downloadedArachni.getSavePath().split("\\");
        let downloadedArachniPathFixed = downloadedArachniPath.join("\\\\");

        exec(downloadedArachniPathFixed, (error, stdout, stderr) => {
            if (error) {
              console.error('Failed to execute Arachni installer:', error);
              return;
            }
            console.log('Arachni installer executed successfully');
          });
      
    } catch (error) {
      console.error('Failed to download Arachni installer:', error);
    }
};

let arachni;

export const executeArachniCommand = (arachniPath: string, arachniArgs: Array<string>) => {
    arachni = spawn(arachniPath, arachniArgs);

    arachni.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    })

    arachni.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    })

    arachni.on('close', (code) => {
        console.log(`arachni process exited with code ${code}`);
    })
}

export const stopArachniCommand = () => {
    if(arachni) {
        arachni.kill();
        console.log('arachni stopped');
    }
}
import { spawn } from "child_process";
import { exec } from 'child_process';
import { download } from 'electron-dl';


let tcpdump;

export const executeTcpdumpCommand = (tcpdumpPath: string, tcpdumpArgs: Array<string>) => {
    tcpdump = spawn(tcpdumpPath, tcpdumpArgs);

    tcpdump.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    })

    tcpdump.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    })

    tcpdump.on('close', (code) => {
        console.log(`tcpdump process exited with code ${code}`);
    })
}

export const stopTcpdumpCommand = () => {
    if(tcpdump) {
        tcpdump.kill();
        console.log('tcpdump stopped');
    }
}

export const installTcpdump = async (win, options) => {
    console.log("I'm trying to install tcpdump");
    const tcpdumpDownloadUrl = 'https://www.microolap.com/downloads/tcpdump/tcpdump_trial_license.zip';
  
    try {
      const downloadedTcpdump= await download(win, tcpdumpDownloadUrl, options);
      console.log('Download completed:', downloadedTcpdump.getSavePath());
      let downloadedTcpdumpPath = downloadedTcpdump.getSavePath().split("\\");
      let downloadedTcpdumpPathFixed = downloadedTcpdumpPath.join("\\\\");

      exec(downloadedTcpdumpPathFixed, (error, stdout, stderr) => {
        if (error) {
          console.error('Failed to execute Tcpdump installer:', error);
          return;
        }
        console.log('Tcpdump installer executed successfully');
      });
    } catch (error) {
      console.error('Failed to download Tcpdump installer:', error);
    }
  };
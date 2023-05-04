import { exec } from 'child_process';
import { download } from 'electron-dl';


export const installNmap = (win, options) => {
  console.log("I'm trying to install nmap");
  const nmapDownloadUrl = 'https://nmap.org/dist/nmap-latest-setup.exe';

  try {
    const downloadedFilePath = await download(win, nmapDownloadUrl, options);
    console.log('Download completed:', downloadedFilePath);

    exec(`"${downloadedFilePath}"`, (error, stdout, stderr) => {
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

export const executeNmapCommand = (nmapCommand) => {
  exec(`nmap \${nmapCommand}`, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing nmap command:', error);
      return;
    }
    console.log('Nmap command output:', stdout);
  });
};

// export const executeNormalCommand = (command: string) => {
//   console.log("executing the command");
//   console.log(command);
//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error executing command: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.error(`Command stderr: ${stderr}`);
//       return;
//     }
//     console.log(`Command stdout: ${stdout}`);
//   });
// }
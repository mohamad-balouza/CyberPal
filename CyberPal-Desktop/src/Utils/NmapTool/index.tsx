import { exec } from 'child_process';

export const installNmap = () => {
  const installCommand = process.platform === 'win32' ? 'choco install nmap' : 'sudo apt-get install nmap';
  exec(installCommand, (error, stdout, stderr) => {
    if (error) {
      console.error('Error installing nmap:', error);
      return;
    }
    console.log('Nmap installed successfully:', stdout);
  });
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
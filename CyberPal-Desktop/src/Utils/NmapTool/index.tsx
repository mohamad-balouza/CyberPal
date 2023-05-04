import { exec } from 'child_process';
import { PowerShell } from 'node-powershell';

export const installNmap = async () => {
  console.log("I'm trying to install nmap");
  const ps = new PowerShell({
    executableOptions: {
      '-ExecutionPolicy': 'Bypass',
      '-NoProfile': true,
    },
  });

  try {
    // await ps.command'choco install nmap -y';
    // const install_nmap_command = PowerShell.command`choco install nmap -y`;
    const install_nmap_command = PowerShell.command`Write-Host Hello from powershell -ForegroundColor red -BackgroundColor white`;
    await ps.invoke(install_nmap_command);
    console.log('Nmap installed successfully');
  } catch (error) {
    console.error('Failed to install Nmap:', error);
  } finally {
    ps.dispose();
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
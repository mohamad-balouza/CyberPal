import { spawn } from "child_process";

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
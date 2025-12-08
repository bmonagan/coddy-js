// TODO: Write your code here
// Create the Computer interface with the required properties and methods
interface Computer {
    readonly id: number,
    brand: string,
    ramInGB?: number,
    isLaptop: boolean,
    boot(): void
}
// Create the Server interface with the required properties and methods
interface Server {
    readonly hostname: string,
    operatingSystem: string,
    maxConnections?: number,
    isOnline: boolean,
    restart(): void,
    getStatus(): string
}
// Create the workstation, laptop, and webServer variables
let workstation: Computer = {
    id: 1001,
    brand: "Dell",
    ramInGB: 16,
    isLaptop: false,
    boot(): void {
        console.log('Dell workstation is booting up...');
        }
}

let laptop: Computer = {
    id:1002,
    brand: "MacBook",
    isLaptop: true,
    boot():void { 
        console.log(`MacBook laptop is starting...`);
    }
}
let webServer: Server = {
    hostname: "web-01",
    operatingSystem: "Ubuntu",
    maxConnections: 1000,
    isOnline: true,
    restart(): void { 
        console.log('Restarting web-01 server...');
    },
    getStatus(): string { 
        return `web-01 is online`;
    }

}

// Create the checkComputerSpecs and getServerInfo functions
function checkComputerSpecs(computer: Computer): string {
    let setup = "desktop";
    if (computer.isLaptop){
        setup = "laptop"
    }
    return `${computer.brand} ${setup}`;
}
function getServerInfo(server: Server): string {
    return `${server.hostname} runs ${server.operatingSystem}`;
}
// Print all the required outputs

workstation.boot();
laptop.boot();
console.log(checkComputerSpecs(workstation));
console.log(checkComputerSpecs(laptop));
console.log(webServer.getStatus());
console.log(getServerInfo(webServer));
console.log(workstation.id);
webServer.restart();
import * as readline from 'readline';


type Success = {status: "success", data: any};
type Failure = {status: "error", message: string};
type Result = Success | Failure;

function processResult(result: Result): string { 
    if (result.status === "success"){
        return `Operation successful: ${result.data}`;
    }
    else {
        return `Operation failed: ${result.message}`;
    }
}

function handleApiResponse(response: Result): boolean { 
    if (response.status === "success"){
        return true;
    }
    else {
        return false;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input: string[] = [];

rl.on('line', (line: string) => {
    input.push(line.trim());
    
    if (input.length === 2) {
        const result1: Result = JSON.parse(input[0]);
        const result2: Result = JSON.parse(input[1]);

        console.log(processResult(result1));
        console.log(handleApiResponse(result1));
        console.log(processResult(result2));
        console.log(handleApiResponse(result2));
        
        rl.close();
    }
});
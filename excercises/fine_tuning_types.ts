// TODO: Write your code here

// Create the AppConfig interface
interface AppConfig { 
    [key:string]: string|number|boolean; 
}


// Create the validateConfigValue function 
function validateConfigValue(config: AppConfig, key: string): string { 
    if (!(key in config)) { 
        return "missing";
    }
    else if (typeof config[key] === 'string'){ 
        return "string";
    }
    else if (typeof config[key] === 'number') { 
        return 'number';

    } else {
        return 'boolean';
    }
}


// Create the getConfigAsString function
function getConfigAsString(config:AppConfig, key:string): string { 
    if (!(key in config)) { 
        return "undefined";
    }
    else {
        return config[key] as string;
    }
}

// Create the processConfig function
function processConfig(config: AppConfig, key:string): string | number | boolean | null { 
    let ntype = validateConfigValue(config,key);
    if (ntype === 'boolean') {
        return (!config[key]);
        
    } else if (ntype === 'string'){
        return (config[key] as string).toUpperCase();
    } else if (ntype === 'number') { 
        return (config[key] as number) * 10;
    } else {
        return null;
    }
}


// Create test data - settings object

const settings: AppConfig = {
    appName: "MyApp",
    version: 2.1,
    debugMode: true,
    maxUsers: 100,
    theme: "dark"
};

// Test the functions and print results
console.log(validateConfigValue(settings, "appName"));
console.log(validateConfigValue(settings, "version"));
console.log(validateConfigValue(settings, "debugMode"));
console.log(validateConfigValue(settings, "timeout"));
console.log(getConfigAsString(settings, "theme"));
console.log(getConfigAsString(settings, "missing"));
console.log(processConfig(settings, "appName"));
console.log(processConfig(settings, "maxUsers"));
console.log(processConfig(settings, "debugMode"));
console.log(processConfig(settings, "invalid"));
// Create the API response variables
const apiResponse: unknown = '{"userId": 42, "username": "alice_dev", "isActive": true}';
const secondApiResponse: unknown = '{"userId": 15, "username": "bob_admin", "isActive": false}';
const thirdApiResponse: unknown = '{"userId": 99, "username": "charlie_user", "isActive": true}';

// TODO: Create the processUserData function here

function processUserData(data: unknown): string { 
    const datas = JSON.parse(data as string) as {userId: number; username: string; isActive: boolean };
    
    return `User ${datas.userId}: ${datas.username} (Active: ${datas.isActive})`;

}

// Test the function and print results
console.log(processUserData(apiResponse));
console.log(processUserData(secondApiResponse));
console.log(processUserData(thirdApiResponse));
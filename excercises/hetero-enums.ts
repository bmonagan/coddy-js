// TODO: Write your code here

// Create the ResponseCode enum
enum ResponseCode {
    Success = 200,
    Error = "ERROR",
    NotFound = 404,
    Timeout = "TIMEOUT"
}


// Create the handleResponse function
function handleResponse(code: ResponseCode): void { 
    if (code === ResponseCode.Success) { 

    console.log("Request successful");}
    else if (code === ResponseCode.Error) { 

    console.log("General error occurred");
    }
    else if (code === ResponseCode.NotFound) { 

    console.log("Resource not found");
    }
    else if (code === ResponseCode.Timeout) { 

    console.log("Request timed out");
    }}


// Create the demonstration variables

let successCode: ResponseCode = ResponseCode.Success;
let errorCode: ResponseCode = ResponseCode.Error;
let notFoundCode: ResponseCode = ResponseCode.NotFound;
let timeoutCode: ResponseCode = ResponseCode.Timeout;
// Print the required outputs

console.log(successCode);
console.log(errorCode);
console.log(notFoundCode);
console.log(timeoutCode);
handleResponse(ResponseCode.Success);
handleResponse(errorCode);
handleResponse(404);
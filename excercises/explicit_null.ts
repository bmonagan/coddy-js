// TODO: Write your code here
// Create the getUserDisplayName function that takes fullName (string | null) and returns string
function getUserDisplayName(fullName: string | null): string { 
    if (fullName != null) { 
        return fullName;
    }
    else { 
        return "Anonymous User";
    }
}

// Create the formatUserEmail function that takes email (string | null) and returns string 
function formatUserEmail(email: string|null): string {
    if (email != null) {
        return email.toLowerCase();
    }
    else {
        return "No email provided";
    }
}
// Create the getUserInfo function that takes name and email (both string | null) and returns string
function getUserInfo(name: string | null, email: string | null): string {
    let vname = getUserDisplayName(name); 
    let vemail = formatUserEmail(email);
    return `Name: ${vname}, Email: ${vemail}`;

}

// Test the functions and print the results
console.log(getUserDisplayName("John Smith"));
console.log(getUserDisplayName(null));
console.log(formatUserEmail("ALICE@EXAMPLE.COM"));
console.log(formatUserEmail(null));
console.log(getUserInfo("Bob Johnson", "bob@test.com"));
console.log(getUserInfo(null, null));
console.log(getUserInfo("Sarah Wilson", null));
// TODO: Write your code here

// Create type aliases for Username, UserAge, ContactMethod, UserProfile, and AdminProfile
type Username = string;
type UserAge = number;
type ContactMethod = Username | UserAge;
type UserProfile = {id: number, displayName: Username, prefferedContact: ContactMethod};
type AdminProfile = UserProfile & {permissions: string};

// Create variables regularUser and systemAdmin
let regularUser: UserProfile = {id: 1, displayName: "john_doe", prefferedContact: "john_doe"};
let systemAdmin: AdminProfile = {
    id: 2, 
    displayName: "admin", 
    prefferedContact: 25, 
    permissions: "full_access" // Note: Matches the corrected type name 'permission'
};


// Create getContactInfo function
function getContactInfo(contact: ContactMethod): string{
    if (typeof contact === "string"){
        return `Contact: ${contact}`;
    }
    else {
        return `Age: ${contact}`;
    }
}

// Print the required outputs

console.log(getContactInfo(regularUser.prefferedContact));
console.log(getContactInfo(systemAdmin.prefferedContact));
console.log(systemAdmin.permissions);
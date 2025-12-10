// TODO: Write your code here
// Create the UserRole enum and variables as described in the challenge
enum UserRole {
    Admin,
    Editor,
    Viewer
}
const adminRole: UserRole = UserRole.Admin;
const editorRole: UserRole = UserRole.Editor;
const viewerRole: UserRole = UserRole.Viewer;

// Print the required outputs

console.log(adminRole);
console.log(editorRole);
console.log(viewerRole);
console.log(UserRole.Admin);
console.log(UserRole.Editor);
console.log(UserRole.Viewer);
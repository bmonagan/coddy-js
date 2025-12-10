// Provided from previous challenge
enum UserRole {
    Admin,
    Editor,
    Viewer
}

const adminRole = UserRole.Admin;
const editorRole = UserRole.Editor;
const viewerRole = UserRole.Viewer;

// TODO: Write your code here
function checkPermissions(role: UserRole): void {
    if (role === UserRole.Admin) {
        console.log("Full access granted");
    }
    else if (role === UserRole.Editor) {
        console.log("Edit access granted");
    }
    else {
        console.log("View access only");
    }

}

const currentUser: UserRole = UserRole.Editor;
const guestUser: UserRole = 2;

// Call checkPermissions with the required parameters

checkPermissions(adminRole);
checkPermissions(currentUser);
checkPermissions(guestUser);
checkPermissions(UserRole.Admin);
checkPermissions(0);
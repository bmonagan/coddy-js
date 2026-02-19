export function validateEmail(email) {
    return email.includes('@') && email.includes('.');
}

export function validatePassword(password) {
    return password.length >= 8;
}
// TODO: Import the validateEmail function here (it is the named export)
import {validateEmail} from './validation-utils.js';

// TODO: Call the function and pass user@example.com email address and print the results using console.log
console.log(validateEmail("user@example.com"));
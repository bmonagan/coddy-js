// TODO: Create a class named StringUtils and export it
export class StringUtils { 
    static capitalize(string) { 
        if (string.length < 1) { 
            return "Must pass a non-empty string";
        }
        let first_char = string.charAt(0).toUpperCase();
        let remainder = string.slice(1);
        return first_char + remainder;
    }
}

import { StringUtils } from './stringUtils.js';

// Don't modify the code below
console.log(StringUtils.capitalize("programming"));
// TODO: import the Author class here
import Author from "./Author.js"

// Tests
const author = new Author('J.K. Rowling');
console.log(author.name);        // "J.K. Rowling"
===
// TODO: Create an Author class and export it
export default class Author {
    constructor(name) {
        this.name = name;
    }
}


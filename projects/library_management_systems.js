// TODO: Add import for Author class here
import { Author } from "./Author.js";

// TODO: Create and export the Book class 
export class Book {
    #title;
    #author;
    #isCheckedOut = false;
    constructor(title,author) {
        this.#title = title;
        this.#author = author;
    }
    get title() {
        return this.#title;
    }
    get authorInfo() {
        return this.#author.name;
    }
}

import { Author } from './Author.js';

// TODO:  Import the Book class

import { Book } from "./Book.js";

// Tests
const author = new Author('J.K. Rowling');
const book = new Book('Harry Potter', author);

console.log('Book title:', book.title); // Should output: "Book title: Harry Potter"
console.log('Author:', book.authorInfo); // Should output: "Author: J.K. Rowling"
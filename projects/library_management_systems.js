import { Author } from './Author.js';

export class Book {
  #title;
  #author;  // Composition: Book HAS-AN Author
  #isCheckedOut = false;
 
  constructor(title, author) {
    this.#title = title;
    
    // TODO: Check if the author is valid (an instance of Author class) 
    // use author instanceof Author
    if (author instanceof Author) {
        this.#author = author;
    }
    else {
        console.log("Invalid author: must be Author instance");
        this.#author = null;
    }
    // TODO: If the author is valid, set this.#author to author

    // TODO: Otherwise (author is invalid), log exactly: "Invalid author: must be Author instance"
    
    // TODO: Set this.#author = null
  }
  
  // Getter for title (read-only)
  get title() {
    return this.#title;
  }
  
  // Getter for author info
  get authorInfo() {
    return this.#author.name;
  }
}
===
import { Author } from './Author.js';
import { Book } from './Book.js';

// Tests
const rowling = new Author('J.K. Rowling');

// Valid case (should work silently)
const validBook = new Book('Harry Potter', rowling);
console.log('Author:', validBook.authorInfo); // Should output: "Author: J.K. Rowling"

// Invalid cases (should log message but still create book)
const invalid1 = new Book('Fake Book', 'String Author');
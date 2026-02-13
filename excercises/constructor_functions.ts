// TODO: Create a constructor function named Book that takes three arguments (title, author, pages)
function Book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} and has ${this.pages} pages`;
    }
}

const inputTitle = inp[0];          // First line: book title
const inputAuthor = inp[1];         // Second line: author  
const inputPages = parseInt(inp[2]);// Third line: number of pages

const book = new Book(inputTitle, inputAuthor, inputPages);
console.log(book.getSummary());
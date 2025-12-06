// TODO: Write your code here

// Create type aliases for Book and Movie
type Book = {
    title: string,
    author: string,
    pages: number,
    isAvailable: boolean
}

type Movie = {
    title: string,
    director: string,
    duration: number,
    rating: string
}

// Create variables using the type aliases
let novel: Book = {
    title : "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    isAvailable: true
}

let textbook: Book = {
    title: "TypeScript Handbook",
    author: "Microsoft",
    pages: 450,
    isAvailable: false
}

let film: Movie = {
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    rating: "PG-13"
}
// Create functions to get information

function getBookInfo(book: Book): string {
    return `${book.title} by ${book.author} - ${book.pages} pages`
}

function getMovieInfo(movie:Movie): string { 
    return `${movie.title} directed by ${movie.director} (${movie.duration} min)`
}

// Print the required outputs

console.log(getBookInfo(novel));
console.log(getBookInfo(textbook));
console.log(getMovieInfo(film));
console.log(novel.isAvailable);
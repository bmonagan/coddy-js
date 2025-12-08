// TODO: Write your code here

// Create the Book interface
interface Book {
    title: string,
    readonly isbn: string,
    subtitle?: string,
    pages: number,
    readonly publishedYear: number,
    genre?: string
}

// Create the Magazine interface
interface Magazine { 
    name: string,
    readonly issueNumber: number,
    topic?: string,
    monthlySubscription: boolean
}

// Create the variables using your interfaces
let novel: Book = {
    title: "1984",
    isbn: "978-0-452-28423-4",
    pages: 328,
    publishedYear: 1949
};
let cookbook: Book = {
    title: "The Joy of Cooking",
    isbn: "978-0-7432-4626-2",
    subtitle: "All About Baking",
    pages: 1132,
    publishedYear: 2006,
    genre: "Cooking"
};

let techMag: Magazine = {
    name: "Tech Today",
    issueNumber: 45,
    monthlySubscription: true
};

let scienceMag: Magazine = {
    name: "Science Weekly",
    issueNumber: 12,
    topic: "Climate Change",
    monthlySubscription: false
};

// Create the getBookDetails function
function getBookDetails(book: Book): string {
    return `${book.title} - ${book.pages} pages`;
}

// Create the getMagazineInfo function
function getMagazineInfo(mag:Magazine): string { 
    return `${mag.name} Issue #${mag.issueNumber}`;
}

// Print the required outputs
console.log(getBookDetails(novel));
console.log(getBookDetails(cookbook));
console.log(getMagazineInfo(techMag));
console.log(getMagazineInfo(scienceMag));
console.log(novel.isbn);
console.log(techMag.monthlySubscription);
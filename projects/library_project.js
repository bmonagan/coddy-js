// Initialize library data
const libraryData = {
    books: [
        {
            id: 1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            genre: "Fiction",
            isRead: false,
            rating: 0,
            borrowed: false,
            borrowedBy: "",
            borrowDate: ""
        }
    ],
    readers: [
        {
            name: "John Smith",
            favoriteGenre: "Fiction",
        }
    ]
};

function manageLibrary(actions, data) {
    let results = [];
    
    for (let i = 0; i < actions.length; i++) {
        const currentAction = actions[i];
        const currentData = data[i];
        
        switch (currentAction) {
            case 'printBooks':
                results.push(libraryData.books);
                break;
            case 'printReaders':
                results.push(libraryData.readers);
                break;
            case "addBook":
                // Add a new book to the library
                let newBook = {
                    id: libraryData.books.length + 1,
                    title: currentData.title,
                    author: currentData.author,
                    year: currentData.year,
                    genre: currentData.genre,
                    isRead: false,
                    rating: 0,
                    borrowed: false,
                    borrowedBy: "",
                    borrowDate: ""
                };
                libraryData.books.push(newBook);
                results.push("Book added successfully!");
                break;
            case "searchByTitle":
                // Search for books by title
                let searchResults = [];
                for(let i = 0; i < libraryData.books.length; i++) {
                    if(libraryData.books[i].title.toLowerCase().includes(currentData.toLowerCase())) {
                        searchResults.push(libraryData.books[i]);
                    }
                }
                results.push(searchResults);
                break;

          case "filterByGenre":
                // Filter books by genre
                let genreResults = [];
                for(let i = 0; i < libraryData.books.length; i++) {
                    if(libraryData.books[i].genre === currentData) {
                        genreResults.push(libraryData.books[i]);
                    }
                }
                results.push(genreResults);
                break;
            case 'markAsRead':
                if (currentData.rating > 5 || currentData.rating < 1){
                    results.push('Invalid rating! Please rate between 1 and 5');
                    break;
                }
                let in_lib = false;
                for(let i = 0; i < libraryData.books.length; i++) {
                    if (libraryData.books[i].id === currentData.bookId){
                        in_lib = true;
                        libraryData.books[i].rating = currentData.rating;
                        libraryData.books[i].isRead = true;



                    }
                }
                if (in_lib === false){
                    results.push('Book not found!');
                    break;
                }
                else {
                    results.push('Book marked as read!');
                }



                break;
            default:
                results.push("Invalid action!");
        }
    }

    return results;
}
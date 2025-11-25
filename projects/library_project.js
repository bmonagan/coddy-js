// Initial library data
let libraryData = {
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
}


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
            default:
                results.push("Invalid action!");
        }
    }
    return results;
}


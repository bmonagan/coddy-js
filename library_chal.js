function organizeLibrary(scienceBooks, philosophyBooks) {
    // Write code here
    let final_library = [];

    for (let i = 0; i < scienceBooks.length; i++){
        let book = formatBooks(scienceBooks[i]);
        final_library.push(book);
    }
    for (let i = 0; i < philosophyBooks.length; i++){
        let book = formatBooks(philosophyBooks[i]);
        final_library.push(book);
    }
    return final_library;
}

function formatBooks(title){
    let formattedTitle = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    return formattedTitle;

}
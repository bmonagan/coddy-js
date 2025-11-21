function toggleBookStatus(book) {
    // Write your code here
    if (book.isRead == true){
        book.isRead = false;
    }
    else if (book.isRead == false){
        book.isRead = true;
    }
    else{
        book.isRead = true;
    }
    return book;
}
// Do not write anything outside function
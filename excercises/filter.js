function filterBooks(books, minRating) {
  // Write your code here
  const filt_books = books.filter(book => book.rating >= minRating);
  return filt_books;
}

export function filterAllBooks(allBook,setfilteredAllBooks){
    if ("items" in allBook) {
        let filteredAllBooks = [];
        allBook.items.forEach((book) => {
          let bookLimitedCh = cutToLongText(book.volumeInfo, 202);
          filteredAllBooks.push(bookLimitedCh);
        });
        setfilteredAllBooks(filteredAllBooks);
      }
}
const cutToLongText = (book, limit) => {
    if (book.description !== undefined && book.description.length > 200) {
      book.descriptionExpand = book.description;
      book.description = book.description.substring(0, limit) + "...";
    }
    return book;
  };
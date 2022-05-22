export function filterAllBooks(allBook, setfilteredAllBooks) {
  let allBooksConcat = [...allBook[0].items, ...allBook[1].items];
  let filteredAllBooks = [];
  allBooksConcat.forEach((book) => {
    let bookLimitedCh = cutToLongText(book.volumeInfo, 202);
    filteredAllBooks.push(bookLimitedCh);
  });
  setfilteredAllBooks(filteredAllBooks);
}
const cutToLongText = (book, limit) => {
  if (book.description !== undefined && book.description.length > 200) {
    book.descriptionExpand = book.description;
    book.description = book.description.substring(0, limit) + "...";
  }
  return book;
};

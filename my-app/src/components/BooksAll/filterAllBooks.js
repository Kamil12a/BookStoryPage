export function filterAllBooks(allBook, setfilteredAllBooks) {
  let allBooksConcat = [...allBook[0].items, ...allBook[1].items];
  let filteredAllBooks = [];
  allBooksConcat.forEach((book) => {
    let bookLimitedCh = cutToLongText(book.volumeInfo);
    filteredAllBooks.push(bookLimitedCh);
  });
  setfilteredAllBooks(filteredAllBooks);
}
const cutToLongText = (book) => {
  if (book.description !== undefined && book.description.length > 200) {
    book.descriptionShorter=book.description.substring(0,200)
  }
  return book;
};

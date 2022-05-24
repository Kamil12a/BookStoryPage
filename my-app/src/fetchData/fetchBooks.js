let booksHobbit = fetch(
  "https://www.googleapis.com/books/v1/volumes?q=Hobbit"
).then((resp) => resp.json());

let bookGreenWood = fetch(
  "https://www.googleapis.com/books/v1/volumes?q=search+terms"
).then((resp) => resp.json());

const sortAllBooks = (allBook) => {
  let allBooksConcat = [...allBook[0].items, ...allBook[1].items];
  let filteredAllBooks = [];
  allBooksConcat.forEach((book) => {
    let bookLimitedCh = addShorterDescription(book.volumeInfo);
    let bookSorted = addIsBookInLibrary(bookLimitedCh);
    filteredAllBooks.push(bookSorted);
  });
  return filteredAllBooks;
};
const addShorterDescription = (book) => {
  if (book.description !== undefined && book.description.length > 200) {
    book.descriptionShorter = book.description.substring(0, 200);
  }
  return book;
};

const addIsBookInLibrary = (book) => {
  book.isInLibrary = false;
  return book;
};

export async function fetchBooks(setState, setBooks) {
  setState("loading");
  let results = await Promise.all([booksHobbit, bookGreenWood]).catch(() => {
    setState("error");
  });
  
  setState("loaded");
  setBooks(sortAllBooks(results));
}




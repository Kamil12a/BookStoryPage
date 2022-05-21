export async function fetchBooks(setBooks) {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=Hobbit"
  );
  const books = await response.json();
  setBooks(books);
}

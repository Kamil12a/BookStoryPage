export async function fetchBooks(setBooks, setState) {
  setState("loading");
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=Hobbit"
  ).catch(() => {
    setState("error");
  });
  if (response.ok) {
    const books = await response.json();
    setBooks(books);
    setState("loaded")
  } else {
    return Promise.reject(response);
  }
}

let booksHobbit = fetch(
  "https://www.googleapis.com/books/v1/volumes?q=Hobbit"
).then((resp) => resp.json());

let bookGreenWood = fetch(
  "https://www.googleapis.com/books/v1/volumes?q=search+terms"
).then((resp) => resp.json());

export async function fetchBooks(setBooks, setState) {
  setState("loading");
  let results = await Promise.all([booksHobbit, bookGreenWood]).catch(() => {
    setState("error");
  });
  setState("loaded");
  setBooks(results);
}

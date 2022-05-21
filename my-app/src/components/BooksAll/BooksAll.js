import { useEffect, useState } from "react";
import { fetchBooks } from "./fetchBooks";
import { DisplayBooks } from "./DisplayBooks";
export function BooksAll() {
  const [allBooksObject, setAllBooksObject] = useState([]);
  useEffect(() => {
    fetchBooks(setAllBooksObject);
  }, []);
  return (
    <>
      <DisplayBooks allBook={allBooksObject} />
    </>
  );
}

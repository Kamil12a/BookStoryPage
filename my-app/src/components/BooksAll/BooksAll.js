import { useEffect, useState } from "react";
import { fetchBooks } from "./fetchBooks";
import { DisplayBooks } from "./DisplayBooks";
export function BooksAll() {
  const [allBooksObject, setAllBooksObject] = useState([]);
  const [state, setState] = useState("InnitialState");
  useEffect(() => {
    fetchBooks(setAllBooksObject, setState);
  }, []);
  return (
    <>
      {state === "loading" && <p>ładuje...</p>}
      {state === "error" && <p>błąd</p>}
      {state === "loaded" && <DisplayBooks allBook={allBooksObject} />}
    </>
  );
}

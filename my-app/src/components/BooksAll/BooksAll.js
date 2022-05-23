import { useEffect, useState } from "react";
import { fetchBooks } from "./fetchBooks";
import { DisplayBooks } from "./DisplayBooks";
import { useContext } from "react";
import { ThemeContext } from "../../context/BookContext";

export function BooksAll() {
  const [state, setState] = useState("InnitialState");
  const theme = useContext(ThemeContext);
  useEffect(() => {
    fetchBooks(setState, theme);
  }, []);
  return (
    <>
      {state === "loading" && <p>ładuje...</p>}
      {state === "error" && <p>błąd</p>}
      {state === "loaded" && <DisplayBooks />}
    </>
  );
}

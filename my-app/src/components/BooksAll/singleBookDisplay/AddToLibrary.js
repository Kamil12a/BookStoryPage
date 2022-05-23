import { useEffect, useState } from "react";
import "../../../styles/displayBooks.css";
import { useContext } from "react";
import { ThemeContext } from "../../../context/BookContext";

export function AddBookToLibrary({ singleBookContainerRef, index }) {
  const theme = useContext(ThemeContext);
  const [state, setState] = useState("false");

  useEffect(() => {
    let isBookInLibrary = theme.books[index].isInLibrary;
    if (isBookInLibrary) {
      singleBookContainerRef.current.style.background = "#77C66E ";
    } else {
      singleBookContainerRef.current.style.background = "#4d8eeb";
    }
  }, [state]);

  const addBookToLibrary = () => {
    if (theme.books[index].isInLibrary) {
      let booksWithElementInLibrary = theme.books;
      booksWithElementInLibrary[index].isInLibrary = false;
      theme.setBooks(booksWithElementInLibrary);
      setState("false");
    } else {
      let booksWithElementInLibrary = theme.books;
      booksWithElementInLibrary[index].isInLibrary = true;
      theme.setBooks(booksWithElementInLibrary);
      setState("true");
    }
  };

  return (
    <>
      <button onClick={addBookToLibrary}>
        {theme.books[index].isInLibrary && <p>Usuń książke z biblioteki</p>}
        {!theme.books[index].isInLibrary && (
          <p>Dodaj książke do twojej biblioteki</p>
        )}
      </button>
    </>
  );
}

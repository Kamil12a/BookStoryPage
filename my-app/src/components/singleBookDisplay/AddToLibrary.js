import "../../styles/displayBooks.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/BookContext";

export function AddBookToLibrary({ container, index }) {
  const theme = useContext(ThemeContext);
  const [addToBookState, setaddToBookState] = useState("false");
  useEffect(() => {}, [addToBookState]);
  const addBookToLibrary = () => {
    
    if (theme.books[index].isInLibrary) {
      let booksWithElementInLibrary = theme.books;
      booksWithElementInLibrary[index].isInLibrary = false;
      theme.setBooks(booksWithElementInLibrary);
      container.current.style.background = "#4d8eeb";
      setaddToBookState("false");
    } 
    else {
      let booksWithElementInLibrary = theme.books;
      booksWithElementInLibrary[index].isInLibrary = true;
      theme.setBooks(booksWithElementInLibrary);
      setaddToBookState("true");
      container.current.style.background = "red";
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

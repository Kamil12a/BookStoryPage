import { useEffect, useState } from "react";
import "../styles/displayBooks.css";
import { Description } from "./Description";

export function SingleBook({ book, id }) {
  const [state, setState] = useState("Innitial State");
  useEffect(() => {}, [state]);
  const addToLibrary = () => {
    if (book.isInLibrary) {
      book.isInLibrary = false;
      setState("loading");
    } else {
      book.isInLibrary = true;
      setState("loaded");
    }
  };
  return (
    <>
      {book.isInLibrary && (
        <div style={{ background: "green" }} className="singleBookContainer">
          {book.hasOwnProperty("imageLinks") && (
            <img alt="book" src={book.imageLinks.thumbnail}></img>
          )}
          <p> tytuł: {book.title}</p>
          <p> data: {book.publishedDate}</p>
          <button onClick={addToLibrary}>usuń z twojej biblioteki</button>
          <Description book={book} id={id} />
        </div>
      )}
      {!book.isInLibrary && (
        <div className="singleBookContainer">
          {book.hasOwnProperty("imageLinks") && (
            <img alt="book" src={book.imageLinks.thumbnail}></img>
          )}
          <p> tytuł: {book.title}</p>
          <p> data: {book.publishedDate}</p>
          <button onClick={addToLibrary}>dodaj do twojej biblioteki</button>
          <Description book={book} id={id} />
        </div>
      )}
    </>
  );
}

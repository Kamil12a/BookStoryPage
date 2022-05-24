import "../styles/displayBooks.css";
import { Description } from "./Description";
import { useRef } from "react";
export function SingleBook({ book, id }) {
  const addBookToLibrary = () => {
    book.isInLibrary = true;
  };
  const deleteFromLibrary = () => {
    book.isInLibrary = false;
  };
  return (
    <>
      {!book.isInLibrary && (
        <div className="singleBookContainer">
          <p> title: {book.title}</p>
          <p> data: {book.publishedDate}</p>
          <button onClick={addBookToLibrary}>dodaj mnie</button>
          <Description book={book} id={id} />
          {book.hasOwnProperty("imageLinks") && (
            <img alt="book" src={book.imageLinks.thumbnail}></img>
          )}
        </div>
      )}
      {book.isInLibrary && (
        <div style={{ background: "red" }} className="singleBookContainer">
          <p> title: {book.title}</p>
          <p> data: {book.publishedDate}</p>
          <button onClick={deleteFromLibrary}>usuń mnie</button>
          <Description book={book} id={id} />
          {book.hasOwnProperty("imageLinks") && (
            <img alt="book" src={book.imageLinks.thumbnail}></img>
          )}
        </div>
      )}
    </>
  );
}

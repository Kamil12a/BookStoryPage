import { useEffect, useRef } from "react";
import "../../styles/displayBooks.css";
import { AddBookToLibrary } from "./AddToLibrary";
import { Description } from "./Description";

export function SingleBook({ book, index, searchInput }) {
  const singleBookContainerRef = useRef(null);
  useEffect(() => {
    if (singleBookContainerRef.current != null) {
      if (book.isInLibrary) {
        singleBookContainerRef.current.style.background = "red";
      } else {
        singleBookContainerRef.current.style.background = "#4d8eeb";
      }
      console.log("xd");
    }
  }, [searchInput]);
  return (
    <>
      {book.title.toLowerCase().includes(searchInput) && (
        <div ref={singleBookContainerRef} className="singleBookContainer">
          <p> title: {book.title}</p>
          <p> data: {book.publishedDate}</p>
          <AddBookToLibrary container={singleBookContainerRef} index={index} />
          <Description book={book} index={index} />
          {book.hasOwnProperty("imageLinks") && (
            <img alt="book" src={book.imageLinks.thumbnail}></img>
          )}
        </div>
      )}
    </>
  );
}

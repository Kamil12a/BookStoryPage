import { useRef } from "react";
import "../../../styles/displayBooks.css";
import { AddBookToLibrary } from "./AddToLibrary";
import { Description } from "./Description";
export function SingleBook({ book, index, searchInput }) {
  const singleBookContainerRef = useRef(null);
  return (
    <>
      {book.title.toLowerCase().includes(searchInput) && (
        <div ref={singleBookContainerRef} className="singleBookContainer">
          <p> title: {book.title}</p>
          <p> data: {book.publishedDate}</p>
          <AddBookToLibrary
            singleBookContainerRef={singleBookContainerRef}
            index={index}
          />
          <Description book={book} index={index} />
          {book.hasOwnProperty("imageLinks") && (
            <img alt="book" src={book.imageLinks.thumbnail}></img>
          )}
        </div>
      )}
    </>
  );
}

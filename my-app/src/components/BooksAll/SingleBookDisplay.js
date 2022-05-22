import { useState, useRef } from "react";
import "../../styles/displayBooks.css";
export function SingleBook({ book, index, searchInput }) {
  const [showDescription, setShowDescription] = useState(false);
  const [isBookInLibrary, setisBookInLibrary] = useState(false);

  const singleBookContainerRef = useRef(null);
  const handleClick = () => {
    showDescription ? setShowDescription(false) : setShowDescription(true);
  };
  const addBookToLibrary = () => {
    if (isBookInLibrary) {
      setisBookInLibrary(false);
      singleBookContainerRef.current.style.background = "#4d8eeb";
    } else {
      setisBookInLibrary(true);
      singleBookContainerRef.current.style.background = "red";
    }
  };
  return (
    <>
      {book.title.toLowerCase().includes(searchInput) && (
        <div ref={singleBookContainerRef} className="singleBookContainer">
          <p> title: {book.title}</p>
          <p> author: {book.authors}</p>
          <p> data: {book.publishedDate}</p>
          {!isBookInLibrary && (
            <button onClick={addBookToLibrary}>
              książka nie jest w twojej księgarni
            </button>
          )}
          {isBookInLibrary && (
            <button onClick={addBookToLibrary}>
              książka jest w twojej księgarni
            </button>
          )}
          {book.hasOwnProperty("descriptionExpand") && (
            <>
              {showDescription && (
                <>
                  <p className="descriptionOfBook">
                    {" "}
                    opis: {book.descriptionExpand}
                  </p>
                  <button onClick={handleClick} className="buttonExpand">
                    skróc
                  </button>
                </>
              )}
              {!showDescription && (
                <>
                  <p className="descriptionOfBook"> opis: {book.description}</p>
                  <button
                    onClick={handleClick}
                    id={index}
                    className="buttonExpand"
                  >
                    rozwin
                  </button>
                </>
              )}
            </>
          )}
          {!book.hasOwnProperty("descriptionExpand") && (
            <>
              <p className="descriptionOfBook"> opis: {book.description}</p>
            </>
          )}
          {book.hasOwnProperty("imageLinks") && (
            <img alt="book" src={book.imageLinks.thumbnail}></img>
          )}
        </div>
      )}
    </>
  );
}

import { useState } from "react";
import "../../styles/displayBooks.css";
export function SingleBook({ book, index }) {
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    showText ? setShowText(false) : setShowText(true);
  };
  return (
    <>
      <div className="singleBookContainer">
        <p> title: {book.title}</p>
        <p> author: {book.authors}</p>
        <p> data: {book.publishedDate}</p>
        {book.hasOwnProperty("descriptionExpand") && (
          <>
            {showText && (
              <>
                <p className="descriptionOfBook">
                  {" "}
                  opis: {book.descriptionExpand}
                </p>
                <button onClick={handleClick} className="buttonExpand">
                  rozwin
                </button>
              </>
            )}
            {!showText && (
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
          <img src={book.imageLinks.thumbnail}></img>
        )}
      </div>
    </>
  );
}

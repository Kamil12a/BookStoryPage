import { useContext } from "react";
import { ThemeContext } from "../context/BookContext";
import { Description } from "./Description";
import { Link } from "react-router-dom";

export function Library() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="containerLibrary">
        <Link to="/">Wróć do strony głównej</Link>
        {theme.books.map((book, index) => {
          if (book.isInLibrary) {
            return (
              <div
                key={book.title + index}
                style={{ background: "green" }}
                className="singleBookContainer"
              >
                <p> tytuł: {book.title}</p>
                <p> data: {book.publishedDate}</p>
                <Description book={book} id={book.id} />
                {book.hasOwnProperty("imageLinks") && (
                  <img alt="book" src={book.imageLinks.thumbnail}></img>
                )}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

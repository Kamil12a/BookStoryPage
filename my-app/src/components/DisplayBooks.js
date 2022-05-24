import { useEffect, useState } from "react";
import { SingleBook } from "./SingleBookDisplay";
import { useContext } from "react";
import { ThemeContext } from "../context/BookContext";

export function DisplayBooks() {
  const [pageNumber, setPageNumber] = useState(15);
  const [allBooks, setAllBooks] = useState(null);
  const theme = useContext(ThemeContext);
  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
  }, []);

  const infiniteScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setPageNumber((pageNumber) => pageNumber + 1);
    }
  };
  const filterBooksByInput = (e) => {
    let textValue = e.target.value.toLowerCase();
    let filterBooks = [];
    (allBooks ? allBooks : theme.books).forEach((book) => {
      let title = book.title.toLowerCase();
      if (title.includes(textValue)) {
        filterBooks.push(book);
      }
    });
    if (!allBooks) {
      setAllBooks(theme.books);
    }
    theme.setBooks(filterBooks);
  };

  return (
    <>
      {" "}
      {theme.books && (
        <div className="containerOfBooks">
          <div className="searchForAbook">
            <label htmlFor="bookInput">szukaj ksiązki po tytule</label>
            <textarea
              onChange={filterBooksByInput}
              id="bookInput"
              name="story"
              rows="5"
              cols="33"
            ></textarea>
          </div>

          {theme.books.map((book, index) => {
            if (index < pageNumber) {
              return <SingleBook key={index} book={book} id={index} />;
            } else return null;
          })}
        </div>
      )}
    </>
  );
}

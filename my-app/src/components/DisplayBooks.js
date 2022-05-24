import { useEffect, useState } from "react";
import { SingleBook } from "./SingleBookDisplay";
import { useContext } from "react";
import { ThemeContext } from "../context/BookContext";

export function DisplayBooks() {
  const [pageNumber, setPageNumber] = useState(15);
  const theme = useContext(ThemeContext);
  const [allBooks, setAllBooks] = useState(theme.books);
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
    let text = e.target.value.toLowerCase();
    let filteredBooks = [];
    theme.books.forEach((book) => {
      let title = book.title.toLowerCase();
      if (title.includes(text)) {
        filteredBooks.push(book);
      }
    });
    setAllBooks(filteredBooks);
  };

  return (
    <>
      {" "}
      {allBooks && (
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

          {allBooks.map((book, index) => {
            if (index < pageNumber) {
              return <SingleBook key={index} book={book} id={index} />;
            } else return null;
          })}
        </div>
      )}
    </>
  );
}

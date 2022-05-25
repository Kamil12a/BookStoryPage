import { useEffect, useState } from "react";
import { SingleBook } from "./SingleBookDisplay";
import { useContext } from "react";
import { ThemeContext } from "../context/BookContext";
import { BookSearching } from "./BookSearching";
import { Link } from "react-router-dom";

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
  return (
    <>
      {" "}
      {allBooks && (
        <div className="containerOfBooks">
          <Link to="library">twoja Biblioteka </Link>
          <BookSearching theme={theme} setAllBooks={setAllBooks} />
          {allBooks.map((book, index) => {
            if (index < pageNumber) {
              return <SingleBook key={index} book={book} id={book.id} />;
            } else return null;
          })}
        </div>
      )}
    </>
  );
}

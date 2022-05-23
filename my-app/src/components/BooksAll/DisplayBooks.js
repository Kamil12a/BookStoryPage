import { useEffect, useState } from "react";
import { SingleBook } from "./singleBookDisplay/SingleBookDisplay";
import { useContext } from "react";
import { ThemeContext } from "../../context/BookContext";

export function DisplayBooks({ allBook }) {
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(15);
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
  const handleChangeInput = (e) => {
    let textValue = e.target.value;
    setSearchValue(textValue);
  };

  return (
    <>
      {" "}
      {theme.books && (
        <div className="containerOfBooks">
          <label htmlFor="bookInput">szukaj ksiązki po tytule</label>
          <textarea
            onChange={handleChangeInput}
            id="bookInput"
            name="story"
            rows="5"
            cols="33"
          ></textarea>
          {theme.books.map((book, index) => {
            if (index < pageNumber) {
              return (
                <SingleBook
                  key={index}
                  book={book}
                  index={index}
                  searchInput={searchValue.toLowerCase()}
                />
              );
            } else return null;
          })}
        </div>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { SingleBook } from "./singleBookDisplay/SingleBookDisplay";
import { filterAllBooks } from "./filterAllBooks";
export function DisplayBooks({ allBook }) {
  const [filteredAllBooks, setfilteredAllBooks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(15);

  useEffect(() => {
    filterAllBooks(allBook, setfilteredAllBooks);
    window.addEventListener("scroll", pageNumberAdd);
  }, [allBook]);

  const pageNumberAdd = () => {
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
      {filteredAllBooks && (
        <div className="containerOfBooks">
          <label htmlFor="bookInput">szukaj ksiązki po tytule</label>
          <textarea
            onChange={handleChangeInput}
            id="bookInput"
            name="story"
            rows="5"
            cols="33"
          ></textarea>
          {filteredAllBooks.map((book, index) => {
            if (index < pageNumber) {
              return (
                <SingleBook
                  key={index}
                  book={book}
                  index={index}
                  searchInput={searchValue.toLowerCase()}
                />
              );
            } else return null
          })}
        </div>
      )}
    </>
  );
}

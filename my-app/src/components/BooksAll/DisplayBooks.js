import { useEffect, useState } from "react";
import { SingleBook } from "./SingleBookDisplay";
import { filterAllBooks } from "./filterAllBooks";
export function DisplayBooks({ allBook }) {
  const [filteredAllBooks, setfilteredAllBooks] = useState([]);
  
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    filterAllBooks(allBook, setfilteredAllBooks);
  }, [allBook]);
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
            return (
              <SingleBook
                key={index}
                book={book}
                index={index}
                searchInput={searchValue.toLowerCase()}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

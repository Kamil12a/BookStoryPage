import { useEffect, useState } from "react";
import { SingleBook } from "./SingleBookDisplay";
export function DisplayBooks({ allBook }) {
  const [filteredAllBooks, setfilteredAllBooks] = useState([]);
  useEffect(() => {
    filterAllBooks();
  }, [allBook]);

  const cutToLongText = (book, limit) => {
    if (book.description !== undefined && book.description.length>200 ) {
      book.descriptionExpand = book.description;
      book.description = book.description.substring(0, limit) + "...";
    } 
    return book;
  };

  const filterAllBooks = () => {
    if ("items" in allBook) {
      let filteredAllBooks = [];
      allBook.items.forEach((book) => {
        let bookLimitedCh = cutToLongText(book.volumeInfo, 202);
        filteredAllBooks.push(bookLimitedCh);
      });
      setfilteredAllBooks(filteredAllBooks);
    }
  };
  return (
    <>
      {filteredAllBooks && (
        <div className="containerOfBooks">
          {filteredAllBooks.map((book, index) => {
            return <SingleBook key={index} book={book} index={index} />;
          })}
        </div>
      )}
    </>
  );
}

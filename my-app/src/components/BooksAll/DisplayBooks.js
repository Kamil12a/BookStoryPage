import { useEffect, useState } from "react";
import "../../styles/displayBooks.css";
export function DisplayBooks({ allBook }) {
  const [filteredAllBooks, setfilteredAllBooks] = useState([]);
  useEffect(() => {
    filterAllBooks();
  }, [allBook]);

  const cutToLongText = (book, limit) => {
    if (book.description !== undefined) {
      book.description = book.description.substring(0, limit) + "...";
      book.descriptionExpand = book.description;
      book.expandText = false;
    } else {
      book.description = "brak";
    }
    return book;
  };

  const filterAllBooks = () => {
    if ("items" in allBook) {
      let filteredAllBooks = [];
      allBook.items.forEach((book) => {
        let bookLimitedCh = cutToLongText(book.volumeInfo, 200);
        filteredAllBooks.push(bookLimitedCh);
      });
      setfilteredAllBooks(filteredAllBooks);
    }
  };
  const handleChange = (e) => {
    setfilteredAllBooks((datas) => {
      datas[e.target.id].expandText = true;
      if (true) {
        return [...datas];
      }
    });
  };
  return (
    <>
      {filteredAllBooks && (
        <div className="containerOfBooks">
          {filteredAllBooks.map((book, index) => {
            return (
              <div key={index} className="singleBookContainer">
                <p> title: {book.title}</p>
                <p> author: {book.authors}</p>
                <p> data: {book.publishedDate}</p>
                {book.hasOwnProperty("descriptionExpand") && (
                  <>
                    {book.expandText && (
                      <>
                        <p className="descriptionOfBook">
                          {" "}
                          opis: {book.descriptionExpand}
                        </p>
                        <button className="buttonExpand">rozwin</button>
                      </>
                    )}
                    {!book.expandText && (
                      <>
                        <p className="descriptionOfBook">
                          {" "}
                          opis: {book.description}
                        </p>
                        <button id={index} className="buttonExpand">
                          rozwin
                        </button>
                      </>
                    )}
                  </>
                )}
                {book.hasOwnProperty("imageLinks") && (
                  <img src={book.imageLinks.thumbnail}></img>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

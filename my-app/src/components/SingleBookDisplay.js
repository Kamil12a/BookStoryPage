import "../styles/displayBooks.css";
import { Description } from "./Description";

export function SingleBook({ book, id }) {
  return (
    <>
      <div className="singleBookContainer">
        <p> title: {book.title}</p>
        <p> data: {book.publishedDate}</p>

        <Description book={book} id={id} />
        {book.hasOwnProperty("imageLinks") && (
          <img alt="book" src={book.imageLinks.thumbnail}></img>
        )}
      </div>
    </>
  );
}

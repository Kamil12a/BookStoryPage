export function BookSearching({theme,setAllBooks}) {

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
    </>
  );
}

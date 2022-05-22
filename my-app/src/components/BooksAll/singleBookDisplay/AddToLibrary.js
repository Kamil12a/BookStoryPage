import { useState } from "react";
import "../../../styles/displayBooks.css";

export function AddBookToLibrary({singleBookContainerRef}) {
  const [isBookInLibrary, setisBookInLibrary] = useState(false);
  const addBookToLibrary = () => {
    if (isBookInLibrary) {
      setisBookInLibrary(false);
      singleBookContainerRef.current.style.background = "#4d8eeb";
    } else {
      setisBookInLibrary(true);
      singleBookContainerRef.current.style.background = "red";
    }
  };
  return (
    <>
      {!isBookInLibrary && (
        <button onClick={addBookToLibrary}>
          książka nie jest w twojej księgarni
        </button>
      )}
      {isBookInLibrary && (
        <button onClick={addBookToLibrary}>
          książka jest w twojej księgarni
        </button>
      )}
    </>
  );
}

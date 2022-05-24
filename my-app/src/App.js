import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/BookContext";
import { useEffect, useState } from "react";
import { Library } from "./components/Library/Library";
import { fetchBooks } from "./fetchData/fetchBooks";
import { DisplayBooks } from "./components/BooksAll/DisplayBooks";
function App() {
  const [books, setBooks] = useState(null);
  const [state, setState] = useState("innitial State");
  useEffect(() => {
    fetchBooks(setState, setBooks);
  }, []);
  return (
    <>
      {state === "loading" && <p>ładuje...</p>}
      {state === "error" && <p>błąd</p>}

      {state === "loaded" && (
        <ThemeContext.Provider value={{ books, setBooks }}>
          <Router>
            <Routes>
              <Route exact path="/" element={<DisplayBooks />}></Route>
              <Route path="/library" element={<Library />}></Route>
            </Routes>
          </Router>
        </ThemeContext.Provider>
      )}
    </>
  );
}

export default App;

//       {state === "loaded" && <DisplayBooks />}

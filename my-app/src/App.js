import { BooksAll } from "./components/BooksAll/BooksAll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./context/BookContext";
import { useState } from "react";
import { Library } from "./components/Library/Library";
function App() {
  const [books, setBooks] = useState(null);
  return (
    <>
      <ThemeContext.Provider value={{books, setBooks}}>
        <Router>
          <Routes>
            <Route exact path="/" element={<BooksAll />}></Route>

            <Route path="/everyBooks" element={<BooksAll />}></Route>
            <Route path="/xd" element={<Library />}></Route>
          </Routes>
        </Router>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

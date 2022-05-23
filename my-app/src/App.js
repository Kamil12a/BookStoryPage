import { BooksAll } from "./components/BooksAll/BooksAll";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<BooksAll />}></Route>

          <Route path="/everyBooks" element={<BooksAll />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

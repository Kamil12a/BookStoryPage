import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/BookContext";
// import { SingleBook } from "../singleBookDisplay/SingleBookDisplay";
export function Library() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Link to="/">Go to Allbooks</Link>{" "}
    </>
  );
}


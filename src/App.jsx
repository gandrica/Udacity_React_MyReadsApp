import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getAll } from "./api/BooksAPI";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const [listBooks, setListBooks] = useState([]);

  const changeBookShelf = (bookToUpdate, newShelf) => {
    const updatedBook = { ...bookToUpdate, shelf: newShelf };

    setListBooks((prevBooks) =>
      prevBooks
        .filter((book) => book.id !== updatedBook.id)
        .concat(updatedBook),
    );
  };

  useEffect(() => {
    const getAllBooks = async () => {
      const books = await getAll();
      setListBooks(books);
    };
    getAllBooks();
  }, []);
  console.log(listBooks);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <DashboardPage onUpdateBook={changeBookShelf} list={listBooks} />
        }
      />
      <Route
        path="/search"
        element={<SearchPage onUpdateBook={changeBookShelf} list={listBooks} />}
      />
    </Routes>
  );
}

export default App;

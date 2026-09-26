import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getAll } from "./api/BooksAPI";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  const [listBooks, setListBooks] = useState([]);

  const changeBookShelf = (bookToUpdate, newShelf) => {
    bookToUpdate.shelf = newShelf;

    setListBooks((prevBooks) => {
      return prevBooks
        .filter((book) => book.id !== bookToUpdate.id)
        .concat(bookToUpdate);
    });
  };

  useEffect(() => {
    const getAllBooks = async () => {
      const books = await getAll();
      setListBooks(books);
    };
    getAllBooks();
  }, []);

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
        element={<SearchPage onUpdateBook={changeBookShelf} />}
      />
    </Routes>
  );
}

export default App;

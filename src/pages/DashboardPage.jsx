import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";
import { getAll } from "../api/BooksAPI";

function DashboardPage() {
  const [listBooks, setListBooks] = useState([]);
  const currentlyReadingBooks = listBooks.filter(
    (b) => b.shelf === "currentlyReading",
  );
  const wantToReadBooks = listBooks.filter((b) => b.shelf === "wantToRead");
  const readBooks = listBooks.filter((b) => b.shelf === "read");
  const navigate = useNavigate();

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

  console.log(listBooks);
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            onUpdateBook={changeBookShelf}
            list={currentlyReadingBooks}
            title="Currently Reading"
          />
          <Bookshelf
            onUpdateBook={changeBookShelf}
            list={wantToReadBooks}
            title="Want to Read"
          />
          <Bookshelf
            onUpdateBook={changeBookShelf}
            list={readBooks}
            title="Read"
          />
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => navigate("/search")}>Add a book</a>
      </div>
    </div>
  );
}

export default DashboardPage;

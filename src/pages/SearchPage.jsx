import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { search } from "../api/BooksAPI";
import { useDebounce } from "../utils/useDebounce.js";

import BooksGrid from "../components/BooksGrid";

function SearchPage({ onUpdateBook, list }) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 1000);
  const [searchListBooks, setSearchListBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!searchQuery) {
      setSearchListBooks([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const fetchQueryBooks = async () => {
      if (!debouncedSearchQuery) return;

      const queryBooks = await search(debouncedSearchQuery, 100);
      if (queryBooks.error) {
        setSearchListBooks([]);
      } else {
        setSearchListBooks(queryBooks);
      }
    };
    fetchQueryBooks();
  }, [debouncedSearchQuery]);

  const booksWithShelves = searchListBooks
    .filter((book) => book.imageLinks)
    .map((searchBook) => {
      const bookInShelf = list.find((b) => b.id === searchBook.id);
      return {
        ...searchBook,
        shelf: bookInShelf ? bookInShelf.shelf : "none",
      };
    });

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => navigate("/")}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <p>
          {booksWithShelves?.length > 0
            ? `${booksWithShelves.length} books found!`
            : "Book not found."}
        </p>
        <BooksGrid list={booksWithShelves} onUpdateBook={onUpdateBook} />
      </div>
    </div>
  );
}

export default SearchPage;

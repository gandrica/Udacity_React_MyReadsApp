import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { search } from "../api/BooksAPI";

import BooksGrid from "../components/BooksGrid";

function SearchPage({ onUpdateBook }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchListBooks, setSearchListBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchQueryBooks = async () => {
      if (searchQuery === "") return;
      else {
        const queryBooks = await search(searchQuery, 14);
        setSearchListBooks(queryBooks);
      }
    };
    fetchQueryBooks();
  }, [searchQuery]);

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
        <BooksGrid list={searchListBooks} onUpdateBook={onUpdateBook} />
      </div>
    </div>
  );
}

export default SearchPage;

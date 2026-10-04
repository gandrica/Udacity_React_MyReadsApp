import { useState } from "react";
import { update } from "../api/BooksAPI";

function BookShelfChanger({ book, onUpdateBook }) {
  const [bookShelf, setBookSelf] = useState(book.shelf || "none");

  const handleBookShelfSelection = async (e) => {
    const newShelf = e.target.value;
    setBookSelf(newShelf);
    if (e.target.value === "none") return;
    try {
      await update(book, newShelf);
      onUpdateBook(book, newShelf);
    } catch (error) {
      console.error("Bookshelf change error :", error);
    }
  };

  return (
    <div className="book-shelf-changer">
      <select value={bookShelf} onChange={handleBookShelfSelection}>
        <option value="" disabled>
          Move to...
        </option>
        <option value="currentlyReading">
          {book.shelf === "currentlyReading" ? "✓" : ""} Currently Reading
        </option>
        <option value="wantToRead">
          {book.shelf === "wantToRead" ? "✓" : ""} Want to Read
        </option>
        <option value="read">{book.shelf === "read" ? "✓" : ""} Read</option>
        <option value="none">{book.shelf === "none" ? "✓" : ""} None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger;

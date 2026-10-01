import { Link } from "react-router-dom";

import Bookshelf from "../components/Bookshelf";

function DashboardPage({ list, onUpdateBook }) {
  const currentlyReadingBooks = list.filter(
    (b) => b.shelf === "currentlyReading",
  );
  const wantToReadBooks = list.filter((b) => b.shelf === "wantToRead");
  const readBooks = list.filter((b) => b.shelf === "read");

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            onUpdateBook={onUpdateBook}
            list={currentlyReadingBooks}
            title="Currently Reading"
          />
          <Bookshelf
            onUpdateBook={onUpdateBook}
            list={wantToReadBooks}
            title="Want to Read"
          />
          <Bookshelf
            onUpdateBook={onUpdateBook}
            list={readBooks}
            title="Read"
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default DashboardPage;

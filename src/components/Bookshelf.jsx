import BooksGrid from "./BooksGrid";
function Bookshelf({ title, list, onUpdateBook }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BooksGrid list={list} onUpdateBook={onUpdateBook} />
      </div>
    </div>
  );
}

export default Bookshelf;

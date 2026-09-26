import Book from "./Book";
function BooksGrid({ list, onUpdateBook }) {
  return (
    <ol className="books-grid">
      {list.map((book) => (
        <Book book={book} key={book.id} onUpdateBook={onUpdateBook} />
      ))}
    </ol>
  );
}

export default BooksGrid;

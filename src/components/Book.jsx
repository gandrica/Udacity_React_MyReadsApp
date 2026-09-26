import BookShelfChanger from "./BookShelfChanger";

function Book({ book, onUpdateBook }) {
  const { imageLinks, title, authors } = book;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageLinks.thumbnail})`,
            }}
          ></div>
          <BookShelfChanger book={book} onUpdateBook={onUpdateBook} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors.join(", ")}</div>
      </div>
    </li>
  );
}

export default Book;

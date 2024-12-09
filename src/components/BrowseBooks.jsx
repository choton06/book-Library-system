import { books } from "../utils/MockData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BrowseBook.css";

function BrowseBooks() {
  const [SearchText, setSearchText] = useState("");
  const [searchedBook, setSearchedBook] = useState(books);

  // Extract categories and remove duplicates
  const filteredCategory = [...new Set(books.map((book) => book.Category))];

  // Fetch books from Redux store
  const AddBooks = useSelector((state) => state.book.items || []);

  // Handle search logic
  function handleSearch() {
    const searchResult = books.filter((book) =>
      `${book.Title} ${book.Author}`.toLowerCase().includes(SearchText.toLowerCase())
    );
    setSearchedBook(searchResult);
  }

  return (
    <div className="browse-books">
      {/* Search Container */}
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          value={SearchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Book by title or author name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Newly Added Books */}
      {AddBooks.length > 0 && (
        <>
          <h2>Newly Added Books in Our Library</h2>
          <div className="new-books">
            {AddBooks.map((book) => (
              <div className="book-card" style={{ width: "200px" }} key={book.id}>
                {book.Image && (
                  <img
                    src={URL.createObjectURL(book.Image)}
                    alt={book.Title}
                    className="book-cover"
                  />
                )}
                <h5 className="book-title">
                  Name: <span className="title">{book.Title}</span>
                </h5>
                <h6 className="book-author">
                  Author: <span className="author">{book.Author}</span>
                </h6>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Categories */}
      <h1>Categories</h1>
      <div className="categories">
        {filteredCategory.map((category, index) => (
          <Link to={`/books/${category}`} key={index}>
            <p className="category">{category}</p>
          </Link>
        ))}
      </div>

      {/* Book List */}
      <h1> Books in our library</h1>

      <div className="booklist">
        {searchedBook.map((book) => (
          <div className="book-card" key={book.id}>
            <img
              src={book.CoverImage}
              alt={book.Title}
              width="200px"
              height="200px"
              className="book-cover"
            />
            <h5 className="book-title">
              Name: <span className="title">{book.Title}</span>
            </h5>
            <h6 className="book-author">
              Author: <span className="author">{book.Author}</span>
            </h6>
            <Link to={`/book/${book.id}`}>
              <button className="view-btn">View More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;


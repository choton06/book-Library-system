import { useParams } from "react-router-dom";
import { books } from "../utils/MockData";
import "./bookdetails.css";

function BookDetails() {
  const params = useParams();
  const book = books.find((book) => params.id == book.id); // Use find for a single book
  
  if (!book) {
    return <p>Book not found!</p>; // Handle case where book isn't found
  }

  return (
    <div className="book-details-container">
      <div className="book-details-card">
        <img 
          src={book.CoverImage} 
          alt={`${book.Title} cover`} 
          className="book-details-cover" 
        />
        <div className="book-details-info">
          <h1 className="book-details-title">{book.Title}</h1>
          <h2 className="book-details-author">by {book.Author}</h2>
          <p className="book-details-desc">{book.Description}</p>
          <p className="book-details-category"><strong>Category:</strong> {book.Category}</p>
          <p className="book-details-rating"><strong>Rating:</strong> {book.Rating} ★</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;

import { books } from "../utils/MockData";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const populerbooks = books.filter((book) => book.Rating > 4.7);

  return (
    <>
      <header className="header-container">
        <div className="bg-image">
          <div className="welcome-message">
            <h1 className="home-heading anim-typewriter">
              Welcome to J.P.U.C Library - Your Gateway to Knowledge and Imagination!
            </h1>
            <p>
              Discover a world of stories, explore endless learning opportunities, and let your curiosity lead the way. Whether you're here to read, research, or relax, we're thrilled to have you. Our shelves are full, our staff is ready, and your next adventure awaits.
            </p>
          </div>
        </div>
      </header>

      <main className="popular-books-section">
        <h2 className="section-heading">Popular Books in Our Library</h2>
        <div className="booklist">
          {populerbooks.map((book) => (
            <div className="book-card" key={book.id}>
              <img
                src={book.CoverImage}
                alt={book.Title}
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
      </main>
    </>
  );
}

export default Home;

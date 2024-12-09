import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddItem } from "../utils/BookSlice";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

function AddBook() {
  const [Title, setTitle] = useState("");
  const [Author, setAuthor] = useState("");
  const [Image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const item = { Title, Author, Image };

  function handleAddBook() {
    if (!Title || !Author || !Image ) {
      alert("All fields are required!");
      return;
    }
    dispatch(AddItem(item));
    navigate("/browse-books");
  }

  return (
    <div className="add-book-container">
      <form className="add-book-form">
        <h1 className="form-title">Add a New Book</h1>
        <div className="form-group">
          <label htmlFor="title">Book Title:</label>
          <input
            type="text"
            id="title"
            placeholder="Enter Book Title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author Name:</label>
          <input
            type="text"
            id="author"
            placeholder="Enter Author Name"
            value={Author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <button type="button" className="add-book-btn" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;

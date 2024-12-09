
import { Link, useParams } from "react-router-dom";
import { books } from "../utils/MockData";
import "./bookCategory.css"

function BooksByCategory(){
    const params = useParams();
    const booksbyCategory = books.filter(book => book.Category == params.category);  
    

   return(<>

    <h1> books by Category  : {params.category}</h1>

    {booksbyCategory.map(book => (
  <div className="book-details" key={book.id}>
    <img src={book.CoverImage} alt={book.Title} className=""  />
    <div className="">
      <h1 className="">{book.Title}</h1>
      <h2 className="">{book.Author}</h2>
      <p className="">{book.Description}</p>
      <Link to={`/book/${book.id}`}>
        <button>View More</button>
      </Link>
    </div>
  </div>
))}
   </>)
}

export default BooksByCategory;
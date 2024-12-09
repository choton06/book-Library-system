import { Link } from "react-router-dom";
import "./header.css"

function Header(){

    return(
        <>
        <nav className="navbar">
            <div className="logo-box">
            <img src="https://cdn-icons-png.flaticon.com/512/9043/9043296.png" alt=""  width="30px" height="30px" className="logo"/>
            <span>J.P.U.C</span>
            </div>
         
          <ul >
             <Link to="/"> <li>Home</li></Link>
         <Link to="/browse-books"><li>Browse Books</li></Link>   
          <Link to="/Add-book"><li>Add Book</li></Link> 

          </ul>
           
        </nav>
        </>
    )
}

export default Header;
 import { useRouteError } from "react-router-dom";
 import { Link } from "react-router-dom";
 
 function Error(){
    const err= useRouteError();
    return (
        <>
        <h1>Oop!!</h1>
        <h2> This Path is not exist</h2>
        <h3>{err.status}</h3>
        <h4>{err.data}</h4>
       <Link to={"/"}>  <p>go back to home</p></Link>  
        </>
    )
 }

 export default Error;
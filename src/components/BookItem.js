import React from "react";
import './BookItem.css'
import { Link } from "react-router-dom";

const BookItem=(props)=>{

 const {bookArr}=props
 const {id,title,author,genre,rating,description,publication_year,img}=bookArr

  return (
   <Link className="link" to={`/books/${id}`}>
     <li className="li">

      
        <img src={img} className="bookSize"/>


        <div>
            <h5 className="head"> {title}</h5>
            <p className="para"> Author: {author} </p>
            <p className="para"> Rating: {rating}</p>
        </div>

     </li>
     </Link>
  )
}

export default BookItem


/*            <h4 className="head"> {title} </h4> */
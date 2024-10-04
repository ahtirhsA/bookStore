import React, { useContext } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import BookContext from '../ReactContext/BookContext'
import  './BookCard.css'

const BookCard=()=>{
   
    const {bookId}=useParams()

    const navigate=useNavigate()

    const {books,addBooks} =useContext(BookContext)

    const book=books.filter((i)=>i.id==bookId)

    const {id,title,author,genre,rating,description,publication_year,img}=book[0]

    const savedBooksFunc=()=>{
        addBooks({...book[0],quantity:1})
        navigate('/mycollections')
    }

    return (
        <div className='main'>

           <div className='con'>
              <img src={img} className='imgIcon'/>
           </div> 

          <div>
             <h5 className='h5'> {title} </h5>
             <p className='auth'> {author} </p>
             <p className='desc'> {description}</p>


             <div className='starcard'>
             <img src='https://static.vecteezy.com/system/resources/thumbnails/012/488/033/small/star-3d-illustration-png.png' className='star'/>
             <p className='cmn ex'> : {rating}</p>
             </div>

             <p className='cmn'> genre: {genre}</p>
             <p className='cmn'> published_year: {publication_year}</p>
             <button className='butt' onClick={savedBooksFunc}> Add </button>
          </div>
           
        </div>
    )


}

export default BookCard
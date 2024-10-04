import React,{useState} from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./components/Home";
import BookContext from "./ReactContext/BookContext";
import BookCard from "./components/BookCard";
import MyCollections from "./components/MyCollections";

/*


"books": [
{
"id": 1,
"title": "The Great Gatsby",
"author": "F. Scott Fitzgerald",
"genre": "Classic",
"rating": 4.7,
"description": "A novel set in the Jazz Age that explores themes of wealth, love, and the
American Dream.",
"publication_year": 1925
},
{
"id": 2,
"title": "To Kill a Mockingbird",
"author": "Harper Lee",
"genre": "Fiction",
"rating": 4.8,
"description": "A timeless novel of a child's moral awakening and a poignant tale of race
and justice in the American South.",
"publication_year": 1960
},
{
"id": 3,
"title": "1984",
"author": "George Orwell",
"genre": "Dystopian",
"rating": 4.6,
"description": "A dystopian social science fiction novel and cautionary tale about the

dangers of totalitarianism.",
"publication_year": 1949
},
{
"id": 4,
"title": "Pride and Prejudice",
"author": "Jane Austen",
"genre": "Romance",
"rating": 4.9,
"description": "A romantic novel that also serves as a social commentary on the British
landed gentry of the early 19th century.",
"publication_year": 1813
},
{
"id": 5,
"title": "The Catcher in the Rye",
"author": "J.D. Salinger",
"genre": "Fiction",
"rating": 4.3,
"description": "A story about a young boy’s journey through the challenges of
adolescence.",
"publication_year": 1951
}
]



*/

const App=()=>{


const [books,setBooks]=useState([
  {
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "rating": 4.7,
  "description": "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
  "publication_year": 1925,
  "img":'https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1'
  },
  {
  "id": 2,
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "genre": "Fiction",
  "rating": 4.8,
  "description": "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
  "publication_year": 1960,
  "img":'https://media.glamour.com/photos/56e1f3c462b398fa64cbd304/master/w_1600%2Cc_limit/entertainment-2016-02-18-main.jpg'
  },
  {
  "id": 3,
  "title": "1984",
  "author": "George Orwell",
  "genre": "Dystopian",
  "rating": 4.6,
  "description": "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
  "publication_year": 1949,
  "img":'https://miro.medium.com/v2/resize:fit:434/1*XdQ9gZM_71SM434_l22kjw.jpeg'
  },
  {
  "id": 4,
  "title": "Pride and Prejudice",
  "author": "Jane Austen",
  "genre": "Romance",
  "rating": 4.9,
  "description": "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
  "publication_year": 1813,
  "img":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwAElPQzM5vFDsV27BIx8BB7x2BrBGFMAyaw&s'
  },
  {
  "id": 5,
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "genre": "Fiction",
  "rating": 4.3,
  "description": "A story about a young boy’s journey through the challenges of adolescence.",
  "publication_year": 1951,
  "img":'https://i0.wp.com/www.printmag.com/wp-content/uploads/2010/02/2326a7_e6d8ea079e4344e791725f50fbb89a94mv2.jpg?resize=263%2C388&quality=89&ssl=1'
  }
  ])

  const [myLib,setLib]=useState([])

  const addBooks=(bookObj)=>{
    const check=myLib.find((i)=>i.id==bookObj.id)
    if (check===undefined){
      setLib(prevState=>[...prevState,bookObj])

    }
    else{
      const modBookObj=myLib.map((i)=>{
        if (i.id==check.id){
         return {...i,quantity:i.quantity+1}
        }
        else{
          return i 
        }
      })
      setLib(modBookObj)
    }
  }


  const delBooks=(delId)=>{
    const newArr=myLib.filter((i)=>i.id!=delId)
    setLib(newArr)
  }

  return (
    <BookContext.Provider 
       value={{books,myLib,addBooks,delBooks}}
      >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/:bookId' element={<BookCard/>}/>
      <Route path='/mycollections' element={<MyCollections/>}/>
    </Routes>
    </BookContext.Provider>
  )
}

export default App
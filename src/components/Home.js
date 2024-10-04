import React, { useContext,useState} from 'react'
import BookContext from '../ReactContext/BookContext'
import BookItem from './BookItem'
import './Home.css'


const Home=()=>{

    const {books}=useContext(BookContext)

    const [search,setSearch]=useState('')

    const [filArr,setFil]=useState(books)

    const searchFunc=(event)=>{
        setSearch(event.target.value)
    }

    

    const emptyResultsFunc=()=>{
        return (
            <div className='noBookView1'>
                <img src='https://cdn.dribbble.com/users/1121009/screenshots/11030107/media/25be2b86a12dbfd8da02db4cfcbfe50a.jpg?resize=400x0'/>
                <p className='oops1'> Oops!!! </p>
                <p className='noFound1'> No Search Results!!</p>
            </div>
        )
    }

    const filterFunc=()=>{
        const modArr=books.filter((i)=>i.title.toLowerCase().includes(search.toLowerCase().trim()))
       
        setFil(modArr)
        
    }
    

    return (
    <div className='dispView'>

    

    <h1 className='homeHead'> Book Store </h1>

       <div className='search-att'>
       <input type='search' placeholder='Search for your book.....' className='inp' onChange={searchFunc} value={search}/>
       <button onClick={filterFunc} className='searchButt'> Search </button>
       </div>

      

        {
        filArr.length!=0?

        <ul className='ul'>
            {
                filArr.map((i)=><BookItem bookArr={i} key={i.id}/>)
            }
        </ul>  :  emptyResultsFunc()

}

        </div>
    )

    
}

export default Home 
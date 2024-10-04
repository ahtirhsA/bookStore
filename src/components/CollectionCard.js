import React, { useContext } from 'react'
import './CollectionCard.css'
import BookContext from '../ReactContext/BookContext'

const CollectionCard=(props)=>{
   
   const {cardItem}=props

   const {id,title,description,quantity,img}=cardItem

   const {delBooks}=useContext(BookContext)

   const delCollectionCard=()=>{
    delBooks(id)
   }

   return (
     <div className='wrapCon'>
      
      <div className='subCon'>
      <div className='cardCon'>
        <img src={img} className='imm'/>
      </div>

     <div>
        <h5 className='cardTitle'>  {title} </h5>
        <p className='cardPara'> {description} </p>
        <p className='cardPara'> Quantity: {quantity}</p>
     </div>
     </div>

     <button className='del' onClick={delCollectionCard}> Delete </button>
    
     </div>
   )
}

export default CollectionCard
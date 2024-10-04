import React, { useContext } from 'react'
import BookContext from '../ReactContext/BookContext'
import './MyCollections.css'
import CollectionCard from './CollectionCard'



import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const MyCollections=()=>{
    
const {myLib}=useContext(BookContext)

const emptyViewFunc=()=>{
    return (
        <div className='noBookView'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxQBsb8dU8lQIDs9fZnMElJAouqv1RfjXcw&s'/>
            <p className='oops'> Oops!!! </p>
            <p className='noFound'> No Books Found!!</p>
        </div>
    )
}


const BadgeFunc = () => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
      },
    }));

    return (
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={myLib.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    );
  };


return (
  
    <div>

  <div className='badge-container'>
    <h1 className='libHead'> My Library Collections</h1>
   {BadgeFunc()}
   </div>
     
    {myLib.length!=0?

    <ul className='ul1'>
     {
        myLib.map((i)=><CollectionCard cardItem={i} key={i.id}/>)
     }

    </ul>:emptyViewFunc()

    }

    </div>
)

}

export default MyCollections
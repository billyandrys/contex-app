import React, { useContext} from 'react'

import Usercontext from '../contexts/UserContext'

export const Movie = ({movie}) => {
 
  const imgStyle = {
    height: '260px',
    objectFit: 'cover'
    
  }
  
  const { user, toggleFavoriteMovieToUser } = useContext(Usercontext)
  const isFavorite = user?.favoriteMovie?.includes(movie.id)
  console.log(isFavorite)
  return (
    <div className='card'>
      <img src={movie.imageUrl} alt={movie.title} className='card-img-top' style={imgStyle}/>
      <div className='card-body'>
        <h4>{movie.title}</h4>
      {user?.id && 
        <button  className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`} onClick={()=>toggleFavoriteMovieToUser(movie.id)} >
          Favorite
        </button>
      }
      </div>
    </div>
  )
}

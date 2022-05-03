import React from 'react'

export const Movie = ({movie}) => {
  console.log('Movie')
  const imgStyle = {
    height: '260px',
    objectFit: 'cover'
    
  }
  const isFavorite = false
  return (
    <div className='card'>
      <img src={movie.imageUrl} alt={movie.title} className='card-img-top' style={imgStyle}/>
      <div className='card-body'>
        <h4>{movie.title}</h4>
        <button className={`btn ${isFavorite ? 'btn-success' : 'btn-outline-primary'}`}>Favorite</button>
      </div>
    </div>
  )
}

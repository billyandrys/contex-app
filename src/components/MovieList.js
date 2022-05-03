import React from 'react'
import initialMovies from '../const/initialMovie'
import { Movie } from './Movie'

export const MovieList = () => {
  console.log('MovieList')
  return (
    <div className='container'>
      <div className='row'>
      {initialMovies.map(movie=>(
        <div className='col-md-4' key={movie.id}>
          <Movie movie={movie}/>
        </div>
      ))}
      

      
      
      </div>
        
    </div>
  )
}

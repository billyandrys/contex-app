import React, {useContext} from 'react'
import MovieContext from '../contexts/MovieContext'

import { Movie } from './Movie'

export const MovieList = () => {

  const {movies} = useContext(MovieContext)

  console.log('MovieList')
  return (
    <div className='container'>
      <div className='row'>
      {movies.map(movie=>(
        <div className='col-md-4' key={movie.id}>
          <Movie movie={movie}/>
        </div>
      ))}
      

      
      
      </div>
        
    </div>
  )
}

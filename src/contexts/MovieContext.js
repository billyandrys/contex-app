import React, { createContext } from 'react'
import initialMovies from '../const/initialMovie'


const MovieContext = createContext()

export const MovieProvider = ({children})=>{

    const data = { movies: initialMovies}
    return(
        <MovieContext.Provider value={data}>
            {children}
        </MovieContext.Provider>
    )
}


export default MovieContext

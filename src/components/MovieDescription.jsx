import React from 'react'
// import MoviesData from './moviesData'
import { Link, useParams } from 'react-router-dom'

// This component will display the description and trailer of a selected movie.
const MovieDescription = () => {
    const { id } = useParams()
    // const movie = MoviesData.find(movie => movie.id === parseInt(id))

  return (
    <div className='MovieDescription'>
        <h2>{movie.title}</h2>
        <p>Description: {movie.description}</p>
        <iframe>
            width="560"
            height="315"
            src={movie.trailerLink}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        </iframe>
        <Link to="/">Home</Link>
    </div>
  )
}

export default MovieDescription;
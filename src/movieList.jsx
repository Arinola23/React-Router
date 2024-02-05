import React from 'react';
import { Link } from 'react-router-dom'
import MovieCard from './components/movieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (

          <Link key={movie.id} to ={`/movie/${movie.id}`}>
            <div className='movie-card'>
              <MovieCard
                  
                  title={movie.title}
                  description={movie.description}
                  posterURL={movie.poster}
                  rating={movie.rating}
                />
              </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;

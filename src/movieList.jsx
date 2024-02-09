import React from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './components/movieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Link key={index} to={`/movie/${index}`}>
          <MovieCard {...movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;

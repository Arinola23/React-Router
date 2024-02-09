import React from 'react';

const MovieCard = ({ title, description, poster, rating }) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
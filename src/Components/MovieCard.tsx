import React from 'react';
import { type Movie } from '../types';

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
    </div>
  );
}

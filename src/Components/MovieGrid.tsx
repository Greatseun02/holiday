import { type Movie } from '../types';
import MovieCard from './MovieCard';

interface Props {
  movies: Movie[];
}

export default function MovieGrid({ movies }: Props) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </div>
  );
}

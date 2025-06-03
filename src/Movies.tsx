import React, { useEffect, useState } from 'react';
import SearchBar from './Components/SearchBar';
import MovieGrid from './Components/MovieGrid';
import { type Movie } from './types';

export default function MovieSearchPage() {
  const [query, setQuery] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);


  useEffect(()=>{
const handleSearch = async () => {
    try {
      const res = await fetch('https://api.sampleapis.com/movies/classic');
      const data: Movie[] = await res.json();
      const filtered = data.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setMovies(filtered);

      console.log(filtered)
    } catch (err) {
      console.error('Failed to fetch movies', err);
    }
  };

  handleSearch();
  },[])

  const handleSearch = async () => {
    try {
      const res = await fetch('https://api.sampleapis.com/movies/classic');
      const data: Movie[] = await res.json();
      const filtered = data.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setMovies(filtered);

      console.log(filtered)
    } catch (err) {
      console.error('Failed to fetch movies', err);
    }
  };

  return (
    <div className="movie-search-page">
      <h1>Movie search page</h1>
      <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} onSearch={handleSearch} />
      <MovieGrid movies={movies} />
    </div>
  );
}

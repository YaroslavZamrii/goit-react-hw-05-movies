import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmSearch } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMoviesName = searchParams.get('query');

  useEffect(() => {
    if (!searchMoviesName) return;
    try {
      const fetchMoviesSearch = async () => {
        const fetchResult = await getFilmSearch(searchMoviesName);
        setMovies(fetchResult.results);
      };
      fetchMoviesSearch();
    } catch (error) {}
  }, [searchMoviesName]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {movies && <MoviesList filmsList={movies} />}
    </>
  );
};

export default Movies;

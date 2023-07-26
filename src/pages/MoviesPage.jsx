import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getFilmSearch } from 'services/api';

const toastConfig = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchMoviesName = searchParams.get('query');

  useEffect(() => {
    if (!searchMoviesName) return;

    const fetchMoviesSearch = async () => {
      try {
        setIsLoading(true);
        const fetchResult = await getFilmSearch(searchMoviesName);
        setMovies(fetchResult.results);

        fetchResult.results.length > 0
          ? toast.success('Your films were successfully fetched!', toastConfig)
          : toast.info(
              `Opps... .Your ${searchMoviesName} was not found.`,
              toastConfig
            );
      } catch (error) {
        setErrorMsg(error.message);
        toast.error(errorMsg, toastConfig);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesSearch();
  }, [searchMoviesName, errorMsg]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {movies && <MoviesList filmsList={movies} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Movies;

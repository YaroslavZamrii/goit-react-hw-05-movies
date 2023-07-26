import React from 'react';
import { getTrendingMovies } from 'services/api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';

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

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestMovies = async () => {
      try {
        setIsLoading(true);
        const trendingDayMovies = await getTrendingMovies();
        setTrendMovies(trendingDayMovies.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    requestMovies();
  }, []);

  useEffect(() => {
    toast.error(error, toastConfig);
  }, [error]);

  return (
    <>
      <h1>Trending Today</h1>
      <MoviesList filmsList={trendMovies} />
      {isLoading && <Loader />}
    </>
  );
};

export default HomePage;

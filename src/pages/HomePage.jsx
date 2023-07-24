import React from 'react';
import { getTrendingMovies } from 'services/api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

const toastConfig = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    const requestMovies = async () => {
      try {
        const trendingDayMovies = await getTrendingMovies();
        setTrendMovies(trendingDayMovies.results);
      } catch (error) {
        console.log(error);
      }
    };

    requestMovies();
  }, []);

  return (
    <>
      <h1>Trending Today :</h1>
      <MoviesList filmsList={trendMovies} />
    </>
  );
};

export default HomePage;

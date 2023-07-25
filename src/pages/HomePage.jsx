import React from 'react';
import { getTrendingMovies } from 'services/api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';

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
      <h1>Trending Today</h1>
      <MoviesList filmsList={trendMovies} />
    </>
  );
};

export default HomePage;

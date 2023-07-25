import MovieDetails from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmId } from 'services/api';

const MoviesDetailsPage = () => {
  const { filmId } = useParams();
  const [filmsIdDetails, setFilmsIdDetails] = useState([]);

  useEffect(() => {
    if (!filmId) return;
    try {
      const fetchMoviesDetails = async () => {
        const film = await getFilmId(filmId);
        setFilmsIdDetails(film);
      };
      fetchMoviesDetails();
    } catch (error) {
      console.error(error);
    }
  }, [filmId]);

  return <MovieDetails filmsIdDetails={filmsIdDetails} />;
};

export default MoviesDetailsPage;

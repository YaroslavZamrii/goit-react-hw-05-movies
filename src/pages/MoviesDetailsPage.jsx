import Loader from 'components/Loader/Loader';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getFilmId } from 'services/api';

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

const MoviesDetailsPage = () => {
  const { filmId } = useParams();
  const [filmsIdDetails, setFilmsIdDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!filmId) return;

    const fetchMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const film = await getFilmId(filmId);
        setFilmsIdDetails(film);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesDetails();
  }, [filmId]);

  useEffect(() => {
    toast.error(error, toastConfig);
  }, [error]);

  return (
    <>
      <MovieDetails filmsIdDetails={filmsIdDetails} />
      {isLoading && <Loader />}
    </>
  );
};

export default MoviesDetailsPage;

import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from './MovieDetals.module.css';

const MovieDetails = ({ filmsIdDetails }) => {
  const {
    original_title,
    poster_path,
    vote_average,
    overview,
    genres,
    release_date,
  } = filmsIdDetails;

  const defaultImg =
    'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';
  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className={css.container}>
      <div className={css.poster}>
        <img src={poster_path ? posterUrl : defaultImg} alt={original_title} />
      </div>
      <div className={css.information}>
        <h1>
          {original_title} ({release_date?.split('-')[0]})
        </h1>
        <p>Rating: {vote_average}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <ul>
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
        <section className={css.section}>
          <p>Addtinional information</p>
          <ul className={css['additional-info']}>
            <li>
              <Link to="cast" className={css['cast-reviews-link']}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" className={css['cast-reviews-link']}>
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </section>
      </div>
    </div>
  );
};

export default MovieDetails;

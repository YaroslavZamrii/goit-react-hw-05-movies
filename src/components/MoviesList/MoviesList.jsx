import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ filmsList }) => {
  const location = useLocation();
  return (
    <ul className={css['movies-list']}>
      {filmsList.map(({ id, title, poster_path }) => {
        const defaultImg =
          'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';
        const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

        return (
          <li key={id} className={css['movies-list__item']}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={css['movies-list__link']}
            >
              <img
                src={poster_path ? posterUrl : defaultImg}
                alt={title}
                className={css['movies-list__poster']}
              />
              <span className={css['movies-list__title']}>{title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;

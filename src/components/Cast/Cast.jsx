import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmsCast } from 'services/api';

const Cast = () => {
  const { filmId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!filmId) return;
    const fetchFilmCast = async () => {
      const cast = await getFilmsCast(filmId);
      setCast(cast.cast);
    };
    fetchFilmCast();
  }, [filmId]);

  return (
    <div>
      {cast.length === 0 && <p>We don't have any cast for this movie</p>}
      <ul>
        {cast.map(({ original_name, profile_path, id, character }) => {
          const defaultImg =
            'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';
          const posterUrl = `https://image.tmdb.org/t/p/original${profile_path}`;

          return (
            <li key={id}>
              <div>
                <img
                  src={profile_path ? posterUrl : defaultImg}
                  alt={original_name}
                  width="200"
                />
                <h4>{original_name}</h4>
                <p>Character: {character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;

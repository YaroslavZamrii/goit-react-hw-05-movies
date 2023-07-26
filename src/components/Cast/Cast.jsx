import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getFilmsCast } from 'services/api';

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

const Cast = () => {
  const { filmId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filmId) return;
    const fetchFilmCast = async () => {
      try {
        const cast = await getFilmsCast(filmId);
        setCast(cast.cast);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchFilmCast();
  }, [filmId]);

  useEffect(() => {
    toast.error(error, toastConfig);
  }, [error]);

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

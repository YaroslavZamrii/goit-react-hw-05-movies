import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getFilmReviews } from 'services/api';

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

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { filmId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filmId) return;
    const fetchFilmReviews = async () => {
      try {
        const review = await getFilmReviews(filmId);
        setReviews(review.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchFilmReviews();
  }, [filmId]);

  useEffect(() => {
    toast.error(error, toastConfig);
  }, [error]);

  return (
    <div>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
      <ul>
        {reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;

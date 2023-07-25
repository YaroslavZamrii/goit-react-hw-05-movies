import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    if (!filmId) return;
    const fetchFilmReviews = async () => {
      const review = await getFilmReviews(filmId);
      setReviews(review.results);
    };
    fetchFilmReviews();
  }, [filmId]);

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

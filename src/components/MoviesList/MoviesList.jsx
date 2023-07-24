import React from 'react';

const MoviesList = ({ filmsList }) => {
  return (
    <ul>
      {filmsList.map(({ id, title, poster_path }) => {
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
};

export default MoviesList;

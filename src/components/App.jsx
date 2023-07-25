import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import { Route, Routes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import MoviesDetailsPage from 'pages/MoviesDetailsPage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:filmId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

import HomePage from 'pages/HomePage';
import { NavLink, Route, Routes } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
};

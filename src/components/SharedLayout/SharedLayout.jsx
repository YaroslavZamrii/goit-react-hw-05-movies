import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.header__nav}>
          <NavLink className={css.header__nav_link} to="/">
            Home
          </NavLink>
          <NavLink className={css.header__nav_link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;

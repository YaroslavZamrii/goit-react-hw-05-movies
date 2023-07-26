import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

const SearchForm = ({ setSearchParams }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const value = form.elements.search.value;
    setSearchParams({
      query: value,
    });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css['form-container']}>
      <input type="text" name="search" className={css['form-input']} required />
      <button type="submit" className={css['form-button']}>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};

export default SearchForm;

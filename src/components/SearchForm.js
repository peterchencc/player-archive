import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ searchPlayer }) => {
  const [searchField, setSearchField] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = searchField.trim().toLowerCase();
    if (!id) return;
    setIsSearching(true);

    await searchPlayer(id);
    setIsSearching(false);
  };

  return (
    <section role="search">
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col text-base sm:block sm:text-xl">
          <legend className="text-secondary mb-2 block">
            Enter player's id:
          </legend>
          <label htmlFor="search" className="w-auto">
            <input
              id="search"
              type="search"
              placeholder="some player id..."
              onChange={(e) => setSearchField(e.target.value)}
              disabled={isSearching}
              autoFocus
              className="w-full sm:w-auto bg-secondary text-primary p-4 border-gray border-2 rounded-none focus:outline-none focus:ring-2 focus:ring-gray"
            />
          </label>

          <button
            type="submit"
            value="Submit"
            disabled={isSearching || searchField.length === 0}
            className="bg-chelsea-blue text-white p-4 border-chelsea-blue border-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSearching ? 'Searching' : 'GO'}
          </button>
        </fieldset>
      </form>
    </section>
  );
};

SearchForm.propTypes = {
  searchPlayer: PropTypes.func.isRequired,
};

export default SearchForm;

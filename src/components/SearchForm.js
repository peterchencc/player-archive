import React, { useState } from 'react';

const SearchForm = ({ searchPlayer }) => {
  const [searchField, setSearchField] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  // const [searchErrorMsg, setSearchErrorMsg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = searchField.trim().toLowerCase();
    if (!id) return;
    setIsSearching(true);

    await searchPlayer(id);
    // console.log(`parentCallback result`, result.message);
    // if (result.response.status === 403) {
    //   setSearchErrorMsg('Access Denied');
    // }

    setIsSearching(false);
  };

  return (
    <section role="search">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend> Enter player's id:</legend>
          <label htmlFor="search">
            <input
              id="search"
              type="search"
              placeholder="some player id..."
              onChange={(e) => setSearchField(e.target.value)}
              disabled={isSearching}
              autoFocus
            />
          </label>
          {/* <div>{searchErrorMsg}</div> */}
          <button
            type="submit"
            value="Submit"
            disabled={isSearching || searchField.length === 0}
          >
            {isSearching ? 'Searching' : 'GO'}
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default SearchForm;

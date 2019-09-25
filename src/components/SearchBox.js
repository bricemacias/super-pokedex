import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba br3 b--near-white bg-white"
        type="search"
        placeholder="Search Pokemons"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

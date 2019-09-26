import React from 'react';
import Search from 'react-search';

import { pokemonTypes } from '../files/pokemon-types';

const SearchBox = ({
  searchChange,
  typeChange,
  autocompleteChange,
  searchType
}) => {
  if (searchType === 'name') {
    return (
      <div className="pa3 ma2 ba br3 b--near-white bg-white">
        <input
          //className="pa3 ba br3 b--near-white bg-white"
          type="search"
          placeholder="Search Pokemons"
          onChange={searchChange}
        />
      </div>
    );
  } else {
    return (
      <div className="pa3 ma2 ba br3 b--near-white bg-white">
        <Search
          items={pokemonTypes}
          multiple={true}
          maxSelected={1}
          // className="pa3 ba br3 b--near-white bg-white"
          // type="search"
          placeholder="Search Types"
          onKeyChange={typeChange}
          onItemsChanged={autocompleteChange}
        />
      </div>
    );
  }
};

// const SearchBox = ({ searchChange }) => {
//   return (
//     <div className="pa2">
//       <input
//         className="pa3 ba br3 b--near-white bg-white"
//         type="search"
//         placeholder="Search Pokemons"
//         onChange={searchChange}
//       />
//     </div>
//   );
// };

export default SearchBox;

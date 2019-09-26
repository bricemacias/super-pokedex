import { CHANGE_SEARCH_FIELD, RETURN_TABLE } from '../types';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const returnFilter = pokemons => ({
  type: RETURN_TABLE,
  payload: pokemons
});

// export const filterPokemons = (pokemons, option, searchfield) => dispatch => {
//   try {
//     const result = pokemons.filter(pokemon => {
//       if (option === 'name') {
//         return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
//       } else if (option === 'type') {
//         return pokemon.type
//           .map(el => el.toLowerCase())
//           .includes(searchfield.toLowerCase());
//       } else {
//         return false;
//       }
//     });
//     // dispatch({
//     //   type: FILTER_POKEMONS_SUCCESS,
//     //   payload: result
//     // });
//     return result;
//   } catch (error) {
//     dispatch({
//       type: FILTER_POKEMONS_FAILED,
//       payload: error
//     });
//   }
// };

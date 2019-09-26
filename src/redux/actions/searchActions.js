import { CHANGE_SEARCH_FIELD, RETURN_TABLE } from '../types';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const returnFilter = pokemons => ({
  type: RETURN_TABLE,
  payload: pokemons
});

import {
  CHANGE_SEARCH_FIELD,
  // FILTER_POKEMONS_SUCCESS,
  // FILTER_POKEMONS_FAILED,
  RETURN_TABLE,
  REQUEST_POKEMONS_SUCCESS
} from '../types';

const initialState = {
  searchField: '',
  table: []
};

export const searchPokemons = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      };
    case RETURN_TABLE:
      return {
        ...state,
        table: action.payload
      };
    case REQUEST_POKEMONS_SUCCESS:
      return {
        ...state,
        table: action.payload
      };
    default:
      return state;
  }
};

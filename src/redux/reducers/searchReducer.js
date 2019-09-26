import {
  CHANGE_SEARCH_FIELD,
  // FILTER_POKEMONS_SUCCESS,
  // FILTER_POKEMONS_FAILED,
  RETURN_TABLE
} from '../types';

const initialState = {
  searchField: ''
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
    // case FILTER_POKEMONS_SUCCESS:
    //   return {
    //     ...state,
    //     table: action.payload
    //   };
    // case FILTER_POKEMONS_FAILED:
    //   return {
    //     ...state,
    //     error: action.payload
    //   };
    default:
      return state;
  }
};

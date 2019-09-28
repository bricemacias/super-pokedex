import {
  REQUEST_POKEMONS_PENDING,
  REQUEST_POKEMONS_SUCCESS,
  REQUEST_POKEMONS_FAILED
} from '../types';

const initialState = {
  isPending: false,
  pokemons: [],
  error: ''
};

export const requestPokemons = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_POKEMONS_PENDING:
      return {
        ...state,
        isPending: true
      };
    case REQUEST_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        isPending: false
      };
    case REQUEST_POKEMONS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false
      };
    default:
      return state;
  }
};

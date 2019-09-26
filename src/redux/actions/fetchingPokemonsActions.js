import {
  REQUEST_POKEMONS_PENDING,
  REQUEST_POKEMONS_SUCCESS,
  REQUEST_POKEMONS_FAILED
} from '../types';

import axios from 'axios';

export const requestPokemons = () => dispatch => {
  dispatch({
    type: REQUEST_POKEMONS_PENDING
  });
  axios
    .get(
      'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
    )
    .then(response =>
      dispatch({
        type: REQUEST_POKEMONS_SUCCESS,
        payload: response.data.pokemon
      })
    )
    .catch(error =>
      dispatch({ type: REQUEST_POKEMONS_FAILED, payload: error })
    );
};

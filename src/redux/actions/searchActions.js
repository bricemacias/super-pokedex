import { CHANGE_SEARCH_FIELD, RETURN_TABLE } from '../types';
import { dispatch } from 'rxjs/internal/observable/range';

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const setTypeField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const setTypeAutocomplete = array => dispatch => {
  if (array.length === 0) {
    dispatch({
      type: CHANGE_SEARCH_FIELD,
      payload: ''
    });
  } else if (array.length === 1) {
    dispatch({
      type: CHANGE_SEARCH_FIELD,
      payload: array[0].value
    });
  }
};

export const returnFilter = pokemons => ({
  type: RETURN_TABLE,
  payload: pokemons
});
